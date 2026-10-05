import { en } from './en'
import { it as itDictionary } from './it'

/** Collects every leaf key path, e.g. "contact.validation.nameRequired". */
const keyPaths = (value: unknown, prefix = ''): string[] =>
  typeof value === 'object' && value !== null
    ? Object.entries(value).flatMap(([key, child]) =>
        keyPaths(child, prefix ? `${prefix}.${key}` : key),
      )
    : [prefix]

describe('i18n dictionaries', () => {
  it('IT and EN expose the same keys', () => {
    expect(keyPaths(en).sort()).toEqual(keyPaths(itDictionary).sort())
  })

  it('has no empty strings', () => {
    const leaves = [itDictionary, en].flatMap((dictionary) =>
      keyPaths(dictionary).map((path) =>
        path
          .split('.')
          .reduce<unknown>((node, key) => (node as Record<string, unknown>)[key], dictionary),
      ),
    )
    expect(leaves.every((leaf) => typeof leaf === 'string' && leaf.trim().length > 0)).toBe(true)
  })
})
