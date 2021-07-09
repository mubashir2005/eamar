const { GENESIS_DATA } = require("./config.js");
class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.hash = hash;
    this.lastHash = lastHash;
    this.data = data;
  }
  static genesis() {
    return new Block(GENESIS_DATA);
  }
}
module.exports = Block;
