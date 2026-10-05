# Technical Debt

| ID | Problema | Motivo | Impatto | Soluzione futura | Priorità |
| --- | --- | --- | --- | --- | --- |
| TD-001 | La foto profilo è estratta dal PDF del CV (237 px) | Unica immagine disponibile | Leggermente morbida su schermi ad alta densità | Sostituire `src/assets/avatar.webp` con uno scatto originale ≥ 400×400 | Media |
| TD-002 | Progetti: per ora solo Columbu App, senza demo | Gli altri progetti verranno aggiunti in seguito | Sezione Progetti povera | Aggiungere i progetti in `src/data/projects.ts`; aggiungere `demoUrl` di Columbu App dopo il deploy su Render | Alta |
| TD-003 | Testi della privacy scritti da me, non da un professionista | Portfolio personale, trattamento minimo | Basso | Far verificare il testo se il sito raccoglierà più dati | Bassa |
| TD-004 | La versione inglese non è indicizzata separatamente | Lingua gestita lato client su un unico URL | Basso per un portfolio | Eventuale `?lang=en` o percorso `/en` con `hreflang` | Bassa |
