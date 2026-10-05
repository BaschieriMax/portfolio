import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toaster } from 'react-hot-toast'
import { sendContactMessage } from '../../services/contactService'
import { useLanguageStore } from '../../stores/languageStore'
import { ContactForm } from './ContactForm'

vi.mock('../../services/contactService', () => ({
  sendContactMessage: vi.fn(),
}))

const sendMock = vi.mocked(sendContactMessage)

const renderForm = () => {
  render(
    <>
      <ContactForm />
      <Toaster />
    </>,
  )
  return userEvent.setup()
}

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText('Nome'), 'Mario Rossi')
  await user.type(screen.getByLabelText('Email'), 'mario@example.com')
  await user.type(screen.getByLabelText('Messaggio'), 'Ciao, vorrei parlarti di un progetto.')
  await user.click(screen.getByRole('checkbox'))
}

describe('ContactForm', () => {
  beforeEach(() => {
    useLanguageStore.setState({ locale: 'it' })
    sendMock.mockReset()
  })

  it('shows translated validation errors and does not send an empty form', async () => {
    const user = renderForm()

    await user.click(screen.getByRole('button', { name: 'Invia messaggio' }))

    expect(await screen.findByText('Inserisci il tuo nome')).toBeInTheDocument()
    expect(screen.getByText('Inserisci un indirizzo email valido')).toBeInTheDocument()
    expect(screen.getByText('Il messaggio deve contenere almeno 10 caratteri')).toBeInTheDocument()
    expect(screen.getByText('Serve il consenso per poterti ricontattare')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toHaveAttribute('aria-invalid', 'true')
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('translates visible errors when the language changes', async () => {
    const user = renderForm()
    await user.click(screen.getByRole('button', { name: 'Invia messaggio' }))
    await screen.findByText('Inserisci il tuo nome')

    useLanguageStore.setState({ locale: 'en' })

    expect(await screen.findByText('Please enter your name')).toBeInTheDocument()
  })

  it('sends trimmed values and confirms with a toast', async () => {
    sendMock.mockResolvedValue()
    const user = renderForm()

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Invia messaggio' }))

    expect(sendMock).toHaveBeenCalledWith({
      name: 'Mario Rossi',
      email: 'mario@example.com',
      message: 'Ciao, vorrei parlarti di un progetto.',
    })
    expect(await screen.findByText(/Messaggio inviato/)).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toHaveValue('')
  })

  it('shows an error toast when sending fails and keeps the data', async () => {
    sendMock.mockRejectedValue(new Error('network'))
    const user = renderForm()

    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: 'Invia messaggio' }))

    expect(await screen.findByText(/Invio non riuscito/)).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toHaveValue('Mario Rossi')
  })

  it('silently drops submissions with the honeypot filled in', async () => {
    const user = renderForm()
    await fillValidForm(user)
    const honeypot = document.querySelector<HTMLInputElement>('input[name="botcheck"]')
    if (!honeypot) throw new Error('honeypot missing')
    await user.type(honeypot, 'spam')

    await user.click(screen.getByRole('button', { name: 'Invia messaggio' }))

    expect(sendMock).not.toHaveBeenCalled()
  })
})
