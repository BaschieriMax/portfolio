import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
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

export const App = () => {
  useDocumentMeta()

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
        toastOptions={{ style: { fontFamily: 'var(--font-family)', fontSize: '0.875rem' } }}
      />
    </div>
  )
}
