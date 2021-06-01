import React, { FC, ReactNode, useState } from "react";
import { View, ViewStyle } from "react-native";

import useTranslation from "../hooks/useTranslation";
import Heading from "./Heading";

export interface SelectTokenListProps {
    title: string;
    isOpen: boolean;
    onExpand?: () => void;
    onDismiss?: () => void;
    style?: ViewStyle;
    children?: ReactNode;
}

const SelectTokenListProps: FC<SelectTokenListProps> = props => {
    const t = useTranslation();
    const [isOpen, setExpanded] = useState(false);
    const shouldExpand = props.isOpen && isOpen;
    const buttonText = shouldExpand ? undefined : t("change");
    const onPress = () => {
        setExpanded(true);
        props.onExpand?.();
    };

    return (
        <View style={props.style}>
            <Heading text={props.title} buttonText={buttonText} onPressButton={onPress} />
            <View style={{ display: shouldExpand ? "flex" : "none" }}>{props.children}</View>
        </View>
    );
};

export default SelectTokenListProps;
