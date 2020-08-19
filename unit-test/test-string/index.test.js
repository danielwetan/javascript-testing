const greet = require('./index');

describe('Testing String', () => {

  test('Should return hello capitalize', () => {
    expect(greet('bambang')).toBe('Hello, Bambang');
    expect(greet('BAMBANG')).toBe('Hello, Bambang');
    expect(greet('bAmBaNG')).toBe('Hello, Bambang');
    expect(greet('john Doe')).toBe('Hello, John');
  })

  test('Should return hello stranger', () => {
    expect(greet()).toBe('Hello, Stranger');
    expect(greet('')).toBe('Hello, Stranger');
  })

  test('Should return wrong name', () => {
    expect(greet(1234)).toBe('Wrong Name');
  })

})