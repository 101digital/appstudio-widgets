"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ label, ...props }) => {
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.buttonStyle, ...props },
        react_1.default.createElement(react_native_1.Text, null, label)));
};
const styles = react_native_1.StyleSheet.create({
    buttonStyle: {},
});
exports.default = Button;
