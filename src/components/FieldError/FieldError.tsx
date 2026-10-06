import { CircleAlert } from 'lucide-react'
import styles from './FieldError.module.css'

interface FieldErrorProps {
  /** Referenced by the control's `aria-describedby`. */
  id: string
  message: string
}

/** Validation message shown under a form control and announced to screen readers. */
export const FieldError = ({ id, message }: FieldErrorProps) => (
  <p id={id} className={styles.error} role="alert">
    <CircleAlert size={14} aria-hidden="true" className={styles.icon} />
    {message}
  </p>
)
