import { LanguageSwitch } from '../../components/LanguageSwitch/LanguageSwitch'
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Header.module.css'

/** Sticky top bar: section links on the left, theme and language controls on the right. */
export const Header = () => {
  const { t } = useTranslation()

  const navItems = [
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={styles.header}>
      <nav aria-label={t.nav.label} className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.controls}>
        <ThemeToggle />
        <LanguageSwitch />
      </div>
    </header>
  )
}
