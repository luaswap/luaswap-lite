import ERC20 from "@sushiswap/core/build/abi/ERC20.json";
import IUniswapV2Factory from "@sushiswap/core/build/abi/IUniswapV2Factory.json";
import IUniswapV2Pair from "@sushiswap/core/build/abi/IUniswapV2Pair.json";
import IUniswapV2Router02 from "@sushiswap/core/build/abi/IUniswapV2Router02.json";
import IWETH from "@sushiswap/core/build/abi/IWETH.json";
import MasterChef from "@sushiswap/core/build/abi/MasterChef.json";
import SushiBar from "@sushiswap/core/build/abi/SushiBar.json";
import SushiRoll from "@sushiswap/core/build/abi/SushiRoll.json";
import OrderBook from "../constants/deployments/kovan/OrderBook.json";
import Settlement from "../constants/deployments/mainnet/Settlement.json";
import ZapIn from "@sushiswap/zapper/artifacts/Sushiswap_ZapIn_General_V2.json";
import ZapOut from "@sushiswap/zapper/artifacts/Sushiswap_ZapOut_General_V1.json";
import { ethers } from "ethers";
import LPTokenScanner from "../constants/abi/LPTokenScanner.json";

const CONTRACTS = {
    ERC20: { abi: ERC20 },
    IUniswapV2Factory: { abi: IUniswapV2Factory },
    IUniswapV2Pair: { abi: IUniswapV2Pair },
    IUniswapV2Router02: { abi: IUniswapV2Router02 },
    IWETH: { abi: IWETH },
    MasterChef: { abi: MasterChef },
    SushiBar : { abi: SushiBar },
    SushiRoll: { abi: SushiRoll },
    OrderBook,
    Settlement,
    LPTokenScanner: { abi: LPTokenScanner },
    ZapIn,
    ZapOut
};

const getContract = (name: string, address: string, signerOrProvider: ethers.Signer | ethers.providers.Provider) => {
    const contract = CONTRACTS[name];
    return new ethers.Contract(address, contract.abi, signerOrProvider);
};

export default getContract;
