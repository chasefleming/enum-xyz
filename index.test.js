import Enum from './index'

test('creates enum and assigns strings', () => {
  const { Summer, Autumn, Winter, Spring } = Enum.String

  expect(Summer).toEqual('Summer')
  expect(Autumn).toEqual('Autumn')
  expect(Winter).toEqual('Winter')
  expect(Spring).toEqual('Spring')
})

test('creates enum and assigns strings', () => {
  const { Summer, Autumn, Winter, Spring } = Enum.StringLower

  expect(Summer).toEqual('summer')
  expect(Autumn).toEqual('autumn')
  expect(Winter).toEqual('winter')
  expect(Spring).toEqual('spring')
})

test('creates enum and assigns numeric value', () => {
  const { A, B, C, D } = Enum.Numeric

  expect(A).toBe(0)
  expect(B).toBe(1)
  expect(C).toBe(2)
  expect(D).toBe(3)
})

test('creates enum and assigns numeric value starting at index of choice', () => {
  const { A, B, C, D } = Enum.NumericAt(1)

  expect(A).toBe(1)
  expect(B).toBe(2)
  expect(C).toBe(3)
  expect(D).toBe(4)
})

test('creates enum and assigns symbol values', () => {
  const { blue, red } = Enum.Symbol
  const { blue: blueMood, happy } = Enum.Symbol

  expect(blue).toBe(blue)
  expect(blue).not.toBe(red)
  expect(blue).not.toBe(blueMood)
  expect(blue).not.toBe('blue')
  expect(blue).not.toBe(Symbol('blue'))
})