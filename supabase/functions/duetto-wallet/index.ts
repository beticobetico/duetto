import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.118.0";
import nacl from "npm:tweetnacl@1.0.3";
import bs58 from "npm:bs58@6.0.0";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const RPC = Deno.env.get("SOLANA_RPC") ?? "https://api.mainnet-beta.solana.com";
const b64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const eq = (a: Uint8Array, b: Uint8Array) => a.length === b.length && a.every((v, i) => v === b[i]);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  try {
    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
    const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
    const { data: { user }, error: uerr } = await admin.auth.getUser(jwt);
    if (uerr || !user) return json({ error: "unauthorized" }, 401);

    const body = await req.json();
    const { data: ag } = await admin.from("duetto_agreements").select("id, parties, hash, message, anchor_tx").eq("id", body.agreement_id).maybeSingle();
    if (!ag) return json({ error: "agreement not found" }, 404);
    const parties = ag.parties as { id: string }[];
    if (!parties.some((p) => p.id === user.id)) return json({ error: "not a party" }, 403);

    if (body.action === "sign") {
      if (ag.anchor_tx) return json({ error: "already recorded on Solana" }, 400);
      const wallet = String(body.wallet ?? "");
      let pub: Uint8Array, sig: Uint8Array;
      try { pub = bs58.decode(wallet); sig = b64(String(body.signature)); } catch { return json({ error: "bad encoding" }, 400); }
      if (pub.length !== 32 || sig.length !== 64) return json({ error: "bad key/signature length" }, 400);
      const msg = new TextEncoder().encode(ag.message);
      let ok = nacl.sign.detached.verify(msg, sig, pub);
      if (!ok && body.signedMessage) {
        // some wallets return the exact bytes they signed; accept only if they contain our message unchanged
        const signed = b64(String(body.signedMessage));
        const head = signed.slice(signed.length - msg.length);
        if (eq(head, msg) || eq(signed.slice(0, msg.length), msg)) ok = nacl.sign.detached.verify(signed, sig, pub);
      }
      if (!ok) return json({ error: "invalid signature" }, 400);
      // one wallet = one person: the same wallet cannot sign for two parties of the same agreement
      const { data: dup } = await admin.from("duetto_signatures").select("user_id").eq("agreement_id", ag.id).eq("wallet", wallet).neq("user_id", user.id);
      if (dup && dup.length) return json({ error: "Esta wallet ya firmó por la otra parte / This wallet already signed for the other party" }, 409);
      const { error } = await admin.from("duetto_signatures").upsert(
        { agreement_id: ag.id, user_id: user.id, method: "wallet", wallet, sig: bs58.encode(sig), signed_at: new Date().toISOString() },
        { onConflict: "agreement_id,user_id" });
      if (error) return json({ error: error.message }, 500);
      return json({ ok: true });
    }

    if (body.action === "anchor") {
      if (ag.anchor_tx) return json({ ok: true, tx: ag.anchor_tx });
      const { data: sigs } = await admin.from("duetto_signatures").select("user_id, wallet, method").eq("agreement_id", ag.id);
      const wallets = (sigs ?? []).filter((s) => s.method === "wallet").map((s) => s.wallet);
      if (!parties.every((p) => (sigs ?? []).some((s) => s.user_id === p.id && s.method === "wallet")))
        return json({ error: "all parties must sign with a wallet first" }, 400);
      const tx = String(body.tx ?? "");
      let info: any = null;
      for (let i = 0; i < 6 && !info; i++) {
        const r = await fetch(RPC, { method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "getTransaction", params: [tx, { encoding: "json", commitment: "confirmed", maxSupportedTransactionVersion: 0 }] }) });
        info = (await r.json()).result;
        if (!info) await new Promise((res) => setTimeout(res, 2500));
      }
      if (!info) return json({ error: "transaction not found yet" }, 404);
      if (info.meta?.err) return json({ error: "transaction failed" }, 400);
      const logs: string[] = info.meta?.logMessages ?? [];
      if (!logs.some((l) => l.includes("duetto:v1:" + ag.hash))) return json({ error: "memo does not match" }, 400);
      const payer = info.transaction?.message?.accountKeys?.[0];
      if (!wallets.includes(payer)) return json({ error: "payer is not a signing party" }, 400);
      const { error } = await admin.from("duetto_agreements").update({ anchor_tx: tx, anchored_at: new Date().toISOString() }).eq("id", ag.id);
      if (error) return json({ error: error.message }, 500);
      return json({ ok: true, tx });
    }
    return json({ error: "unknown action" }, 400);
  } catch (e) {
    return json({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
