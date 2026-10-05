import { lazy, Suspense } from 'react'
import { Section } from '../../components/Section/Section'
import { useTranslation } from '../../i18n/useTranslation'
import styles from './Contact.module.css'

// The form pulls in react-hook-form, zod and axios: load it only when needed
const ContactForm = lazy(() =>
  import('./ContactForm').then((module) => ({ default: module.ContactForm })),
)

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <Section id="contact" title={t.sections.contact}>
      <p className={styles.intro}>{t.contact.intro}</p>
      <Suspense fallback={<div className={styles.formPlaceholder} aria-hidden="true" />}>
        <ContactForm />
      </Suspense>
    </Section>
  )
}
