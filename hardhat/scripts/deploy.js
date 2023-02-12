const hre = require("hardhat");
require("dotenv").config();

const VRF_SUBSCRIPTION_ID = process.env.VRF_SUBSCRIPTION_ID;

const main = async () => {
  const Contract = await hre.ethers.getContractFactory("SlotMachine");
  const deployedContract = await Contract.deploy(VRF_SUBSCRIPTION_ID, 1);

  await deployedContract.deployed();

  console.log("Slot Machine Contract deployed to:", deployedContract.address);
  // Slot Machine Contract deployed to: 0x6Fc7aB242fbDAa6673C7814fD7f3210610FDbfB8
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
   });
