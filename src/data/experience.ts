import type { ExperienceItem } from '../types/content'

export const experience: ExperienceItem[] = [
  {
    id: 'mts-cnh',
    role: { it: 'Full-stack Developer', en: 'Full-stack Developer' },
    company: {
      it: 'MTS · consulenza per CNH Industrial, Modena',
      en: 'MTS · consulting for CNH Industrial, Modena',
    },
    period: { it: 'Gen 2024 – Oggi', en: 'Jan 2024 – Present' },
    description: {
      it: 'Sviluppo e manutenzione di interfacce front-end con React, componenti riutilizzabili e responsive. Contributo a funzionalità back-end in C# con integrazione verso database SQL Server. Collaborazione con il team su debugging, code review e ottimizzazione delle applicazioni esistenti.',
      en: 'Development and maintenance of front-end interfaces with React, building reusable and responsive components. Contribution to back-end features in C# integrated with SQL Server databases. Teamwork on debugging, code reviews and optimisation of existing applications.',
    },
    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'KendoReact',
      'C#',
      'ASP.NET Core',
      'SQL Server',
    ],
  },
]
