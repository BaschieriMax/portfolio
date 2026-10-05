import { useId, type ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  title: string
  /** Anchor id used by the navigation (main sections only). */
  id?: string
  /** `main` for content sections, `sidebar` for the smaller sidebar blocks. */
  size?: 'main' | 'sidebar'
  children: ReactNode
}

export const Section = ({ title, id, size = 'main', children }: SectionProps) => {
  const headingId = useId()

  return (
    <section id={id} aria-labelledby={headingId} className={`${styles.section} ${styles[size]}`}>
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
      {children}
    </section>
  )
}
