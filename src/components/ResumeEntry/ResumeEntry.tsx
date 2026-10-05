import type { ReactNode } from 'react'
import styles from './ResumeEntry.module.css'

interface ResumeEntryProps {
  title: string
  subtitle: string
  period: string
  description: string
  /** Optional extra content below the description (e.g. a TagList). */
  children?: ReactNode
}

/** A dated entry shared by the Experience and Education sections. */
export const ResumeEntry = ({
  title,
  subtitle,
  period,
  description,
  children,
}: ResumeEntryProps) => (
  <article className={styles.entry}>
    <div className={styles.header}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <p className={styles.period}>{period}</p>
    </div>
    <p className={styles.description}>{description}</p>
    {children}
  </article>
)
