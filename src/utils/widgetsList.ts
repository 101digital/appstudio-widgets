import {
    ASBadgeProps,
    ASButtonProps,
    ASCalendarProps,
    ASCheckBoxProps,
    ASChoiceChipsProps,
    ASCircleChartProps,
    ASColumnProps,
    ASContainerProps,
    ASCounterProps,
    ASDividerProps,
    ASDropDownProps,
    ASExpandableTextProps,
    ASFormValidationProps,
    ASImageProps,
    ASListTileProps,
    ASListViewProps,
    ASPageViewProps,
    ASProgressBarProps,
    ASRadioButtonProps,
    ASRichTextProps,
    ASRowProps,
    ASSliderProps,
    ASSpacerProps,
    ASStackProps,
    ASSwitchProps,
    ASTextFieldProps,
    ASTextProps,
    ASVerticalDividerProps,
    ASWrapProps
} from "../../index";

export type WidgetsName = keyof WidgetsList

export type WidgetsList = {
    ASContainer: (attributes: ASContainerProps) => string
    ASText: (attributes: ASTextProps) => string
    ASButton: (attributes: ASButtonProps) => string
    ASTextField: (attributes: ASTextFieldProps) => string
    ASColumn: (attributes: ASColumnProps) => string
    ASRow: (attributes: ASRowProps) => string
    ASSpacer: (attributes: ASSpacerProps) => string
    ASDivider: (attributes: ASDividerProps) => string
    ASVerticalDivider: (attributes: ASVerticalDividerProps) => string
    ASFormValidation: (attributes: ASFormValidationProps) => string
    ASRichText: (attributes: ASRichTextProps) => string
    ASImage: (attributes: ASImageProps) => string
    ASDropdown: (attributes: ASDropDownProps) => string
    ASExpandableText: (attributes: ASExpandableTextProps) => string
    ASWrap: (attributes: ASWrapProps) => string
    ASSwitch: (attributes: ASSwitchProps) => string
    ASCheckBox: (attributes: ASCheckBoxProps) => string
    ASProgressBar: (attributes: ASProgressBarProps) => string
    ASStack: (attributes: ASStackProps) => string
    ASListView: (attributes: ASListViewProps) => string
    ASCircleChart: (attributes: ASCircleChartProps) => string
    ASBadge: (attributes: ASBadgeProps) => string
    ASPageView: (attributes: ASPageViewProps) => string
    ASListTile: (attributes: ASListTileProps) => string
    ASRadioButton: (attributes: ASRadioButtonProps) => string
    ASSlider: (attributes: ASSliderProps) => string
    ASCounter: (attributes: ASCounterProps) => string
    ASChoiceChips: (attributes: ASChoiceChipsProps) => string
    ASCalendar: (attributes: ASCalendarProps) => string
}

export class ASWidgetsList {

    constructor() {
    }

    private static getWidgetAttributes(attributes: any): string {
        let result: string = ''
        const atrributesObj = {...attributes}
        if (atrributesObj?.children) {
            delete atrributesObj['children']
        }

        for (let key in atrributesObj) {
            let attributeValue = atrributesObj[key]

            switch (typeof attributeValue) {
                case 'number':
                    attributeValue = `{${attributeValue}}`
                    break
                case 'string':
                    attributeValue = `{"${attributeValue}"}`
                    break
                case 'object':
                    attributeValue = `{${JSON.stringify(attributeValue)}}`
                    break
                default:
                    attributeValue = `{"${attributeValue}"}`
                    break
            }

            result += ` ${key}=${attributeValue}`
        }

        return result
    }

    public getWidgets(): WidgetsList {
        return {
            ASContainer: (attributes: ASContainerProps) => `<ASContainer${ASWidgetsList.getWidgetAttributes(attributes)}>\n${attributes?.children}\n</ASContainer>`,
            ASText: (attributes: ASTextProps) => `<ASText${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASText>`,
            ASButton: (attributes: ASButtonProps) => `<ASButton${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASButton>`,
            ASTextField: (attributes: ASTextFieldProps) => `<ASTextField${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASColumn: (attributes: ASColumnProps) => `<ASColumn${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASColumn>`,
            ASRow: (attributes: ASRowProps) => `<ASRow${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASRow>`,
            ASSpacer: (attributes: ASSpacerProps) => `<ASSpacer${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASDivider: (attributes: ASDividerProps) => `<ASDivider${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASVerticalDivider: (attributes: ASVerticalDividerProps) => `<ASVerticalDivider${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASFormValidation: (attributes: ASFormValidationProps) => `<ASFormValidation${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASFormValidation>`,
            ASRichText: (attributes: ASRichTextProps) => `<ASRichText${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASRichText>`,
            ASImage: (attributes: ASImageProps) => `<ASImage${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASDropdown: (attributes: ASDropDownProps,) => `<ASDropdown${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASExpandableText: (attributes: ASExpandableTextProps) => `<ASExpandableText${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASWrap: (attributes: ASWrapProps) => `<ASWrap${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASWrap>`,
            ASSwitch: (attributes: ASSwitchProps) => `<ASSwitch${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCheckBox: (attributes: ASCheckBoxProps) => `<ASCheckBox${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASProgressBar: (attributes: ASProgressBarProps) => `<ASProgressBar${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASStack: (attributes: ASStackProps) => `<ASStack${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASStack>`,
            ASListView: (attributes: ASListViewProps) => `<ASListView${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCircleChart: (attributes: ASCircleChartProps) => `<ASCircleChart${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASCircleChart>`,
            ASBadge: (attributes: ASBadgeProps) => `<ASBadge${ASWidgetsList.getWidgetAttributes(attributes)}>${attributes?.children}</ASBadge>`,
            ASPageView: (attributes: ASPageViewProps) => `<ASPageView${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASListTile: (attributes: ASListTileProps) => `<ASListTile${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASRadioButton: (attributes: ASRadioButtonProps) => `<ASRadioButton${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASSlider: (attributes: ASSliderProps) => `<ASSlider${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCounter: (attributes: ASCounterProps) => `<ASCounter${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASChoiceChips: (attributes: ASChoiceChipsProps) => `<ASChoiceChips${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
            ASCalendar: (attributes: ASCalendarProps) => `<ASCalendar${ASWidgetsList.getWidgetAttributes(attributes)}/>`,
        }
    }

    public getWidgetByName(name: WidgetsName): (attributes: any, children?: any) => string {
        return this.getWidgets()?.[name]
    }
}

// const a = new ASWidgetsList()
// const asText = a.getWidgets().ASText({
//     children: 'haha',
//     style: {fontSize: 12},
//     numberOfLines: 1,
//     ellipsizeMode: "tail"
// },)
// const asContainer = a.getWidgetByName('ASContainer')({children: asText, style: {flex: 1}})
//
// console.log('RESULT WIDGET:\n', asContainer , '\n')

//  <ASContainer style={{"flex":1}}>
//  <ASText style={{"fontSize":12}} numberOfLines={1} ellipsizeMode={"tail"}>haha</ASText>
//  </ASContainer>


//  ts-node --esm  /Users/huacatluong/101digital/generator-app/app-studio-widgets/src/utils/WidgetsList.ts
