import { Fraction as SDKFraction } from "@luaswap/sdk";
import { ethers } from "ethers";
import Token from "../types/Token";
import { formatBalance, isEmptyValue, parseBalance } from "../utils";

class Fraction {
    static BASE = ethers.BigNumber.from(10).pow(18);
    static NAN = new Fraction(ethers.constants.Zero, ethers.constants.Zero);
    static ZERO = new Fraction(ethers.constants.Zero, ethers.constants.One);
    static convert(sdk: SDKFraction) {
        return new Fraction(
            ethers.BigNumber.from(sdk.numerator.toString()),
            ethers.BigNumber.from(sdk.denominator.toString())
        );
    }
    static from(numerator: ethers.BigNumberish, denominator: ethers.BigNumberish) {
        return new Fraction(ethers.BigNumber.from(numerator), ethers.BigNumber.from(denominator));
    }
    static fromTokens(
        numerator: ethers.BigNumberish,
        denominator: ethers.BigNumberish,
        numeratorToken: Token,
        denominatorToken: Token
    ) {
        return new Fraction(
            ethers.BigNumber.from(numerator).mul(ethers.BigNumber.from(10).pow(denominatorToken.decimals)),
            ethers.BigNumber.from(denominator).mul(ethers.BigNumber.from(10).pow(numeratorToken.decimals))
        );
    }
    static parse(value: string) {
        return value === ""
            ? Fraction.NAN
            : isEmptyValue(value)
            ? Fraction.ZERO
            : new Fraction(parseBalance(value, 18), Fraction.BASE);
    }

    numerator: ethers.BigNumber;
    denominator: ethers.BigNumber;

    private constructor(numerator: ethers.BigNumber, denominator: ethers.BigNumber) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    isZero() {
        return !this.isNaN() && this.numerator.isZero();
    }

    isNaN() {
        return this.denominator.isZero();
    }

    eq(fraction: Fraction) {
        return this.numerator
            .mul(fraction.denominator)
            .div(fraction.numerator)
            .eq(this.denominator);
    }

    gt(fraction: Fraction) {
        return this.numerator
            .mul(fraction.denominator)
            .div(fraction.numerator)
            .gt(this.denominator);
    }

    lt(fraction: Fraction) {
        return this.numerator
            .mul(fraction.denominator)
            .div(fraction.numerator)
            .lt(this.denominator);
    }

    toString(maxFractions = 8) {
        if (this.isNaN()) return "";
        if (this.isZero()) return "0";
        let str = formatBalance(this.numerator.mul(Fraction.BASE).div(this.denominator), 18, maxFractions);
        if (str.endsWith(".0")) str = str.substring(0, str.length - 2);
        return str;
    }

    apply(value: ethers.BigNumberish) {
        return this.denominator.isZero() ? ethers.constants.Zero : this.numerator.mul(value).div(this.denominator);
    }
}

export default Fraction;
