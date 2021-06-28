import React from "react";
import { Icon } from "react-native-elements";

import useColors from "../hooks/useColors";

const CloseIcon = () => {
    const { textDark } = useColors();
    return <Icon 
    type={"material-community"}
    name={"close"}
    size={13}
    color={textDark}
    style={{ 
        marginLeft: 10,
        backgroundColor: '#7B7B7B',
        borderRadius: 50,
        padding: 3
    }} />;
};

export default CloseIcon;
