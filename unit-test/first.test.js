/*
 Format test:
 test(test name), () => {
  expect(value).toBe(expectedValue)
 }
*/

const hello = () => {
  return "Hello Testing"
}

test("first test", () => {
  expect(hello()).toBe("Hello Testing")
})