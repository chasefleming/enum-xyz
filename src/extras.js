// re-export type
/** @template {string} [T=string] @typedef {import("./types").actionCreator<T>} actionCreator */
import { enumOf, memoEnumOf } from './enum-xyz'

/** @see {@link https://github.com/reduxjs/redux-toolkit/blob/v1.8.0/packages/toolkit/src/createAction.ts#L261-L287|`redux/createAction`} */
export const ActionCreators = memoEnumOf((type) => {
  /** @type {actionCreator} */
  const actionCreator = (payload, { meta, error = false }) => ({
    type,
    payload,
    meta,
    error,
  })
  actionCreator.type = type
  actionCreator.toString = () => type
  actionCreator.match = (action) => type === action.type
  return actionCreator
})

/** @param {string} slice */
export const ActionCreatorsSlice = (slice) =>
  // https://github.com/reduxjs/redux-toolkit/blob/v1.8.0/packages/toolkit/src/createSlice.ts#L241
  enumOf((type) => ActionCreators[`${slice}/${type}`])
