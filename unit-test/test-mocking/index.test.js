const mockFunction = jest.fn()
  .mockReturnValue('hello') // return default
  .mockReturnValueOnce('first call')
  .mockReturnValueOnce('second call')
// Create fake function using jest mock function

describe('Testing mock function', () => {
  test('Testing #1', () => {
    expect(mockFunction()).toBe('first call');
  })
  test('Testing #2', () => {
    expect(mockFunction()).toBe('second call');
  })
  test('Testing #3', () => {
    expect(mockFunction()).toBe('hello');
  })

  // capture calls
  test('should call', () => {
    expect(mockFunction).toHaveBeenCalled()
  })

  test('should calls 3 times', () => {
    expect(mockFunction).toHaveBeenCalledTimes(3)
  })


})


