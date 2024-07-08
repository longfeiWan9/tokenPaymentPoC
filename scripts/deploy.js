// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
require('dotenv').config();
const { ethers }= require("hardhat");
const wfilAddress = process.env.WFIL_CONTRACT_ADDRESSS;

async function main() {
  const account = (await ethers.getSigners())[0];
  const deployerAddress = await account.getAddress();

  console.log("Deploying PaymentContract.sol...");
  console.log("Owner address is:", deployerAddress);
  console.log("Payment Token is:", wfilAddress);

  const contractFactory = await ethers.getContractFactory("PaymentContract");
  const instance = await contractFactory.deploy(wfilAddress,account);

  await instance.waitForDeployment();
  await instance.deploymentTransaction()?.wait(1);

  console.log("PaymentContract deployed to:", instance.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
