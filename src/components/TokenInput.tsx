import React, { FC, useCallback } from "react";
import { Platform, View } from "react-native";

import { BigNumber, ethers } from "ethers";
import { IS_DESKTOP, Spacing } from "../constants/dimension";
import useColors from "../hooks/useColors";
// import useStyles from "../hooks/useStyles";
import Token from "../types/Token";
import { formatBalance, isNativeToken, parseBalance, pow10 } from "../utils";
import Button from "./Button";
import Heading from "./Heading";
import Input from "./Input";

export interface TokenInputProps {
    title?: string;
    token?: Token;
    amount: string;
    onAmountChanged: (amount: string) => void;
    label?: string;
    hideMaxButton?: boolean;
    maxButtonText?: string;
    autoFocus?: boolean;
    trc21Fee?: BigNumber;
}

// tslint:disable-next-line:max-func-body-length
const TokenInput: FC<TokenInputProps> = props => {
    // const { border } = useStyles();
    const onChangeText = useCallback(
        (text: string) => {
            if (props.token && props.onAmountChanged) {
                try {
                    parseBalance(text, props.token.decimals);
                    props.onAmountChanged(text);
                } catch (e) {
                    if (text.endsWith(".") && text.indexOf(".") === text.length - 1) {
                        props.onAmountChanged(text);
                    }
                }
            }
        },
        [props.token, props.onAmountChanged]
    );
    return (
        <View>
            {props.title && <Heading text={props.title} />}
            <View>
                <Input
                    label={props.label}
                    value={props.amount}
                    onChangeText={onChangeText}
                    placeholder={"0.0"}
                    keyboardType={"numeric"}
                    autoFocus={props.autoFocus || false}
                    // inputStyle={{ marginHorizontal: Spacing.tiny }}
                    inputContainerStyle={{ borderBottomWidth: 0 }}
                    labelStyle={{ fontFamily: "light", height: props.label ? "auto" : 0 }}
                // containerStyle={{
                //     ...border(),
                //     paddingHorizontal: Spacing.tiny,
                //     paddingVertical: 15
                //     // paddingTop: 15,
                //     // paddingBottom: 2
                // }}
                />
                {props.token?.balance?.gt(0) && !props.hideMaxButton && (
                    <MaxButton
                        token={props.token}
                        maxButtonText={props.maxButtonText}
                        updateAmount={props.onAmountChanged}
                        trc21Fee={props.trc21Fee}
                    />
                )}
            </View>
        </View>
    );
};

const MaxButton = (props: { token: Token; updateAmount; maxButtonText?: string; trc21Fee?: BigNumber }) => {
    const { accent } = useColors();
    const onPressMax = useCallback(async () => {
        if (props.token) {
            let balance = props.token.balance;
            if (isNativeToken(props.token)) {
                // Subtract 0.01 ETH for gas fee
                const fee = pow10(16);
                balance = balance.gt(fee) ? balance.sub(fee) : ethers.constants.Zero;
            } else if (props.trc21Fee) {
                balance = balance.gt(props.trc21Fee) ? balance.sub(props.trc21Fee) : ethers.constants.Zero
            }
            props.updateAmount(formatBalance(balance, props.token.decimals));
        }
    }, [props.token, props.updateAmount, props.trc21Fee]);

    return (
        <View style={{ position: "absolute", right: 12, bottom: Platform.OS === "web" ? 17 : 24 }}>
            <Button
                type={"clear"}
                size={"small"}
                color={accent}
                title={props.maxButtonText || (IS_DESKTOP ? "MAX " + props.token.symbol : "MAX")}
                fontWeight={"bold"}
                onPress={onPressMax}
                buttonStyle={{ paddingHorizontal: Spacing.tiny }}
            />
        </View>
    );
};

export default TokenInput;
function signer(arg0: string, address: string, signer: any, Signer: typeof ethers.Signer) {
    throw new Error("Function not implemented.");
}

