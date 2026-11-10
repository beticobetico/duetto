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
  review: ["⭐ Nueva crítica / New review", "{a} criticó \"{t}\": {e}"],
  mark: ["📍 Comentario en tu canción / Timestamp comment", "{a} en {e}"],
};


// ---------- email digests (for people without push) ----------
const esc = (x: string) => x.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));
const EMAIL_GAP_MIN = 15;
async function sendEmails(admin: any) {
  const key = Deno.env.get("RESEND_API_KEY");
  if (!key) return 0;
  const since = new Date(Date.now() - 3 * 86400e3).toISOString();
  const { data: list } = await admin.from("duetto_notifications").select("id, user_id, kind, post_id, actor, extra, created_at")
    .eq("emailed", false).gte("created_at", since).order("created_at").limit(200);
  if (!list?.length) return 0;
  const byUser = new Map<string, any[]>();
  for (const n of list) (byUser.get(n.user_id) ?? byUser.set(n.user_id, []).get(n.user_id))!.push(n);
  const postIds = [...new Set(list.map((n: any) => n.post_id).filter(Boolean))];
  const { data: posts } = postIds.length ? await admin.from("duetto_posts").select("id, title").in("id", postIds) : { data: [] };
  const titles = new Map((posts ?? []).map((p: any) => [p.id, p.title]));
  let count = 0;
  for (const [uid, items] of byUser) {
    const { data: pref } = await admin.from("duetto_email_prefs").select("enabled, last_email_at").eq("user_id", uid).maybeSingle();
    const ids = items.map((n) => n.id);
    if (pref && !pref.enabled) { await admin.from("duetto_notifications").update({ emailed: true }).in("id", ids); continue; }
    if (pref?.last_email_at && Date.now() - Date.parse(pref.last_email_at) < EMAIL_GAP_MIN * 60e3) continue;
    const { data: u } = await admin.auth.admin.getUserById(uid);
    const email = u?.user?.email;
    if (!email || u.user.is_anonymous || !u.user.email_confirmed_at || email.startsWith("deleted-")) {
      await admin.from("duetto_notifications").update({ emailed: true }).in("id", ids); continue;
    }
    // claim so two flushes never email twice
    const { data: claimed } = await admin.from("duetto_notifications").update({ emailed: true }).in("id", ids).eq("emailed", false).select("id");
    const got = new Set((claimed ?? []).map((c: any) => c.id));
    const mine = items.filter((n) => got.has(n.id));
    if (!mine.length) continue;
    const lines = mine.map((n) => {
      const [title, tpl] = TEXT[n.kind] ?? ["Duetto", ""];
      const body = tpl.replace("{a}", n.actor ?? "Duetto").replace("{t}", titles.get(n.post_id) ?? "").replace("{e}", n.extra ?? "");
      const url = "https://duettosongs.com/" + (n.post_id ? `#post-${n.post_id}` : "");
      return { title: title.split(" / ")[0], body, url };
    });
    const first = lines[0];
    const subject = mine.length === 1 ? `${first.title}: ${first.body}`.slice(0, 120) : `Tienes ${mine.length} novedades en Duetto 🎶`;
    const html = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;padding:20px;color:#222">
      <h2 style="color:#f0657b;margin:0 0 14px">Duetto</h2>
      ${lines.map((l) => `<div style="border:1px solid #eee;border-radius:10px;padding:12px 14px;margin-bottom:10px">
        <div style="font-weight:bold;margin-bottom:4px">${esc(l.title)}</div><div style="margin-bottom:8px">${esc(l.body)}</div>
        <a href="${l.url}" style="color:#f0657b;font-weight:bold;text-decoration:none">Ver en Duetto →</a></div>`).join("")}
      <p style="color:#999;font-size:12px;margin-top:18px">Recibes este correo porque tienes una cuenta en Duetto. Puedes desactivarlo en la app: Lo mío → Avisos por correo.<br>You get this email because you have a Duetto account. Turn it off in the app: Mine → Email notifications.</p></div>`;
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "Duetto <no-responder@duettosongs.com>", to: [email], subject, html }),
    });
    if (!r.ok) { console.error("resend", r.status, await r.text()); await admin.from("duetto_notifications").update({ emailed: false }).in("id", [...got]); continue; }
    await admin.from("duetto_email_prefs").upsert({ user_id: uid, enabled: pref?.enabled ?? true, last_email_at: new Date().toISOString() }, { onConflict: "user_id" });
    count++;
  }
  return count;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
    const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
    const { data: { user } } = await admin.auth.getUser(jwt);
    if (!user) return json({ error: "unauthorized" }, 401);
    const { data: key } = await admin.from("duetto_server_keys").select("address, secret").eq("name", "vapid").single();
    webpush.setVapidDetails("mailto:soporte@duettosongs.com", key!.address, key!.secret);

    const emailed = await sendEmails(admin).catch((e) => { console.error("email", e); return 0; });
    const { data: list } = await admin.from("duetto_notifications").select("id, user_id, kind, post_id, actor, extra")
      .eq("pushed", false).order("created_at").limit(50);
    if (!list?.length) return json({ ok: true, sent: 0, emailed });
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
    return json({ ok: true, sent, emailed });
  } catch (e) {
    return json({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
