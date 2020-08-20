const sum = require('./index');

const mySum = (a, b) => {
  return a + b
}
const mockSum = jest.fn(mySum)

// Menggabung test case menjadi satu kategory
describe('Testing Number', () => {

  test('test #1', () => {
    expect(mockSum(2, 3)).toBe(5)
  });

  test('test #2', () => {
    expect(sum(2, 3)).toBeGreaterThan(3)
  });

  test('test #3', () => {
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
  });

  test('test #4', () => {
    expect(sum(2, 3)).toBeLessThan(6)
  });

  test('test #5', () => {
    expect(sum(2, 3)).toBeLessThanOrEqual(5)
  });

})

