import React, { FC } from "react";
import { View } from "react-native";
import { Link, useRouteMatch } from "react-router-dom";

import { HEADER_WIDTH, IS_DESKTOP, Spacing, SUB_MENU_HEIGHT } from "../../constants/dimension";
import useColors from "../../hooks/useColors";
import useTranslation from "../../hooks/useTranslation";
import FlexView from "../FlexView";
import Text from "../Text";

export interface WebSubMenuItem {
    title: string;
    path: string;
}

export interface WebSubMenuProps {
    items: WebSubMenuItem[];
}

export const SwapSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("new-order"),
                    path: "/swap"
                },
                {
                    title: t("my-orders"),
                    path: "/swap/my-orders"
                }
            ]}
        />
    );
};

export const LiquiditySubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("add-liquidity"),
                    path: "/liquidity"
                },
                {
                    title: t("remove-liquidity"),
                    path: "/liquidity/remove"
                }
            ]}
        />
    );
};

export const MigrateSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("migrate-liquidity"),
                    path: "/migrate"
                }
            ]}
        />
    );
};

export const StakingSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("stake"),
                    path: "/staking"
                },
                {
                    title: t("unstake"),
                    path: "/staking/unstake"
                }
            ]}
        />
    );
};

export const FarmingSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("plant-lp-tokens"),
                    path: "/farming"
                },
                {
                    title: t("harvest-sushi"),
                    path: "/farming/harvest"
                }
            ]}
        />
    );
};

const WebSubMenu: FC<WebSubMenuProps> = props => {
    const { submenu } = useColors();
    return (
        <View
            style={{
                // position: "fixed",
                // top: 64,
                // height: SUB_MENU_HEIGHT,
                // width: "100%",
                // backgroundColor: submenu
                paddingTop: 50,
                paddingBottom: 20
            }}>
            <FlexView
                style={{
                    // width: IS_DESKTOP ? HEADER_WIDTH : "100%",
                    marginTop: 2,
                    paddingHorizontal: Spacing.tiny,
                    paddingVertical: Spacing.tiny,
                    borderRadius: 50,
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#353535"
                }}>
                {props.items.map(item => (
                    <MenuItem key={item.path} {...item} />
                ))}
            </FlexView>
        </View>
    );
};

const MenuItem = ({ title, path }) => {
    const { accent, textLight, border } = useColors();
    const match = useRouteMatch(path);
    const active = match?.isExact;
    return (
        <Link
            to={path}
            style={{
                // marginLeft: Spacing.small,
                paddingTop: Spacing.tiny,
                paddingBottom: Spacing.tiny,
                paddingLeft: Spacing.large,
                paddingRight: Spacing.large,
                textDecoration: "none",
                borderRadius: 50,
                backgroundColor: active ? '#464646' : '#353535',
                // borderWidth: 1,
                // borderColor: border,
                // borderStyle: active ? 'solid': ''
            }}>
            <Text
                fontWeight={active ? "regular" : "light"}
                style={{
                    fontSize: 15,
                    color: active ? accent : textLight,
                    textTransform: "uppercase",
                    fontWeight: 'bold'
                }}>
                {title}
            </Text>
        </Link>
    );
};

export default WebSubMenu;
