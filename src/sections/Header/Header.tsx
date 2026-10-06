import { ArrowRight } from 'lucide-react'
import { Button } from '../../components/Button/Button'
import { LanguageSwitch } from '../../components/LanguageSwitch/LanguageSwitch'
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle'
import { profile } from '../../data/profile'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Header.module.css'

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
      <div className={styles.topBar}>
        <nav aria-label={t.nav.label}>
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
      </div>

      <div className={styles.hero}>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.role}>{t.hero.role}</p>
      </div>
      <p className={styles.intro}>{t.hero.intro}</p>
      <div className={styles.actions}>
        <Button href="#contact" icon={<ArrowRight size={18} aria-hidden="true" />}>
          {t.hero.ctaContact}
        </Button>
        <Button href="#projects" variant="outline">
          {t.hero.ctaProjects}
        </Button>
      </div>
    </header>
  )
}
