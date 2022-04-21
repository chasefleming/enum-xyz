const String = new Proxy({}, {
  get: (_, name) => name
})

const StringLower = new Proxy({}, {
  get: (_, name) => name.toLowerCase()
})

const NumericAt = (startIndex) => {
  const arr = [...Array(startIndex).keys()]
  
  return new Proxy({}, {
    get: (_, name) => {
      arr.push(name)
      return arr.indexOf(name)
    }
  })
}

const Numeric = (() => NumericAt(0))()

const Enum = { String, StringLower, Numeric, NumericAt }
export { Enum as default, String, StringLower, Numeric, NumericAt }