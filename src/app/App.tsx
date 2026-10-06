import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { useTheme } from '../hooks/useTheme'
import { useTranslation } from '../i18n/useTranslation'
import { Contact } from '../sections/Contact/Contact'
import { Education } from '../sections/Education/Education'
import { Experience } from '../sections/Experience/Experience'
import { Footer } from '../sections/Footer/Footer'
import { Header } from '../sections/Header/Header'
import { Projects } from '../sections/Projects/Projects'
import { Sidebar } from '../sections/Sidebar/Sidebar'
import { Skills } from '../sections/Skills/Skills'
import styles from './App.module.css'

/** Keeps <html lang>, the title and the meta description in sync with the active locale. */
const useDocumentMeta = () => {
  const { t, locale } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t])
}

/** Tints the mobile browser bar with the sidebar color of the active theme. */
const useThemeColor = () => {
  const { theme } = useTheme()

  useEffect(() => {
    const surface = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-surface')
      .trim()
    if (surface)
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', surface)
  }, [theme])
}

export const App = () => {
  useDocumentMeta()
  useThemeColor()

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            fontFamily: 'var(--font-family)',
            fontSize: '0.875rem',
            color: 'var(--color-text)',
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-card)',
          },
        }}
      />
    </div>
  )
}
