import type { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useTranslation } from '../i18n/useTranslation'
import styles from './AppErrorBoundary.module.css'

const ErrorFallback = () => {
  const { t } = useTranslation()

  return (
    <main role="alert" className={styles.fallback}>
      <h1 className={styles.title}>{t.errorBoundary.title}</h1>
      <p className={styles.body}>{t.errorBoundary.body}</p>
      <button type="button" className={styles.button} onClick={() => window.location.reload()}>
        {t.errorBoundary.reload}
      </button>
    </main>
  )
}

export const AppErrorBoundary = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error) => {
      if (import.meta.env.DEV) console.error(error)
    }}
  >
    {children}
  </ErrorBoundary>
)
