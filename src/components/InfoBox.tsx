import React, { PropsWithChildren, useContext } from "react";
import { View, ViewProps } from "react-native";

import { IS_DESKTOP, Spacing } from "../constants/dimension";
import { GlobalContext } from "../context/GlobalContext";
import useColors from "../hooks/useColors";
import useStyles from "../hooks/useStyles";

const InfoBox = (props: PropsWithChildren<ViewProps>) => {
    const { darkMode } = useContext(GlobalContext);
    const { backgroundLight, borderDark } = useColors();
    const { border } = useStyles();
    return (
        <View
            {...props}
            style={[
                {
                    ...border({ radius: 20, color: darkMode ? borderDark : backgroundLight }),
                    backgroundColor: backgroundLight,
                    // marginTop: !IS_DESKTOP ? Spacing.normal + Spacing.small : 0,
                    padding: Spacing.small + Spacing.tiny
                },
                props.style
            ]}
        />
    );
};

export default InfoBox;
