import React, { FC } from "react";
import { Slider as NativeSlider, SliderProps } from "react-native-elements";
import useColors from "../hooks/useColors";

// export interface SlideProps extends NativeSliderProps {
//     color?: string;
//     size?: "small" | "normal" | "large";
//     fontWeight?: "light" | "regular" | "bold";
// }

// tslint:disable-next-line:max-func-body-length
const Slider: FC<SliderProps> = props => {
    const { accent, textMedium, placeholder, backgroundLight } = useColors();
    const step = props.step || 1;
    // const color = props.color || textMedium;
    const max = 100
    return (
        <NativeSlider
            {...props}
            value={props.value}
            step={step}
            maximumValue={max}
            // style={[{ backgroundColor: color }, props.style]}
            onValueChange={props.onValueChange}
        />
    );
};
export default Slider;
