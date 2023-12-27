(self.webpackChunk_camsol_io_components=self.webpackChunk_camsol_io_components||[]).push([[179],{"./src/stories/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonWithLeftIcon:function(){return ButtonWithLeftIcon},ButtonWithRightIcon:function(){return ButtonWithRightIcon},Customizable:function(){return Customizable},CustomizableDirectional:function(){return CustomizableDirectional},Outlined:function(){return Outlined},Solid:function(){return Solid},Text:function(){return Text},Underlined:function(){return Underlined},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var ButtonType,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),button_module_btn="button_btn__L893v",button_module_badge="button_badge__uQFT3",button_module_rounded="button_rounded__w3nGM",button_module_solid="button_solid__R8nOd",button_module_outlined="button_outlined__T2riq",button_module_text="button_text__SMhbx",button_module_underlined="button_underlined__jY8BW",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");!function(ButtonType){ButtonType.SOLID="solid",ButtonType.OUTLINED="outlined",ButtonType.TEXT="text",ButtonType.UNDERLINED="underlined",ButtonType.BADGE="badge"}(ButtonType||(ButtonType={}));var Button=function Button(_ref){var text=_ref.text,type=_ref.type,disabled=_ref.disabled,iconLeft=_ref.iconLeft,iconRight=_ref.iconRight,bgColor=_ref.bgColor,hoverColor=_ref.hoverColor,customizeVariantProps=_ref.customizeVariantProps,hoverBgColor=_ref.hoverBgColor,color=_ref.color,setBtnActiveStateIndex=_ref.setBtnActiveStateIndex,index=_ref.index,rounded=_ref.rounded,width=_ref.width,height=_ref.height,onClick=_ref.onClick,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),hoverState=_useState2[0],setHoverState=_useState2[1];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:type===ButtonType.BADGE?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)("button",{disabled:disabled,className:"".concat(button_module_badge," ").concat(void 0!==rounded&&rounded?button_module_rounded:""),style:{background:bgColor,color:color},children:[iconLeft,text,iconRight]})}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:void 0!==customizeVariantProps&&customizeVariantProps?(0,jsx_runtime.jsxs)("button",{onClick:onClick,onMouseEnter:function onMouseEnter(){setHoverState(!0),void 0!==setBtnActiveStateIndex&&void 0!==index&&setBtnActiveStateIndex(index)},onMouseLeave:function onMouseLeave(){setHoverState(!1),void 0!==setBtnActiveStateIndex&&setBtnActiveStateIndex(-1)},style:{background:hoverState?hoverBgColor:bgColor,color:hoverState?hoverColor:color,height:void 0!==height?height:"51px",width:void 0!==width?width:"fit-content"},disabled:disabled,className:"".concat(button_module_btn," ").concat(type===ButtonType.SOLID?button_module_solid:type===ButtonType.OUTLINED?button_module_outlined:type===ButtonType.TEXT?button_module_text:button_module_underlined),children:[iconLeft,text,iconRight]}):(0,jsx_runtime.jsxs)("button",{onClick:onClick,disabled:disabled,style:{height:void 0!==height?height:"51px",width:void 0!==width?width:"fit-content"},className:"".concat(button_module_btn," ").concat(type===ButtonType.SOLID?button_module_solid:type===ButtonType.OUTLINED?button_module_outlined:type===ButtonType.TEXT?button_module_text:button_module_underlined),children:[iconLeft,text,iconRight]})})})},button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"solid"'},{value:'"outlined"'},{value:'"text"'},{value:'"underlined"'},{value:'"badge"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"Element"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"Element"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},hoverBgColor:{defaultValue:null,description:"",name:"hoverBgColor",required:!1,type:{name:"string"}},hoverColor:{defaultValue:null,description:"",name:"hoverColor",required:!1,type:{name:"string"}},customizeVariantProps:{defaultValue:null,description:"",name:"customizeVariantProps",required:!1,type:{name:"boolean"}},setBtnActiveStateIndex:{defaultValue:null,description:"",name:"setBtnActiveStateIndex",required:!1,type:{name:"Dispatch<SetStateAction<number>>"}},index:{defaultValue:null,description:"",name:"index",required:!1,type:{name:"number"}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/atoms/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),MailIcon=function MailIcon(_ref){var props=Object.assign({},((0,objectDestructuringEmpty.Z)(_ref),_ref));return(0,jsx_runtime.jsx)("svg",(0,objectSpread2.Z)((0,objectSpread2.Z)({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props),{},{children:(0,jsx_runtime.jsx)("path",{d:"M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z",fill:void 0!==(null==props?void 0:props.fill)?null==props?void 0:props.fill:"#fff"})}))},icons_MailIcon=MailIcon;try{MailIcon.displayName="MailIcon",MailIcon.__docgenInfo={description:"",displayName:"MailIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/MailIcon.tsx#MailIcon"]={docgenInfo:MailIcon.__docgenInfo,name:"MailIcon",path:"src/components/icons/MailIcon.tsx#MailIcon"})}catch(__react_docgen_typescript_loader_error){}var Button_stories={title:"Components/Atoms/Button",component:button_Button},Template=function Template(args){return(0,jsx_runtime.jsx)(button_Button,(0,objectSpread2.Z)({},args))},Solid=Template.bind({});Solid.args={text:"Solid Button",type:ButtonType.SOLID,onClick:function onClick(){alert("You clicked the solid button")}};var Outlined=Template.bind({});Outlined.args={text:"Outlined Button",type:ButtonType.OUTLINED,onClick:function onClick(){alert("You clicked the outlined button")}};var Underlined=Template.bind({});Underlined.args={text:"Underlined Button",type:ButtonType.UNDERLINED,onClick:function onClick(){alert("You clicked the underlined button")}};var Text=Template.bind({});Text.args={text:"Text Button",type:ButtonType.TEXT,onClick:function onClick(){alert("You clicked the text button")}};var ButtonWithRightIcon=Template.bind({});ButtonWithRightIcon.args={text:"Right Icon Button",type:ButtonType.SOLID,iconRight:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(icons_MailIcon,{fill:"#fff"})})};var ButtonWithLeftIcon=Template.bind({});ButtonWithLeftIcon.args={text:"Left Icon Button",type:ButtonType.SOLID,iconLeft:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(icons_MailIcon,{fill:"#fff"})})};var Customizable=Template.bind({});Customizable.args={text:"Customizable Button",type:ButtonType.SOLID,iconLeft:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(icons_MailIcon,{fill:"#fff"})}),bgColor:"#000",hoverBgColor:"orange",hoverColor:"#fff",color:"#fff",customizeVariantProps:!0,index:0};var CustomizableDirectional=Template.bind({});CustomizableDirectional.args={text:"Customizable Button With Icons",type:ButtonType.SOLID,iconLeft:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(icons_MailIcon,{fill:"#fff"})}),iconRight:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(icons_MailIcon,{fill:"#fff"})}),bgColor:"#000",hoverBgColor:"blue",hoverColor:"#fff",color:"#fff",customizeVariantProps:!0,index:0},Solid.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Solid.parameters),Outlined.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Outlined.parameters),Underlined.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Underlined.parameters),Text.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Text.parameters),ButtonWithRightIcon.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},ButtonWithRightIcon.parameters),ButtonWithLeftIcon.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},ButtonWithLeftIcon.parameters),Customizable.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},Customizable.parameters),CustomizableDirectional.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},CustomizableDirectional.parameters);var __namedExportsOrder=["Solid","Outlined","Underlined","Text","ButtonWithRightIcon","ButtonWithLeftIcon","Customizable","CustomizableDirectional"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Button.stories.tsx":"./src/stories/Button.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[831],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);