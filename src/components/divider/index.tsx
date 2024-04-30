import React, {useContext} from 'react';
import {DimensionValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import {ThemeContext} from "../../context/theme-context";

export type ASDividerProps = {
    style?: StyleProp<ViewStyle>;
    marginVertical?: DimensionValue
    width?: DimensionValue
}

const ASDivider: React.FC<ASDividerProps> = (props: ASDividerProps) => {
    const {colors} = useContext(ThemeContext);
    const {style, marginVertical = 10, width = '100%'} = props || {}

    return (
        <View style={[styles.dividerStyle, {
            marginVertical, width, backgroundColor: colors.onSurface,
        }, style]}/>
    )
}

const styles = StyleSheet.create({
    dividerStyle: {
        height: 1,
    },
});

export default ASDivider
