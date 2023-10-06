import { ethers, network } from "hardhat";
import {
  encryptDataField,
  decryptNodeResponse,
} from "@swisstronik/swisstronik.js";
import { HttpNetworkConfig } from "hardhat/types";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";

const sendShieldedTransaction = async (
  signer: HardhatEthersSigner,
  destination: string,
  data: string,
  value: number
) => {
  // Get the RPC link from the network configuration
  const rpclink = (network.config as HttpNetworkConfig).url;

  // Encrypt transaction data
  const [encryptedData] = await encryptDataField(rpclink, data);

  // Construct and sign transaction with encrypted data
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
  // Deployed contract address
  const challenge = "0x855700B68E600cd5633CE1380568666a6FbD2cca";
  const contractFactory = await ethers.getContractAt(
    "ISetChallenge",
    challenge
  );

  // Get the signer (your account)
  const [signer] = await ethers.getSigners();

  // Send a shielded transaction to set a message in the contract
  const setNewChallenge = await sendShieldedTransaction(
    signer,
    challenge,
    contractFactory.interface.encodeFunctionData("setNewChallenge", [
      "NewChallenge$$$",
    ]),
    0
  );
  await setNewChallenge.wait();

  //It should return a TransactionResponse object
  console.log("Tx Receipt: ", setNewChallenge);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
