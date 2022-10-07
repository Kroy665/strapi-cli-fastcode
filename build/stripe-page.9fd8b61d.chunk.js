(self["webpackChunkstrapi_cli"] = self["webpackChunkstrapi_cli"] || []).push([[1092],{

/***/ 81610:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(96233);
  } else {}
  

/***/ }),

/***/ 96233:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,n){ true?module.exports=n(__webpack_require__(67294),__webpack_require__(78384)):0}(this,(function(e,n){return function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=121)}({0:function(e,n,r){e.exports=r(19)()},1:function(n,r){n.exports=e},10:function(e,n,r){var t=r(25),o=r(26),i=r(22),a=r(27);e.exports=function(e,n){return t(e)||o(e,n)||i(e,n)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},121:function(e,n,r){"use strict";r.r(n),r.d(n,"Switch",(function(){return _}));var t,o,i=r(5),a=r.n(i),u=r(4),s=r.n(u),c=r(3),f=r.n(c),l=r(1),d=r.n(l),p=r(0),b=r.n(p),m=r(2),h=r.n(m),g=r(9),v=r(6),y=["label","onChange","onLabel","offLabel","selected","visibleLabels"],x=h.a.div(t||(t=f()(["\n  background: ",";\n  border: none;\n  border-radius: 16px;\n  position: relative;\n  height: ","rem;\n  width: ","rem;\n\n  & span {\n    font-size: ",";\n  }\n\n  &:before {\n    content: '';\n    background: ",";\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    position: absolute;\n    transition: all 0.5s;\n    left: ",";\n    top: ",";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &:before {\n      transition: none;\n    }\n  }\n"])),(function(e){return e.theme.colors.danger500}),1.5,2.5,(function(e){return e.visibleLabels?"1rem":0}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.spaces[1]})),O=h.a.button(o||(o=f()(["\n  background: transparent;\n  padding: 0;\n  border: none;\n\n  &[aria-checked='true'] "," {\n    background: ",";\n  }\n\n  &[aria-checked='true'] ",":before {\n    transform: translateX(1rem);\n  }\n"])),x,(function(e){return e.theme.colors.success500}),x),_=d.a.forwardRef((function(e,n){var r=e.label,t=e.onChange,o=e.onLabel,i=e.offLabel,u=e.selected,c=e.visibleLabels,f=s()(e,y);return d.a.createElement(O,a()({ref:n,role:"switch","aria-checked":u,"aria-label":r,onClick:t,visibleLabels:c,type:"button"},f),d.a.createElement(g.Flex,null,d.a.createElement(x,null,d.a.createElement("span",null,o),d.a.createElement("span",null,i)),c&&d.a.createElement(v.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:u?"success600":"danger600"},u?o:i)))}));_.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},_.propTypes={label:b.a.string.isRequired,offLabel:b.a.string,onChange:b.a.func.isRequired,onLabel:b.a.string,selected:b.a.bool.isRequired,visibleLabels:b.a.bool},_.displayName="Switch"},13:function(e,n){function r(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(n)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,n,r){"use strict";var t=r(20);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,n,r,o,i,a){if(a!==t){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function n(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2:function(e,r){e.exports=n},20:function(e,n,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,n,r){var t=r(21);e.exports=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,n){e.exports=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,n){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},26:function(e,n){e.exports=function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}},e.exports.default=e.exports,e.exports.__esModule=!0},27:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,n){e.exports=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,n,r){var t=r(24);e.exports=function(e,n){if(null==e)return{};var r,o,i=t(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},5:function(e,n){function r(){return e.exports=r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,n,r){"use strict";r.r(n),r.d(n,"Box",(function(){return g}));var t,o=r(3),i=r.n(o),a=r(2),u=r.n(a),s=r(7),c=r(1),f=r.n(c),l=r(0),d=r.n(l),p=function(e){return f.a.createElement("div",e)},b={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};p.defaultProps=b,p.propTypes=m;var h={color:!0},g=u.a.div.withConfig({shouldForwardProp:function(e,n){return!h[e]&&n(e)}})(t||(t=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var n=e.fontSize;return e.theme.fontSizes[n]||n}),(function(e){var n=e.theme,r=e.background;return n.colors[r]}),(function(e){var n=e.theme,r=e.color;return n.colors[r]}),(function(e){var n=e.theme,r=e.padding;return Object(s.a)("padding",r,n)}),(function(e){var n=e.theme,r=e.paddingTop;return Object(s.a)("padding-top",r,n)}),(function(e){var n=e.theme,r=e.paddingRight;return Object(s.a)("padding-right",r,n)}),(function(e){var n=e.theme,r=e.paddingBottom;return Object(s.a)("padding-bottom",r,n)}),(function(e){var n=e.theme,r=e.paddingLeft;return Object(s.a)("padding-left",r,n)}),(function(e){var n=e.theme,r=e.marginLeft;return Object(s.a)("margin-left",r,n)}),(function(e){var n=e.theme,r=e.marginRight;return Object(s.a)("margin-right",r,n)}),(function(e){var n=e.theme,r=e.marginTop;return Object(s.a)("margin-top",r,n)}),(function(e){var n=e.theme,r=e.marginBottom;return Object(s.a)("margin-bottom",r,n)}),(function(e){var n=e.theme;return e.hiddenS?"".concat(n.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var n=e.theme;return e.hiddenXS?"".concat(n.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var n=e.theme,r=e.hasRadius,t=e.borderRadius;return r?n.borderRadius:t}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var n=e.borderColor;return e.theme.colors[n]}),(function(e){var n=e.theme,r=e.borderColor,t=e.borderStyle,o=e.borderWidth;if(r&&!t&&!o)return"1px solid ".concat(n.colors[r])}),(function(e){var n=e.theme,r=e.shadow;return n.shadows[r]}),(function(e){return e.pointerEvents}),(function(e){var n=e._hover,r=e.theme;return n?n(r):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var n=e.left;return e.theme.spaces[n]||n}),(function(e){var n=e.right;return e.theme.spaces[n]||n}),(function(e){var n=e.top;return e.theme.spaces[n]||n}),(function(e){var n=e.bottom;return e.theme.spaces[n]||n}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var n=e.width;return e.theme.spaces[n]||n}),(function(e){var n=e.maxWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.minWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.height;return e.theme.spaces[n]||n}),(function(e){var n=e.maxHeight;return e.theme.spaces[n]||n}),(function(e){var n=e.minHeight;return e.theme.spaces[n]||n}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));g.defaultProps=b,g.propTypes=m},7:function(e,n,r){"use strict";var t=r(10),o=r.n(t),i=r(13),a=r.n(i);n.a=function(e,n,r){var t=n;if(Array.isArray(n)||"object"!==a()(n)||(t=[null==n?void 0:n.desktop,null==n?void 0:n.tablet,null==n?void 0:n.mobile]),void 0!==t){if(Array.isArray(t)){var i=t,u=o()(i,3),s=u[0],c=u[1],f=u[2],l="".concat(e,": ").concat(r.spaces[s],";");return void 0!==c&&(l+="".concat(r.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(r.spaces[c],";\n        }")),void 0!==f&&(l+="".concat(r.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(r.spaces[f],";\n        }")),l}var d=r.spaces[t]||t;return"".concat(e,": ").concat(d,";")}}},9:function(e,n,r){"use strict";r.r(n),r.d(n,"Flex",(function(){return v}));var t,o=r(3),i=r.n(o),a=r(2),u=r.n(a),s=r(6),c=r(7),f=r(1),l=r.n(f),d=r(0),p=r.n(d),b=function(e){return l.a.createElement("div",e)},m={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},h={alignItems:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.number]),direction:p.a.string,gap:p.a.oneOfType([p.a.shape({desktop:p.a.number,mobile:p.a.number,tablet:p.a.number}),p.a.number,p.a.arrayOf(p.a.number),p.a.string]),inline:p.a.bool,justifyContent:p.a.string,reverse:p.a.bool,shrink:p.a.number,wrap:p.a.string};b.defaultProps=m,b.propTypes=h;var g={direction:!0},v=u()(s.Box).withConfig({shouldForwardProp:function(e,n){return!g[e]&&n(e)}})(t||(t=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-shrink: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(e){return e.alignItems}),(function(e){return e.inline?"inline-flex":"flex"}),(function(e){return e.direction}),(function(e){return e.shrink}),(function(e){return e.wrap}),(function(e){var n=e.gap,r=e.theme;return Object(c.a)("gap",n,r)}),(function(e){return e.justifyContent}));v.defaultProps=m,v.propTypes=h}})}));

/***/ }),

/***/ 11077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Settings)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(84734);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(5493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(19408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(34626);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(78862);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(62031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(55967);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(49425);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Alert.js
var Alert = __webpack_require__(9925);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(43808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Link.js
var Link = __webpack_require__(85104);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Switch.js
var Switch = __webpack_require__(81610);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(67826);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Configuration/constant.js
const currencies = [
  {
    label: "USD - US Dollar",
    value: "usd"
  },
  {
    label: "ALL - Albania Lek",
    value: "all"
  },
  {
    label: "AED - United Arab Emirates Dirham",
    value: "aed"
  },
  {
    label: "ANG - Netherlands Antillean Guilder",
    value: "ang"
  },
  {
    label: "ARS - Argentine Peso",
    value: "ars"
  },
  {
    label: "AWG - Aruba Guilder",
    value: "awg"
  },
  {
    label: "AUD - Australian Dollar",
    value: "aud"
  },
  {
    label: "BBD - Barbados Dollar",
    value: "bbd"
  },
  {
    label: "BDT - Bangladeshi Taka",
    value: "bdt"
  },
  {
    label: "BGN - Bulgarian Lev",
    value: "bgn"
  },
  {
    label: "BMD - Bermudan Dollar",
    value: "bmd"
  },
  {
    label: "BRL - Brazilian Real",
    value: "brl"
  },
  {
    label: "CAD - Canadian Dollar",
    value: "cad"
  },
  {
    label: "CHF - Swiss Franc",
    value: "chf"
  },
  {
    label: "COP - Colombian Peso",
    value: "cop"
  },
  {
    label: "EGP - Egyptian Pound",
    value: "egp"
  },
  {
    label: "EUR - Euro",
    value: "eur"
  },
  {
    label: "GBP - British Pound",
    value: "gbp"
  },
  {
    label: "HKD - Hong Kong Dollar",
    value: "hkd"
  },
  {
    label: "IDR - Indonesian Rupiah",
    value: "idr"
  },
  {
    label: "INR - Indian Rupee",
    value: "inr"
  },
  {
    label: "JPY - Japanese Yen",
    value: "jpy"
  },
  {
    label: "KRW - South Korean Won",
    value: "krw"
  },
  {
    label: "LKR - Sri Lankan Rupee",
    value: "lkr"
  },
  {
    label: "MXN - Mexican Peso",
    value: "mxn"
  },
  {
    label: "MYR - Malaysian Ringitt",
    value: "myr"
  },
  {
    label: "NGN - Nigerian Naira",
    value: "ngn"
  },
  {
    label: "NOK - Norweign Krone",
    value: "nok"
  },
  {
    label: "NPR - Nepalese Rupee",
    value: "npr"
  },
  {
    label: "NZD - New Zealand Dollar",
    value: "nzd"
  },
  {
    label: "PLN - Poland Zloty",
    value: "pln"
  },
  {
    label: "PHP - Philippine Piso",
    value: "php"
  },
  {
    label: "PKR - Pakistani Rupee",
    value: "pkr"
  },
  {
    label: "QAR - Qatari Rial",
    value: "qar"
  },
  {
    label: "ZAR - South Africa Rand",
    value: "zar"
  },
  {
    label: "SAR - Saudi Riyal",
    value: "sar"
  },
  {
    label: "SGD - Singapore Dollar",
    value: "sgd"
  },
  {
    label: "SEK - Sweden Krona",
    value: "sek"
  },
  {
    label: "RON - Romania New Leu",
    value: "ron"
  },
  {
    label: "THB - Thai Baht",
    value: "thb"
  },
  {
    label: "TWD - Taiwan New Dollar",
    value: "twd"
  },
  {
    label: "TRL - Turkey Lira",
    value: "trl"
  },
  {
    label: "UAH - Ukraine Hryvna",
    value: "uah"
  },
  {
    label: "VND - Viet Nam Dong",
    value: "vnd"
  },
  {
    label: "ZWD - Zimbabwe Dollar",
    value: "zwd"
  }
];
/* harmony default export */ const constant = (currencies);

// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/utils/apiCalls.js + 1 modules
var apiCalls = __webpack_require__(93768);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Configuration/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

















const Configuration = () => {
  const [stripeConfiguration, setStripeConfiguration] = (0,react.useState)({
    isLiveMode: false,
    stripeLivePubKey: "",
    stripeLiveSecKey: "",
    stripeTestPubKey: "",
    stripeTestSecKey: "",
    checkoutSuccessUrl: "",
    checkoutCancelUrl: "",
    currency: void 0
  });
  const [showAlert, setShowAlert] = (0,react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
  const [error, setError] = (0,react.useState)({
    stripeLivePubKey: "",
    stripeLiveSecKey: "",
    stripeTestPubKey: "",
    stripeTestSecKey: "",
    checkoutSuccessUrl: "",
    checkoutCancelUrl: "",
    currency: ""
  });
  (0,react.useEffect)(() => {
    (() => __async(void 0, null, function* () {
      var _a;
      const response = yield (0,apiCalls/* getStripeConfiguration */.A7)();
      if ((_a = response.data) == null ? void 0 : _a.response) {
        const {
          isLiveMode,
          stripeLivePubKey,
          stripeLiveSecKey,
          stripeTestPubKey,
          stripeTestSecKey,
          checkoutSuccessUrl,
          checkoutCancelUrl,
          currency
        } = response.data.response;
        setStripeConfiguration(__spreadProps(__spreadValues({}, stripeConfiguration), {
          isLiveMode,
          stripeLivePubKey,
          stripeLiveSecKey,
          stripeTestPubKey,
          stripeTestSecKey,
          checkoutSuccessUrl,
          checkoutCancelUrl,
          currency
        }));
      }
    }))();
  }, []);
  const handleChangeCurrency = (value) => {
    setStripeConfiguration(__spreadProps(__spreadValues({}, stripeConfiguration), { currency: value }));
    setError(__spreadProps(__spreadValues({}, error), { currency: "" }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStripeConfiguration(__spreadProps(__spreadValues({}, stripeConfiguration), { [name]: value }));
    if (name === "stripeLivePubKey") {
      setError(__spreadProps(__spreadValues({}, error), { stripeLivePubKey: "" }));
    } else if (name === "stripeLiveSecKey") {
      setError(__spreadProps(__spreadValues({}, error), { stripeLiveSecKey: "" }));
    } else if (name === "stripeTestPubKey") {
      setError(__spreadProps(__spreadValues({}, error), { stripeTestPubKey: "" }));
    } else if (name === "stripeTestSecKey") {
      setError(__spreadProps(__spreadValues({}, error), { stripeTestSecKey: "" }));
    } else if (name === "checkoutSuccessUrl") {
      setError(__spreadProps(__spreadValues({}, error), { checkoutSuccessUrl: "" }));
    } else if (name === "checkoutCancelUrl") {
      setError(__spreadProps(__spreadValues({}, error), { checkoutCancelUrl: "" }));
    }
  };
  const handleSubmit = () => __async(void 0, null, function* () {
    setIsSubmitting(true);
    if (!stripeConfiguration.stripeLivePubKey && !stripeConfiguration.stripeLiveSecKey && !stripeConfiguration.stripeTestPubKey && !stripeConfiguration.stripeTestSecKey && !stripeConfiguration.checkoutSuccessUrl && !stripeConfiguration.checkoutCancelUrl && !stripeConfiguration.currency) {
      setError(__spreadProps(__spreadValues({}, error), {
        stripeLivePubKey: "Live Stripe Publishable Key is required",
        stripeLiveSecKey: "Live Stripe Secret Key is required",
        stripeTestPubKey: "Test Stripe Publishable Key is required",
        stripeTestSecKey: "Test Stripe Secret Key is required",
        checkoutSuccessUrl: "Checkout Success Page URL is required",
        checkoutCancelUrl: "Checkout Cancel Page URL is required",
        currency: "Currency is required"
      }));
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeLivePubKey) {
      setError(__spreadProps(__spreadValues({}, error), {
        stripeLivePubKey: "Live Stripe Publishable Key is required"
      }));
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeLiveSecKey) {
      setError(__spreadProps(__spreadValues({}, error), {
        stripeLiveSecKey: "Live Stripe Secret Key is required"
      }));
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeTestPubKey) {
      setError(__spreadProps(__spreadValues({}, error), {
        stripeTestPubKey: "Test Stripe Publishable Key is required"
      }));
      setIsSubmitting(false);
    } else if (!stripeConfiguration.stripeTestSecKey) {
      setError(__spreadProps(__spreadValues({}, error), {
        stripeTestSecKey: "Test Stripe Secret Key is required"
      }));
      setIsSubmitting(false);
    } else if (!stripeConfiguration.checkoutSuccessUrl) {
      setError(__spreadProps(__spreadValues({}, error), {
        checkoutSuccessUrl: "Checkout Success Page URL is required"
      }));
      setIsSubmitting(false);
    } else if (!stripeConfiguration.checkoutCancelUrl) {
      setError(__spreadProps(__spreadValues({}, error), {
        checkoutCancelUrl: "Checkout Cancel Page URL is required"
      }));
      setIsSubmitting(false);
    } else if (!stripeConfiguration.currency) {
      setError(__spreadProps(__spreadValues({}, error), {
        currency: "Currency is required"
      }));
      setIsSubmitting(false);
    } else {
      const response = yield (0,apiCalls/* saveStripeConfiguration */.HI)(stripeConfiguration);
      if (response.data.ok) {
        setShowAlert(true);
      }
      setIsSubmitting(false);
    }
  });
  return /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: "Stripe"
  }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: "Stripe Configuration",
    primaryAction: /* @__PURE__ */ react.createElement(Button.Button, {
      type: "submit",
      loading: isSubmitting,
      onClick: handleSubmit,
      startIcon: /* @__PURE__ */ react.createElement((Check_default()), null),
      size: "L"
    }, "Save")
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2
  }, showAlert ? /* @__PURE__ */ react.createElement(Alert.Alert, {
    closeLabel: "Close alert",
    title: "Stripe configuration",
    variant: "success",
    onClose: () => {
      setShowAlert(false);
    }
  }, "saved successfully.") : ""), /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta"
  }, "Credentials")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2,
    paddingTop: 1
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "omega"
  }, "Configure your stripe publishable and secret Key.")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2
  }, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 12,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 3
  }, /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "center"
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingRight: 4
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta"
  }, "Live Mode")), /* @__PURE__ */ react.createElement(Switch.Switch, {
    label: "Live Mode",
    visibleLabels: true,
    offLabel: "Stripe is in test mode",
    onLabel: "Stripe is ready to accept payment",
    selected: stripeConfiguration.isLiveMode,
    onChange: () => {
      setStripeConfiguration(__spreadProps(__spreadValues({}, stripeConfiguration), {
        isLiveMode: !stripeConfiguration.isLiveMode
      }));
    }
  })))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2,
    paddingBottom: 3
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "stripeLivePubKey",
    label: "Live Stripe Publishable Key",
    placeholder: "Live Stripe Publishable Key",
    required: true,
    value: stripeConfiguration.stripeLivePubKey,
    error: error.stripeLivePubKey ? error.stripeLivePubKey : "",
    onChange: handleChange
  }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2,
    paddingBottom: 3
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "stripeLiveSecKey",
    placeholder: "Live Stripe Secret Key",
    label: "Live Stripe Secret Key",
    required: true,
    value: stripeConfiguration.stripeLiveSecKey,
    error: error.stripeLiveSecKey ? error.stripeLiveSecKey : "",
    onChange: handleChange
  }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "stripeTestPubKey",
    placeholder: "Test Stripe Publishable Key",
    label: "Test Stripe Publishable Key",
    required: true,
    value: stripeConfiguration.stripeTestPubKey,
    error: error.stripeTestPubKey ? error.stripeTestPubKey : "",
    onChange: handleChange
  }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "stripeTestSecKey",
    placeholder: "Test Stripe Secret Key",
    label: "Test Stripe Secret Key",
    required: true,
    value: stripeConfiguration.stripeTestSecKey,
    error: error.stripeTestSecKey ? error.stripeTestSecKey : "",
    onChange: handleChange
  })))))), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta"
  }, "Global Setting")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2
  }, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2,
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "checkoutSuccessUrl",
    label: "Payment Success Page URL",
    required: true,
    value: stripeConfiguration.checkoutSuccessUrl,
    error: error.checkoutSuccessUrl ? error.checkoutSuccessUrl : "",
    onChange: handleChange,
    hint: "Redirects to the success page after the  payment successful"
  }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2,
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    name: "checkoutCancelUrl",
    label: "Payment Cancel Page URL",
    required: true,
    value: stripeConfiguration.checkoutCancelUrl,
    error: error.checkoutCancelUrl ? error.checkoutCancelUrl : "",
    onChange: handleChange,
    hint: "Redirects to the cancel page after the  payment failed"
  }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    id: "select1",
    label: "Choose Currency",
    required: true,
    placeholder: "Choose Currency",
    clearLabel: "Clear the Currency",
    error: error.currency ? error.currency : "",
    onClear: () => setStripeConfiguration(__spreadProps(__spreadValues({}, stripeConfiguration), {
      currency: void 0
    })),
    onChange: (value) => handleChangeCurrency(value),
    value: stripeConfiguration.currency
  }, constant && constant.map((currency, idx) => /* @__PURE__ */ react.createElement(Select.Option, {
    value: currency.value,
    key: idx
  }, currency.label)))))))), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingBottom: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "delta"
  }, "Email Settings")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2
  }, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Link.Link, {
    href: "https://support.stripe.com/questions/set-up-account-email-notifications",
    isExternal: true
  }, "Setup seller notification")), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Link.Link, {
    href: " https://stripe.com/docs/receipts",
    isExternal: true
  }, "Setup buyer notification"))))), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 2
  }, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi"
  }, "Need help? Contact us at : support@higheredlab.com")))))));
};
/* harmony default export */ const components_Configuration = (Configuration);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/pages/Settings/index.js


const Settings = () => {
  return /* @__PURE__ */ react.createElement(components_Configuration, null);
};
/* harmony default export */ const pages_Settings = (Settings);


/***/ })

}]);