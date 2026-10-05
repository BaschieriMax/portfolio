# Portfolio — Massimo Baschieri

Portfolio personale one-page, online su **https://baschierimax.github.io**.
Il QR code nel CV punta a questo indirizzo.

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

Ogni push su `main` esegue lint, test e build e pubblica su GitHub Pages
(`.github/workflows/deploy.yml`). Le pull request eseguono solo i controlli.

Configurazione una tantum del repository:

1. **Settings → Pages → Source**: `GitHub Actions`.
2. **Settings → Secrets and variables → Actions → New repository secret**:
   `VITE_WEB3FORMS_ACCESS_KEY` con la chiave di Web3Forms.

## Documentazione

- [Decisioni architetturali](docs/DECISIONS.md)
- [Debito tecnico](docs/TECH_DEBT.md)
