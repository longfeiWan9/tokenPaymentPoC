require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const WalletPK = process.env.PRIVATE_KEY;
const WalletPK2 = process.env.PRIVATE_KEY_2;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "Calibration",
  networks: {
    Calibration: {
      chainId: 314159,
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [WalletPK,WalletPK2]
    }
  }
};
