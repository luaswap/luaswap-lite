import React from "react";
import { View } from "react-native";

import { Spacing } from "../constants/dimension";

const Border = props => {
    return (
        <View
            style={{
                height: 1,
                width: "100%",
                marginTop: props.small ? Spacing.tiny : Spacing.small
            }}
        />
    );
};

export default Border;
