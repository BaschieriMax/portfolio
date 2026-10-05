import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../i18n/types'

interface LanguageState {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const isLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value)

/** First visit: Italian browsers get IT, everyone else EN. */
export const detectInitialLocale = (): Locale => {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE
  const browserLanguage = navigator.language.slice(0, 2).toLowerCase()
  return isLocale(browserLanguage) ? browserLanguage : 'en'
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      locale: detectInitialLocale(),
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: 'portfolio-locale',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ locale: state.locale }),
    },
  ),
)
