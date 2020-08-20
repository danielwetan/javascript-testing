const { isEven, isOdd } = require('./index')

describe('Even & Odd Number', () => {
  test('Should return true if number even', () => {
    const result = isEven(2)
    expect(result).toBeTruthy()
    expect(result).not.toBeFalsy()
  })

  test('Should return true if number odd', () => {
    const result = isOdd(5)
    expect(result).toBeTruthy()
    expect(result).not.toBeFalsy()
  })


})