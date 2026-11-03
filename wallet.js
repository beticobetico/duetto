// Duetto wallet layer: Wallet Standard (Phantom, Solflare, Backpack…) + Solana Mobile Wallet Adapter (Seeker / Android)
import { getWallets } from "https://esm.sh/@wallet-standard/app@1.1.1";
import {
  registerMwa, createDefaultAuthorizationCache, createDefaultChainSelector, createDefaultWalletNotFoundHandler,
} from "https://esm.sh/@solana-mobile/wallet-standard-mobile@0.7.0";
import bs58 from "https://esm.sh/bs58@6.0.0";

const CHAIN = "solana:mainnet";
const MEMO = "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr";

try {
  const base = location.origin + location.pathname.replace(/[^/]*$/, "");
  registerMwa({
    appIdentity: { name: "Duetto", uri: base, icon: "icon-192.png" },
    authorizationCache: createDefaultAuthorizationCache(),
    chains: [CHAIN],
    chainSelector: createDefaultChainSelector(),
    onWalletNotFound: createDefaultWalletNotFoundHandler(),
  });
} catch (e) { console.warn("MWA not registered", e); }

const registry = getWallets();
const listeners = new Set();
registry.on("register", () => listeners.forEach((f) => f()));
registry.on("unregister", () => listeners.forEach((f) => f()));

function list() {
  return registry.get().filter((w) =>
    w.features["standard:connect"] && w.features["solana:signMessage"] && w.chains.some((c) => c.startsWith("solana:")));
}
async function connect(w) {
  let accts = w.accounts;
  if (!accts.length) accts = (await w.features["standard:connect"].connect()).accounts;
  if (!accts.length) throw new Error("No account");
  return accts[0];
}
const b64 = (u8) => btoa(String.fromCharCode(...u8));

async function signMessage(w, text) {
  const account = await connect(w);
  const [out] = await w.features["solana:signMessage"].signMessage({ account, message: new TextEncoder().encode(text) });
  return { wallet: account.address, signature: b64(out.signature), signedMessage: out.signedMessage ? b64(out.signedMessage) : null };
}

// getBlockhash comes from our edge function (public RPCs block browser requests)
async function anchor(w, hash, getBlockhash) {
  const account = await connect(w);
  const web3 = await import("https://esm.sh/@solana/web3.js@1.99.0");
  const payer = new web3.PublicKey(account.address);
  const { blockhash, lastValidBlockHeight } = await getBlockhash();
  const tx = new web3.Transaction({ feePayer: payer, blockhash, lastValidBlockHeight }).add(
    new web3.TransactionInstruction({
      programId: new web3.PublicKey(MEMO),
      keys: [{ pubkey: payer, isSigner: true, isWritable: false }],
      data: new TextEncoder().encode("duetto:v1:" + hash),
    }));
  const bytes = tx.serialize({ requireAllSignatures: false, verifySignatures: false });
  if (w.features["solana:signAndSendTransaction"]) {
    const [r] = await w.features["solana:signAndSendTransaction"].signAndSendTransaction({ account, chain: CHAIN, transaction: bytes });
    return { wallet: account.address, tx: bs58.encode(r.signature) };
  }
  if (w.features["solana:signTransaction"]) {
    const [r] = await w.features["solana:signTransaction"].signTransaction({ account, chain: CHAIN, transaction: bytes });
    return { wallet: account.address, signedTx: b64(r.signedTransaction) };
  }
  throw new Error("Wallet cannot send transactions");
}

window.DuettoWallet = { list, signMessage, anchor, onChange: (f) => listeners.add(f) };
window.dispatchEvent(new Event("duetto-wallet-ready"));
