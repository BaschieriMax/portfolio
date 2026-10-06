import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './ThemeToggle.module.css'

/** Switches between light and dark theme; the icon shows the theme you switch to. */
export const ThemeToggle = () => {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label={isDark ? t.theme.toLight : t.theme.toDark}
      onClick={toggleTheme}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
