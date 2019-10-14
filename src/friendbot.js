"use strict"

const axios = require("./axios")

module.exports = function (publicKey) {
  return axios("https://friendbot.stellar.org/?addr=" + publicKey)
}
