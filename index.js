const Constant = (() => {
  return new Proxy({}, {
    get: (_, name) => name
  })
})()

const StringLower = (() => {
  return new Proxy({}, {
    get: (_, name) => name.toLowerCase()
  })
})()

const Numeric = (() => {
  const arr = []
  
  return new Proxy({}, {
    get: (_, name) => {
      arr.push(name)
      return arr.indexOf(name)
    }
  })
})()

const NumericAt = (startIndex) => {
  const arr = [...Array(startIndex).keys()]
  
  return new Proxy({}, {
    get: (_, name) => {
      arr.push(name)
      return arr.indexOf(name)
    }
  })
}

module.exports = {Constant, String: Constant, StringLower, Numeric, NumericAt}