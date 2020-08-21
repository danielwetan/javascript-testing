jest.mock("node-fetch")
const getPost = require("./index")

describe("Async Testing", () => {
  const expectedValue = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  test("Works with promise", () => {
    expect.assertions(1) // expect function dipanggil 1 kali
    return getPost(1).then(data => {
      expect(data).toEqual(expectedValue)
    })
  })

  test("Works with async/await", async () => {
    const result = await getPost(1) // Tunggu eksekusi selesai, baru lanjut ke step berikutnya
    expect(result).toEqual(expectedValue)
  })

})