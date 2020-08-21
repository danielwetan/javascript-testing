const { sumSync, sumAsync } = require("./callback-example");

describe("Callback Test", () => {
  test("Sum Sync", () => {
    const mockCb = jest.fn(val => val + " %")
    const result = sumSync(10, 5, mockCb)
    expect(mockCb).toHaveBeenCalled()
    expect(result).toBe("15 %")
  })

  test("Sum async", (done) => {
    const mockCb = jest.fn(val => val + " %")
    sumAsync(10, 5, result => {
      expect(mockCb(result)).toBe("15 %")
      expect(mockCb).toHaveBeenCalled()
      done()
    })
  })
})