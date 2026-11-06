# Duetto
Lyrics meet music. Songwriters post lyrics looking for music, or music looking for lyrics. Others record their proposal over the track, the author picks one, and both sign the co-writing split.

- Frontend: single-page PWA (`index.html`), hosted on GitHub Pages.
- Backend: Supabase (anonymous auth, Postgres with RLS, private `duetto` storage bucket). Tables are prefixed `duetto_`.
- Next: Solana wallet signing (Mobile Wallet Adapter / Seed Vault) and packaging for the Solana dApp Store.

## Wallet signing
`wallet.js` lists Solana wallets via Wallet Standard (Phantom, Solflare, Backpack…) and registers the Solana Mobile Wallet Adapter for Android / Seeker. Each party signs the agreement text (`duetto_agreements.message`) with `solana:signMessage`; the `duetto-wallet` Supabase Edge Function verifies the ed25519 signature before storing it. Once every party has signed with a wallet, the edge function records the agreement hash on Solana mainnet with a Memo transaction (`duetto:v1:<hash>`) paid by Duetto's server wallet (stored in `duetto_server_keys`, service-role only), so users never approve a transaction or need SOL.

## v1.1 features
Wallet sign-in & account recovery, report/block with auto-hide and an admin panel, in-app notifications + Web Push (`duetto-push`), split-sheet PDF, songwriter profiles, search and filters, co-writer chat (Realtime), weekly challenges, Solana Pay tips (USDC/SKR) and paid boosts, all verified server-side in `duetto-wallet`.
