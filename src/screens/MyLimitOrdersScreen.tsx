import React, { useCallback, useContext, useMemo, useState } from "react";
import { FlatList, Platform, View, StyleSheet } from "react-native";

import moment from "moment";
import useAsyncEffect from "use-async-effect";
import BackgroundImage from "../components/BackgroundImage";
import Button from "../components/Button";
import ChangeNetwork from "../components/ChangeNetwork";
import Container from "../components/Container";
import Content from "../components/Content";
import ErrorMessage from "../components/ErrorMessage";
import Expandable from "../components/Expandable";
import FlexView from "../components/FlexView";
import InfoBox from "../components/InfoBox";
import { ITEM_SEPARATOR_HEIGHT } from "../components/ItemSeparator";
import Loading from "../components/Loading";
import Meta from "../components/Meta";
import Selectable from "../components/Selectable";
import Text from "../components/Text";
import Title from "../components/Title";
import TokenAmount from "../components/TokenAmount";
import TokenLogo from "../components/TokenLogo";
import TokenSymbol from "../components/TokenSymbol";
import WebFooter from "../components/web/WebFooter";
import { SwapSubMenu } from "../components/web/WebSubMenu";
import { IS_DESKTOP, Spacing } from "../constants/dimension";
import Fraction from "../constants/Fraction";
import { EthersContext } from "../context/EthersContext";
import useColors from "../hooks/useColors";
import useMyLimitOrdersState, { MyLimitOrdersState } from "../hooks/useMyLimitOrdersState";
import { Order } from "../hooks/useSettlement";
import useTranslation from "../hooks/useTranslation";
import MetamaskError from "../types/MetamaskError";
import { formatBalance } from "../utils";
import { TabActions } from "@react-navigation/routers";
import { BigNumber } from "@ethersproject/bignumber";
import Screen from "./Screen";
import SwapContainer from "../components/SwapContainer";

const MyLimitOrdersScreen = () => {
    const t = useTranslation();
    return (
        <Screen>
            <Container>
                <BackgroundImage />
                <SwapContainer>
                    <Title text={t("my-orders")} />
                    <Text style={{marginBottom: 40}} light={true}>{t("my-orders-desc")}</Text>
                    <MyLimitOrders />
                </SwapContainer>
                {Platform.OS === "web" && <WebFooter />}
            </Container>
            <SwapSubMenu />
        </Screen>
    );
};

const MyLimitOrders = () => {
    const { chainId } = useContext(EthersContext);
    const {border} = useColors()
    if (chainId !== 88) return <ChangeNetwork />;
    const state = useMyLimitOrdersState();
    return (
        <View style={{borderStyle: 'solid', borderWidth: 1 ,borderColor:border,paddingTop: 10, padding: 30, borderRadius: 10}}>
            <OrderSelect state={state} />
            <OrderInfo state={state} />
        </View>
    );
};

const OrderSelect = (props: { state: MyLimitOrdersState }) => {
    const t = useTranslation();
    return (
        <View style={{ overflow: !IS_DESKTOP ? "auto" : "hidden" }}>
            <Expandable
                // title={t("my-orders")}
                title={''}
                style={{width: !IS_DESKTOP ? 580 : "auto"}}
                expanded={!props.state.selectedOrder}
                onExpand={() => props.state.setSelectedOrder()}>
                <OrderList state={props.state} />
            </Expandable>
            {props.state.selectedOrder && (
                <OrderItem
                    order={props.state.selectedOrder}
                    selected={true}
                    onSelectOrder={() => props.state.setSelectedOrder()}
                />
            )}
        </View>
    );
};

const OrderList = ({ state }: { state: MyLimitOrdersState }) => {
    const renderItem = useCallback(
        ({ item }) => {
            return (
                <OrderItem key={item.address} order={item} selected={false} onSelectOrder={state.setSelectedOrder} />
            );
        },
        [state.setSelectedOrder]
    );
    return state.loading || !state.myOrders ? (
        <Loading />
    ) : state.myOrders.length === 0 ? (
        <EmptyList />
        ) : (
        <>
            <FlexView style={{ alignItems: "center", justifyContent: 'space-between', padding: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16}}>Pair</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 16}}>Amount</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Price</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 16}}>Min Receive</Text>
            </FlexView>
            <FlatList data={state.myOrders} renderItem={renderItem} />
        </>
    );
};

const EmptyList = () => {
    const t = useTranslation();
    return (
        <View style={{ margin: Spacing.normal }}>
            <Text disabled={true} style={{ textAlign: "center", width: "100%" }}>
                {t("you-dont-have-limit-orders")}
            </Text>
        </View>
    );
};

const OrderItem = (props: { order: Order; selected: boolean; onSelectOrder: (order: Order) => void }) => {
    const t = useTranslation();
    // const { amountIn, amountOutMin, fromToken, toToken } = props.order;
    const pair = props.order
    const status = props.order.status();
    const disabled = status !== "Open";
    // const price = Fraction.fromTokens(amountOutMin, amountIn, toToken, fromToken);
    const onPress = useCallback(() => props.onSelectOrder(props.order), [props.onSelectOrder, props.order]);
    // const pairs = fromToken.symbol + '/' + toToken.symbol
    // const { green, red, disabled: colorDisabled } = useColors();
    // console.log(fromToken,amountIn, toToken,amountOutMin)
    return (
        <Selectable
            selected={props.selected}
            onPress={onPress}
            containerStyle={{
                marginBottom: ITEM_SEPARATOR_HEIGHT
            }}>
            {/* <FlexView style={{ alignItems: "center" }}> */}
                {/* <View> */}
                    {/* <table style={{width: '100%'}}>
                        <tr>
                            <th style={{textAlign: 'left'}}><Text style={{ color: disabled ? colorDisabled : '#fff' }}>Pair</Text></th>
                            <th style={{textAlign: 'left'}}><Text style={{ color: disabled ? colorDisabled : '#fff' }}>Amount</Text></th>
                            <th style={{textAlign: 'left'}}><Text style={{ color: disabled ? colorDisabled : '#fff' }}>Price</Text></th>
                        </tr>
                        <tr>
                            <td><Text style={{ color: disabled ? colorDisabled : '#fff' }}>{pairs}</Text></td>
                        <td><TokenAmount token={fromToken} amount={amountIn} disabled={disabled} style={{fontSize:15}}/></td>
                            <td><Text style={{ color: disabled ? colorDisabled : '#fff' }}>{props.order.canceled ? t("canceled") : price.toString(8) + ' ' + toToken.symbol + '/' + fromToken.symbol}</Text></td>
                        </tr>
                    </table> */}                    
                    <PairToken pair={pair} disabled={disabled}/>
                    {/* <Token token={fromToken} amount={amountIn} disabled={disabled} buy={false} /> */}
                    {/* <View style={{ height: Spacing.tiny }} /> */}
                    {/* <Token token={toToken} amount={amountOutMin} disabled={disabled} buy={true} /> */}
                {/* </View> */}
                {/* <Field
                    label={t("price")}
                    value={props.order.canceled ? t("canceled") : price.toString(8)}
                    disabled={disabled}
                    minWidth={0}
                /> */}
            {/* </FlexView> */}
        </Selectable>
    );
};

const PairToken = ({ pair, disabled }) => {
    const { green, red, disabled: colorDisabled } = useColors()
    const t = useTranslation()
    const { amountIn, amountOutMin, fromToken, toToken } = pair
    const price = Fraction.fromTokens(amountOutMin, amountIn, toToken, fromToken)

    const minReceive = Number(formatBalance(amountOutMin || toToken.balance, toToken.decimals, 4))

    return (
        <FlexView style={{ alignItems: "center", justifyContent: 'space-between' }}>
            <FlexView style={{paddingRight: 10}}>
                <TokenLogo small={true} token={fromToken} disabled={disabled} />
                <TokenLogo small={true} token={toToken} disabled={disabled} />
            </FlexView>
            <FlexView>
                <Text style={{paddingLeft: 20}} disabled={disabled}>
                    {formatBalance(amountIn || fromToken.balance, fromToken.decimals, 8)}
                </Text>                
                <Text style={{paddingLeft:5}} disabled={disabled}>{fromToken.symbol}</Text>
            </FlexView>
            <FlexView>
                <Text style={{ color: disabled ? colorDisabled : '#fff', paddingLeft: 20, paddingRight: 3 }}>{pair.canceled ? t("canceled") : price.toString(8)}</Text>
                <Text disabled={disabled}>{toToken.symbol}</Text>
                <Text style={{ color: disabled ? colorDisabled : '#fff', paddingLeft: 3, paddingRight: 3 }}>/</Text>
                <Text disabled={disabled}>{fromToken.symbol}</Text>
            </FlexView>
             <FlexView>
                <Text style={{ paddingLeft: 20 }} disabled={disabled}>
                    {(minReceive - (minReceive * .004)).toFixed(5)}
                    {/* {formatBalance(amountIn || fromToken.balance, fromToken.decimals, 8)} */}
                </Text>
                <Text style={{paddingLeft:5}} disabled={disabled}>{toToken.symbol}</Text>
            </FlexView>
        </FlexView>
    );
};

const Token = ({ token, amount, disabled, buy }) => {
    const { green, red, disabled: colorDisabled } = useColors();
    return (
        <FlexView style={{ alignItems: "center" }}>
            <TokenLogo small={true} token={token} disabled={disabled} />
            <Text
                fontWeight={"bold"}
                note={true}
                style={{ color: disabled ? colorDisabled : buy ? green : red, marginLeft: Spacing.tiny }}>
                {buy ? "﹢" : "﹣"}
            </Text>
            <TokenAmount token={token} amount={amount} disabled={disabled} />
            {IS_DESKTOP && <TokenSymbol token={token} disabled={disabled} />}
        </FlexView>
    );
};

const Field = ({ label, value, disabled, minWidth }) => {
    const { textMedium, textLight, disabled: colorDisabled } = useColors();
    return (
        <View style={{ flex: minWidth ? 0 : 1, minWidth, marginLeft: Spacing.tiny }}>
            <Text note={true} style={{ textAlign: "right", color: disabled ? colorDisabled : textLight }}>
                {label}
            </Text>
            <Text
                caption={true}
                light={true}
                style={{ textAlign: "right", color: disabled ? colorDisabled : textMedium }}>
                {value}
            </Text>
        </View>
    );
};


const OrderInfo = ({ state }: { state: MyLimitOrdersState }) => {
    const t = useTranslation();
    const order = state.selectedOrder;
    const amountIn = order ? formatBalance(order.amountIn, order.fromToken.decimals) : undefined;
    const amountOutMin = order ? formatBalance(order.amountOutMin, order.toToken.decimals) : undefined;
    const filledAmountIn = order ? formatBalance(order.filledAmountIn!, order.fromToken.decimals) : undefined;
    const expiry = useMemo(() => {
        if (order) {
            const deadline = new Date(order.deadline.toNumber() * 1000);
            const now = Date.now();
            const diff = moment(deadline).diff(now);
            return moment(deadline).isAfter(now) ? moment.utc(diff).format("HH[h] mm[m]") : null;
        }
    }, [order]);
    const disabled = !state.selectedOrder;
    return (
        <InfoBox>
            <Meta label={t("status")} text={order?.status()} disabled={disabled} />
            <Meta
                label={t("amount-filled")}
                text={filledAmountIn}
                suffix={order?.fromToken?.symbol}
                disabled={disabled}
            />
            <Meta label={t("amount-to-sell")} text={amountIn} suffix={order?.fromToken?.symbol} disabled={disabled} />
            <Meta label={t("amount-to-buy")} text={amountOutMin} suffix={order?.toToken?.symbol} disabled={disabled} />
            <Meta label={t("expiration")} text={expiry || undefined} disabled={disabled} />
            <FilledEvents state={state} />
            <Controls state={state} />
        </InfoBox>
    );
};

const FilledEvents = ({ state }: { state: MyLimitOrdersState }) => {
    const t = useTranslation();
    const prefix = "https://scan.tomochain.com/tx/";
    return (
        <View>
            {state.filledEvents &&
                state.filledEvents.map((event, i) => {
                    const hash = event.transactionHash;
                    const tx = hash.substring(0, 10) + "..." + hash.substring(hash.length - 8);
                    return <Meta key={i} label={t("filled-tx-no") + i} text={tx} url={prefix + hash} />;
                })}
        </View>
    );
};

const Controls = ({ state }: { state: MyLimitOrdersState }) => {
    const { chainId } = useContext(EthersContext);
    const [error, setError] = useState<MetamaskError>({});
    useAsyncEffect(() => setError({}), [state.selectedOrder]);
    return (
        <View style={{ marginTop: Spacing.normal }}>
            {chainId === 88 ? <CancelButton state={state} onError={setError} /> : <ChangeNetwork />}
            {error.message && error.code !== 4001 && <ErrorMessage error={error} />}
        </View>
    );
};

const CancelButton = ({ state, onError }: { state: MyLimitOrdersState; onError: (e) => void }) => {
    const t = useTranslation();
    const onPress = useCallback(() => {
        onError({});
        state.onCancelOrder().catch(onError);
    }, [state.onCancelOrder, onError]);
    const disabled = !state.selectedOrder || state.selectedOrder.status() !== "Open";
    return <Button title={t("cancel-order")} loading={state.cancellingOrder} onPress={onPress} disabled={disabled} />;
};

export default MyLimitOrdersScreen;
