# enum-xyz

JavaScript enums using proxies.

> Based on [this tweet](https://twitter.com/2ality/status/1486139713354448897)

## Install

```sh
$ npm install enum-xyz --save
```

## Usage

### Strings

```js
import Enum from 'enum-xyz'

const { Summer, Autumn, Winter, Spring } = Enum.String

console.log(Summer) // 'Summer'
console.log(Autumn) // 'Autumn'
console.log(Winter) // 'Winter'
console.log(Spring) // 'Spring'
```

### Strings (lowercased)

```js
import Enum from 'enum-xyz'

const { Summer, Autumn, Winter, Spring } = Enum.StringLower

console.log(Summer) // 'summer'
console.log(Autumn) // 'autumn'
console.log(Winter) // 'winter'
console.log(Spring) // 'spring'
```

### Numeric

```js
import Enum from 'enum-xyz'

const { A, B, C, D } = Enum.Numeric

console.log(A) // 0
console.log(B) // 1
console.log(C) // 2
console.log(D) // 3
```

### Numeric Starting at Index

```js
import Enum from 'enum-xyz'

const { A, B, C, D } = Enum.NumericAt(1)

console.log(A) // 1
console.log(B) // 2
console.log(C) // 3
console.log(D) // 4
```

## Contributing

### Suggested VS Code Extensions

- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) - [Test Explorer](https://code.visualstudio.com/updates/v1_59#_testing-apis) integration
- [JSDoc Markdown highlighting](https://marketplace.visualstudio.com/items?itemName=bierner.jsdoc-markdown-highlighting) - `@example` syntax highlighting (some lines require semicolons)
