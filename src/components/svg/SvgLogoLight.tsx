import * as React from "react";
import { View } from "react-native";
import Text from "../Text";
import { Spacing } from "../../constants/dimension";
import Logo from "../images/logoluaswap.png"
// tslint:disable-next-line:max-func-body-length

function LogoDark() {
    return (
        <View style={{flexDirection: 'row', alignItems: "center"}}>
            <img style={{ maxWidth: "50px"}} src={Logo} alt="Luaswap Lite"/>
            <Text note={false} style={{ fontSize: 20, fontWeight: "bold", marginLeft: Spacing.small}}>LuaSwap Lite</Text>
        </View>        
    );
}

export default LogoDark;