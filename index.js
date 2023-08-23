function toCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/([-_]\w)/g, g => g[1].toUpperCase());
}

function toPascalCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/([-_]\w)/g, g => g[1].toUpperCase());
}

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/^-/, ''); // Remove leading hyphen if present
}

function toSnakeCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase();
}

const createEnum = (type, options = {}) => {
  let currentIndex = options.startIndex || 0;

  const transformValue = (value) => {
    // Apply prefix and suffix
    value = (options.prefix || '') + value + (options.suffix || '');

    // Apply casing transformations
    switch (options.casing) {
      case 'lowercase':
        value = value.toLowerCase();
        break;
      case 'uppercase':
        value = value.toUpperCase();
        break;
      case 'camelCase':
        value = toCamelCase(value);
        break;
      case 'PascalCase':
        value = toPascalCase(value);
        break;
      case 'kebabCase':
        value = toKebabCase(value);
        break;
      case 'snakeCase':
        value = toSnakeCase(value);
        break;
    }

    // Apply custom transform function if provided
    if (options.transform && typeof options.transform === 'function') {
      value = options.transform(value);
    }

    return value;
  };

  const handler = {
    get(_, name) {
      if (type === 'String') {
        return transformValue(name);
      }
      if (type === 'Numeric') {
        const current = currentIndex;
        currentIndex += options.step || 1;
        return current;
      }
      if (type === 'Symbol') {
        return options.global ? Symbol.for(name) : Symbol(name);
      }
      // For grouping, return another proxy
      return new Proxy({}, handler);
    }
  };

  return new Proxy({}, handler);
}

export default {
  String: (options) => createEnum('String', options),
  Numeric: (options = {}) => createEnum('Numeric', options),
  Symbol: (options = {}) => createEnum('Symbol', options)
}
