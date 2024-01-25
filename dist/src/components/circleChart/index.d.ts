import React from 'react';
export declare type ASCircleChartProps = {
    /**
     * progress value
     */
    progress?: number;
    /**
     * circle stroke color
     */
    color?: string;
    /**
     * circle underline progress background color
     */
    secondaryColor?: string;
    inActiveStrokeOpacity?: number;
    /**
     * circle diameter
     */
    diameter?: number;
    children?: React.ReactNode;
    circleStrokeWidth?: number;
};
declare const ASCircleChart: React.FC<ASCircleChartProps>;
export default ASCircleChart;
