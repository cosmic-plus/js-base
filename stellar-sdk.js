'use_strict'

const env = require('@cosmic-plus/jsutils/env')

if (env.isBrowser) {
  if (StellarSdk === undefined) console.error('Missing dependency: StellarSdk')
  else module.exports = StellarSdk
} else {
  module.exports = env.nodeRequire('stellar-sdk')
}
