import { useSyncExternalStore } from 'react'

export type Theme = 'light' | 'dark'

/** Same key read by public/theme-init.js, which applies the theme before first paint (D-009). */
export const THEME_STORAGE_KEY = 'portfolio-theme'

const root = () => document.documentElement

const getTheme = (): Theme => (root().dataset.theme === 'dark' ? 'dark' : 'light')

/** `<html data-theme>` is the single source of truth: React re-renders whenever it changes. */
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(root(), { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

const setTheme = (theme: Theme) => {
  root().dataset.theme = theme
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage blocked (e.g. private mode): the choice lasts for this visit only
  }
}

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getTheme)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return { theme, toggleTheme }
}
