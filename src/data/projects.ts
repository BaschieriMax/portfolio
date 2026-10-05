import type { Project } from '../types/content'

/** Add new projects here: the Projects section renders them in this order. */
export const projects: Project[] = [
  {
    id: 'columbu-app',
    title: 'Columbu App',
    description: {
      it: 'E-commerce full-stack per la Macelleria Fratelli Columbu di Sassuolo: catalogo prodotti, carrello, pagamenti con Stripe, email di conferma ordine e pannello admin protetto per prodotti e ordini.',
      en: 'Full-stack e-commerce for Macelleria Fratelli Columbu, a butcher shop in Sassuolo: product catalog, cart, Stripe payments, order confirmation emails and a protected admin panel for products and orders.',
    },
    stack: ['React', 'TypeScript', 'ASP.NET Core 8', 'MongoDB', 'Stripe', 'JWT'],
    status: 'in-progress',
    repoUrl: 'https://github.com/BaschieriMax/ColumbuApp',
  },
]
