import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useLanguageStore } from '../stores/languageStore'
import { App } from './App'

describe('App', () => {
  beforeEach(() => useLanguageStore.setState({ locale: 'it' }))

  it('renders every main section reachable from the navigation', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Navigazione principale' })
    const links = within(nav).getAllByRole('link')

    expect(links).toHaveLength(5)
    links.forEach((link) => {
      const targetId = link.getAttribute('href')?.slice(1) ?? ''
      expect(document.getElementById(targetId)).toBeInTheDocument()
    })
  })

  it('switches the whole UI to English and updates <html lang>', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Passa a EN' }))

    expect(screen.getByRole('heading', { level: 2, name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Switch to EN' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(document.documentElement.lang).toBe('en')
  })
})
