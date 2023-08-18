# enum-xyz

`enum-xyz` offers a way to generate enums in JavaScript leveraging the power of Proxies. It supports various casing styles, transformations, and other customization options.

> Based on [this tweet](https://twitter.com/2ality/status/1486139713354448897)

[![ENUM-XYZ Continuous Integration](https://github.com/chasefleming/enum-xyz/actions/workflows/integrate.yml/badge.svg)](https://github.com/chasefleming/enum-xyz/actions/workflows/integrate.yml)

> Note: This library is not yet at version 1.0.0. As such, breaking changes may occur in subsequent releases. Please ensure you read the release notes when updating.

## Install

```
$ npm install enum-xyz --save
```

## Usage

### String Enums

```
import Enum from "enum-xyz";

const { Summer, Autumn, Winter, Spring } = Enum.String();

console.log(Summer); // Outputs: "Summer"
```

#### Options for String Enums:

- `casing`: Transforms the string based on the specified casing style. Available options are `snakeCase`, `camelCase`, `PascalCase`, `kebabCase`, `lowercase`, and `uppercase`.
- `transform`: Provide a custom function to transform the enum values. This function takes the original value and returns a transformed value.

##### Example:

```
const { userId, userAddress } = Enum.String({ casing: 'kebabCase' });
console.log(userId); // Outputs: "user-id"

const options = {
  casing: 'kebabCase',
  transform: (value) => `https://api.example.com/${value}`
};
const { userEndpoint, orderEndpoint } = Enum.String(options);
console.log(userEndpoint); // Outputs: "https://api.example.com/user-endpoint"
```

### Numeric Enums

Starts from 0 by default:

```
import Enum from "enum-xyz";

const { A, B, C, D } = Enum.Numeric();

console.log(A); // Outputs: 0
```

#### Options for Numeric Enums:

- `startIndex`: Start the numeric enum from a specific index.
- `step`: Increment the numeric values by a specific step (e.g., 2, 5, 10).

##### Example:

```
const { A, B, C } = Enum.Numeric({ startIndex: 5, step: 2 });
console.log(A); // Outputs: 5
console.log(B); // Outputs: 7
```

### Symbol Enums

```
import Enum from "enum-xyz";

const { blue, red } = Enum.Symbol();

console.log(blue); // Outputs: Symbol(blue)
```

#### Options for Symbol Enums:

- `global`: Create a global symbol using Symbol.for().

##### Example:

```
const { blueGlobal } = Enum.Symbol({ global: true });
console.log(blueGlobal); // Outputs: Symbol.for('blueGlobal')
```
