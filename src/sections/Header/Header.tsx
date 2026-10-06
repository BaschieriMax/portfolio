import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { LanguageSwitch } from '../../components/LanguageSwitch/LanguageSwitch'
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Header.module.css'

/**
 * Sticky top bar: section links on the left, theme and language controls on the right.
 * When the bar is too narrow for the links (see Header.module.css) they move into a drop-down menu.
 */
export const Header = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  // While the menu is open, Escape closes it (focus back on the button) and so does a click outside
  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [isMenuOpen])

  const navItems = [
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header ref={headerRef} className={styles.header}>
      <nav aria-label={t.nav.label} className={styles.nav}>
        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-label={t.nav.menu}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
        <ul id={menuId} className={styles.navList} data-open={isMenuOpen}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
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
