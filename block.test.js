const Block = require("./block");
const { GENESIS_DATA } = require("./config");
const genData = GENESIS_DATA;
const cryptoHash = require("./crypto-hash");

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
  describe("mineBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "mined data";
    const minedBlock = Block.mineBlock({ lastBlock, data });
    it("returns a Block instance", () => {
      expect(minedBlock instanceof Block).toBe(true);
    });
    it("sets the `lastHash` to be the `hash` of the lastBlock", () => {
      expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });
    it("sets the `data`", () => {
      expect(minedBlock.data).toEqual(data);
    });
    it("sets a `timestamp`", () => {
      expect(minedBlock.timestamp).not.toEqual(undefined);
    });
    it("creates a SHA512 `hash`", () => {
      expect(minedBlock.hash).toEqual(
        cryptoHash(minedBlock.timestamp, lastBlock.hash, data)
      );
    });
  });
});
