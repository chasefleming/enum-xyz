import { Counter, enumOf, Integers, Lowercased, Strings } from './enum-xyz.js'

/** @type {import("./types").deprecated} */
const deprecated = ({ from, to, using }) =>
  enumOf(
    (name) => (
      console.warn(`\`${from}\` is deprecated; use \`${to}\` instead`),
      using[name]
    )
  )

/** @deprecated */
export const String = deprecated({
  from: 'String',
  to: 'Strings',
  using: Strings,
})

/** @deprecated */
export const StringLower = deprecated({
  from: 'StringLower',
  to: 'Lowercased',
  using: Lowercased,
})

/** @deprecated */
export const Numeric = deprecated({
  from: 'Numeric',
  to: 'Integers',
  using: Integers,
})

/**
 * @deprecated
 * @param {number} startIndex
 */
export const NumericAt = (startIndex) =>
  deprecated({
    from: 'NumericAt',
    to: 'Counter',
    using: Counter(startIndex),
  })
