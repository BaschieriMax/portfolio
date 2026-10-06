import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm, type FieldError as HookFormFieldError } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '../../components/Button/Button'
import { FieldError } from '../../components/FieldError/FieldError'
import { Modal } from '../../components/Modal/Modal'
import { TextField } from '../../components/TextField/TextField'
import { profile } from '../../data/profile'
import { useTranslation } from '../../i18n/useTranslation'
import { sendContactMessage } from '../../services/contactService'
import {
  contactSchema,
  isValidationMessageKey,
  type ContactFormInput,
  type ContactFormValues,
} from './contactSchema'
import styles from './ContactForm.module.css'

const DEFAULT_VALUES: ContactFormInput = {
  name: '',
  email: '',
  message: '',
  privacy: false,
  botcheck: '',
}

export const ContactForm = () => {
  const { t } = useTranslation()
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput, unknown, ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: DEFAULT_VALUES,
  })

  const errorText = (error?: HookFormFieldError) => {
    const messages = t.contact.validation
    return isValidationMessageKey(error?.message, messages) ? messages[error.message] : undefined
  }

  const onSubmit = async ({ name, email, message, botcheck }: ContactFormValues) => {
    // A filled honeypot means a bot: pretend success without sending anything
    if (botcheck) {
      reset()
      return
    }

    try {
      await sendContactMessage({ name, email, message })
      toast.success(t.contact.success)
      reset()
    } catch (error) {
      if (import.meta.env.DEV) console.error(error)
      toast.error(t.contact.error)
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.row}>
          <TextField
            label={t.contact.name}
            placeholder={t.contact.namePlaceholder}
            autoComplete="name"
            error={errorText(errors.name)}
            {...register('name')}
          />
          <TextField
            label={t.contact.email}
            type="email"
            placeholder={t.contact.emailPlaceholder}
            autoComplete="email"
            error={errorText(errors.email)}
            {...register('email')}
          />
        </div>

        <TextField
          multiline
          label={t.contact.message}
          placeholder={t.contact.messagePlaceholder}
          error={errorText(errors.message)}
          {...register('message')}
        />

        <div className={styles.honeypot} aria-hidden="true">
          <input type="text" tabIndex={-1} autoComplete="off" {...register('botcheck')} />
        </div>

        <div className={styles.privacy}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              className={styles.checkbox}
              aria-invalid={errors.privacy ? true : undefined}
              aria-describedby={errors.privacy ? 'privacy-error' : undefined}
              {...register('privacy')}
            />
            <span>
              {t.contact.privacyBefore}
              <button
                type="button"
                className={styles.privacyLink}
                onClick={() => setIsPrivacyOpen(true)}
              >
                {t.contact.privacyLink}
              </button>
              {t.contact.privacyAfter}
            </span>
          </label>
          {errors.privacy && (
            <FieldError id="privacy-error" message={errorText(errors.privacy) ?? ''} />
          )}
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            icon={
              isSubmitting ? (
                <LoaderCircle size={18} aria-hidden="true" className={styles.spinner} />
              ) : (
                <Send size={18} aria-hidden="true" />
              )
            }
          >
            {isSubmitting ? t.contact.submitting : t.contact.submit}
          </Button>
        </div>
      </form>

      <Modal
        open={isPrivacyOpen}
        title={t.privacy.title}
        closeLabel={t.privacy.close}
        onClose={() => setIsPrivacyOpen(false)}
      >
        <p className={styles.privacyBody}>
          {t.privacy.body} <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </Modal>
    </>
  )
}
