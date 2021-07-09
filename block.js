class Block{
    constructor({timestamp,lastHash,hash,data}){
    this.timestamp = timestamp;
    this.hash = hash;
    this.lastHash = lastHash;
    this.data = data;
    }
}
module.exports = Block;