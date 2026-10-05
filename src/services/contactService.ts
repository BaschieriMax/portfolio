import { httpClient } from './httpClient'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export interface ContactPayload {
  name: string
  email: string
  message: string
}

interface Web3FormsResponse {
  success: boolean
  message: string
}

export class MissingAccessKeyError extends Error {
  constructor() {
    super('VITE_WEB3FORMS_ACCESS_KEY is not set')
    this.name = 'MissingAccessKeyError'
  }
}

/** Sends the contact form to Web3Forms, which forwards it to the configured inbox. */
export const sendContactMessage = async ({ name, email, message }: ContactPayload) => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
  if (!accessKey) throw new MissingAccessKeyError()

  const { data } = await httpClient.post<Web3FormsResponse>(WEB3FORMS_ENDPOINT, {
    access_key: accessKey,
    subject: `Nuovo messaggio dal portfolio — ${name}`,
    from_name: 'Portfolio Massimo Baschieri',
    name,
    email,
    message,
  })

  if (!data.success) throw new Error(data.message)
}
