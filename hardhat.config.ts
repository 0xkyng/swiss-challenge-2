import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configDotenv } from "dotenv";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_RPC,
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      //@ts-ignore
      accounts: [process.env.PRIVATEKEY], //Your private key starting with "0x"
    },
  },
  etherscan: {
    apiKey: process.env.MUMBAI_API_KEY,
  },
};

export default config;
