# Decision Log

Stato: Proposed / Approved / Superseded.

## D-001 — Hosting su GitHub Pages, repo user site

- **Data**: 2026-10-05 · **Stato**: Approved
- **Contesto**: il CV contiene un QR code che deve puntare a un URL che non cambi mai.
- **Decisione**: repo `BaschieriMax.github.io`, sito in root (`https://baschierimax.github.io`), Vite `base: '/'`, deploy con le action ufficiali di Pages.
- **Alternative**: Netlify, Vercel, Cloudflare Pages (gratuiti anche loro, scartati per richiesta esplicita di usare GitHub).
- **Motivazione**: gratuito, nessun servizio aggiuntivo; con un futuro dominio custom GitHub reindirizza il `.github.io`, quindi il QR resta valido.

## D-002 — Single page senza router

- **Data**: 2026-10-05 · **Stato**: Approved
- **Decisione**: una sola pagina con sezioni ad ancora; niente React Router.
- **Motivazione**: GitHub Pages non gestisce le route di una SPA; per un portfolio letto soprattutto da mobile (QR) una pagina unica è più diretta.
- **Conseguenza**: niente `createBrowserRouter`/`withSuspense` per route; resta un `AppErrorBoundary` globale e il lazy loading del form.

## D-003 — Styling con CSS Modules + design token

- **Data**: 2026-10-05 · **Stato**: Approved
- **Decisione**: CSS Modules per componente, token in `src/styles/tokens.css` (palette e font del CV).
- **Alternative**: Tailwind (preferito per progetti grandi), CSS puro globale.

## D-004 — i18n IT/EN con dizionari tipizzati

- **Data**: 2026-10-05 · **Stato**: Approved
- **Decisione**: `it.ts` definisce il tipo `Dictionary`, `en.ts` deve rispettarlo; i contenuti in `src/data` usano campi `{ it, en }`. Lingua in uno store Zustand con `persist` (localStorage). Prima visita: IT per browser italiani, EN per gli altri.
- **Alternative**: react-i18next (più completo, ma peso e configurazione inutili per 2 lingue e testi statici).
- **Trade-off**: niente pluralizzazione avanzata; la lingua cambia lato client, quindi i crawler indicizzano la versione italiana.

## D-005 — Form contatti: React Hook Form + Zod + Axios → Web3Forms

- **Data**: 2026-10-05 · **Stato**: Approved
- **Decisione**: validazione con schema Zod; gli errori sono chiavi del dizionario, tradotte al render (cambiando lingua cambiano anche gli errori già visibili). Invio con Axios a Web3Forms, honeypot `botcheck`, checkbox privacy obbligatoria non preselezionata, toast con react-hot-toast.
- **Alternative**: TanStack Query `useMutation` (scartato: una sola POST, `isSubmitting` di RHF basta).
- **Nota**: la access key di Web3Forms è pubblica per design; sta comunque in un secret di GitHub per non legarla al codice.

## D-006 — Lint con ESLint invece di oxlint

- **Data**: 2026-10-05 · **Stato**: Approved
- **Contesto**: il template di `create-vite` ora usa oxlint (molto più veloce, compatibile con buona parte delle regole ESLint).
- **Decisione**: ESLint + Prettier, come da preferenza permanente.
- **Impatto di un cambio**: basso; si può passare a oxlint in futuro sostituendo `eslint.config.js`.

## D-007 — Icone di brand senza dipendenze

- **Data**: 2026-10-05 · **Stato**: Approved
- **Contesto**: lucide-react v1 ha rimosso le icone dei brand (GitHub, LinkedIn).
- **Decisione**: due path SVG inline in `BrandIcon` (GitHub da Simple Icons, LinkedIn dal logo ufficiale); lucide-react per tutte le altre icone.
