# enum-xyz

JavaScript enums using proxies.

> Based on [this tweet](https://twitter.com/2ality/status/1486139713354448897)

[![ENUM-XYZ Continuous Integration](https://github.com/chasefleming/enum-xyz/actions/workflows/integrate.yml/badge.svg)](https://github.com/chasefleming/enum-xyz/actions/workflows/integrate.yml)

## Install

```
$ npm install enum-xyz --save
```

## Usage

### Strings

```
import Enum from 'enum-xyz'

const { Summer, Autumn, Winter, Spring } = Enum.String

console.log(Summer) // 'Summer'
console.log(Autumn) // 'Autumn'
console.log(Winter) // 'Winter'
console.log(Spring) // 'Spring'
```

### Strings (lowercased)

```
import Enum from 'enum-xyz'

const { Summer, Autumn, Winter, Spring } = Enum.StringLower

console.log(Summer) // 'summer'
console.log(Autumn) // 'autumn'
console.log(Winter) // 'winter'
console.log(Spring) // 'spring'
```

### Numerics

```
import Enum from 'enum-xyz'

const { A, B, C, D } = Enum.Numeric

console.log(A) // 0
console.log(B) // 1
console.log(C) // 2
console.log(D) // 3
```

### Numerics Starting at Index

```
import Enum from 'enum-xyz'

const { A, B, C, D } = Enum.NumericAt(1)

console.log(A) // 1
console.log(B) // 2
console.log(C) // 3
console.log(D) // 4
```

### Symbols

```
import Enum from 'enum-xyz'

const { blue, red } = Enum.Symbol

console.log(blue) // Symbol(blue) 
console.log(red) // Symbol(red)
```
