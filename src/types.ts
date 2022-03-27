// index.js
export type Enum<T, TKey extends string = string> = { [name in TKey]: T }
export type Strings<T extends string> = Enum<T, T>
export type Lowercased<T extends string> = Enum<T, Lowercase<T>>

type MaybeArg = [] | [any]
export type CallableEnum<T, TArgs extends MaybeArg = []> =
  // https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
  [TArgs] extends [never] ? Enum<T> : Enum<T> & ((...args: TArgs) => Enum<T>)

// enum-xyz.js
type Handler<T, TArgs extends MaybeArg> = {
  get: (name: string) => T
  apply?: (handler: Handler<T, TArgs>, ...args: TArgs) => Enum<T>
} & Omit<ProxyHandler<any>, 'get' | 'apply'>

export type enumOf = <T, TArgs extends MaybeArg = never>(
  handler: Handler<T, TArgs> | Handler<T, TArgs>['get']
) => CallableEnum<T, TArgs>

export type memoEnumOf = <T, TArgs extends MaybeArg = never>(
  handler: Handler<T, TArgs> | Handler<T, TArgs>['get']
) => CallableEnum<T, TArgs>

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
