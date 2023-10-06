import { ethers } from "hardhat";

async function main() {
  const challenge = await ethers.deployContract("Challenge", [
    "SwisstronikChallenge-2",
  ]);

  await challenge.waitForDeployment();

  console.log(
    `challenge Contract deployed to ${challenge.target} on swisstronik`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
