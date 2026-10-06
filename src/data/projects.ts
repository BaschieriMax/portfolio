import type { Project } from '../types/content'

/** Add new projects here: the Projects section renders them in this order. */
export const projects: Project[] = [
  {
    id: 'npct',
    title: 'NPCT — New Part Collaboration Tool',
    description: {
      it: 'Applicazione web interna per la gestione collaborativa dei part number: griglie con esportazione in Excel per lavorare sui dati, gestione di utenti, ruoli e permessi con autenticazione Windows integrata.',
      en: 'Internal web application for collaborative part number management: data grids with Excel export to work on the data, user-role-permission management with integrated Windows Authentication.',
    },
    stack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'KendoReact',
      'C#',
      'ASP.NET Core',
      'SQL Server',
      'Windows Authentication',
    ],
    status: 'in-progress',
    company: { it: 'MTS per CNH Industrial', en: 'MTS for CNH Industrial' },
  },
  {
    id: 'columbu-app',
    title: 'Columbu App',
    description: {
      it: 'E-commerce full-stack per la Macelleria Fratelli Columbu di Sassuolo: catalogo prodotti, carrello, pagamenti con Stripe, email di conferma ordine e pannello admin protetto per prodotti e ordini.',
      en: 'Full-stack e-commerce for Macelleria Fratelli Columbu, a butcher shop in Sassuolo: product catalog, cart, Stripe payments, order confirmation emails and a protected admin panel for products and orders.',
    },
    stack: ['React', 'TypeScript', 'ASP.NET Core 8', 'MongoDB', 'Stripe', 'JWT'],
    status: 'completed',
  },
  {
    id: 'nutrimove',
    title: 'NutriMove',
    description: {
      it: 'Web app per pianificare alimentazione e allenamento: catalogo alimenti con macro e micronutrienti, ricette, piani nutrizionali calcolati e versionati, diario alimentare, schede con regole di progressione dei carichi e monitoraggio di peso e misure. I suggerimenti dell’AI vengono applicati solo dopo la conferma dell’utente. In progettazione: dominio e schema del database definiti.',
      en: 'Web app to plan nutrition and training: food catalog with macro and micronutrients, recipes, calculated and versioned nutrition plans, food diary, workout plans with load progression rules, and weight and body measurement tracking. AI suggestions are applied only after the user confirms them. In design: domain model and database schema defined.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'C#', 'ASP.NET Core', 'EF Core', 'PostgreSQL'],
    status: 'in-progress',
  },
]
