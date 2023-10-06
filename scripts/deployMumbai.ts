import { ethers } from "hardhat";

async function main() {
  const createChallenge = await ethers.deployContract("Challenge", [
    "SwisstronikChallenge-2",
  ]);

  await createChallenge.waitForDeployment();

  console.log(
    `createChallenge Contract deployed to ${createChallenge.target} on Mumbai`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
