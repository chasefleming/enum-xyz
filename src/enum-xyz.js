/** @template T @typedef {{ [name: string]: T }} Enum */

/**
 * @template T, [TState=unknown]
 * @param {(name: string, state: TState) => T} mapper should return the same value for the same name
 * @param {TState} [state]
 * @returns {Enum<T>}
 */
export const EnumOf = (mapper, state) =>
  new Proxy(
    {},
    {
      /** @param {string} name */
      get: (_, name) => mapper(name, /** @type {!TState} */ (state)),
    }
  )

/**
 * @template T
 * @param {(name: string) => T} mapper always returns the same value for the same name
 */
export const MemoEnumOf = (mapper) =>
  EnumOf(
    (name, map) =>
      map.get(name) ??
      /** @type {!T} */ (map.set(name, mapper(name)).get(name)),
    /** @type {Map<string, T>} */ (new Map())
  )

export const Strings = EnumOf((name) => name)

export const LowerCased = EnumOf((name) => name.toLowerCase())

export const Symbols = MemoEnumOf(Symbol)

export const Counter = (startIndex = 0) => MemoEnumOf((name) => startIndex++)

export const Integers = Counter()
