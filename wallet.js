// Duetto wallet layer: Wallet Standard (Phantom, Solflare, Backpack…) + Solana Mobile Wallet Adapter (Seeker / Android)
import { getWallets } from "https://esm.sh/@wallet-standard/app@1.1.1";
import {
  registerMwa, createDefaultAuthorizationCache, createDefaultChainSelector, createDefaultWalletNotFoundHandler,
} from "https://esm.sh/@solana-mobile/wallet-standard-mobile@0.7.0";

const CHAIN = "solana:mainnet";

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

window.DuettoWallet = { list, signMessage, onChange: (f) => listeners.add(f) };
window.dispatchEvent(new Event("duetto-wallet-ready"));
