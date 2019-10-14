"use strict"

const env = require("@cosmic-plus/jsutils/es5/env")

if (env.isBrowser) {
  const StellarSdk = require("./stellar-sdk")
  const hash =
    "0000000000000000000000000000000000000000000000000000000000000000"
  const memo = new StellarSdk.Memo("hash", hash)
  module.exports = memo.value.__proto__.constructor
} else {
  module.exports = env.nodeRequire("safe-buffer").Buffer
}
