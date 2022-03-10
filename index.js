/**
 * @template T
 * @param {(name: string) => T} mapper
 * @returns {{ [name: string]: T }}
 */
export const Values = (mapper) =>
  new Proxy(
    {},
    {
      /** @param {string} name */
      get: (_, name) => mapper(name),
    }
  )

export const Strings = Values((name) => name)

export const LowerCased = Values((name) => name.toLowerCase())

export const Symbols = Values(Symbol)

export const Counter = (startIndex = 0) => {
  /** @type {Map<string, number>} */
  const indexOfName = new Map()
  return Values(
    (name) =>
      /** @type {!number} nonnull */ (
        indexOfName.set(name, indexOfName.size + startIndex).get(name)
      )
  )
}

export const Integers = Counter()
