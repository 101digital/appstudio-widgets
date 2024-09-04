import React, {useContext} from 'react';
import {ColorValue, StyleSheet, Text, TextProps, TextStyle} from 'react-native'
import {ThemeContext} from "../../context/theme-context";

export type ASTextProps = TextProps & {
    children?: string | undefined | number | React.ReactNode;
    style?: TextStyle;
    labelType?: 'number' | 'datetime' | 'card-number' | 'e6ExpiryDate'
    label?: string;
    accessibilityLabel?: string
}

const ASText: React.FC<ASTextProps> = (props: ASTextProps) => {
    const {colors} = useContext(ThemeContext);
    const {children, style, labelType, label, ...restProps} = props || {}
    let labelValue = children || label

    //TODO: Remove this temeraly code and defnine this in DB
    if (labelType === 'number' && (typeof labelValue === "string" || typeof labelValue === "number")) {
        //Format number 1234 -> 1,234.00
        labelValue = parseFloat(labelValue?.toString()?.replace(',', '')).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    } else if (labelType === 'datetime' && typeof labelValue === "number") {
        // Format date from timestamp
        const date = new Date(labelValue);
        // Define options for formatting
        const options: { [key: string]: string } = {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        };
        const dateFormatter = new Intl.DateTimeFormat('en-US', options);
        const parts = dateFormatter.formatToParts(date);
        // Construct the desired format from parts
        labelValue = `${parts?.find((part: any) => part.type === 'weekday')?.value}, `
            + `${parts?.find((part: any) => part.type === 'day')?.value} `
            + `${parts?.find((part: any) => part.type === 'month')?.value} `
            + `${parts?.find((part: any) => part.type === 'year')?.value}`;
    } else if (labelType === 'e6ExpiryDate' && labelValue) {
        // TODO: Remove this logic only for E6
        labelValue = `${labelValue?.toString().slice(4)}/${labelValue?.toString().slice(0, 4)}`
    } else if (labelType === 'card-number' && labelValue && (typeof labelValue === 'string' || typeof labelValue === 'number')) {
        let cardNumberString = labelValue?.toString()
        cardNumberString = cardNumberString?.toString()?.replace(/\D/g, '');
        labelValue = cardNumberString?.replace(/(.{4})/g, '$1 ').trim();
    }

    const getTextColor = (): { color: string | undefined | ColorValue } => {
        let color: string | undefined | ColorValue = colors.primaryFixed

        // TODO: REMOVE THIS LOGIC LATER
        if (labelType === "number") {
            if (typeof children === 'number') {
                if (children >= 0) {
                    color = '#29ce0e'
                } else {
                    color = '#D22424'
                }
            }
        }

        const textStyleObj = Array.isArray(style) ? Object.assign({}, ...style) : style
        if (textStyleObj?.color) {
            color = textStyleObj?.color
        }

        return {color}
    }

    return (
        <Text {...restProps} style={[styles.textStyle, style, getTextColor()]}>
            {labelValue}
        </Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
    },
});

export default ASText
