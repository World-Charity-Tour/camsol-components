import React, { useState } from 'react';

// stylesheet
import styles from './button.module.css';

export enum ButtonType {
  SOLID = 'solid',
  OUTLINED = 'outlined',
  TEXT = 'text',
  UNDERLINED = 'underlined',
  BADGE = 'badge',
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

const Button: React.FC<Props> = ({
  text,
  type,
  disabled,
  iconLeft,
  iconRight,
  bgColor,
  hoverColor,
  customizeVariantProps,
  hoverBgColor,
  color,
  setBtnActiveStateIndex,
  index,
  rounded,
  width,
  height,
  onClick,
}) => {
  const [hoverState, setHoverState] = useState<boolean>(false);

  return (
    <>
      {type === ButtonType.BADGE ? (
        <>
          <button
            disabled={disabled}
            className={`${styles.badge} ${rounded !== undefined && rounded ? styles.rounded : ''}`}
            style={{
              background: bgColor,
              color: color,
            }}
          >
            {iconLeft}
            {text}
            {iconRight}
          </button>
        </>
      ) : (
        <>
          {customizeVariantProps !== undefined && customizeVariantProps ? (
            <button
              onClick={onClick}
              onMouseEnter={() => {
                setHoverState(true);
                if (setBtnActiveStateIndex !== undefined && index !== undefined) {
                  setBtnActiveStateIndex(index);
                }
              }}
              onMouseLeave={() => {
                setHoverState(false);
                if (setBtnActiveStateIndex !== undefined) {
                  setBtnActiveStateIndex(-1);
                }
              }}
              style={{
                background: hoverState ? hoverBgColor : bgColor,
                color: hoverState ? hoverColor : color,
                height: height !== undefined ? height : '51px',
                width: width !== undefined ? width : 'fit-content',
              }}
              disabled={disabled}
              className={`${styles.btn} ${
                type === ButtonType.SOLID
                  ? styles.solid
                  : type === ButtonType.OUTLINED
                  ? styles.outlined
                  : type === ButtonType.TEXT
                  ? styles.text
                  : styles.underlined
              }`}
            >
              {iconLeft}
              {text}
              {iconRight}
            </button>
          ) : (
            <button
              onClick={onClick}
              disabled={disabled}
              style={{
                height: height !== undefined ? height : '51px',
                width: width !== undefined ? width : 'fit-content',
              }}
              className={`${styles.btn} ${
                type === ButtonType.SOLID
                  ? styles.solid
                  : type === ButtonType.OUTLINED
                  ? styles.outlined
                  : type === ButtonType.TEXT
                  ? styles.text
                  : styles.underlined
              }`}
            >
              {iconLeft}
              {text}
              {iconRight}
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Button;
// just to trigger ci
