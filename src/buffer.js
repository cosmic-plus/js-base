"use strict"

const { isBrowser, nodeRequire } = require("@kisbox/helpers/compat/environment")

if (isBrowser) {
  const StellarSdk = require("./stellar-sdk")
  const hash =
    "0000000000000000000000000000000000000000000000000000000000000000"
  const memo = new StellarSdk.Memo("hash", hash)
  module.exports = memo.value.__proto__.constructor
} else {
  module.exports = nodeRequire("safe-buffer").Buffer
}
