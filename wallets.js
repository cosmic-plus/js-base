"use_strict"
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
  protocol: "ledgerwallet"
}

wallets.Sep7Wallet = {
  name: "Sep-0007 Wallet",
  protocol: "sep0007",
  url: "web+stellar:tx/"
}

wallets.StellarLaboratory = {
  name: "Stellar Laboratory",
  protocol: "stellarlab",
  url: "https://stellar.org/laboratory/#txsigner"
}

wallets.CopyPasteXdr = {
  name: "Copy/Paste XDR",
  protocol: "copy"
}
