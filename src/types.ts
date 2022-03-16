// index.js
export type Enum<T, TKey extends string = string> = { [name in TKey]: T }
export type Strings<T extends string> = Enum<T, T>
export type Lowercased<T extends string> = Enum<T, Lowercase<T>>

// enum-xyz.js
export type enumOf = <T, TState = never>(
  mapper: (name: string, state: TState) => T,
  state?: TState
) => Enum<T>
export type memoEnumOf = <T>(mapper: (name: string) => T) => Enum<T>

// deprecated.js
export type deprecated = <T>({
  from,
  to,
  using,
}: {
  from: string
  to: string
  using: Enum<T>
}) => Enum<T>
