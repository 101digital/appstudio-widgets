import React, { ReactNode } from "react";
import { FlatListProps, StyleProp, TextStyle, ViewStyle } from "react-native";
export type ASPinProps = KeyboardProps & {
    pinLength?: number;
    onPress: (item: string) => void;
    children?: ReactNode;
    onChange?: (item: string) => void;
    keyboardTypography?: TextStyle;
    inputTypography?: TextStyle;
    gap?: number;
    keyboardButtonRadius?: number;
    enableNativeKeyboard?: boolean;
    pinBoxRadius?: number;
    pinBoxSize?: number;
    pinBoxBorderColor?: string;
    pinBoxBackgroundColor?: string;
    keyboardButtonBorderColor?: string;
    keyboardButtonBackgroundColor?: string;
};
export type KeyboardProps = {
    submitButtonIcon?: ReactNode;
    submitButtonStyle?: StyleProp<ViewStyle>;
    deleteButtonIcon?: ReactNode;
    deleteButtonStyle?: StyleProp<ViewStyle>;
    flatListProps?: FlatListProps<KeyboardItemProps>;
    onKeyboardPress?: (item: KeyboardItemProps) => void;
    typography?: TextStyle;
    keyboardButtonRadius?: number;
    keyboardButtonBorderColor?: string;
    keyboardButtonBackgroundColor?: string;
};
export type KeyboardItemProps = {
    label: string;
    value: string;
};
export type PinInputListProps = {
    pinLength: number;
    pin: string[];
    inputTypography?: TextStyle;
    onKeyboardPress: (item: KeyboardItemProps) => void;
    enableNativeKeyboard?: boolean;
    pinBoxRadius?: number;
    pinBoxSize?: number;
    pinBoxBorderColor?: string;
    pinBoxBackgroundColor?: string;
    onPress: (item: string) => void;
};
declare const ASPin: React.FC<ASPinProps>;
export default ASPin;
