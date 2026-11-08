import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.118.0";
import nacl from "npm:tweetnacl@1.0.3";
import bs58 from "npm:bs58@6.0.0";
import { Buffer } from "node:buffer";
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

// Verifies an ed25519 wallet signature over `message` (accepting wallets that return the exact signed bytes).
function verifySig(message: string, wallet: string, signature: string, signedMessage?: string | null) {
  let pub: Uint8Array, sig: Uint8Array;
  try { pub = bs58.decode(wallet); sig = b64(signature); } catch { return false; }
  if (pub.length !== 32 || sig.length !== 64) return false;
  const msg = new TextEncoder().encode(message);
  if (nacl.sign.detached.verify(msg, sig, pub)) return true;
  if (signedMessage) {
    const signed = b64(signedMessage);
    if (eq(signed.slice(signed.length - msg.length), msg) || eq(signed.slice(0, msg.length), msg)) return nacl.sign.detached.verify(signed, sig, pub);
  }
  return false;
}

// Duetto pays the fee: the server wallet writes "duetto:v1:<hash>" as a Memo on Solana mainnet.
async function anchorAgreement(admin: any, ag: { id: string; hash: string }) {
  const { data: key } = await admin.from("duetto_server_keys").select("secret").eq("name", "anchor").single();
  const kp = Keypair.fromSecretKey(bs58.decode(key.secret));
  const bal = await rpc("getBalance", [kp.publicKey.toBase58(), { commitment: "confirmed" }]);
  if ((bal?.value ?? 0) < 20000) throw new Error("La wallet de Duetto no tiene fondos / Duetto wallet has no funds");
  const { value: bh } = await rpc("getLatestBlockhash", [{ commitment: "confirmed" }]);
  const tx = new Transaction({ feePayer: kp.publicKey, blockhash: bh.blockhash, lastValidBlockHeight: bh.lastValidBlockHeight })
    .add(new TransactionInstruction({ programId: MEMO, keys: [], data: Buffer.from("duetto:v1:" + ag.hash, "utf8") }));
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
// Every party signed with a wallet or with a verified email account.
const allSigned = async (admin: any, ag: { id: string; parties: { id: string }[] }) => {
  const { data: sigs } = await admin.from("duetto_signatures").select("user_id, method").eq("agreement_id", ag.id);
  return ag.parties.every((p) => (sigs ?? []).some((s: any) => s.user_id === p.id && (s.method === "wallet" || s.method === "email")));
};
const maskEmail = (e: string) => { const [u, d] = e.split("@"); return (u.slice(0, 2) + "•••@" + d); };
// Link a verified wallet to a profile if neither is linked yet (one wallet = one account).
async function autoLink(admin: any, userId: string, wallet: string) {
  const { data: owner } = await admin.from("duetto_profiles").select("id").eq("wallet", wallet).maybeSingle();
  if (owner) return;
  await admin.from("duetto_profiles").update({ wallet }).eq("id", userId).is("wallet", null);
}
const getConfig = async (admin: any, key: string) => (await admin.from("duetto_config").select("value").eq("key", key).maybeSingle()).data?.value;

// ---------- Solana Pay payments (tips and boosts) ----------
async function findPaymentTx(reference: string) {
  const sigs = await rpc("getSignaturesForAddress", [reference, { limit: 5, commitment: "confirmed" }]);
  return (sigs ?? []).filter((s: any) => !s.err).map((s: any) => s.signature);
}
function received(tx: any, owner: string, mint: string) {
  const pre = (tx.meta?.preTokenBalances ?? []).filter((b: any) => b.owner === owner && b.mint === mint);
  const post = (tx.meta?.postTokenBalances ?? []).filter((b: any) => b.owner === owner && b.mint === mint);
  const sum = (arr: any[]) => arr.reduce((a, b) => a + Number(b.uiTokenAmount?.uiAmountString ?? 0), 0);
  return sum(post) - sum(pre);
}

async function handle(req: Request) {
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  const { data: { user }, error: uerr } = await admin.auth.getUser(jwt);
  if (uerr || !user) return json({ error: "unauthorized" }, 401);
  const body = await req.json();

  // ----- account: link wallet / log in on a new device -----
  if (body.action === "link") {
    const wallet = String(body.wallet ?? ""), ts = Number(body.ts);
    if (!Number.isFinite(ts) || Math.abs(Date.now() - ts) > 10 * 60e3) return json({ error: "expired / vencido" }, 400);
    const message = `Duetto - link wallet / vincular wallet\nAccount: ${user.id}\nTime: ${new Date(ts).toISOString()}`;
    if (!verifySig(message, wallet, String(body.signature ?? ""), body.signedMessage)) return json({ error: "invalid signature" }, 400);
    const { data: owner } = await admin.from("duetto_profiles").select("id, name").eq("wallet", wallet).maybeSingle();
    const { data: me } = await admin.from("duetto_profiles").select("id, wallet").eq("id", user.id).maybeSingle();
    if (owner && owner.id === user.id) return json({ ok: true, linked: true });
    if (owner) {
      if (me?.wallet && me.wallet !== wallet) return json({ error: "Esta cuenta ya tiene otra wallet / This account already has another wallet" }, 409);
      const { error } = await admin.rpc("duetto_merge_account", { p_old: owner.id, p_new: user.id });
      if (error) return json({ error: error.message }, 500);
      return json({ ok: true, restored: true, name: owner.name });
    }
    if (!me) return json({ error: "No hay ninguna cuenta con esta wallet. Crea tu nombre primero / No account uses this wallet. Create your name first" }, 404);
    if (me.wallet) return json({ error: "Esta cuenta ya tiene otra wallet / This account already has another wallet" }, 409);
    const { error } = await admin.from("duetto_profiles").update({ wallet }).eq("id", user.id);
    if (error) return json({ error: error.message }, 500);
    return json({ ok: true, linked: true });
  }

  // ----- account: after email login on a device, bring in the temporary (anonymous) account -----
  if (body.action === "absorb") {
    const old = await admin.auth.getUser(String(body.old_token ?? ""));
    const o = old.data?.user;
    if (old.error || !o) return json({ ok: true, merged: false });
    if (!o.is_anonymous || o.id === user.id || user.is_anonymous) return json({ ok: true, merged: false });
    const { data: op } = await admin.from("duetto_profiles").select("id").eq("id", o.id).maybeSingle();
    if (op) {
      const { error } = await admin.rpc("duetto_merge_account_keep", { p_old: o.id, p_new: user.id });
      if (error) return json({ error: error.message }, 500);
    }
    await admin.auth.admin.deleteUser(o.id).catch(() => {});
    return json({ ok: true, merged: !!op });
  }

  // ----- account: delete my account (Google Play requirement) -----
  if (body.action === "delete_account") {
    const c = String(body.confirm ?? "").trim().toUpperCase();
    if (c !== "ELIMINAR" && c !== "DELETE") return json({ error: "confirm" }, 400);
    const { data: res, error } = await admin.rpc("duetto_delete_account", { p_uid: user.id });
    if (error) return json({ error: error.message }, 500);
    const files: string[] = res?.files ?? [];
    if (files.length) await admin.storage.from("duetto").remove(files).catch(() => {});
    if (res?.keep) {
      // shared agreements/proposals stay for the other people; the login and personal data go away
      await admin.auth.admin.updateUserById(user.id, {
        email: `deleted-${user.id}@deleted.duettosongs.com`, email_confirm: true, user_metadata: {}, ban_duration: "876000h",
      }).catch(() => {});
    } else {
      await admin.auth.admin.deleteUser(user.id).catch(() => {});
    }
    return json({ ok: true });
  }

  // ----- payments -----
  if (body.action === "pay_create") {
    const hourAgo = new Date(Date.now() - 3600e3).toISOString();
    const pend = await admin.from("duetto_payments").select("id", { count: "exact", head: true }).eq("payer_id", user.id).eq("status", "pending").gte("created_at", hourAgo);
    if ((pend.count ?? 0) >= 20) return json({ error: "Demasiados intentos, espera un rato / Too many attempts, wait a bit" }, 429);
    const mints = await getConfig(admin, "mints");
    let kind = body.kind, symbol = String(body.symbol ?? "USDC"), amount = Number(body.amount), recipientWallet = "", recipientId: string | null = null, postId: string | null = null, proposalId: string | null = null;
    if (kind === "tip") {
      if (!(symbol in mints) || !(amount > 0 && amount <= 1000)) return json({ error: "bad amount" }, 400);
      if (body.proposal_id) {
        const { data: x } = await admin.from("duetto_proposals").select("id, post_id, author_id").eq("id", body.proposal_id).maybeSingle();
        if (!x) return json({ error: "not found" }, 404);
        proposalId = x.id; postId = x.post_id; recipientId = x.author_id;
      } else {
        const { data: p } = await admin.from("duetto_posts").select("id, author_id").eq("id", body.post_id).maybeSingle();
        if (!p) return json({ error: "not found" }, 404);
        postId = p.id; recipientId = p.author_id;
      }
      if (recipientId === user.id) return json({ error: "No puedes darte propina / You can't tip yourself" }, 400);
      const { data: r } = await admin.from("duetto_profiles").select("wallet").eq("id", recipientId).single();
      if (!r?.wallet) return json({ error: "Esta persona todavía no vinculó su wallet / This person hasn't linked a wallet yet" }, 409);
      recipientWallet = r.wallet;
    } else if (kind === "boost") {
      const { data: p } = await admin.from("duetto_posts").select("id, author_id").eq("id", body.post_id).maybeSingle();
      if (!p || p.author_id !== user.id) return json({ error: "not your post" }, 403);
      const boost = await getConfig(admin, "boost");
      symbol = boost.symbol; amount = Number(boost.amount); postId = p.id;
      recipientWallet = await getConfig(admin, "treasury_wallet");
    } else return json({ error: "bad kind" }, 400);
    const reference = Keypair.generate().publicKey.toBase58();
    const { data: pay, error } = await admin.from("duetto_payments").insert({
      kind, payer_id: user.id, recipient_id: recipientId, recipient_wallet: recipientWallet, post_id: postId, proposal_id: proposalId,
      mint: mints[symbol], symbol, amount, reference,
    }).select("id").single();
    if (error) return json({ error: error.message }, 500);
    return json({ id: pay.id, recipient: recipientWallet, mint: mints[symbol], symbol, amount, reference });
  }

  if (body.action === "pay_check") {
    const { data: pay } = await admin.from("duetto_payments").select("*").eq("id", body.payment_id).maybeSingle();
    if (!pay || pay.payer_id !== user.id) return json({ error: "not found" }, 404);
    if (pay.status === "confirmed") return json({ ok: true, status: "confirmed", tx: pay.tx });
    const sigs = await findPaymentTx(pay.reference);
    for (const s of sigs) {
      const tx = await rpc("getTransaction", [s, { encoding: "jsonParsed", commitment: "confirmed", maxSupportedTransactionVersion: 0 }]);
      if (!tx || tx.meta?.err) continue;
      if (received(tx, pay.recipient_wallet, pay.mint) + 1e-9 < Number(pay.amount)) continue;
      const { data: used } = await admin.from("duetto_payments").select("id").eq("tx", s).maybeSingle();
      if (used) continue;
      await admin.from("duetto_payments").update({ status: "confirmed", tx: s, confirmed_at: new Date().toISOString() }).eq("id", pay.id).eq("status", "pending");
      if (pay.kind === "boost") {
        const boost = await getConfig(admin, "boost");
        const { data: post } = await admin.from("duetto_posts").select("boosted_until").eq("id", pay.post_id).single();
        const base = Math.max(Date.now(), post?.boosted_until ? Date.parse(post.boosted_until) : 0);
        await admin.from("duetto_posts").update({ boosted_until: new Date(base + Number(boost.hours) * 3600e3).toISOString() }).eq("id", pay.post_id);
      }
      return json({ ok: true, status: "confirmed", tx: s });
    }
    return json({ ok: true, status: "pending" });
  }

  // ----- agreements -----
  const { data: ag } = await admin.from("duetto_agreements").select("id, parties, hash, message, anchor_tx").eq("id", body.agreement_id).maybeSingle();
  if (!ag) return json({ error: "agreement not found" }, 404);
  const parties = ag.parties as { id: string }[];
  if (!parties.some((p) => p.id === user.id)) return json({ error: "not a party" }, 403);

  if (body.action === "sign") {
    if (ag.anchor_tx) return json({ error: "already recorded on Solana" }, 400);
    const wallet = String(body.wallet ?? "");
    if (!verifySig(ag.message, wallet, String(body.signature ?? ""), body.signedMessage)) return json({ error: "invalid signature" }, 400);
    const { data: dup } = await admin.from("duetto_signatures").select("user_id").eq("agreement_id", ag.id).eq("wallet", wallet).neq("user_id", user.id);
    if (dup && dup.length) return json({ error: "Esta wallet ya firmó por la otra parte / This wallet already signed for the other party" }, 409);
    const sigB58 = bs58.encode(b64(String(body.signature)));
    const { error } = await admin.from("duetto_signatures").upsert(
      { agreement_id: ag.id, user_id: user.id, method: "wallet", wallet, sig: sigB58, signed_at: new Date().toISOString() },
      { onConflict: "agreement_id,user_id" });
    if (error) return json({ error: error.message }, 500);
    await autoLink(admin, user.id, wallet);
    if (await allSigned(admin, { id: ag.id, parties })) {
      const limit = await anchorAllowed(admin, user.id);
      if (limit) return json({ ok: true, anchorError: limit });
      try { return json({ ok: true, anchored: await anchorAgreement(admin, ag) }); }
      catch (e) { return json({ ok: true, anchorError: String((e as Error).message) }); }
    }
    return json({ ok: true });
  }

  if (body.action === "sign_email") {
    if (ag.anchor_tx) return json({ error: "already recorded on Solana" }, 400);
    if (user.is_anonymous || !user.email || !user.email_confirmed_at)
      return json({ error: "Primero protege tu cuenta con tu correo / Protect your account with your email first", needEmail: true }, 409);
    const { data: prev } = await admin.from("duetto_signatures").select("method").eq("agreement_id", ag.id).eq("user_id", user.id).maybeSingle();
    if (prev?.method === "wallet") return json({ ok: true });
    const { error } = await admin.from("duetto_signatures").upsert(
      { agreement_id: ag.id, user_id: user.id, method: "email", wallet: null, sig: maskEmail(user.email), signed_at: new Date().toISOString() },
      { onConflict: "agreement_id,user_id" });
    if (error) return json({ error: error.message }, 500);
    if (await allSigned(admin, { id: ag.id, parties })) {
      const limit = await anchorAllowed(admin, user.id);
      if (limit) return json({ ok: true, anchorError: limit });
      try { return json({ ok: true, anchored: await anchorAgreement(admin, ag) }); }
      catch (e) { return json({ ok: true, anchorError: String((e as Error).message) }); }
    }
    return json({ ok: true });
  }

  if (body.action === "anchor") {
    if (ag.anchor_tx) return json({ ok: true, tx: ag.anchor_tx });
    if (!(await allSigned(admin, { id: ag.id, parties }))) return json({ error: "Falta que todos firmen / Everyone must sign first" }, 400);
    const limit = await anchorAllowed(admin, user.id);
    if (limit) return json({ error: limit }, 429);
    return json({ ok: true, tx: await anchorAgreement(admin, ag) });
  }
  return json({ error: "unknown action" }, 400);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  try { return await handle(req); }
  catch (e) { return json({ error: String((e as Error)?.message ?? e) }, 500); }
});
