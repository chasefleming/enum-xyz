/** @type {import("./types").enumOf} */
export const enumOf = (getter) => {
  const handler = getter instanceof Function ? { get: getter } : getter,
    { get, apply } = handler
  // must target function to be callable
  return new Proxy(apply ? () => {} : {}, {
    ...handler,
    get: (_, /** @type {string} */ name) => get(name),
    apply:
      apply && ((_, _1, /** @type {any} */ args) => apply(handler, ...args)),
  })
}

/** @type {import("./types").memoEnumOf} */
export const memoEnumOf = (getter) => {
  const handler = getter instanceof Function ? { get: getter } : getter,
    cache = new Map()
  return enumOf({
    ...handler,
    get: (name) =>
      cache.get(name) ?? cache.set(name, handler.get(name)).get(name),
  })
}

export const Strings = enumOf((name) => name)

export const Lowercased = enumOf((name) => name.toLowerCase())

export const Symbols = enumOf({
  get: Symbol.for,
  apply: () => enumOf(Symbol),
})

let nextInteger = 0
export const Integers = memoEnumOf({
  get: () => nextInteger++,
  apply: (_, start = 0) => enumOf(() => start++),
})
