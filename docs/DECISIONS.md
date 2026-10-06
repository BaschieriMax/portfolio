# Decision Log

Stato: Proposed / Approved / Superseded.

## D-001 — Hosting su GitHub Pages, repo user site

- **Data**: 2026-10-05 · **Stato**: Superseded da D-008
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
- **Nota**: la access key di Web3Forms è pubblica per design; sta comunque in una variabile d'ambiente (`VITE_WEB3FORMS_ACCESS_KEY`, impostata nelle Environment variables di Netlify, vedi D-008) per non legarla al codice.

## D-006 — Lint con ESLint invece di oxlint

- **Data**: 2026-10-05 · **Stato**: Approved
- **Contesto**: il template di `create-vite` ora usa oxlint (molto più veloce, compatibile con buona parte delle regole ESLint).
- **Decisione**: ESLint + Prettier, come da preferenza permanente.
- **Impatto di un cambio**: basso; si può passare a oxlint in futuro sostituendo `eslint.config.js`.

## D-007 — Icone di brand senza dipendenze

- **Data**: 2026-10-05 · **Stato**: Approved
- **Contesto**: lucide-react v1 ha rimosso le icone dei brand (GitHub, LinkedIn).
- **Decisione**: due path SVG inline in `BrandIcon` (GitHub da Simple Icons, LinkedIn dal logo ufficiale); lucide-react per tutte le altre icone.

## D-008 — Hosting su Netlify, redirect da GitHub Pages per il QR

- **Data**: 2026-10-06 · **Stato**: Approved
- **Contesto**: si sceglie Netlify come hosting; il QR code nel CV punta però a `https://baschierimax.github.io`.
- **Decisione**: sito su `https://massimobaschieriportfolio.netlify.app`, collegato al repo GitHub (deploy a ogni push su `main`, deploy preview per le pull request). Configurazione in `netlify.toml`: build `npm run lint && npm test && npm run build`, publish `dist`, rewrite `/* → /index.html`. Il repo `BaschieriMax.github.io` resta su GitHub Pages solo con la pagina di redirect in `github-pages-redirect/`, così il QR continua a funzionare. Rimosso il workflow GitHub Actions di deploy: lint e test girano nella build di Netlify, che non pubblica se falliscono.
- **Alternative**: rigenerare il QR con l'URL Netlify (scartato: il CV con il vecchio QR può essere già in circolazione); dominio personale (rimandato, vedi TD-005); mantenere GitHub Actions per i controlli (scartato: duplicherebbe quello che fa già Netlify).
- **Conseguenze**: due repo da tenere (portfolio + redirect); chi scansiona il QR passa per un redirect lato client (meta refresh + `location.replace`, mantiene l'ancora `#sezione`). La access key di Web3Forms va impostata nelle Environment variables di Netlify.

## D-009 — Tema scuro con `data-theme` su `<html>`

- **Data**: 2026-10-06 · **Stato**: Approved
- **Contesto**: si aggiunge un tema scuro con pulsante nell'header; la convenzione è usare Zustand solo per la lingua.
- **Decisione**: i colori scuri ridefiniscono gli stessi token in `:root[data-theme='dark']` (`src/styles/tokens.css`), quindi i componenti non cambiano. `public/theme-init.js`, caricato in modo bloccante nell'`<head>`, imposta `data-theme` prima del primo paint: scelta salvata in `localStorage` (`portfolio-theme`), altrimenti tema di sistema, che viene seguito finché non c'è una scelta esplicita. In React l'attributo è l'unica fonte di verità: `useTheme` lo legge con `useSyncExternalStore` + `MutationObserver`. Il colore della barra del browser mobile (`theme-color`) segue il tema.
- **Alternative**: store Zustand per il tema (scartato: violerebbe la convenzione e servirebbe comunque lo script prima del paint); solo `prefers-color-scheme` senza pulsante (scartato: l'utente non può scegliere); funzione CSS `light-dark()` (scartata: supporto ancora non universale su iOS meno recenti); script inline in `index.html` (scartato: con la CSP di D-010 richiederebbe un hash da aggiornare a ogni modifica).
- **Conseguenze**: ogni nuovo colore va definito nei token per entrambi i temi; il sito richiede JavaScript (già vero per una SPA React).

## D-010 — Intestazioni di sicurezza su Netlify

- **Data**: 2026-10-06 · **Stato**: Approved
- **Decisione**: in `netlify.toml` Content Security Policy (solo risorse same-origin, `connect-src` aperto solo a `https://api.web3forms.com`, nessun `eval`, `frame-ancestors 'none'`), `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`. Zod è configurato `jitless` (`contactSchema.ts`) perché il suo test di `new Function` verrebbe segnalato come violazione. Aggiunti `robots.txt` e `sitemap.xml`.
- **Trade-off**: `style-src` consente `'unsafe-inline'` (necessario per react-hot-toast e gli attributi `style` di React); un nuovo servizio esterno (analytics, font, API) va aggiunto esplicitamente alla CSP, altrimenti viene bloccato.

## D-011 — Sidebar fissa su schermi larghi e top bar sticky

- **Data**: 2026-10-06 · **Stato**: Approved
- **Contesto**: su schermi larghi la sidebar scorreva via insieme al contenuto; su mobile i link della top bar andavano a capo su più righe.
- **Decisione**: da 60rem in su il layout è una griglia `--sidebar-width | contenuto` e la sidebar è `position: sticky; height: 100vh`, quindi scorre solo il contenuto (se la finestra è bassa la sidebar scorre per conto suo, senza scrollbar visibile). Sotto i 60rem resta tutto impilato. La top bar (`Header`: link + tema + lingua) è sticky e a tutta larghezza; nome, intro e pulsanti sono passati nella sezione `Hero`, dentro `<main>`. I link non vanno mai a capo: se non c'è spazio la riga scorre in orizzontale, con ombre ai bordi solo CSS (sfondi `local`/`scroll`) che compaiono solo quando ci sono link nascosti. Scrollbar della pagina sottile e con binario trasparente (`scrollbar-width: thin`, colore dai token). `scroll-margin-top` delle sezioni tiene conto di `--topbar-height`.
- **Alternative**: contenitore `main` con scroll proprio (`overflow: auto`) — scartato: rompe ancore, scroll da tastiera e la barra del browser mobile; scrollbar della pagina nascosta del tutto — scartata: chi usa il mouse perde l'indicazione della posizione; menu hamburger su mobile — rimandato: richiede JS e stato, per 5 link basta la riga scorrevole.
- **Conseguenze**: il breakpoint `60rem` è scritto come letterale in `App.module.css` e `Sidebar.module.css` (le media query non leggono le custom property); la top bar usa `--content-pad-x`, definita in `.content`.
