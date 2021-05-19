import React, { FC, useCallback, useContext, useState } from "react";
import { Platform, View } from "react-native";

import useAsyncEffect from "use-async-effect";
import AmountMeta from "../components/AmountMeta";
import BackgroundImage from "../components/BackgroundImage";
import Border from "../components/Border";
import Button from "../components/Button";
import ChangeNetwork from "../components/ChangeNetwork";
import CloseIcon from "../components/CloseIcon";
import Container from "../components/Container";
import Content from "../components/Content";
import ErrorMessage from "../components/ErrorMessage";
import FetchingButton from "../components/FetchingButton";
import FlexView from "../components/FlexView";
import Heading from "../components/Heading";
import InfoBox from "../components/InfoBox";
import { ITEM_SEPARATOR_HEIGHT } from "../components/ItemSeparator";
import LPTokenSelect, { LPTokenItemProps } from "../components/LPTokenSelect";
import Meta from "../components/Meta";
import Selectable from "../components/Selectable";
import SelectIcon from "../components/SelectIcon";
import Text from "../components/Text";
import Title from "../components/Title";
import TokenInput from "../components/TokenInput";
import TokenLogo from "../components/TokenLogo";
import WebFooter from "../components/web/WebFooter";
import { FarmingSubMenu } from "../components/web/WebSubMenu";
import { IS_DESKTOP, Spacing } from "../constants/dimension";
import { EthersContext } from "../context/EthersContext";
import useFarmingState, { FarmingState } from "../hooks/useFarmingState";
import useTranslation from "../hooks/useTranslation";
import MetamaskError from "../types/MetamaskError";
import Token from "../types/Token";
import { formatBalance, isEmptyValue, parseBalance } from "../utils";
import Screen from "./Screen";

const HarvestScreen = () => {
    const t = useTranslation();
    return (
        <Screen>
            <Container>
                <BackgroundImage />
                <Content>
                    <Title text={t("harvest-sushi")} />
                    <Text light={true}>{t("harvest-sushi-desc")}</Text>
                    <Harvest />
                </Content>
                {Platform.OS === "web" && <WebFooter />}
            </Container>
            <FarmingSubMenu />
        </Screen>
    );
};

const Harvest = () => {
    const { chainId } = useContext(EthersContext);
    if (chainId !== 88) return <ChangeNetwork />;
    const t = useTranslation();
    const state = useFarmingState(true);
    return (
        <View style={{ marginTop: Spacing.large }}>
            <LPTokenSelect
                state={state}
                title={"My Farms"}
                emptyText={t("you-dont-have-lp-tokens-deposited")}
                Item={TokenItem}
            />
            <Border />
            <Withdraw state={state} />
            <WithdrawInfo state={state} />
        </View>
    );
};

// tslint:disable-next-line:max-func-body-length
const TokenItem: FC<LPTokenItemProps> = props => {
    const amount = formatBalance(props.token?.amountDeposited || 0, props.token.decimals, 8);
    const onPress = useCallback(() => {
        props.onSelectToken(props.token);
    }, [props.onSelectToken, props.token]);
    return (
        <Selectable
            selected={props.selected}
            onPress={onPress}
            containerStyle={{ marginBottom: ITEM_SEPARATOR_HEIGHT }}>
            <FlexView style={{ alignItems: "center" }}>
                <TokenLogo token={props.token.tokenA} small={true} replaceWETH={true} />
                <TokenLogo token={props.token.tokenB} small={true} replaceWETH={true} style={{ marginLeft: 4 }} />
                <Text medium={true} caption={true} style={{ marginLeft: Spacing.tiny }}>
                    {props.token.tokenA.symbol}-{props.token.tokenB.symbol}
                </Text>
                <Text caption={IS_DESKTOP} medium={true} style={{ flex: 1, textAlign: "right", marginRight: 4 }}>
                    {amount}
                </Text>
                {props.selected ? <CloseIcon /> : <SelectIcon />}
            </FlexView>
        </Selectable>
    );
};

const Withdraw = ({ state }: { state: FarmingState }) => {
    const t = useTranslation();
    if (!state.selectedLPToken) {
        return <Heading text={t("amount")} disabled={true} />;
    }
    // This enables MAX button
    const token = {
        ...state.selectedLPToken,
        balance: state.selectedLPToken.amountDeposited
    } as Token;
    return (
        <View>
            <Heading text={state.selectedLPToken.symbol + " " + t("amount")} />
            <TokenInput token={token} amount={state.amount} onAmountChanged={state.setAmount} autoFocus={IS_DESKTOP} />
        </View>
    );
};

const WithdrawInfo = ({ state }: { state: FarmingState }) => {
    const t = useTranslation();
    const amount = parseBalance(state.amount);
    const total = state.selectedLPToken?.amountDeposited;
    const sushi = total && amount.lte(total) ? state.selectedLPToken!.pendingSushi?.mul(amount).div(total) : null;
    const disabled = !state.pair || !state.selectedLPToken;
    const label1 = state.selectedLPToken
        ? t("deposited-", { symbol: state.selectedLPToken.tokenA.symbol })
        : t("deposited-token-1");
    const label2 = state.selectedLPToken
        ? t("deposited-", { symbol: state.selectedLPToken.tokenB.symbol })
        : t("deposited-token-2");
    return (
        <InfoBox>
            <AmountMeta
                amount={sushi ? formatBalance(sushi) : ""}
                suffix={"SUSHI"}
                disabled={disabled || isEmptyValue(state.amount)}
            />
            <Meta label={t("deposited-lp-token")} text={total ? formatBalance(total) : ""} disabled={disabled} />
            <Meta label={label1} text={state.fromAmount} disabled={disabled} />
            <Meta label={label2} text={state.toAmount} disabled={disabled} />
            <WithdrawControls state={state} />
        </InfoBox>
    );
};

const WithdrawControls = ({ state }: { state: FarmingState }) => {
    const t = useTranslation();
    const [error, setError] = useState<MetamaskError>({});
    useAsyncEffect(() => setError({}), [state.selectedLPToken]);
    const disabled = isEmptyValue(state.amount);
    return (
        <View style={{ marginTop: Spacing.normal }}>
            {!state.selectedLPToken || state.selectedLPToken.amountDeposited?.isZero() ? (
                <WithdrawButton state={state} onError={setError} disabled={true} />
            ) : parseBalance(state.amount, state.selectedLPToken!.decimals).gt(
                  state.selectedLPToken!.amountDeposited!
              ) ? (
                <Button title={t("insufficient-amount")} disabled={true} />
            ) : state.loading ? (
                <FetchingButton />
            ) : (
                <WithdrawButton state={state} onError={setError} disabled={disabled} />
            )}
            {error.message && error.code !== 4001 && <ErrorMessage error={error} />}
        </View>
    );
};

const WithdrawButton = ({
    state,
    onError,
    disabled
}: {
    state: FarmingState;
    onError: (e) => void;
    disabled: boolean;
}) => {
    const t = useTranslation();
    const onPress = useCallback(() => {
        onError({});
        state.onWithdraw().catch(onError);
    }, [state.onWithdraw, onError]);
    return <Button title={t("withdraw")} disabled={disabled} loading={state.withdrawing} onPress={onPress} />;
};

export default HarvestScreen;
