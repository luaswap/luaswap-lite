import { useCallback, useContext } from "react";

import { Currency, CurrencyAmount, Fetcher, Pair, TokenAmount, Trade } from "@luaswap/sdk";
import { ethers } from "ethers";
import { EthersContext } from "../context/EthersContext";
import Token from "../types/Token";
import { convertToken, isNativeToken } from "../utils";
import useAllCommonPairs from "./useAllCommonPairs";

// tslint:disable-next-line:max-func-body-length
const useSDK = () => {
    const { getTotalSupply } = useContext(EthersContext);
    const { loadAllCommonPairs } = useAllCommonPairs();

    const getTrade = useCallback(
        async (
            fromToken: Token,
            toToken: Token,
            fromAmount: ethers.BigNumber,
            provider: ethers.providers.BaseProvider
        ) => {
            if (provider) {
                const eth = isNativeToken(fromToken);
                const from = convertToken(fromToken);
                const to = isNativeToken(toToken) ? Currency.TOMO : convertToken(toToken);
                
                const pairs = await loadAllCommonPairs(from, to, provider);
                const amount = eth
                    ? CurrencyAmount.tomo(fromAmount.toString())
                    : new TokenAmount(from, fromAmount.toString());
                return Trade.bestTradeExactIn(pairs, amount, to, { maxHops: 3, maxNumResults: 1 })[0];
            }
        },
        []
    );

    const getPair = useCallback(async (fromToken: Token, toToken: Token, provider: ethers.providers.BaseProvider) => {
        const from = convertToken(fromToken);
        const to = convertToken(toToken);

        return await Fetcher.fetchPairData(from, to, provider);
    }, []);
    const calculateAmountOfLPTokenMinted = async (pair: Pair, fromAmount: TokenAmount, toAmount: TokenAmount) => {
        const totalSupply = await getTotalSupply(pair.liquidityToken.address);
        if (totalSupply) {
            const minted = pair.getLiquidityMinted(
                new TokenAmount(pair.liquidityToken, totalSupply.toString()),
                fromAmount,
                toAmount
            );
            return ethers.BigNumber.from(minted.raw.toString());
        }
    };

    return {
        getTrade,
        getPair,
        calculateAmountOfLPTokenMinted
    };
};

export default useSDK;
