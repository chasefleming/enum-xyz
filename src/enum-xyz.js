/**
 * @template T
 * @param {(name: string) => T} mapper
 * @returns {{ [name: string]: T }}
 */
export const EnumOf = (mapper) =>
  new Proxy(
    {},
    {
      /** @param {string} name */
      get: (_, name) => mapper(name),
    }
  )

export const Strings = EnumOf((name) => name)

export const LowerCased = EnumOf((name) => name.toLowerCase())

export const Symbols = EnumOf(Symbol)

export const Counter = (startIndex = 0) => {
  /** @type {Map<string, number>} */
  const indexesByName = new Map()
  return EnumOf(
    (name) =>
      /** @type {!number} nonnull */ (
        indexesByName.set(name, indexesByName.size + startIndex).get(name)
      )
  )
}

export const Integers = Counter()
