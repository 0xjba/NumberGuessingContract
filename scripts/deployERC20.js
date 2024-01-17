const { network, ethers } = require("hardhat");

async function main() {
  if (network.name !== "obscuro") {
    console.log(network.name);
    console.warn("This needs to be on obscuro");
    process.exit(1);
  }
  const [owner] = await ethers.getSigners();
  console.log(network.name);
  console.log("owner", await owner.getAddress());
  await deployStuff();
}

async function deployStuff() {
  const [deployer] = await ethers.getSigners();
  const ownerAddress = await deployer.getAddress();
  console.log("deployer : ", deployer.address);

  let ercAddress = 0;

  let CUSTOM_ERC20 = await ethers.getContractFactory("customERC20");

  if (ercAddress === 0) {
    console.log("deploy erc on obscuro");
    const token = await CUSTOM_ERC20.deploy('NUOGUESS', 'NGT', ownerAddress);
    const tokenAddress = await token.getAddress();
    console.log(token);
    console.log("erc contract : ", tokenAddress);

    console.log(token.status === 1 ? "success" : "failed");
    // await run("verify:verify", {
    //     address: customERC20.address,
    //     constructorArguments: ['Flute Finance Token', 'FFT']
    // });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
