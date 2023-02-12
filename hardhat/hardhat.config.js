require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_POLYGON_MUMBAI = process.env.ALCHEMY_POLYGON_MUMBAI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: ALCHEMY_POLYGON_MUMBAI,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: POLYGON_API_KEY // https://mumbai.polygonscan.com/address/0x6Fc7aB242fbDAa6673C7814fD7f3210610FDbfB8#code
  }
};
