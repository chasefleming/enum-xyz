/**
 * @type {import("./types").enumOf}
 * @param mapper should return the same value for the same name
 */
export const enumOf = (mapper, state) =>
  new Proxy(
    {},
    {
      // @ts-ignore
      get: (_, name) => mapper(name, state),
    }
  )

/**
 * @type {import("./types").memoEnumOf}
 * @param mapper always returns the same value for the same name
 */
export const memoEnumOf = (mapper) =>
  enumOf(
    (name, map) => map.get(name) ?? map.set(name, mapper(name)).get(name),
    new Map()
  )

export const Strings = enumOf((name) => name)

export const Lowercased = enumOf((name) => name.toLowerCase())

export const Symbols = memoEnumOf(Symbol)

export const Counter = (startIndex = 0) => memoEnumOf((name) => startIndex++)

export const Integers = Counter()
