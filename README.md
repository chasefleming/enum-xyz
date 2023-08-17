# enum-xyz

JavaScript enums using proxies.

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
console.log(Autumn); // Outputs: "Autumn"
console.log(Winter); // Outputs: "Winter"
console.log(Spring); // Outputs: "Spring"
```

### Numeric Enums

Starts from 0 by default:

```
import Enum from "enum-xyz";

const { A, B, C, D } = Enum.Numeric();

console.log(A); // Outputs: 0
console.log(B); // Outputs: 1
console.log(C); // Outputs: 2
console.log(D); // Outputs: 3
```

To start from a different index:

```
const { A, B, C, D } = Enum.Numeric(5);
console.log(A); // Outputs: 5
```

### Symbol Enums

```
import Enum from "enum-xyz";

const { blue, red } = Enum.Symbol();

console.log(blue); // Outputs: Symbol(blue)
console.log(red);  // Outputs: Symbol(red)
```
