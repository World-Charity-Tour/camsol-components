import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".button-module_btn__-Bedc {\n  padding: 1.6rem 2.4rem;\n  height: 51px;\n  border: none;\n  border-radius: 6px;\n  font-weight: 700;\n  font-size: 1.6rem;\n  transition: 0.2s ease-in-out;\n  -webkit-transition: 0.2s ease-in-out;\n  -moz-transition: 0.2s ease-in-out;\n  -ms-transition: 0.2s ease-in-out;\n  -o-transition: 0.2s ease-in-out;\n  display: flex;\n  display: -ms-flexbox;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  gap: 1.2rem;\n}\n\n.button-module_badge__YG-Ua {\n  display: flex;\n  display: -ms-flexbox;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.8rem 2.2rem;\n  font-weight: 400;\n  font-size: 1.4rem;\n  height: 35px;\n  color: #4777be;\n  border: none;\n  border-radius: 4px;\n}\n\n.button-module_badge__YG-Ua.button-module_rounded__dXdjb {\n  border-radius: 18px;\n}\n\n.button-module_btn__-Bedc:disabled {\n  cursor: not-allowed;\n}\n\n/* SOLID BUTTON STYLES ****************************/\n.button-module_btn__-Bedc.button-module_solid__-CogH {\n  background: #4777be;\n  color: #fff;\n}\n\n.button-module_btn__-Bedc.button-module_solid__-CogH:hover {\n  background: #5995ed;\n}\n\n.button-module_btn__-Bedc.button-module_solid__-CogH:focus-within {\n  background: #203656;\n}\n\n.button-module_btn__-Bedc.button-module_solid__-CogH:disabled {\n  background: #e2e2e2;\n  color: #a9a9a9;\n}\n\n/* OUTLINED BUTTON STYLES ****************************/\n.button-module_btn__-Bedc.button-module_outlined__hmgcu {\n  background: transparent;\n  border: 2px solid #4777be;\n  color: #4777be;\n}\n\n.button-module_btn__-Bedc.button-module_outlined__hmgcu:hover {\n  background: #f2f7fe;\n}\n\n.button-module_btn__-Bedc.button-module_outlined__hmgcu:focus-within {\n  background: #c3d9f9;\n}\n\n.button-module_btn__-Bedc.button-module_outlined__hmgcu:disabled {\n  background: #ffffff;\n  color: #a9a9a9;\n  border: 2px solid #e2e2e2;\n}\n\n/* TEXT BUTTON STYLES ****************************/\n.button-module_btn__-Bedc.button-module_text__v9Iej {\n  background: transparent;\n  color: #4777be;\n}\n\n.button-module_btn__-Bedc.button-module_text__v9Iej:hover {\n  background: #f2f7fe;\n}\n\n.button-module_btn__-Bedc.button-module_text__v9Iej:focus-within {\n  background: #c3d9f9;\n}\n\n.button-module_btn__-Bedc.button-module_text__v9Iej:disabled {\n  background: #ffffff;\n  color: #a9a9a9;\n}\n\n/* UNDERLINED BUTTON STYLES ****************************/\n.button-module_btn__-Bedc.button-module_underlined__MecLl {\n  background: transparent;\n  color: #4777be;\n  position: relative;\n}\n\n.button-module_btn__-Bedc.button-module_underlined__MecLl::before {\n  content: '';\n  position: absolute;\n  left: 1.5rem;\n  width: calc(100% - 3rem);\n  border: 1.5px solid #4777be;\n  bottom: 1rem;\n}\n\n.button-module_btn__-Bedc.button-module_underlined__MecLl:hover {\n  background: #f2f7fe;\n}\n\n.button-module_btn__-Bedc.button-module_underlined__MecLl:focus-within {\n  background: #7aaaf1;\n  color: #2b4771;\n}\n\n.button-module_btn__-Bedc.button-module_underlined__MecLl:disabled {\n  background: #ffffff;\n  color: #a9a9a9;\n}\n\n.button-module_btn__-Bedc.button-module_underlined__MecLl:disabled:before {\n  border: 1.5px solid #a9a9a9;\n}\n";
var styles = {"btn":"button-module_btn__-Bedc","badge":"button-module_badge__YG-Ua","rounded":"button-module_rounded__dXdjb","solid":"button-module_solid__-CogH","outlined":"button-module_outlined__hmgcu","text":"button-module_text__v9Iej","underlined":"button-module_underlined__MecLl"};
styleInject(css_248z);

var ButtonType;
(function (ButtonType) {
    ButtonType["SOLID"] = "solid";
    ButtonType["OUTLINED"] = "outlined";
    ButtonType["TEXT"] = "text";
    ButtonType["UNDERLINED"] = "underlined";
    ButtonType["BADGE"] = "badge";
})(ButtonType || (ButtonType = {}));
var Button = function (_a) {
    var text = _a.text, type = _a.type, disabled = _a.disabled, iconLeft = _a.iconLeft, iconRight = _a.iconRight, bgColor = _a.bgColor, hoverColor = _a.hoverColor, customizeVariantProps = _a.customizeVariantProps, hoverBgColor = _a.hoverBgColor, color = _a.color, setBtnActiveStateIndex = _a.setBtnActiveStateIndex, index = _a.index, rounded = _a.rounded, width = _a.width, height = _a.height, onClick = _a.onClick;
    var _b = useState(false), hoverState = _b[0], setHoverState = _b[1];
    return (jsx(Fragment, { children: type === ButtonType.BADGE ? (jsx(Fragment, { children: jsxs("button", __assign({ disabled: disabled, className: "".concat(styles.badge, " ").concat(rounded !== undefined && rounded ? styles.rounded : ''), style: {
                    background: bgColor,
                    color: color,
                } }, { children: [iconLeft, text, iconRight] })) })) : (jsx(Fragment, { children: customizeVariantProps !== undefined && customizeVariantProps ? (jsxs("button", __assign({ onClick: onClick, onMouseEnter: function () {
                    setHoverState(true);
                    if (setBtnActiveStateIndex !== undefined && index !== undefined) {
                        setBtnActiveStateIndex(index);
                    }
                }, onMouseLeave: function () {
                    setHoverState(false);
                    if (setBtnActiveStateIndex !== undefined) {
                        setBtnActiveStateIndex(-1);
                    }
                }, style: {
                    background: hoverState ? hoverBgColor : bgColor,
                    color: hoverState ? hoverColor : color,
                    height: height !== undefined ? height : '51px',
                    width: width !== undefined ? width : 'fit-content',
                }, disabled: disabled, className: "".concat(styles.btn, " ").concat(type === ButtonType.SOLID
                    ? styles.solid
                    : type === ButtonType.OUTLINED
                        ? styles.outlined
                        : type === ButtonType.TEXT
                            ? styles.text
                            : styles.underlined) }, { children: [iconLeft, text, iconRight] }))) : (jsxs("button", __assign({ onClick: onClick, disabled: disabled, style: {
                    height: height !== undefined ? height : '51px',
                    width: width !== undefined ? width : 'fit-content',
                }, className: "".concat(styles.btn, " ").concat(type === ButtonType.SOLID
                    ? styles.solid
                    : type === ButtonType.OUTLINED
                        ? styles.outlined
                        : type === ButtonType.TEXT
                            ? styles.text
                            : styles.underlined) }, { children: [iconLeft, text, iconRight] }))) })) }));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
