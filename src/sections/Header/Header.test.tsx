import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useLanguageStore } from '../../stores/languageStore'
import { Header } from './Header'

describe('Header menu', () => {
  beforeEach(() => useLanguageStore.setState({ locale: 'it' }))

  const getMenuButton = () => screen.getByRole('button', { name: 'Menu delle sezioni' })

  it('opens the menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(getMenuButton())
    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('link', { name: 'Progetti' }))
    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes with Escape and moves focus back to the button', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(getMenuButton())
    await user.tab()
    await user.keyboard('{Escape}')

    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'false')
    expect(getMenuButton()).toHaveFocus()
  })

  it('closes on a click outside the bar', async () => {
    const user = userEvent.setup()
    render(
      <>
        <Header />
        <p>Outside</p>
      </>,
    )

    await user.click(getMenuButton())
    await user.click(screen.getByText('Outside'))

    expect(getMenuButton()).toHaveAttribute('aria-expanded', 'false')
  })
})
