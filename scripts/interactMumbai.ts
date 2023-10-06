import { ethers } from "hardhat";

async function main() {
  const CA_Address = "0x2c5ac3e6897A02F40bCbBD95aBE949d76ed94748";

  const contract = await ethers.getContractAt("ISetChallenge", CA_Address);

  console.log(">>>>>>Reading storage before changes<<<<<<");
  const slot0 = await ethers.provider.getStorage(
    "0x2c5ac3e6897A02F40bCbBD95aBE949d76ed94748",
    "0x0"
  );
  console.log("slot0: ", slot0);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  console.log(">>>>>>Making storage changes<<<<<<");
  const setCode = await contract.setNewChallenge("NewChallenge");
  setCode.wait();
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

  console.log(">>>>Reading storage with function call<<<<");
  const getChallenge = await contract.getChallenge();
  console.log("getChallenge: ", getChallenge);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
