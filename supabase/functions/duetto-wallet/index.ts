import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.118.0";
import nacl from "npm:tweetnacl@1.0.3";
import bs58 from "npm:bs58@6.0.0";
import { Keypair, PublicKey, Transaction, TransactionInstruction } from "npm:@solana/web3.js@1.99.0";

const MEMO = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const RPCS = [Deno.env.get("SOLANA_RPC"), "https://api.mainnet-beta.solana.com", "https://solana-rpc.publicnode.com"].filter(Boolean) as string[];
async function rpc(method: string, params: unknown[]) {
  let last = "";
  for (const url of RPCS) {
    try {
      const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }) });
      const j = await r.json();
      if (j.error) { last = j.error.message ?? String(j.error.code); continue; }
      return j.result;
    } catch (e) { last = String(e); }
  }
  throw new Error("Solana RPC: " + last);
}
const b64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const eq = (a: Uint8Array, b: Uint8Array) => a.length === b.length && a.every((v, i) => v === b[i]);

// Duetto pays the fee: the server wallet writes "duetto:v1:<hash>" as a Memo on Solana mainnet.
async function anchorAgreement(admin: any, ag: { id: string; hash: string }) {
  const { data: key } = await admin.from("duetto_server_keys").select("secret").eq("name", "anchor").single();
  const kp = Keypair.fromSecretKey(bs58.decode(key.secret));
  const bal = await rpc("getBalance", [kp.publicKey.toBase58(), { commitment: "confirmed" }]);
  if ((bal?.value ?? 0) < 20000) throw new Error("La wallet de Duetto no tiene fondos / Duetto wallet has no funds");
  const { value: bh } = await rpc("getLatestBlockhash", [{ commitment: "confirmed" }]);
  const tx = new Transaction({ feePayer: kp.publicKey, blockhash: bh.blockhash, lastValidBlockHeight: bh.lastValidBlockHeight })
    .add(new TransactionInstruction({ programId: MEMO, keys: [], data: new TextEncoder().encode("duetto:v1:" + ag.hash) }));
  tx.sign(kp);
  const raw = btoa(String.fromCharCode(...tx.serialize()));
  const sig: string = await rpc("sendTransaction", [raw, { encoding: "base64", preflightCommitment: "confirmed" }]);
  for (let i = 0; i < 12; i++) {
    const st = await rpc("getSignatureStatuses", [[sig]]).catch(() => null);
    const v = st?.value?.[0];
    if (v?.err) throw new Error("transaction failed");
    if (v && (v.confirmationStatus === "confirmed" || v.confirmationStatus === "finalized")) {
      await admin.from("duetto_agreements").update({ anchor_tx: sig, anchored_at: new Date().toISOString() }).eq("id", ag.id).is("anchor_tx", null);
      return sig;
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error("Solana is slow, try again in a minute / Solana va lenta, intenta en un minuto");
}
// Limits so nobody can drain the fee wallet with fake agreements.
const MAX_ANCHORS_PER_USER_DAY = 5, MAX_ANCHORS_TOTAL_DAY = 300;
async function anchorAllowed(admin: any, userId: string) {
  const since = new Date(Date.now() - 86400e3).toISOString();
  const mine = await admin.from("duetto_agreements").select("id", { count: "exact", head: true })
    .contains("parties", [{ id: userId }]).gte("anchored_at", since);
  if ((mine.count ?? 0) >= MAX_ANCHORS_PER_USER_DAY) return "Límite diario de registros en Solana alcanzado / Daily Solana record limit reached";
  const all = await admin.from("duetto_agreements").select("id", { count: "exact", head: true }).gte("anchored_at", since);
  if ((all.count ?? 0) >= MAX_ANCHORS_TOTAL_DAY) return "Duetto alcanzó su límite diario de registros, intenta mañana / Duetto daily limit reached, try tomorrow";
  return null;
}
const allWallet = async (admin: any, ag: { id: string; parties: { id: string }[] }) => {
  const { data: sigs } = await admin.from("duetto_signatures").select("user_id, method").eq("agreement_id", ag.id);
  return ag.parties.every((p) => (sigs ?? []).some((s: any) => s.user_id === p.id && s.method === "wallet"));
};

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
      if (await allWallet(admin, { id: ag.id, parties })) {
        const limit = await anchorAllowed(admin, user.id);
        if (limit) return json({ ok: true, anchorError: limit });
        try { return json({ ok: true, anchored: await anchorAgreement(admin, ag) }); }
        catch (e) { return json({ ok: true, anchorError: String((e as Error).message) }); }
      }
      return json({ ok: true });
    }

    if (body.action === "anchor") {
      if (ag.anchor_tx) return json({ ok: true, tx: ag.anchor_tx });
      if (!(await allWallet(admin, { id: ag.id, parties }))) return json({ error: "all parties must sign with a wallet first" }, 400);
      const limit = await anchorAllowed(admin, user.id);
      if (limit) return json({ error: limit }, 429);
      return json({ ok: true, tx: await anchorAgreement(admin, ag) });
    }
    return json({ error: "unknown action" }, 400);
  } catch (e) {
    return json({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
