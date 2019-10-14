"use strict"

const env = require("@cosmic-plus/jsutils/es5/env")

if (env.isBrowser) {
  if (window.StellarSdk === undefined)
    console.error("Missing dependency: StellarSdk")
  else module.exports = window.StellarSdk
} else {
  module.exports = env.nodeRequire("stellar-sdk")
}
