# CLAUDE.md

Portfolio personale one-page di Massimo Baschieri, online su **https://massimobaschieriportfolio.netlify.app**.
Panoramica, script e struttura: [README.md](README.md).

## Stack

- React 19 + Vite + TypeScript **strict**
- CSS Modules per componente; colori, font e spaziature solo tramite i token in `src/styles/tokens.css`
- Zustand **solo** per la lingua (`src/stores/languageStore.ts`); niente altro stato globale
- Form contatti: React Hook Form + Zod + Axios verso Web3Forms (`src/services/`), toast con react-hot-toast
- Icone: lucide-react; le icone dei brand (GitHub, LinkedIn) stanno in `src/components/BrandIcon` (D-007)
- Test: Vitest + React Testing Library
- Lint/format: ESLint + Prettier (D-006)

## Vincoli che non devono cambiare

- **Single page senza router** (D-002): sezioni ad ancora, niente React Router.
- **Deploy su Netlify** tramite `netlify.toml`, URL `https://massimobaschieriportfolio.netlify.app`, Vite `base: '/'` (D-008).
- **Il QR code nel CV** punta a `https://baschierimax.github.io`: quel repo contiene solo il redirect in
  `github-pages-redirect/`. Se l'URL di Netlify cambia, va aggiornato anche il redirect (oltre a `index.html`).

## Convenzioni

### i18n

- Etichette dell'interfaccia in `src/i18n/it.ts` **e** `src/i18n/en.ts`, sempre entrambi.
  `it.ts` definisce il tipo `Dictionary`; `dictionaries.test.ts` verifica che le chiavi coincidano e non siano vuote.
- Contenuti (esperienze, progetti, skill, …) in `src/data/`, ogni testo come `Localized` (`{ it, en }`),
  tipi in `src/types/content.ts`.
- Nei componenti: `const { t, locale } = useTranslation()`, poi `t.chiave` per le etichette e `item.campo[locale]` per i contenuti.
- Gli errori di validazione Zod sono chiavi del dizionario, tradotte al render (D-005).

### Componenti

- `src/components/`: componenti generici e parametrizzati (Button, Section, TagList, ResumeEntry, …), ognuno nella propria cartella con il suo `.module.css`.
- `src/sections/`: le sezioni della pagina, che compongono i componenti generici leggendo i dati da `src/data/`.
- Niente markup ripetuto: se un blocco si ripete, diventa un componente in `src/components/` o un `.map()` su dati.

### Codice e git

- Nomi e commenti nel codice in **inglese**.
- Messaggi di commit in **italiano** (stile conventional: `feat: …`, `fix: …`, `docs: …`).

### Documentazione

- Ogni decisione architetturale va in `docs/DECISIONS.md` (formato D-NNN: data, stato, contesto, decisione, alternative, motivazione).
- Ogni soluzione provvisoria va in `docs/TECH_DEBT.md` (formato TD-NNN).

## Modo di lavorare

1. Prima di modificare codice esistente, spiega come hai capito la richiesta.
2. Se la modifica è impegnativa o tocca altre parti del progetto, dai il tuo parere e aspetta conferma prima di procedere.
3. Prima di dire che una modifica è finita, esegui e verifica che passino:

   ```bash
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```

4. Commit in locale dopo ogni modifica, ma **niente push automatici**: ogni push su `main` consuma una build
   Netlify. Si fa push (e quindi deploy) solo dopo una modifica importante o quando Massimo lo chiede.
