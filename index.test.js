import Enum from './index'

test('creates enum and assigns strings', () => {
  const { Summer, Autumn, Winter, Spring } = Enum.String()

  expect(Summer).toEqual('Summer')
  expect(Autumn).toEqual('Autumn')
  expect(Winter).toEqual('Winter')
  expect(Spring).toEqual('Spring')
})

test('creates enum and assigns numeric value', () => {
  const { A, B, C, D } = Enum.Numeric()

  expect(A).toBe(0)
  expect(B).toBe(1)
  expect(C).toBe(2)
  expect(D).toBe(3)
})

test('creates enum and assigns numeric value starting at index of choice', () => {
  const { A, B, C, D } = Enum.Numeric(1)

  expect(A).toBe(1)
  expect(B).toBe(2)
  expect(C).toBe(3)
  expect(D).toBe(4)
})

test('ensures numeric enums are stateless and start from the first accessed key', () => {
  const { B, A, C } = Enum.Numeric()
  const { D, E } = Enum.Numeric()
  const { F, G } = Enum.Numeric(5)
  const { H, I } = Enum.Numeric()

  expect(B).toBe(0)
  expect(A).toBe(1)
  expect(C).toBe(2)
  expect(D).toBe(0)
  expect(E).toBe(1)
  expect(F).toBe(5)
  expect(G).toBe(6)
  expect(H).toBe(0)
  expect(I).toBe(1)
})

test('creates enum and assigns symbol values', () => {
  const { blue, red } = Enum.Symbol()
  const { blue: blueMood, happy } = Enum.Symbol()

  expect(blue).toBe(blue)
  expect(blue).not.toBe(red)
  expect(blue).not.toBe(blueMood)
  expect(blue).not.toBe('blue')
  expect(blue).not.toBe(Symbol('blue'))
})