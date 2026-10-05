import { X } from 'lucide-react'
import { useEffect, useId, useRef, type ReactNode } from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  open: boolean
  title: string
  closeLabel: string
  onClose: () => void
  children: ReactNode
}

/**
 * Thin wrapper around the native `<dialog>`: focus trap, Esc to close and
 * the backdrop come from the browser, no extra library needed.
 */
export const Modal = ({ open, title, closeLabel, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal?.()
    if (!open && dialog.open) dialog.close?.()
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className={styles.dialog}
      onClose={onClose}
      onClick={(event) => {
        // Click on the backdrop (outside the content box) closes the dialog
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <button type="button" className={styles.close} aria-label={closeLabel} onClick={onClose}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  )
}
