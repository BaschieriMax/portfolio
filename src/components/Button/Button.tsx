import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'outline'

interface BaseProps {
  variant?: Variant
  icon?: ReactNode
  fullWidth?: boolean
  children: ReactNode
}

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps> & { href?: undefined }

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof BaseProps> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

/** Renders an `<a>` when `href` is provided, otherwise a `<button>`, with the same look. */
export const Button = ({
  variant = 'primary',
  icon,
  fullWidth = false,
  children,
  className,
  ...rest
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], fullWidth && styles.fullWidth, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  )

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<'a'>)}>
        {content}
      </a>
    )
  }

  const { type = 'button', ...buttonProps } = rest as ComponentPropsWithoutRef<'button'>
  return (
    <button className={classes} type={type} {...buttonProps}>
      {content}
    </button>
  )
}
