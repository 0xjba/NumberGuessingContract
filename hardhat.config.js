require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
   
    hardhat: {
      gas: 'auto',
      gasPrice: 'auto',
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/01228a1a14684cad8ba90a89c7d08d96`,
      accounts: ['4f81556f880c060b7863252ed423df9506f8a4887ef8f5edf89ecfd3ae34b748']
    },
    obscuro: {
      url: "https://testnet.ten.xyz/v1/?token=eb3a9365ab669f376269931140b6a4d9acaeca0b",
      accounts: ["4f81556f880c060b7863252ed423df9506f8a4887ef8f5edf89ecfd3ae34b748"],
      useGateway:false,
    },
    baseGoerli: {
      url: "https://goerli.infura.io/v3/01228a1a14684cad8ba90a89c7d08d96",
      accounts: ["4f81556f880c060b7863252ed423df9506f8a4887ef8f5edf89ecfd3ae34b748"],
    },
  },
  etherscan: {
    apiKey: "D6A34JPYNRD15KSHGCUVPPIC1UWEJ8X4SI",
  },
};
