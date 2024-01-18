"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var colors_1 = require("../../utils/colors");
var ASSwitch = function (props) {
    var _a = props.enableThumbColor, enableThumbColor = _a === void 0 ? colors_1.colors.offWhite : _a, _b = props.disabledThumbColor, disabledThumbColor = _b === void 0 ? colors_1.colors.offWhite : _b, onChange = props.onChange, restProps = __rest(props, ["enableThumbColor", "disabledThumbColor", "onChange"]);
    var _c = (0, react_1.useState)(false), isEnabled = _c[0], setIsEnabled = _c[1];
    var toggleSwitch = function () {
        setIsEnabled(function (previousState) {
            onChange === null || onChange === void 0 ? void 0 : onChange(!previousState);
            return !previousState;
        });
    };
    return (react_1.default.createElement(react_native_1.Switch, __assign({ trackColor: { false: colors_1.colors.gray400, true: colors_1.colors.green }, ios_backgroundColor: colors_1.colors.black500, onValueChange: toggleSwitch, value: isEnabled, thumbColor: isEnabled ? enableThumbColor : disabledThumbColor }, restProps)));
};
exports.default = ASSwitch;