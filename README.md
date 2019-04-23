# @cosmic-plus/base

This package contains various modules related to Stellar on which higher-level
cosmic-plus libraries depends.

_Note:_ This is an internal library and may be modified in
compatibility-breaking ways.

## Install & Import

- **Npm** `npm install @cosmic-plus/base`
- **Yarn** `yarn add @cosmic-plus/base`

Then: `const { $module, ... } = require("@cosmic-plus/base")`

To pick a module: `const $module = require("@cosmic-plus/base/src/$module")`

## Modules

### Configuration

- `wallets`: A list of wallets that accept arbitrary Stellar transactions as
  input.

### Utils

- `friendbot`: A function that fund a wallet on testnet: `frienbot(publicKey)`.

### Dispatchers

Dispatchers implements different way to load modules depending on whether the
environment is Node.js or browser.

- `axios` Get _Axios_ from StellarSdk when using browser environment to save
  loading time.
- `buffer` Get _Buffer_ from StellarSdk when using browser environment to save
  loading time.
- `stellar-sdk` Get _StellarSdk_ from global environment when using browser
  environment.

## Additional Resources

- GitHub repository: https://github.com/cosmic-plus/node-base
- NPM package: https://npmjs.com/@cosmic-plus/base
- Yarn package: https://yarn.pm/@cosmic-plus/base
