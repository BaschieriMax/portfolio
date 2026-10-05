import type { EducationItem } from '../types/content'

export const education: EducationItem[] = [
  {
    id: 'itis-volta',
    title: {
      it: 'Diploma — Informatica e Telecomunicazioni',
      en: 'High school diploma — Computer Science and Telecommunications',
    },
    institution: {
      it: 'ITIS Alessandro Volta, Sassuolo (MO)',
      en: 'ITIS Alessandro Volta, Sassuolo (MO), Italy',
    },
    period: { it: 'Set 2018 – Lug 2023', en: 'Sep 2018 – Jul 2023' },
    description: {
      it: 'Percorso quinquennale ad indirizzo informatico con focus su programmazione, reti e telecomunicazioni.',
      en: 'Five-year technical programme focused on programming, networking and telecommunications.',
    },
  },
  {
    id: 'continuous-learning',
    title: {
      it: 'Formazione continua — Front-end moderno & AI',
      en: 'Continuous learning — Modern front-end & AI',
    },
    institution: { it: 'Udemy, Volta Institute', en: 'Udemy, Volta Institute' },
    period: { it: '2023 – In corso', en: '2023 – Present' },
    description: {
      it: 'The Ultimate React Course 2024 (completato) · Next.js 15 & React – The Complete Guide · The Complete JavaScript Course 2025 · AI for Professional',
      en: 'The Ultimate React Course 2024 (completed) · Next.js 15 & React – The Complete Guide · The Complete JavaScript Course 2025 · AI for Professional',
    },
  },
]
