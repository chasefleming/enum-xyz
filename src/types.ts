// index.js
export type Enum<T, TKey extends string = string> = { [name in TKey]: T }
export type Strings<T extends string> = Enum<T, T>
export type Lowercased<T extends string> = Enum<T, Lowercase<T>>

type MaybeArg = [] | [any?]
export type CallableEnum<T, TArgs extends MaybeArg = []> =
  // https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
  [TArgs] extends [never] ? Enum<T> : Enum<T> & ((...args: TArgs) => Enum<T>)

// enum-xyz.js
type Handler<T, TArgs extends MaybeArg> = {
  get: (name: string) => T
  // https://twitter.com/texastoland/status/1508082132186693632?s=20&t=BAERXB6r_JQyQyYBvSULDw
  create?: (
    // recursive Handler['create'] would break TArgs inference
    handler: Omit<Handler<T, TArgs>, 'create'>,
    ...args: TArgs
  ) => Enum<T>
} & Omit<ProxyHandler<any>, 'get' | 'apply'>

export type enumOf = <T, TArgs extends MaybeArg = never>(
  getter: Handler<T, TArgs> | Handler<T, TArgs>['get']
) => CallableEnum<T, TArgs>

export type memoEnumOf = <T, TArgs extends MaybeArg = never>(
  getter: Handler<T, TArgs> | Handler<T, TArgs>['get']
) => CallableEnum<T, TArgs>

// deprecated.js
export type deprecated = <T, TEnum extends Enum<T>>(
  mod: TEnum,
  warning: string
) => TEnum

// extras.js
export type actionCreator<TType extends string = string> = {
  <T, TMeta = never>(payload: T, props: { meta: TMeta; error: boolean }): {
    type: TType
    payload: T
  } & typeof props
  type: TType
  toString(): TType
  match(action: { type: string }): boolean
}
