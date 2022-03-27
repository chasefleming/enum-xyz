import { enumOf, Integers, Lowercased, Strings } from './enum-xyz.js'

/**
 * @template T
 * @param {import("./types").Enum<T>} replacement
 * @param {string} warning
 */
const deprecated = (replacement, warning) =>
  enumOf((name) => (console.warn(warning), replacement[name]))

/** @deprecated */
export const String = deprecated(
  Strings,
  '`String` is deprecated; use `Strings` (plural) instead'
)
/** @deprecated */
export const StringLower = deprecated(
  Lowercased,
  '`StringLower` is deprecated; use `Lowercased` instead'
)
/** @deprecated */
export const Numeric = deprecated(
  Integers,
  '`Numeric` is deprecated; use `Integers` instead'
)
/**
 * @deprecated
 * @param {number} start
 */
export const NumericAt = (start) =>
  deprecated(
    Integers(start),
    '`NumericAt()` is deprecated; use `Integers()` instead'
  )
