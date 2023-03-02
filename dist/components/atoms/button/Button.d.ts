import React from 'react';
export declare enum ButtonType {
    SOLID = "solid",
    OUTLINED = "outlined",
    TEXT = "text",
    UNDERLINED = "underlined",
    BADGE = "badge"
}
type Props = {
    text?: string;
    type: ButtonType;
    disabled?: boolean;
    iconRight?: JSX.Element;
    iconLeft?: JSX.Element;
    bgColor?: string;
    color?: string;
    hoverBgColor?: string;
    hoverColor?: string;
    customizeVariantProps?: boolean;
    setBtnActiveStateIndex?: React.Dispatch<React.SetStateAction<number>>;
    index?: number;
    rounded?: boolean;
    onClick?: () => void;
    width?: string;
    height?: string;
};
declare const Button: React.FC<Props>;
export default Button;
