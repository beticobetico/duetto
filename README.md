# Duetto
Lyrics meet music. Songwriters post lyrics looking for music, or music looking for lyrics. Others record their proposal over the track, the author picks one, and both sign the co-writing split.

- Frontend: single-page PWA (`index.html`), hosted on GitHub Pages.
- Backend: Supabase (anonymous auth, Postgres with RLS, private `duetto` storage bucket). Tables are prefixed `duetto_`.
- Next: Solana wallet signing (Mobile Wallet Adapter / Seed Vault) and packaging for the Solana dApp Store.
