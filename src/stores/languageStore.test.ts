import { detectInitialLocale } from './languageStore'

const mockBrowserLanguage = (language: string) =>
  vi.spyOn(window.navigator, 'language', 'get').mockReturnValue(language)

describe('detectInitialLocale', () => {
  afterEach(() => vi.restoreAllMocks())

  it('uses Italian for Italian browsers', () => {
    mockBrowserLanguage('it-IT')
    expect(detectInitialLocale()).toBe('it')
  })

  it('uses English for any other language', () => {
    mockBrowserLanguage('de-DE')
    expect(detectInitialLocale()).toBe('en')
  })
})
