/**
 * @example
 * type Trinary = 'True' | 'False' | 'Maybe';
 * const { Maybe } = Strings as Strings_<Trinary>
 * console.assert(Maybe === 'Maybe')
 */
export type Strings_<T extends string> = Enum<T, T>

/**
 * @example
 * type Trinary = 'True' | 'False' | 'Maybe';
 * const { Maybe } = Lowercased as Lowercased_<Trinary>
 * console.assert(Maybe === 'maybe')
 */
export type Lowercased_<T extends string> = Enum<Lowercase<T>, T>

/**
 * @example
 * const Positives: Enum<number> = Integers(1) // inferable
 * const { First } = Positives
 * console.assert(First === 1)
 */
export type Enum<T, TKey extends string = string> = { [name in TKey]: T }

/**
 * @example
 * let count = -1
 * export const Negatives: CallableEnum<number> = memoEnumOf({ // inferable
 *   get: () => count--,
 *   create: () => { let count = -1; return enumOf(() => count--) },
 * })
 * const { First } = Negatives()
 * console.assert(First === -1)
 */
export type CallableEnum<T, TArgs extends unknown[] = []> =
  // https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
  [TArgs] extends [never] ? Enum<T> : Enum<T> & ((...args: TArgs) => Enum<T>)

type Handler<T, TArgs extends unknown[]> = {
  get: (name: string) => T
  // https://github.com/microsoft/TypeScript/issues/48474
  create?: (
    // recursive Handler['create'] would break TArgs inference
    handler: Omit<Handler<T, TArgs>, 'create'>,
    ...args: TArgs
  ) => Enum<T>
} & Omit<ProxyHandler<any>, 'get' | 'apply'>

export type enumOf = <T, TArgs extends unknown[] = never>(
  getter: Handler<T, TArgs> | Handler<T, TArgs>['get']
) => CallableEnum<T, TArgs>

export type deprecated = <T, TEnum extends Enum<T>>(
  mod: TEnum,
  warning: string
) => TEnum

export type actionCreator<TType extends string = string> = {
  <T, TMeta = never>(payload: T, props: { meta: TMeta; error: boolean }): {
    type: TType
    payload: T
  } & typeof props
  type: TType
  toString(): TType
  match(action: { type: string }): boolean
}
