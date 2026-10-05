import { useId, type ComponentPropsWithRef } from 'react'
import styles from './TextField.module.css'

interface CommonProps {
  label: string
  error?: string
}

type InputFieldProps = CommonProps & ComponentPropsWithRef<'input'> & { multiline?: false }
type TextareaFieldProps = CommonProps & ComponentPropsWithRef<'textarea'> & { multiline: true }

export type TextFieldProps = InputFieldProps | TextareaFieldProps

/**
 * Labelled input or textarea with an accessible error message.
 * Accepts `react-hook-form`'s `register()` output (React 19 forwards `ref` as a prop).
 */
export const TextField = (props: TextFieldProps) => {
  const generatedId = useId()
  const id = props.id ?? generatedId
  const errorId = `${id}-error`
  const { label, error } = props

  const a11yProps = {
    id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: styles.control,
  }

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {props.multiline ? (
        <TextareaControl {...props} {...a11yProps} />
      ) : (
        <InputControl {...props} {...a11yProps} />
      )}
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

/* Strip the wrapper-only props before spreading onto the native element */
const InputControl = ({
  label: _label,
  error: _error,
  multiline: _multiline,
  ...rest
}: InputFieldProps) => <input {...rest} />

const TextareaControl = ({
  label: _label,
  error: _error,
  multiline: _multiline,
  ...rest
}: TextareaFieldProps) => <textarea rows={5} {...rest} />
