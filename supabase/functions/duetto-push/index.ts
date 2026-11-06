import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.118.0";
import webpush from "npm:web-push@3.6.7";

// Sends pending Duetto notifications as Web Push. Any signed-in client can trigger a flush;
// it only ever delivers each user's own notifications to that user's subscriptions.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });

const TEXT: Record<string, [string, string]> = {
  proposal: ["🎵 Nueva propuesta / New proposal", "{a} envió una propuesta para \"{t}\""],
  chosen: ["🎉 ¡Te escogieron! / You were chosen!", "{a} escogió tu propuesta en \"{t}\". Firma el acuerdo."],
  signed: ["✍️ Firma del acuerdo / Agreement signed", "{a} firmó el acuerdo de \"{t}\""],
  anchored: ["⛓ Registrado en Solana / Recorded on Solana", "El acuerdo de \"{t}\" quedó registrado"],
  comment: ["💬 Nuevo comentario / New comment", "{a}: {e}"],
  message: ["💬 Mensaje de tu coautor / Message", "{a}: {e}"],
  tip: ["💸 ¡Recibiste una propina! / You got a tip!", "{a} te envió {e}"],
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
    const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
    const { data: { user } } = await admin.auth.getUser(jwt);
    if (!user) return json({ error: "unauthorized" }, 401);
    const { data: key } = await admin.from("duetto_server_keys").select("address, secret").eq("name", "vapid").single();
    webpush.setVapidDetails("mailto:soporte@duettosongs.com", key!.address, key!.secret);

    const { data: list } = await admin.from("duetto_notifications").select("id, user_id, kind, post_id, actor, extra")
      .eq("pushed", false).order("created_at").limit(50);
    if (!list?.length) return json({ ok: true, sent: 0 });
    // claim them first so two flushes never send twice
    const ids = list.map((n) => n.id);
    const { data: claimed } = await admin.from("duetto_notifications").update({ pushed: true }).in("id", ids).eq("pushed", false).select("id");
    const mine = new Set((claimed ?? []).map((c) => c.id));
    const postIds = [...new Set(list.map((n) => n.post_id).filter(Boolean))];
    const { data: posts } = postIds.length ? await admin.from("duetto_posts").select("id, title").in("id", postIds) : { data: [] };
    const titles = new Map((posts ?? []).map((p) => [p.id, p.title]));
    let sent = 0;
    for (const n of list) {
      if (!mine.has(n.id)) continue;
      const { data: subs } = await admin.from("duetto_push_subs").select("id, endpoint, p256dh, auth").eq("user_id", n.user_id);
      if (!subs?.length) continue;
      const [title, tpl] = TEXT[n.kind] ?? ["Duetto", ""];
      const body = tpl.replace("{a}", n.actor ?? "Duetto").replace("{t}", titles.get(n.post_id) ?? "").replace("{e}", n.extra ?? "");
      const payload = JSON.stringify({ title, body, url: n.post_id ? `/#post-${n.post_id}` : "/" });
      for (const s of subs) {
        try { await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload, { TTL: 86400 }); sent++; }
        catch (e: any) { if (e?.statusCode === 404 || e?.statusCode === 410) await admin.from("duetto_push_subs").delete().eq("id", s.id); }
      }
    }
    return json({ ok: true, sent });
  } catch (e) {
    return json({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
