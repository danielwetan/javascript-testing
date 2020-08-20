const request = require('./index');

describe('Testing expection', () => {
  test('Should return error', () => {
    expect(request).toThrow('url empty')
  })

  test('Should return success', () => {
    expect(request('https://google.com')).toBe('success')
  })
})