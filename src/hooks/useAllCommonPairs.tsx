import { useCallback } from "react";

import { ChainId, Currency, TOMO, Fetcher, Pair, Token, WETH } from "@luaswap/sdk";
import { ethers } from "ethers";

const WBTC = new Token(ChainId.TOMOCHAIN_MAINNET, "0xAE44807D8A9CE4B30146437474Ed6fAAAFa1B809", 8, "WBTC", "Wrapped BTC");
const ETH = new Token(ChainId.TOMOCHAIN_MAINNET, "0x2EAA73Bd0db20c64f53fEbeA7b5F5E5Bccc7fb8b", 18, "ETH", "Wrapped ETH");
const USDT = new Token(ChainId.TOMOCHAIN_MAINNET, "0x381B31409e4D220919B2cFF012ED94d70135A59e", 6, "USDT", "Tether USD");
const LUA = new Token(ChainId.TOMOCHAIN_MAINNET, '0x7262fa193e9590b2e075c3c16170f3f2f32f5c74', 18, "LUA", "LuaToken")

const BASES_TO_CHECK_TRADES_AGAINST = [WETH[ChainId.TOMOCHAIN_MAINNET], ETH, USDT, LUA];
const CUSTOM_BASES = {};

function wrappedCurrency(currency: Currency | undefined): Token | undefined {
    return currency === TOMO ? WETH[ChainId.TOMOCHAIN_MAINNET] : currency instanceof Token ? currency : undefined;
}

// Source: https://github.com/Uniswap/uniswap-interface/blob/master/src/hooks/Trades.ts
const useAllCommonPairs = () => {
    const loadAllCommonPairs = useCallback(
        // tslint:disable-next-line:max-func-body-length
        async (currencyA?: Currency, currencyB?: Currency, provider?: ethers.providers.BaseProvider) => {
            const bases: Token[] = BASES_TO_CHECK_TRADES_AGAINST;
            const [tokenA, tokenB] = [wrappedCurrency(currencyA), wrappedCurrency(currencyB)];
            const basePairs: [Token, Token][] = bases
                .flatMap((base): [Token, Token][] => bases.map(otherBase => [base, otherBase]))
                .filter(([t0, t1]) => t0.address !== t1.address);

            const allPairCombinations =
                tokenA && tokenB
                    ? [
                          // the direct pair
                          [tokenA, tokenB],
                          // token A against all bases
                          ...bases.map((base): [Token, Token] => [tokenA, base]),
                          // token B against all bases
                          ...bases.map((base): [Token, Token] => [tokenB, base]),
                          // each base against all bases
                          ...basePairs
                      ]
                          .filter((tokens): tokens is [Token, Token] => Boolean(tokens[0] && tokens[1]))
                          .filter(([t0, t1]) => t0.address !== t1.address)
                          .filter(([a, b]) => {
                              const customBases = CUSTOM_BASES;
                              if (!customBases) return true;

                              const customBasesA: Token[] | undefined = customBases[a.address];
                              const customBasesB: Token[] | undefined = customBases[b.address];

                              if (!customBasesA && !customBasesB) return true;

                              if (customBasesA && !customBasesA.find(base => tokenB.equals(base))) return false;
                              return !(customBasesB && !customBasesB.find(base => tokenA.equals(base)));
                          })
                    : [];

            const pairs = await Promise.all(
                allPairCombinations.map(async pair => {
                    try {
                        return await Fetcher.fetchPairData(pair[0], pair[1], provider);
                    } catch (e) {
                        return null;
                    }
                })
            );
            return pairs.filter(pair => pair !== null) as Pair[];
        },
        []
    );

    return { loadAllCommonPairs };
};

export default useAllCommonPairs;
