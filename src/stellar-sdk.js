"use strict"

const { isBrowser, nodeRequire } = require("@kisbox/helpers/compat/environment")

if (isBrowser) {
  if (window.StellarSdk === undefined)
    console.error("Missing dependency: StellarSdk")
  else module.exports = window.StellarSdk
} else {
  module.exports = nodeRequire("stellar-sdk")
}
