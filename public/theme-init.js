// Applies the theme before first paint, so a dark-theme visitor never sees a white flash (D-009).
// Saved choice first, otherwise the system theme. Keep STORAGE_KEY in sync with src/hooks/useTheme.ts.
;(() => {
  const STORAGE_KEY = 'portfolio-theme'
  const root = document.documentElement
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

  const readSaved = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved === 'light' || saved === 'dark' ? saved : null
    } catch {
      return null
    }
  }

  root.dataset.theme = readSaved() ?? (systemDark.matches ? 'dark' : 'light')

  // Without a saved choice, follow system changes while the page is open
  systemDark.addEventListener('change', (event) => {
    if (!readSaved()) root.dataset.theme = event.matches ? 'dark' : 'light'
  })
})()
