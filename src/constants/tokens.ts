import { ethers } from "ethers";
import Token from "../types/Token";

// export const ETH: Token = {
//     name: "Ethereum",
//     address: ethers.constants.AddressZero,
//     decimals: 18,
//     symbol: "ETH",
//     logoURI: "https://lite.sushi.com/images/tokens/ETH.png",
//     balance: ethers.BigNumber.from(0)
// };

export const TOMO: Token = {
    name: "TomoChain",
    address: ethers.constants.AddressZero,
    decimals: 18,
    symbol: "TOMO",
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa/logo.png",
    balance: ethers.BigNumber.from(0)
};

// export const BNB: Token = {
//     name: "Binance Coin",
//     address: ethers.constants.AddressZero,
//     decimals: 18,
//     symbol: "BNB",
//     logoURI: "https://lite.sushi.com/images/tokens/ETH.png",
//     balance: ethers.BigNumber.from(0)
// };
