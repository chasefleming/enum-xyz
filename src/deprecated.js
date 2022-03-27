import { enumOf, Integers, Lowercased, Strings } from './enum-xyz.js'

/** @type {import('./types').deprecated} */
const deprecated = (mod, warning) =>
  /** @type {typeof mod} */
  (enumOf((name) => (console.warn(warning), mod[name])))

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
