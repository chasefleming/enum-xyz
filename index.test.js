import Enum from './index'

describe('String Enums', () => {
  test('creates enum and assigns strings', () => {
    const { Summer, Autumn, Winter, Spring } = Enum.String()
  
    expect(Summer).toEqual('Summer')
    expect(Autumn).toEqual('Autumn')
    expect(Winter).toEqual('Winter')
    expect(Spring).toEqual('Spring')
  })

  test('creates enum with lowercase casing', () => {
    const { Summer, Autumn, Winter, Spring } = Enum.String({ casing: "lowercase" })
  
    expect(Summer).toEqual('summer')
    expect(Autumn).toEqual('autumn')
    expect(Winter).toEqual('winter')
    expect(Spring).toEqual('spring')
  })
  
  test('creates enum with uppercase casing', () => {
    const { Summer, Autumn, Winter, Spring } = Enum.String({ casing: "uppercase" })
  
    expect(Summer).toEqual('SUMMER')
    expect(Autumn).toEqual('AUTUMN')
    expect(Winter).toEqual('WINTER')
    expect(Spring).toEqual('SPRING')
  })

  test('creates enum with snakeCase casing', () => {
    const { userId, userAddress, orderNumber } = Enum.String({ casing: 'snakeCase' })
  
    expect(userId).toEqual('user_id')
    expect(userAddress).toEqual('user_address')
    expect(orderNumber).toEqual('order_number')
  })
  
  test('creates enum with camelCase casing', () => {
    const { User_Id, User_Address, Order_Number } = Enum.String({ casing: 'camelCase' })
  
    expect(User_Id).toEqual('userId')
    expect(User_Address).toEqual('userAddress')
    expect(Order_Number).toEqual('orderNumber')
  })
  
  test('creates enum with PascalCase casing', () => {
    const { user_id, user_address, order_number } = Enum.String({ casing: 'PascalCase' })
  
    expect(user_id).toEqual('UserId')
    expect(user_address).toEqual('UserAddress')
    expect(order_number).toEqual('OrderNumber')
  })
  
  test('creates enum with kebabCase casing', () => {
    const { UserId, UserAddress, OrderNumber } = Enum.String({ casing: 'kebabCase' })
  
    expect(UserId).toEqual('user-id')
    expect(UserAddress).toEqual('user-address')
    expect(OrderNumber).toEqual('order-number')
  })
  
  test('creates enum with prefix', () => {
    const { Summer, Winter } = Enum.String({ prefix: 'Season_' });
  
    expect(Summer).toEqual('Season_Summer');
    expect(Winter).toEqual('Season_Winter');
  });
  
  test('creates enum with suffix', () => {
    const { Summer, Winter } = Enum.String({ suffix: '_Season' });
  
    expect(Summer).toEqual('Summer_Season');
    expect(Winter).toEqual('Winter_Season');
  });
  
  test('creates enum with both prefix and suffix', () => {
    const { Summer, Winter } = Enum.String({ prefix: 'Season_', suffix: '_Time' });
  
    expect(Summer).toEqual('Season_Summer_Time');
    expect(Winter).toEqual('Season_Winter_Time');
  });
  
  test('creates enum with transform function', () => {
    const transformFn = (value) => `Transformed_${value}`;
    const { Summer, Winter } = Enum.String({ transform: transformFn });
  
    expect(Summer).toEqual('Transformed_Summer');
    expect(Winter).toEqual('Transformed_Winter');
  });
  
  test('creates enum with transform function and casing', () => {
    const transformFn = (value) => `Transformed_${value}`;
    const { summer_time, winter_time } = Enum.String({ transform: transformFn, casing: 'PascalCase' });
  
    expect(summer_time).toEqual('Transformed_SummerTime');
    expect(winter_time).toEqual('Transformed_WinterTime');
  });
});

describe('Numeric Enums', () => {
  test('creates enum and assigns numeric value', () => {
    const { A, B, C, D } = Enum.Numeric()
  
    expect(A).toBe(0)
    expect(B).toBe(1)
    expect(C).toBe(2)
    expect(D).toBe(3)
  })
  
  test('creates enum and assigns numeric value starting at index of choice', () => {
    const { A, B, C, D } = Enum.Numeric({ startIndex: 1 })
  
    expect(A).toBe(1)
    expect(B).toBe(2)
    expect(C).toBe(3)
    expect(D).toBe(4)
  })
  
  test('creates enum and assigns numeric value with a specific step', () => {
    const { A, B, C, D } = Enum.Numeric({ startIndex: 0, step: 5 });
  
    expect(A).toBe(0);
    expect(B).toBe(5);
    expect(C).toBe(10);
    expect(D).toBe(15);
  });
  
  test('ensures numeric enums are stateless and start from the first accessed key', () => {
    const { B, A, C } = Enum.Numeric()
    const { D, E } = Enum.Numeric()
    const { F, G } = Enum.Numeric({ startIndex: 5 })
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
})

describe('Symbol Enums', () => {
  test('creates enum and assigns symbol values', () => {
    const { blue, red } = Enum.Symbol()
    const { blue: blueMood, happy } = Enum.Symbol()
  
    expect(blue).toBe(blue)
    expect(blue).not.toBe(red)
    expect(blue).not.toBe(blueMood)
    expect(blue).not.toBe('blue')
    expect(blue).not.toBe(Symbol('blue'))
  })
  
  test('creates global symbol values', () => {
    const { globalBlue, globalRed } = Enum.Symbol({ global: true });
    const { globalBlue: anotherGlobalBlue } = Enum.Symbol({ global: true });
  
    expect(globalBlue).toBe(globalBlue);
    expect(globalBlue).toBe(anotherGlobalBlue); // Both should reference the same global symbol
    expect(globalBlue).not.toBe(globalRed);
    expect(globalBlue).not.toBe('globalBlue');
    expect(globalBlue).toBe(Symbol.for('globalBlue')); // Should match the global symbol
  })
})
