/**
 * Italian UI dictionary. It is the reference shape: `en.ts` must provide
 * exactly the same keys, otherwise TypeScript fails the build.
 */
export const it = {
  meta: {
    title: 'Massimo Baschieri — Full-stack Developer',
    description:
      'Portfolio di Massimo Baschieri, Full-stack Developer: React, TypeScript, C# e ASP.NET Core.',
  },
  nav: {
    label: 'Navigazione principale',
    experience: 'Esperienza',
    projects: 'Progetti',
    skills: 'Competenze',
    education: 'Formazione',
    contact: 'Contatti',
  },
  language: {
    label: 'Lingua',
    switchTo: 'Passa a',
  },
  sidebar: {
    photoAlt: 'Foto di Massimo Baschieri',
    contacts: 'Contatti',
    downloadCv: 'Scarica CV (PDF)',
    languages: 'Lingue',
    interests: 'Interessi',
  },
  hero: {
    role: 'Full-stack Developer — React & ASP.NET Core',
    intro:
      'Sviluppatore web con quasi 3 anni di esperienza. Lavoro su interfacce in React e TypeScript e su servizi back-end in C# con SQL Server, in un contesto aziendale strutturato. Mi piace scrivere componenti riutilizzabili e codice che resta leggibile anche a distanza di mesi.',
    ctaContact: 'Contattami',
    ctaProjects: 'Vedi i progetti',
  },
  sections: {
    experience: 'Esperienza',
    projects: 'Progetti',
    skills: 'Competenze',
    education: 'Formazione',
    contact: 'Contatti',
  },
  experience: {
    technologies: 'Tecnologie',
  },
  projects: {
    stack: 'Stack',
    code: 'Codice',
    demo: 'Demo',
    workProject: 'Progetto aziendale',
    status: {
      'in-progress': 'In sviluppo',
      completed: 'Completato',
    },
    opensInNewTab: '(si apre in una nuova scheda)',
  },
  contact: {
    intro: 'Hai un progetto o una posizione aperta? Scrivimi, ti rispondo entro un paio di giorni.',
    name: 'Nome',
    namePlaceholder: 'Il tuo nome',
    email: 'Email',
    emailPlaceholder: 'nome@esempio.it',
    message: 'Messaggio',
    messagePlaceholder: 'Raccontami di cosa hai bisogno',
    privacyBefore: 'Ho letto l’',
    privacyLink: 'informativa privacy',
    privacyAfter: ' e acconsento al trattamento dei dati per essere ricontattato.',
    submit: 'Invia messaggio',
    submitting: 'Invio in corso…',
    success: 'Messaggio inviato, grazie! Ti risponderò al più presto.',
    error: 'Invio non riuscito. Riprova o scrivimi direttamente via email.',
    validation: {
      nameRequired: 'Inserisci il tuo nome',
      nameTooLong: 'Il nome è troppo lungo',
      emailInvalid: 'Inserisci un indirizzo email valido',
      messageTooShort: 'Il messaggio deve contenere almeno 10 caratteri',
      messageTooLong: 'Il messaggio è troppo lungo (max 2000 caratteri)',
      privacyRequired: 'Serve il consenso per poterti ricontattare',
    },
  },
  privacy: {
    title: 'Informativa privacy',
    body: 'I dati inviati con il modulo (nome, email e messaggio) vengono usati solo per risponderti e non vengono ceduti a terzi. L’invio passa tramite il servizio Web3Forms, che inoltra il messaggio alla mia casella email. Puoi chiedere in qualsiasi momento la cancellazione dei tuoi dati scrivendo a',
    close: 'Chiudi',
  },
  footer: {
    builtWith: 'Realizzato con React, TypeScript e Vite',
  },
  errorBoundary: {
    title: 'Qualcosa è andato storto',
    body: 'Si è verificato un errore imprevisto. Ricarica la pagina per riprovare.',
    reload: 'Ricarica la pagina',
  },
}

export type Dictionary = typeof it
