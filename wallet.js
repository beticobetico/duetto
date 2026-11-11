// Duetto wallet layer: Wallet Standard (Phantom, Solflare, Backpack…) + Solana Mobile Wallet Adapter (Seeker / Android)
// Libraries are bundled locally (vendor/wallet-libs.js) so wallets don't depend on a third-party CDN.
import {
  getWallets, registerMwa, createDefaultAuthorizationCache, createDefaultChainSelector, createDefaultWalletNotFoundHandler,
} from "./vendor/wallet-libs.js?v=22";

const CHAIN = "solana:mainnet";
const info = { mwa: "registered", ua: navigator.userAgent, standalone: matchMedia("(display-mode: standalone)").matches };

try {
  const base = location.origin + location.pathname.replace(/[^/]*$/, "");
  const warn = console.warn;
  console.warn = (...a) => { const m = a.map(String).join(" "); if (m.includes("MWA not registered")) info.mwa = m; warn.apply(console, a); };
  try {
    registerMwa({
      appIdentity: { name: "Duetto", uri: base, icon: "icon-192.png" },
      authorizationCache: createDefaultAuthorizationCache(),
      chains: [CHAIN],
      chainSelector: createDefaultChainSelector(),
      onWalletNotFound: createDefaultWalletNotFoundHandler(),
    });
  } finally { console.warn = warn; }
} catch (e) { info.mwa = "error: " + (e?.message || e); console.warn("MWA not registered", e); }

const registry = getWallets();
const listeners = new Set();
registry.on("register", () => listeners.forEach((f) => f()));
registry.on("unregister", () => listeners.forEach((f) => f()));

function all() { return registry.get(); }
function list() {
  return all().filter((w) =>
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
function diag() {
  return { ...info, wallets: all().map((w) => ({ name: w.name, chains: w.chains, features: Object.keys(w.features) })) };
}

window.DuettoWallet = { list, signMessage, diag, onChange: (f) => listeners.add(f) };
window.dispatchEvent(new Event("duetto-wallet-ready"));
