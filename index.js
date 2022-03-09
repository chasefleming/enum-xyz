/**
 * @template T
 * @param {(name: string) => T} mapper
 * @returns {{ [name: string]: T }}
 */
const Values = (mapper) =>
  new Proxy(
    {},
    {
      /** @param {string} name */
      get: (_, name) => mapper(name),
    }
  )

const Strings = Values((name) => name)

const LowerCased = Values((name) => name.toLowerCase())

const Symbols = Values(Symbol)

const Integers = (startIndex = 0) => {
  const indexOfName = new Map()
  return Values((name) => 
    indexOfName.set(name, indexOfName.size + startIndex).get(name)
  )
}

export { Values, Strings, LowerCased, Symbols, Integers }
