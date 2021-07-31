const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  it("generates a SHA512 hashed output ", () => {
    expect(cryptoHash("foo")).toEqual(
      "f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7"
    );
  });
  it("produces the same hash with the same input", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "two", "one")
    );
  });
});