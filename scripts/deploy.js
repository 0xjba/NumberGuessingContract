const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const ownerAddress = await deployer.getAddress();
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unnumberGuessingGameTime = currentTimestampInSeconds + 60;

  const NumberGuessingGame = await ethers.getContractFactory("NumberGuessingGame");
  const numberGuessingGame = await NumberGuessingGame.deploy("0xC04Bc14B1AB0b5fd323CA3A7CdC59434999Dce3e", ownerAddress);

  await numberGuessingGame.waitForDeployment();

  console.log(
    `Number GuessingGame Deployed to ${numberGuessingGame.target} at ${unnumberGuessingGameTime}'
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
