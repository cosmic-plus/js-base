**base /**
[Readme](https://cosmic.plus/#view:js-base)
• [Contributing](https://cosmic.plus/#view:js-base/CONTRIBUTING)
• [Changelog](https://cosmic.plus/#view:js-base/CHANGELOG)

# Readme

![Licence](https://img.shields.io/github/license/cosmic-plus/js-base.svg)
[![Dependencies](https://badgen.net/david/dep/cosmic-plus/js-base)](https://david-dm.org/cosmic-plus/js-base)
![Vulnerabilities](https://snyk.io/test/npm/@cosmic-plus/base/badge.svg)
![Downloads](https://badgen.net/npm/dt/@cosmic-plus/base)
![Bundle](https://badgen.net/badgesize/gzip/cosmic-plus/js-base-web/master/base.js?label=bundle)

This package contains various modules related to Stellar on which higher-level
cosmic-plus libraries depends.

_Note:_ This is an internal library and may be modified in
compatibility-breaking ways.

## Install & Import

- **Npm** `npm install @cosmic-plus/base`
- **Yarn** `yarn add @cosmic-plus/base`

Then: `const { $module, ... } = require("@cosmic-plus/base")`

To pick a module: `const $module = require("@cosmic-plus/base/es5/$module")`

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

## Links

**Organization:** [Cosmic.plus](https://cosmic.plus/) | [@GitHub](https://git.cosmic.plus) | [@NPM](https://www.npmjs.com/search?q=cosmic-plus)

**Follow:** [Reddit](https://reddit.com/r/cosmic_plus) | [Twitter](https://twitter.com/cosmic_plus) | [Medium](https://medium.com/cosmic-plus) | [Codepen](https://codepen.io/cosmic-plus)

**Talk:** [Telegram](https://t.me/cosmic_plus) | [Keybase](https://keybase.io/team/cosmic_plus)
