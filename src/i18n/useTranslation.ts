import { useLanguageStore } from '../stores/languageStore'
import { en } from './en'
import { it, type Dictionary } from './it'
import type { Locale } from './types'

const dictionaries: Record<Locale, Dictionary> = { it, en }

/** Returns the UI dictionary for the active locale. */
export const useTranslation = () => {
  const locale = useLanguageStore((state) => state.locale)
  return { t: dictionaries[locale], locale }
}
