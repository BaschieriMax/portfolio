export const LOCALES = ['it', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'it'

/** A value available in every supported locale (used by content in `src/data`). */
export type Localized<T = string> = Record<Locale, T>
