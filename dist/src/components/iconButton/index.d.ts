import React from "react";
import { TouchableOpacityProps } from "react-native";
export type ASIconButtonProps = TouchableOpacityProps & {
    onPress: () => void;
    width: number;
    height: number;
    icon: any;
    crossOrigin?: "anonymous" | "use-credentials";
};
declare const ASIconButton: React.FC<ASIconButtonProps>;
export default ASIconButton;
