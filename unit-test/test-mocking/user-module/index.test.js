const getUser = require('./index')
jest.mock('./request.js')
jest.mock('lodash');

describe('Test get user', () => {
  const expectedValue = { id: 1, name: 'Mock 1' }
  test('Should return user 1', () => {
    expect(getUser()).toEqual(expectedValue)
    // .toBe => string
    // .toEqual => object
  })
})