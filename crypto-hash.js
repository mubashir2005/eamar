const crypto = require("crypto");

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash("sha512");
  hash.update(inputs.sort().join(" "));
  return hash.digest("hex");
};
module.exports = cryptoHash;