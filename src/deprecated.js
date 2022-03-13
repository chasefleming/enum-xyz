import { Counter, EnumOf, Integers, LowerCased, Strings } from './enum-xyz.js'

/**
 * @template T
 * @param props {object}
 * @param props.from {string}
 * @param props.to {string}
 * @param props.using {import('./enum-xyz.js').Enum<T>}
 * @returns {import('./enum-xyz.js').Enum<T>}
 */
const deprecated = ({ from, to, using }) =>
  EnumOf(
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
  to: 'LowerCased',
  using: LowerCased,
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
