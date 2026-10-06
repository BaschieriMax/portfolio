# Portfolio — Massimo Baschieri

Portfolio personale one-page, online su **https://massimobaschieriportfolio.netlify.app**.
Il QR code nel CV punta a `https://baschierimax.github.io`, che reindirizza qui (vedi [Deploy](#deploy)).

React 19 · TypeScript (strict) · Vite · CSS Modules · Zustand · React Hook Form + Zod · Axios · Web3Forms

## Avvio in locale

```bash
nvm use            # Node 22 (vedi .nvmrc)
npm install
cp .env.example .env   # inserisci la access key di Web3Forms
npm run dev
```

| Script              | Cosa fa                                  |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | server di sviluppo                       |
| `npm run build`     | typecheck + build di produzione in `dist/` |
| `npm run preview`   | serve la build di produzione in locale   |
| `npm run lint`      | ESLint                                   |
| `npm run typecheck` | solo controllo TypeScript                |
| `npm test`          | Vitest + React Testing Library           |
| `npm run format`    | Prettier                                 |

## Struttura

```text
src/
├── app/          App, layout e error boundary
├── components/   componenti UI generici e riutilizzabili (Button, Section, TagList, …)
├── sections/     le sezioni della pagina (Sidebar, Header, Experience, Projects, …)
├── data/         contenuti tipizzati, ogni testo in { it, en }
├── hooks/        hook condivisi (tema chiaro/scuro, animazione allo scorrimento)
├── i18n/         etichette dell'interfaccia (it.ts è la forma di riferimento)
├── stores/       stato globale (solo la lingua)
├── services/     client Axios e invio del form a Web3Forms
├── styles/       design token e stili globali
└── types/        tipi dei contenuti
```

## Aggiornare i contenuti

- **Nuovo progetto**: aggiungi un oggetto in `src/data/projects.ts` (descrizione in IT e EN).
- **Esperienza / formazione / skill**: `src/data/experience.ts`, `education.ts`, `skills.ts`.
- **Testi dell'interfaccia**: `src/i18n/it.ts` e `src/i18n/en.ts`. Se una chiave manca in una delle due lingue la build fallisce.
- **CV scaricabile**: sostituisci `public/cv/massimo-baschieri-cv.pdf` mantenendo lo stesso nome.

## Deploy

Il sito è su **Netlify** (configurazione in `netlify.toml`). Ogni push su `main` esegue
lint, test e build e pubblica; se un controllo fallisce resta online la versione precedente.
Le pull request generano una deploy preview.

Configurazione una tantum su Netlify:

1. **Add new project → Import an existing project → GitHub** e scegli questo repo
   (build e cartella vengono letti da `netlify.toml`, Node da `.nvmrc`).
2. **Project configuration → Environment variables**: `VITE_WEB3FORMS_ACCESS_KEY` con la chiave
   di Web3Forms. Vite la inserisce in fase di build: dopo averla aggiunta o cambiata serve
   **Deploys → Trigger deploy**.
3. Nome del progetto: `massimobaschieriportfolio`.

### Redirect per il QR del CV

Il repo `BaschieriMax.github.io` su GitHub Pages contiene solo i file di
[`github-pages-redirect/`](github-pages-redirect/README.md), che rimandano al sito su Netlify.

## Documentazione

- [Decisioni architetturali](docs/DECISIONS.md)
- [Debito tecnico](docs/TECH_DEBT.md)
