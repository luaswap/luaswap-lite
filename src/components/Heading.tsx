import React, { FC } from "react";
import { TextStyle, View } from "react-native";

import { IS_DESKTOP, Spacing } from "../constants/dimension";
import useColors from "../hooks/useColors";
import Button from "./Button";
import FlexView from "./FlexView";
import Text from "./Text";

interface HeadingProps {
    text: string;
    fontWeight?: "light" | "regular" | "bold";
    disabled?: boolean;
    buttonText?: string;
    onPressButton?: () => void | Promise<void>;
    style?: TextStyle;
}

const Heading: FC<HeadingProps> = props => {
    const { accent } = useColors();
    return (
        <View style={{ alignItems: "flex-start", height: 32, marginBottom: props.disabled ? 0 : Spacing.small }}>
            <Text
                medium={true}
                fontWeight={props.fontWeight || "bold"}
                disabled={props.disabled}
                style={[{ flex: 1, fontSize: IS_DESKTOP ? 20 : 18, paddingBottom: Spacing.tiny }, props.style]}>
                {props.text}
            </Text>
            {/* {props.buttonText && (
                <Button
                    type={"clear"}
                    size={"small"}
                    title={props.buttonText}
                    onPress={props.onPressButton}
                    color={accent}
                    buttonStyle={{ paddingHorizontal: Spacing.tiny }}
                />
            )} */}
        </View>
    );
};

export default Heading;
