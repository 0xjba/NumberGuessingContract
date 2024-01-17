require("@nomicfoundation/hardhat-toolbox");
require("ten-hardhat-plugin")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
  networks: {

    hardhat: {
      gas: 'auto',
      gasPrice: 'auto',
    },
    obscuro: {
      url: "https://testnet.ten.xyz/v1/?token=cb96c063e0deeffab90050d67abbb5c8a1929201",
      accounts: ["4f81556f880c060b7863252ed423df9506f8a4887ef8f5edf89ecfd3ae34b748"],
    },
  },
  etherscan: {
    apiKey: "91815f76E9Eb2298d6b49d75b5f7EC80e4Ea1E4B",
  },
};
