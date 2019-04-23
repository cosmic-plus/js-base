"use_stict"

const env = require("@cosmic-plus/jsutils/es5/env")

if (env.isBrowser) {
  module.exports = require("./stellar-sdk").axios
} else {
  module.exports = env.nodeRequire("axios")
}
