import React, { FC } from "react";
import { Platform, SafeAreaView, ScrollView, ViewProps } from "react-native";

export type ContainerProps = ViewProps;

const Container: FC<ContainerProps> = props => {
    return Platform.select({
        web: (
            <ScrollView
                contentContainerStyle={{ flex: 1, minHeight: "auto" }}
                style={[
                    {
                        flex: 1
                    },
                    props.style
                ]}
                {...props}
            />
        ),
        default: (
            <SafeAreaView style={{ flex: 1, minHeight: "auto" }}>
                <ScrollView {...props} />
            </SafeAreaView>
        )
    });
};

export default Container;
