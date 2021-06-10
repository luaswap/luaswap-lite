import React, { useContext } from "react";
import { View, ViewProps } from "react-native";

import { DESKTOP_CONTENT_WIDTH, IS_DESKTOP, SCREEN_WIDTH, Spacing, SUB_MENU_HEIGHT } from "../constants/dimension";
import { GlobalContext } from "../context/GlobalContext";
import useColors from "../hooks/useColors";
// import useStyles from "../hooks/useStyles";

const Content: React.FunctionComponent<ViewProps> = props => {
    const { darkMode } = useContext(GlobalContext);
    // const { borderDark: borderColor, background } = useColors();
    // const { border, shadow } = useStyles();
    return (
        <View
            {...props}
            style={[
                {
                    // backgroundColor: background,
                    // flexDirection: "row",
                    width: IS_DESKTOP ? 1200 : "100%",//SCREEN_WIDTH - Spacing.large,
                    marginLeft: "auto",
                    marginRight: "auto",
                    // marginTop: Spacing.huge + SUB_MENU_HEIGHT,
                    // marginBottom: Spacing.large,
                    padding: IS_DESKTOP ? Spacing.normal : 10
                },
                props.style
            ]}
        />
    );
};
export default Content;
