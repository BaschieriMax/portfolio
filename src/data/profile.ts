import type { ContactLink, Interest, LanguageSkill } from '../types/content'

export const profile = {
  name: 'Massimo Baschieri',
  email: 'baschieri.massimo007@gmail.com',
  githubUrl: 'https://github.com/BaschieriMax',
  linkedinUrl: 'https://www.linkedin.com/in/massimo-baschieri-a8864a280',
  cvPath: '/cv/massimo-baschieri-cv.pdf',
}

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    icon: 'mail',
    label: { it: profile.email, en: profile.email },
    href: `mailto:${profile.email}`,
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    label: { it: 'LinkedIn', en: 'LinkedIn' },
    href: profile.linkedinUrl,
  },
  {
    id: 'github',
    icon: 'github',
    label: { it: 'github.com/BaschieriMax', en: 'github.com/BaschieriMax' },
    href: profile.githubUrl,
  },
  {
    id: 'location',
    icon: 'location',
    label: { it: 'Sassuolo (MO) — Patente B', en: 'Sassuolo (MO), Italy — Driving licence' },
  },
]

export const languages: LanguageSkill[] = [
  { id: 'it', name: { it: 'Italiano', en: 'Italian' }, level: { it: 'Madrelingua', en: 'Native' } },
  { id: 'en', name: { it: 'Inglese', en: 'English' }, level: { it: 'B2', en: 'B2' } },
]

export const interests: Interest[] = [
  {
    id: 'music',
    category: { it: 'Musica', en: 'Music' },
    detail: {
      it: 'Chitarra e produzione musicale con FL Studio',
      en: 'Guitar and music production with FL Studio',
    },
  },
  {
    id: 'sport',
    category: { it: 'Sport', en: 'Sport' },
    detail: { it: 'Palestra', en: 'Gym' },
  },
]
