import { useTranslation } from '../../i18n/useTranslation'
import { LOCALES } from '../../i18n/types'
import { useLanguageStore } from '../../stores/languageStore'
import styles from './LanguageSwitch.module.css'

export const LanguageSwitch = () => {
  const { t, locale } = useTranslation()
  const setLocale = useLanguageStore((state) => state.setLocale)

  return (
    <div role="group" aria-label={t.language.label} className={styles.group}>
      {LOCALES.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === locale}
          aria-label={`${t.language.switchTo} ${option.toUpperCase()}`}
          className={styles.option}
          onClick={() => setLocale(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
