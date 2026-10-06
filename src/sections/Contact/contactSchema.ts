import { z } from 'zod'
import type { Dictionary } from '../../i18n/it'

// No JIT: the CSP forbids eval (D-010), and zod's `new Function` probe would be reported as a violation
z.config({ jitless: true })

export type ValidationMessageKey = keyof Dictionary['contact']['validation']

/** Keeps the schema locale-agnostic: errors carry a dictionary key, translated at render time. */
const key = (messageKey: ValidationMessageKey) => messageKey

export const contactSchema = z.object({
  name: z.string().trim().min(1, key('nameRequired')).max(100, key('nameTooLong')),
  email: z
    .string()
    .trim()
    .pipe(z.email(key('emailInvalid'))),
  message: z.string().trim().min(10, key('messageTooShort')).max(2000, key('messageTooLong')),
  privacy: z.boolean().refine((accepted) => accepted, key('privacyRequired')),
  // Honeypot: hidden from humans, bots tend to fill it in
  botcheck: z.string().optional(),
})

export type ContactFormInput = z.input<typeof contactSchema>
export type ContactFormValues = z.output<typeof contactSchema>

export const isValidationMessageKey = (
  value: string | undefined,
  messages: Dictionary['contact']['validation'],
): value is ValidationMessageKey => value !== undefined && value in messages
