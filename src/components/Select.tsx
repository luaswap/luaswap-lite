import React, { FC } from "react";
import { View } from "react-native";

import { IS_DESKTOP, Spacing } from "../constants/dimension";
import CloseIcon from "./CloseIcon";
import Expandable from "./Expandable";
import FlexView from "./FlexView";
import { ITEM_SEPARATOR_HEIGHT } from "./ItemSeparator";
import Selectable from "./Selectable";
import SelectIcon from "./SelectIcon";
import Text from "./Text";
import useColors from "../hooks/useColors";
import useStyles from "../hooks/useStyles";

export interface Option {
    key: string;
    title: string;
    description: string;
}

export interface SelectProps {
    title: string;
    options: Option[];
    option?: Option;
    setOption: (option?: Option) => void;
}

const Select: FC<SelectProps> = props => {
    const { borderDark, accent, overlay } = useColors();

    return (
        <View>
            {/* <Expandable title={props.title} expanded={!props.option} onExpand={() => props.setOption()}> */}
            <FlexView style={{width: '100%', flexDirection: IS_DESKTOP ? 'row' : 'column'}}>
                {props.options.map(option => (
                    <View style={{
                        flex: 1,
                        borderRadius: 15,                        
                        justifyContent: "space-between",
                        marginHorizontal: IS_DESKTOP ? 10 : 0,
                        marginBottom: !IS_DESKTOP ? 20 : 0
                    }}>
                        <Item
                            key={option.key}
                            option={option}
                            setOption={props.setOption}
                            selected={option.key === props.option?.key}
                        />
                    </View>
                ))}
            </FlexView>
            {/* </Expandable> */}
            {/* {props.option && (
                <Item option={props.option} setOption={props.setOption} selected={true} selectable={false} />
            )} */}
        </View>
    );
};

const Item = (props: {
    option: Option;
    setOption?: (option?: Option) => void;
    selected: boolean;
    selectable?: boolean;
}) => {
    return (
        <Selectable
            containerStyle={{ marginBottom: ITEM_SEPARATOR_HEIGHT }}
            style={{ padding: 20, minHeight: 102, backgroundColor: "#464646",borderRadius: 15 }}
            selected={props.selected}
            disabled={props.selectable}
            onPress={() => props.setOption?.(props.selected ? undefined : props.option)}>
            <FlexView style={{ alignItems: "center" }}>
                <View style={{ flex: 1 }}>
                    <Text fontWeight={"regular"}>{props.option.title}</Text>
                    <Text note={true} style={{ marginTop: 4 }}>
                        {props.option.description}
                    </Text>
                </View>
                {props.selected ? <CloseIcon /> : <SelectIcon />}
            </FlexView>
        </Selectable>
    );
};

export default Select;
