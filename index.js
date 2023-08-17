const createEnum = (type, startIndex = 0) => {
  let currentIndex = startIndex

  const handler = {
    get(_, name) {
      if (type === 'String') {
        return name
      }
      if (type === 'Numeric') {
        const current = currentIndex
        currentIndex++
        return current
      }
      if (type === 'Symbol') {
        return Symbol(name)
      }
      // For grouping, return another proxy
      return new Proxy({}, handler)
    }
  }

  return new Proxy({}, handler)
}

export default {
  String: () => createEnum('String'),
  Numeric: (startIndex = 0) => createEnum('Numeric', startIndex),
  Symbol: () => createEnum('Symbol')
}