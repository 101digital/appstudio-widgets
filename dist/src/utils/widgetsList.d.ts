import { ASBadgeProps, ASButtonProps, ASCheckBoxProps, ASCircleChartProps, ASColumnProps, ASContainerProps, ASCounterProps, ASDividerProps, ASDropDownProps, ASExpandableTextProps, ASFormValidationProps, ASImageProps, ASListTileProps, ASListViewProps, ASPageViewProps, ASProgressBarProps, ASRadioButtonProps, ASRichTextProps, ASRowProps, ASSliderProps, ASSpacerProps, ASStackProps, ASSwitchProps, ASTextFieldProps, ASTextProps, ASVerticalDividerProps, ASWrapProps, ASChoiceChipsProps } from "../../index";
export declare type WidgetsName = keyof WidgetsList;
export declare type WidgetsList = {
    ASContainer: (attributes: ASContainerProps) => string;
    ASText: (attributes: ASTextProps) => string;
    ASButton: (attributes: ASButtonProps) => string;
    ASTextField: (attributes: ASTextFieldProps) => string;
    ASColumn: (attributes: ASColumnProps) => string;
    ASRow: (attributes: ASRowProps) => string;
    ASSpacer: (attributes: ASSpacerProps) => string;
    ASDivider: (attributes: ASDividerProps) => string;
    ASVerticalDivider: (attributes: ASVerticalDividerProps) => string;
    ASFormValidation: (attributes: ASFormValidationProps) => string;
    ASRichText: (attributes: ASRichTextProps) => string;
    ASImage: (attributes: ASImageProps) => string;
    ASDropdown: (attributes: ASDropDownProps) => string;
    ASExpandableText: (attributes: ASExpandableTextProps) => string;
    ASWrap: (attributes: ASWrapProps) => string;
    ASSwitch: (attributes: ASSwitchProps) => string;
    ASCheckBox: (attributes: ASCheckBoxProps) => string;
    ASProgressBar: (attributes: ASProgressBarProps) => string;
    ASStack: (attributes: ASStackProps) => string;
    ASListView: (attributes: ASListViewProps) => string;
    ASCircleChart: (attributes: ASCircleChartProps) => string;
    ASBadge: (attributes: ASBadgeProps) => string;
    ASPageView: (attributes: ASPageViewProps) => string;
    ASListTile: (attributes: ASListTileProps) => string;
    ASRadioButton: (attributes: ASRadioButtonProps) => string;
    ASSlider: (attributes: ASSliderProps) => string;
    ASCounter: (attributes: ASCounterProps) => string;
    ASChoiceChips: (attributes: ASChoiceChipsProps) => string;
};
export declare class ASWidgetsList {
    constructor();
    private static getWidgetAttributes;
    getWidgets(): WidgetsList;
    getWidgetByName(name: WidgetsName): (attributes: any, children?: any) => string;
}
