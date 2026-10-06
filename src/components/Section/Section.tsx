import { useId, type ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import styles from './Section.module.css'

interface SectionProps {
  title: string
  /** Anchor id used by the navigation (main sections only). */
  id?: string
  /** `main` for content sections (fade in on scroll), `sidebar` for the smaller sidebar blocks. */
  size?: 'main' | 'sidebar'
  children: ReactNode
}

export const Section = ({ title, id, size = 'main', children }: SectionProps) => {
  const headingId = useId()
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>()

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={headingId}
      className={`${styles.section} ${styles[size]}`}
      data-visible={isVisible}
    >
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
      {children}
    </section>
  )
}
