import React, { FC } from "react";
import { TouchableHighlight, View, ViewProps, ViewStyle } from "react-native";
import { Hoverable } from "react-native-web-hover";

import useColors from "../hooks/useColors";
import useStyles from "../hooks/useStyles";

export interface SelectableProps extends ViewProps {
    selected: boolean;
    onPress?: () => void;
    disabled?: boolean;
    containerStyle?: ViewStyle;
}

const SelectTokenable: FC<SelectableProps> = props => {
    const { borderDark, accent, overlay } = useColors();
    const { border } = useStyles();
    const { backgroundLight } = useColors();
    return (
        <Hoverable style={props.containerStyle}>
            {({ hovered }) => (
                <TouchableHighlight underlayColor={overlay} onPress={props.onPress}>
                    <View
                        {...props}
                        style={[
                            {
                                ...border({ color: props.selected ? borderDark : backgroundLight }),
                                paddingHorizontal: 10,
                                paddingVertical: 5
                            },
                            props.style
                        ]}
                    />
                </TouchableHighlight>
            )}
        </Hoverable>
    );
};

export default SelectTokenable;
