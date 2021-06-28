import React from "react";

import { Spacing } from "../constants/dimension";
import Token from "../types/Token";
import Text from "./Text";

const TokenName = (props: { token: Token; disabled?: boolean }) => (
    <Text
        caption={true}
        numberOfLines={1}
        ellipsizeMode={"tail"}
        style={{ marginLeft: Spacing.small, width: 180 }}
        fontWeight={"bold"}
        disabled={props.disabled}>
        {props.token.symbol}
    </Text>
);

export default TokenName;
