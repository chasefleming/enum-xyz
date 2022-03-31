/** @type {import('./types').enumOf} */
export const enumOf = (getter) => {
  const handler = getter instanceof Function ? { get: getter } : getter,
    { get, create } = handler

  // callable proxy must wrap function
  return new Proxy(create ? () => {} : {}, {
    ...handler,
    get: (_, /** @type {string} */ name) => get(name),
    apply:
      create && ((_, _1, /** @type {any} */ args) => create(handler, ...args)),
  })
}

/** @type {import('./types').enumOf} */
export const memoEnumOf = (getter) => {
  const handler = getter instanceof Function ? { get: getter } : getter,
    cache = new Map()

  return enumOf({
    ...handler,
    get: (name) =>
      cache.get(name) ?? cache.set(name, handler.get(name)).get(name),
  })
}

export const Strings = enumOf(String)

export const Lowercased = enumOf((name) => name.toLowerCase())

export const Symbols = enumOf({
  get: Symbol.for,
  create: () => enumOf(Symbol),
})

// prettier-ignore
const createCounter = (start = 0) => () => start++
export const Integers = memoEnumOf({
  get: createCounter(),
  create: (_, /** @type {number} */ start = 0) => enumOf(createCounter(start)),
})
