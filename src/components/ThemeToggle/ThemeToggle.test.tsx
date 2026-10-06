import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { THEME_STORAGE_KEY } from '../../hooks/useTheme'
import { useLanguageStore } from '../../stores/languageStore'
import { ThemeToggle } from './ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    useLanguageStore.setState({ locale: 'it' })
    document.documentElement.dataset.theme = 'light'
    localStorage.clear()
  })

  it('switches to dark and back, saving the choice', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await user.click(screen.getByRole('button', { name: 'Passa al tema scuro' }))

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    // The label follows the attribute through the MutationObserver
    const toLight = await screen.findByRole('button', { name: 'Passa al tema chiaro' })

    await user.click(toLight)

    expect(document.documentElement.dataset.theme).toBe('light')
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
  })

  it('reflects a theme applied from outside React (e.g. system change)', async () => {
    render(<ThemeToggle />)

    document.documentElement.dataset.theme = 'dark'

    expect(await screen.findByRole('button', { name: 'Passa al tema chiaro' })).toBeInTheDocument()
  })
})
