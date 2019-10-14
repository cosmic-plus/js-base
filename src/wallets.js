"use strict"
/**
 * Wallets & signing methods that accept arbitrary transactions as input.
 */

const wallets = exports

wallets.StellarAuthenticator = {
  name: "Stellar Authenticator",
  protocol: "cosmiclink",
  url: "https://stellar-authenticator.org/"
}

wallets.LedgerWallet = {
  name: "Ledger Wallet",
  protocol: "ledgerwallet",
  needSource: true,
  needNetwork: true
}

wallets.TrezorWallet = {
  name: "Trezor Wallet (beta)",
  protocol: "trezorwallet",
  needSource: true,
  needNetwork: true
}

wallets.Sep7Wallet = {
  name: "Sep-0007 Wallet",
  protocol: "sep0007",
  url: "web+stellar:tx/",
  target: "external",
  needSource: true,
  needNetwork: true
}

wallets.StellarLaboratory = {
  name: "Stellar Laboratory",
  protocol: "stellarlab",
  url: "https://stellar.org/laboratory/#txsigner",
  target: "new",
  needSource: true,
  needNetwork: true
}

wallets.CopyPasteXdr = {
  name: "Copy/Paste XDR",
  protocol: "copy",
  needSource: true,
  needNetwork: true
}
