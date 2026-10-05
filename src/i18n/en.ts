import type { Dictionary } from './it'

export const en: Dictionary = {
  meta: {
    title: 'Massimo Baschieri — Full-stack Developer',
    description:
      'Portfolio of Massimo Baschieri, Full-stack Developer: React, TypeScript, C# and ASP.NET Core.',
  },
  nav: {
    label: 'Main navigation',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  language: {
    label: 'Language',
    switchTo: 'Switch to',
  },
  sidebar: {
    photoAlt: 'Photo of Massimo Baschieri',
    contacts: 'Contact',
    downloadCv: 'Download CV (PDF)',
    languages: 'Languages',
    interests: 'Interests',
  },
  hero: {
    role: 'Full-stack Developer — React & ASP.NET Core',
    intro:
      'Web developer with almost 3 years of experience. I build React and TypeScript interfaces and back-end services in C# with SQL Server, in a structured enterprise environment. I enjoy writing reusable components and code that stays readable months later.',
    ctaContact: 'Get in touch',
    ctaProjects: 'See my projects',
  },
  sections: {
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  experience: {
    technologies: 'Technologies',
  },
  projects: {
    stack: 'Stack',
    code: 'Code',
    demo: 'Demo',
    status: {
      'in-progress': 'In progress',
      completed: 'Completed',
    },
    opensInNewTab: '(opens in a new tab)',
  },
  contact: {
    intro: 'Have a project or an open position? Write to me, I will reply within a couple of days.',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'name@example.com',
    message: 'Message',
    messagePlaceholder: 'Tell me what you need',
    privacyBefore: 'I have read the ',
    privacyLink: 'privacy notice',
    privacyAfter: ' and agree to my data being processed so I can be contacted.',
    submit: 'Send message',
    submitting: 'Sending…',
    success: 'Message sent, thank you! I will get back to you soon.',
    error: 'Sending failed. Please try again or email me directly.',
    validation: {
      nameRequired: 'Please enter your name',
      nameTooLong: 'The name is too long',
      emailInvalid: 'Please enter a valid email address',
      messageTooShort: 'The message must be at least 10 characters long',
      messageTooLong: 'The message is too long (max 2000 characters)',
      privacyRequired: 'Consent is required so I can contact you',
    },
  },
  privacy: {
    title: 'Privacy notice',
    body: 'The data you send with the form (name, email and message) is used only to reply to you and is never shared with third parties. Messages are delivered through the Web3Forms service, which forwards them to my inbox. You can ask for your data to be deleted at any time by writing to',
    close: 'Close',
  },
  footer: {
    builtWith: 'Built with React, TypeScript and Vite',
  },
  errorBoundary: {
    title: 'Something went wrong',
    body: 'An unexpected error occurred. Reload the page to try again.',
    reload: 'Reload the page',
  },
}
