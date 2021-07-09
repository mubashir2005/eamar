const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const genData = GENESIS_DATA;
describe("Block", () => {
  const timestamp = "foo-time";
  const lastHash = "last-foo";
  const hash = "foo-hash";
  const data = ["blockchain", "data"];
  const block = new Block({
    timestamp,
    hash,
    lastHash,
    data,
  });
  it("has a timestamp,lastHash,hash and data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.hash).toEqual(hash);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.data).toEqual(data);
  });
  describe("genesis()", () => {
    const genesisBlock = Block.genesis();
    it("returns a Block instance", () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });
    it("returns the genisis data", () => {
      expect(genesisBlock).toEqual(genData);
    });
  });
});
