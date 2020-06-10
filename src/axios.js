"use_stict"

const { isBrowser, nodeRequire } = require("@kisbox/helpers/compat/environment")

if (isBrowser) {
  module.exports = require("./stellar-sdk").axios
} else {
  module.exports = nodeRequire("axios")
}
