# Xenum

JavaScript enums using proxies.

> Based on [this tweet](https://twitter.com/2ality/status/1486139713354448897)

## Install

```
$ npm install xenum --save
```

## Usage

### Constants

```
const Xenum = require('./index')

const { Up, Down } = Xenum.Constant

console.log(Up) // Up
console.log(Down) // Down
```

### Strings

```
const Xenum = require('./index')

const { Summer, Autumn, Winter, Spring } = Xenum.String

console.log(Summer) // 'Summer'
console.log(Autumn) // 'Autumn'
console.log(Winter) // 'Winter'
console.log(Spring) // 'Spring'
```

### Strings (lowercased)

```
const Xenum = require('./index')

const { Summer, Autumn, Winter, Spring } = Xenum.StringLower

console.log(Summer) // 'summer'
console.log(Autumn) // 'autumn'
console.log(Winter) // 'winter'
console.log(Spring) // 'spring'
```

### Numeric

```
const Xenum = require('./index')

const { A, B, C, D } = Xenum.String

console.log(A) // 0
console.log(B) // 1
console.log(C) // 2
console.log(D) // 3
```

### Numeric Starting at Index

```
const Xenum = require('./index')

const { A, B, C, D } = Xenum.NumericAt(1)

console.log(A) // 1
console.log(B) // 2
console.log(C) // 4
console.log(D) // 4
```