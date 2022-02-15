const String = new Proxy({}, {
  get: (_, name) => name
})

const StringLower = new Proxy({}, {
  get: (_, name) => name.toLowerCase()
})

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

module.exports = {String, StringLower, Numeric, NumericAt}