(self["webpackChunkstrapi_cli"] = self["webpackChunkstrapi_cli"] || []).push([[6750],{

/***/ 68115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(7446);
  } else {}
  

/***/ }),

/***/ 7446:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384),__webpack_require__(66526)):0}(this,(function(n,e,t){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=112)}({0:function(n,e,t){n.exports=t(19)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(25),o=t(26),i=t(22),a=t(27);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},112:function(n,e,t){"use strict";t.r(e),t.d(e,"Crumb",(function(){return w})),t.d(e,"Breadcrumbs",(function(){return S}));var r,o=t(4),i=t.n(o),a=t(3),u=t.n(a),s=t(1),c=t.n(s),f=t(0),l=t.n(f),p=t(2),d=t.n(p),h=t(50),m=t.n(h),g=t(8),b=t(6),v=t(9),y=t(18),x=["children","label"],O=d()(v.Flex)(r||(r=u()(["\n  svg {\n    height: ","rem;\n    width: ","rem;\n    path {\n      fill: ",";\n    }\n  }\n  :last-of-type "," {\n    display: none;\n  }\n  :last-of-type "," {\n    color: ",";\n    font-weight: ",";\n  }\n"])),.625,.625,(function(n){return n.theme.colors.neutral500}),b.Box,g.Typography,(function(n){return n.theme.colors.neutral800}),(function(n){return n.theme.fontWeights.bold})),w=function(n){var e=n.children;return c.a.createElement(O,{inline:!0,as:"li"},c.a.createElement(g.Typography,{variant:"pi",textColor:"neutral600"},e),c.a.createElement(b.Box,{"aria-hidden":!0,paddingLeft:3,paddingRight:3},c.a.createElement(m.a,null)))};w.displayName="Crumb",w.propTypes={children:l.a.string.isRequired};var T=l.a.shape({type:l.a.oneOf([w])}),S=function(n){var e=n.children,t=n.label,r=i()(n,x);return c.a.createElement(v.Flex,r,c.a.createElement(y.VisuallyHidden,null,t),c.a.createElement("ol",{"aria-hidden":!0},e))};S.displayName="Breadcrumbs",S.propTypes={children:l.a.oneOfType([l.a.arrayOf(T),T]).isRequired,label:l.a.string.isRequired}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},18:function(n,e,t){"use strict";t.r(e),t.d(e,"VisuallyHidden",(function(){return u}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a).a.div(r||(r=i()(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])))},19:function(n,e,t){"use strict";var r=t(20);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e,t){var r=t(21);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){u=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(u)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){var r=t(24);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},50:function(n,e){n.exports=t},6:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(7),c=t(1),f=t.n(c),l=t(0),p=t.n(l),d=function(n){return f.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},m={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};d.defaultProps=h,d.propTypes=m;var g={color:!0},b=u.a.div.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(s.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(s.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(s.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(s.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(s.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(s.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(s.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(s.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(s.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));b.defaultProps=h,b.propTypes=m},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,u=o()(i,3),s=u[0],c=u[1],f=u[2],l="".concat(n,": ").concat(t.spaces[s],";");return void 0!==c&&(l+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(l+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),l}var p=t.spaces[r]||r;return"".concat(n,": ").concat(p,";")}}},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=["alpha","beta","delta","epsilon","omega","pi","sigma"],c=t(1),f=t.n(c),l=t(0),p=t.n(l),d=function(n){return f.a.createElement("div",n)},h={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},m={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(s)};d.defaultProps=h,d.propTypes=m;var g={fontSize:!0,fontWeight:!0},b=u.a.span.withConfig({shouldForwardProp:function(n,e){return!g[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));b.defaultProps=h,b.propTypes=m},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Flex",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),u=t.n(a),s=t(6),c=t(7),f=t(1),l=t.n(f),p=t(0),d=t.n(p),h=function(n){return l.a.createElement("div",n)},m={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},g={alignItems:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.number]),direction:d.a.string,gap:d.a.oneOfType([d.a.shape({desktop:d.a.number,mobile:d.a.number,tablet:d.a.number}),d.a.number,d.a.arrayOf(d.a.number),d.a.string]),inline:d.a.bool,justifyContent:d.a.string,reverse:d.a.bool,shrink:d.a.number,wrap:d.a.string};h.defaultProps=m,h.propTypes=g;var b={direction:!0},v=u()(s.Box).withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-shrink: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(n){return n.alignItems}),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.shrink}),(function(n){return n.wrap}),(function(n){var e=n.gap,t=n.theme;return Object(c.a)("gap",e,t)}),(function(n){return n.justifyContent}));v.defaultProps=m,v.propTypes=g}})}));

/***/ }),

/***/ 77602:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}({0:function(t,r){t.exports=e},6:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L23.86 11.86a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L10.02 22.02a.2.2 0 010-.282L18.26 13.5H.2a.2.2 0 01-.2-.2v-2.6z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 47644:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=19)}({0:function(t,r){t.exports=e},19:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 7.111c0-.24.087-.449.26-.625L6.385.264A.834.834 0 017 0c.237 0 .442.088.615.264l6.125 6.222a.86.86 0 01.26.625.86.86 0 01-.26.625.834.834 0 01-.615.264H.875a.834.834 0 01-.615-.264.86.86 0 01-.26-.625z",fill:"#32324D"}))}}})}));

/***/ }),

/***/ 67685:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=23)}({0:function(t,r){t.exports=e},23:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95zm2-1.507C18.553 1.02 22.979 5.447 23.457 11H13V.543z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 55520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(49656);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(68547);
// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/pluginId.js
var pluginId = __webpack_require__(53783);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(5493);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(49425);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Divider.js
var Divider = __webpack_require__(14276);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/ModalLayout.js
var ModalLayout = __webpack_require__(75146);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(67826);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(19408);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(34626);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(55967);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Loader.js
var Loader = __webpack_require__(40064);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(43808);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/NumberInput.js
var NumberInput = __webpack_require__(97377);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Textarea.js
var Textarea = __webpack_require__(59626);
// EXTERNAL MODULE: ./node_modules/strapi-stripe/admin/src/utils/apiCalls.js + 1 modules
var apiCalls = __webpack_require__(93768);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/CreateProduct/index.js
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














const CreateProduct = ({ isVisible, handleClose, handleClickSave }) => {
  const [title, setTitle] = (0,react.useState)("");
  const [price, setPrice] = (0,react.useState)();
  const [image, setImage] = (0,react.useState)([]);
  const [paymentType, setPaymentType] = (0,react.useState)("");
  const [isSubscription, setIsSubscription] = (0,react.useState)(false);
  const [description, setDescription] = (0,react.useState)("");
  const [paymentInterval, setPaymentInterval] = (0,react.useState)("");
  const [trialPeriodDays, setTrialPeriodDays] = (0,react.useState)();
  const [heading, setHeading] = (0,react.useState)("Product");
  const [error, setError] = (0,react.useState)({
    title: "",
    price: "",
    image: "",
    description: "",
    paymentType: "",
    paymentInterval: ""
  });
  const [upload, setUpload] = (0,react.useState)(false);
  const [uploadMessage, setUploadMessage] = (0,react.useState)("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
      setError(__spreadProps(__spreadValues({}, error), { title: "" }));
    } else if (name === "image") {
      setImage(event.target.files);
      setError(__spreadProps(__spreadValues({}, error), { image: "" }));
    } else if (name === "description") {
      setDescription(value);
      setError(__spreadProps(__spreadValues({}, error), { description: "" }));
    }
  };
  const handleChangePaymentType = (value) => {
    setPaymentType(value);
    setError(__spreadProps(__spreadValues({}, error), { paymentType: "" }));
    if (value === "subscription") {
      setIsSubscription(true);
      setHeading("Subscription");
    } else {
      setIsSubscription(false);
      setHeading("Product");
    }
  };
  const handleChangePaymentInterval = (value) => {
    setPaymentInterval(value);
    setError(__spreadProps(__spreadValues({}, error), { paymentInterval: "" }));
  };
  const handleChangeNumber = (value) => {
    setPrice(value);
    setError(__spreadProps(__spreadValues({}, error), { price: "" }));
  };
  const handleChangeTrialPeriod = (value) => {
    setTrialPeriodDays(value);
  };
  const handleSaveProduct = () => __async(void 0, null, function* () {
    if (!title && !price && image.length === 0 && !description && !paymentType) {
      setError(__spreadProps(__spreadValues({}, error), {
        title: "Title is required",
        price: "Price is required",
        image: "Product Image is required",
        description: "Description is required",
        paymentType: "Payment Type is required",
        paymentInterval: ""
      }));
    } else if (!paymentType) {
      setError(__spreadProps(__spreadValues({}, error), {
        title: "",
        price: "",
        image: "",
        description: "",
        paymentType: "Payment Type is required",
        paymentInterval: ""
      }));
    } else if (!price) {
      setError(__spreadProps(__spreadValues({}, error), {
        title: "",
        price: "Price is required",
        image: "",
        description: "",
        paymentType: "",
        paymentInterval: ""
      }));
    } else if (!title) {
      setError(__spreadProps(__spreadValues({}, error), {
        title: "Title is required",
        price: "",
        image: "",
        description: "",
        paymentType: "",
        paymentInterval: ""
      }));
    } else if (image.length < 0) {
      setError(__spreadProps(__spreadValues({}, error), {
        title: "",
        price: "",
        image: "Product Image is required",
        description: "",
        paymentType: "",
        paymentInterval: ""
      }));
    } else if (!description) {
      setError(__spreadProps(__spreadValues({}, error), {
        title: "",
        price: "",
        image: "",
        description: "Description is required",
        paymentType: "",
        paymentInterval: ""
      }));
    } else if (isSubscription && !paymentInterval) {
      setError(__spreadProps(__spreadValues({}, error), {
        title: "",
        price: "",
        image: "",
        description: "",
        paymentType: "",
        paymentInterval: "Payment Interval is required"
      }));
    } else {
      let imageId;
      let imageUrl;
      if (image.length > 0) {
        setUpload(true);
        setUploadMessage("Uploading Product image");
        const response = yield (0,apiCalls/* uploadFiles */.IL)(image);
        imageUrl = `${window.location.origin}${response.data[0].url}`;
        imageId = response.data[0].id;
      }
      setUpload(false);
      handleClickSave(
        title,
        price,
        imageId,
        imageUrl,
        description,
        isSubscription,
        paymentInterval,
        trialPeriodDays
      );
      setTitle("");
      setPrice();
      setImage({});
      setDescription("");
      setIsSubscription(false);
      setPaymentInterval("");
      setTrialPeriodDays("");
      setPaymentType("");
    }
  });
  return /* @__PURE__ */ react.createElement(Box.Box, null, isVisible && /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: handleClose,
    labelledBy: "title"
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    direction: "column",
    justifyContent: "start",
    alignItems: "start"
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "title",
    variant: "beta"
  }, "Create ", heading), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "omega"
  }, heading === "Product" ? "For a product, you would charge your customer only one-time." : "For a subscription, you would charge your customer every month.")))), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 5
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    id: "select1",
    label: "Payment Type",
    required: true,
    clearLabel: "Clear the payment type",
    hint: "Ex:One-Time or Subscription",
    error: error.paymentType ? error.paymentType : "",
    onClear: () => setPaymentType(""),
    onChange: (value) => handleChangePaymentType(value),
    value: paymentType
  }, /* @__PURE__ */ react.createElement(Select.Option, {
    value: "oneTime"
  }, "One-Time"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "subscription"
  }, "Subscription"))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(NumberInput.NumberInput, {
    label: "Price",
    name: "price",
    onValueChange: (value) => handleChangeNumber(value),
    value: price,
    error: error.price ? error.price : "",
    required: true
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    label: "Title",
    name: "title",
    onChange: handleChange,
    error: error.title ? error.title : "",
    required: true
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold"
  }, "Image ", /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "danger700"
  }, "*")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 3
  }, /* @__PURE__ */ react.createElement("input", {
    type: "file",
    name: "image",
    onChange: handleChange,
    accept: "image/*"
  })), error.image ? /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    textColor: "danger700"
  }, error.image) : ""), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 12
  }, /* @__PURE__ */ react.createElement(Textarea.Textarea, {
    label: "Description",
    name: "description",
    onChange: handleChange,
    error: error.description ? error.description : "",
    required: true
  }, description)), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    id: "select2",
    label: "Payment Interval",
    required: isSubscription,
    disabled: !isSubscription,
    clearLabel: "Clear the payment interval",
    hint: "Subscription billing frequency: weekly, monthly or yearly.",
    error: error.paymentInterval ? error.paymentInterval : "",
    onClear: () => setPaymentInterval(""),
    onChange: (value) => handleChangePaymentInterval(value),
    value: paymentInterval
  }, /* @__PURE__ */ react.createElement(Select.Option, {
    value: "month"
  }, "Month"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "year"
  }, "Year"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "week"
  }, "Week"))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(NumberInput.NumberInput, {
    label: "Trial Period Days",
    name: "trialPeriodDays",
    disabled: !isSubscription,
    hint: "Free trial period for the subscription.",
    onValueChange: (value) => handleChangeTrialPeriod(value),
    value: trialPeriodDays
  })))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: handleClose,
      variant: "tertiary"
    }, "Cancel"),
    endActions: upload ? /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "center"
    }, /* @__PURE__ */ react.createElement(Loader.Loader, {
      small: true
    }, "Loading......"), /* @__PURE__ */ react.createElement(Typography.Typography, {
      fontWeight: "bold",
      textColor: "primary600",
      as: "h2"
    }, uploadMessage || "")) : /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "default",
      onClick: handleSaveProduct
    }, "create")
  })));
};
CreateProduct.propTypes = {
  isVisible: (prop_types_default()).bool.isRequired,
  handleClose: (prop_types_default()).func.isRequired,
  handleClickSave: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_CreateProduct = (CreateProduct);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(41798);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(30741);
// EXTERNAL MODULE: ./node_modules/html-react-parser/index.js
var html_react_parser = __webpack_require__(30488);
;// CONCATENATED MODULE: ./node_modules/html-react-parser/index.mjs


var domToReact = html_react_parser.domToReact;
var htmlToDOM = html_react_parser.htmlToDOM;
var attributesToProps = html_react_parser.attributesToProps;
var Element = html_react_parser.Element;

/* harmony default export */ const node_modules_html_react_parser = (html_react_parser);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Pagination.js
var Pagination = __webpack_require__(55746);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/EmptyStateLayout.js
var EmptyStateLayout = __webpack_require__(62791);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(26851);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(19352);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/CarretUp.js
var CarretUp = __webpack_require__(47644);
var CarretUp_default = /*#__PURE__*/__webpack_require__.n(CarretUp);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/CarretDown.js
var CarretDown = __webpack_require__(99962);
var CarretDown_default = /*#__PURE__*/__webpack_require__.n(CarretDown);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Badge.js
var Badge = __webpack_require__(49903);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Plus.js
var Plus = __webpack_require__(80768);
var Plus_default = /*#__PURE__*/__webpack_require__.n(Plus);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ChartPie.js
var ChartPie = __webpack_require__(67685);
var ChartPie_default = /*#__PURE__*/__webpack_require__.n(ChartPie);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Link.js
var Link = __webpack_require__(42724);
var Link_default = /*#__PURE__*/__webpack_require__.n(Link);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/linkIcon.js


const LinkIcon = () => /* @__PURE__ */ react.createElement((Link_default()), null);
/* harmony default export */ const linkIcon = (LinkIcon);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/constant.js
const stripeResponse = {
  id: "cs_test_a1V6WMk1RmA0JKhI2vlMIrJrINvFWq62hgUnuyYbyxuBr2twbsMA4TXXDD",
  object: "checkout.session",
  after_expiration: null,
  allow_promotion_codes: null,
  amount_subtotal: 5e5,
  amount_total: 5e5,
  automatic_tax: {
    enabled: false,
    status: null
  },
  billing_address_collection: null,
  cancel_url: "https://your stripe cancel page",
  client_reference_id: null,
  consent: null,
  consent_collection: null,
  currency: "inr",
  customer: "cus_LQ5C1gQ044ORtX",
  customer_creation: "always",
  customer_details: {
    address: {
      city: null,
      country: "IN",
      line1: null,
      line2: null,
      postal_code: null,
      state: null
    },
    email: "test@gmail.com",
    name: "test",
    phone: null,
    tax_exempt: "none",
    tax_ids: []
  },
  customer_email: null,
  expires_at: 1648785031,
  livemode: false,
  locale: null,
  metadata: {
    productId: "23",
    productName: "Web Development"
  },
  mode: "payment",
  payment_intent: "pi_1KjF1oJC3uIZHgp7ltqp53hr",
  payment_link: null,
  payment_method_options: {},
  payment_method_types: ["card"],
  payment_status: "paid",
  phone_number_collection: {
    enabled: false
  },
  recovered_from: null,
  setup_intent: null,
  shipping: null,
  shipping_address_collection: null,
  shipping_options: [],
  shipping_rate: null,
  status: "complete",
  submit_type: null,
  subscription: null,
  success_url: "http://your success?sessionId={CHECKOUT_SESSION_ID}",
  total_details: {
    amount_discount: 0,
    amount_shipping: 0,
    amount_tax: 0
  },
  url: null
};
const ProductRespone = {
  id: 22,
  title: "React + node",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",
  price: 450,
  productImage: "https://cdn.google.com/photo/developer-3461405_960_720.png",
  stripeProductId: "prod_LPiFyB7vHeVKQS",
  stripePriceId: "price_1KispFJC3uIZHgp79g4TJ80c",
  createdAt: "2022-03-30T04:08:05.278Z",
  updatedAt: "2022-03-30T04:08:05.278Z",
  currency: "usd"
};
const currencies = [
  {
    currency: "Albania Lek",
    abbreviation: "ALL",
    symbol: "&#76;&#101;&#107;"
  },
  {
    currency: "United Arab Emirates Dirham",
    abbreviation: "AED",
    symbol: "&#x62f;&#x2e;&#x625;"
  },
  {
    currency: "Afghanistan Afghani",
    abbreviation: "AFN",
    symbol: "&#1547;"
  },
  {
    currency: "Argentina Peso",
    abbreviation: "ARS",
    symbol: "&#36;"
  },
  {
    currency: "Aruba Guilder",
    abbreviation: "AWG",
    symbol: "&#402;"
  },
  {
    currency: "Australia Dollar",
    abbreviation: "AUD",
    symbol: "&#36;"
  },
  {
    currency: "Azerbaijan New Manat",
    abbreviation: "AZN",
    symbol: "&#1084;&#1072;&#1085;"
  },
  {
    currency: "Bahamas Dollar",
    abbreviation: "BSD",
    symbol: "&#36;"
  },
  {
    currency: "Barbados Dollar",
    abbreviation: "BBD",
    symbol: "&#36;"
  },
  {
    currency: "Belarus Ruble",
    abbreviation: "BYR",
    symbol: "&#112;&#46;"
  },
  {
    currency: "Belize Dollar",
    abbreviation: "BZD",
    symbol: "&#66;&#90;&#36;"
  },
  {
    currency: "Bermuda Dollar",
    abbreviation: "BMD",
    symbol: "&#36;"
  },
  {
    currency: "Bolivia Boliviano",
    abbreviation: "BOB",
    symbol: "&#36;&#98;"
  },
  {
    currency: "Bosnia and Herzegovina Convertible Marka",
    abbreviation: "BAM",
    symbol: "&#75;&#77;"
  },
  {
    currency: "Botswana Pula",
    abbreviation: "BWP",
    symbol: "&#80;"
  },
  {
    currency: "Bulgaria Lev",
    abbreviation: "BGN",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Brazil Real",
    abbreviation: "BRL",
    symbol: "&#82;&#36;"
  },
  {
    currency: "Brunei Darussalam Dollar",
    abbreviation: "BND",
    symbol: "&#36;"
  },
  {
    currency: "Cambodia Riel",
    abbreviation: "KHR",
    symbol: "&#6107;"
  },
  {
    currency: "Canada Dollar",
    abbreviation: "CAD",
    symbol: "&#36;"
  },
  {
    currency: "Cayman Islands Dollar",
    abbreviation: "KYD",
    symbol: "&#36;"
  },
  {
    currency: "Chile Peso",
    abbreviation: "CLP",
    symbol: "&#36;"
  },
  {
    currency: "China Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "&#165;"
  },
  {
    currency: "Colombia Peso",
    abbreviation: "COP",
    symbol: "&#36;"
  },
  {
    currency: "Costa Rica Colon",
    abbreviation: "CRC",
    symbol: "&#8353;"
  },
  {
    currency: "Croatia Kuna",
    abbreviation: "HRK",
    symbol: "&#107;&#110;"
  },
  {
    currency: "Cuba Peso",
    abbreviation: "CUP",
    symbol: "&#8369;"
  },
  {
    currency: "Czech Republic Koruna",
    abbreviation: "CZK",
    symbol: "&#75;&#269;"
  },
  {
    currency: "Denmark Krone",
    abbreviation: "DKK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Dominican Republic Peso",
    abbreviation: "DOP",
    symbol: "&#82;&#68;&#36;"
  },
  {
    currency: "East Caribbean Dollar",
    abbreviation: "XCD",
    symbol: "&#36;"
  },
  {
    currency: "Egypt Pound",
    abbreviation: "EGP",
    symbol: "&#163;"
  },
  {
    currency: "El Salvador Colon",
    abbreviation: "SVC",
    symbol: "&#36;"
  },
  {
    currency: "Estonia Kroon",
    abbreviation: "EEK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Euro Member Countries",
    abbreviation: "EUR",
    symbol: "&#8364;"
  },
  {
    currency: "Falkland Islands (Malvinas) Pound",
    abbreviation: "FKP",
    symbol: "&#163;"
  },
  {
    currency: "Fiji Dollar",
    abbreviation: "FJD",
    symbol: "&#36;"
  },
  {
    currency: "Ghana Cedis",
    abbreviation: "GHC",
    symbol: "&#162;"
  },
  {
    currency: "Gibraltar Pound",
    abbreviation: "GIP",
    symbol: "&#163;"
  },
  {
    currency: "Guatemala Quetzal",
    abbreviation: "GTQ",
    symbol: "&#81;"
  },
  {
    currency: "Guernsey Pound",
    abbreviation: "GGP",
    symbol: "&#163;"
  },
  {
    currency: "Guyana Dollar",
    abbreviation: "GYD",
    symbol: "&#36;"
  },
  {
    currency: "Honduras Lempira",
    abbreviation: "HNL",
    symbol: "&#76;"
  },
  {
    currency: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "&#36;"
  },
  {
    currency: "Hungary Forint",
    abbreviation: "HUF",
    symbol: "&#70;&#116;"
  },
  {
    currency: "Iceland Krona",
    abbreviation: "ISK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "India Rupee",
    abbreviation: "INR",
    symbol: "&#8377;"
  },
  {
    currency: "Indonesia Rupiah",
    abbreviation: "IDR",
    symbol: "&#82;&#112;"
  },
  {
    currency: "Iran Rial",
    abbreviation: "IRR",
    symbol: "&#65020;"
  },
  {
    currency: "Isle of Man Pound",
    abbreviation: "IMP",
    symbol: "&#163;"
  },
  {
    currency: "Israel Shekel",
    abbreviation: "ILS",
    symbol: "&#8362;"
  },
  {
    currency: "Jamaica Dollar",
    abbreviation: "JMD",
    symbol: "&#74;&#36;"
  },
  {
    currency: "Japan Yen",
    abbreviation: "JPY",
    symbol: "&#165;"
  },
  {
    currency: "Jersey Pound",
    abbreviation: "JEP",
    symbol: "&#163;"
  },
  {
    currency: "Kazakhstan Tenge",
    abbreviation: "KZT",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Korea (North) Won",
    abbreviation: "KPW",
    symbol: "&#8361;"
  },
  {
    currency: "Korea (South) Won",
    abbreviation: "KRW",
    symbol: "&#8361;"
  },
  {
    currency: "Kyrgyzstan Som",
    abbreviation: "KGS",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Laos Kip",
    abbreviation: "LAK",
    symbol: "&#8365;"
  },
  {
    currency: "Latvia Lat",
    abbreviation: "LVL",
    symbol: "&#76;&#115;"
  },
  {
    currency: "Lebanon Pound",
    abbreviation: "LBP",
    symbol: "&#163;"
  },
  {
    currency: "Liberia Dollar",
    abbreviation: "LRD",
    symbol: "&#36;"
  },
  {
    currency: "Lithuania Litas",
    abbreviation: "LTL",
    symbol: "&#76;&#116;"
  },
  {
    currency: "Macedonia Denar",
    abbreviation: "MKD",
    symbol: "&#1076;&#1077;&#1085;"
  },
  {
    currency: "Malaysia Ringgit",
    abbreviation: "MYR",
    symbol: "&#82;&#77;"
  },
  {
    currency: "Mauritius Rupee",
    abbreviation: "MUR",
    symbol: "&#8360;"
  },
  {
    currency: "Mexico Peso",
    abbreviation: "MXN",
    symbol: "&#36;"
  },
  {
    currency: "Mongolia Tughrik",
    abbreviation: "MNT",
    symbol: "&#8366;"
  },
  {
    currency: "Mozambique Metical",
    abbreviation: "MZN",
    symbol: "&#77;&#84;"
  },
  {
    currency: "Namibia Dollar",
    abbreviation: "NAD",
    symbol: "&#36;"
  },
  {
    currency: "Nepal Rupee",
    abbreviation: "NPR",
    symbol: "&#8360;"
  },
  {
    currency: "Netherlands Antilles Guilder",
    abbreviation: "ANG",
    symbol: "&#402;"
  },
  {
    currency: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "&#36;"
  },
  {
    currency: "Nicaragua Cordoba",
    abbreviation: "NIO",
    symbol: "&#67;&#36;"
  },
  {
    currency: "Nigeria Naira",
    abbreviation: "NGN",
    symbol: "&#8358;"
  },
  {
    currency: "Korea (North) Won",
    abbreviation: "KPW",
    symbol: "&#8361;"
  },
  {
    currency: "Norway Krone",
    abbreviation: "NOK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Oman Rial",
    abbreviation: "OMR",
    symbol: "&#65020;"
  },
  {
    currency: "Pakistan Rupee",
    abbreviation: "PKR",
    symbol: "&#8360;"
  },
  {
    currency: "Panama Balboa",
    abbreviation: "PAB",
    symbol: "&#66;&#47;&#46;"
  },
  {
    currency: "Paraguay Guarani",
    abbreviation: "PYG",
    symbol: "&#71;&#115;"
  },
  {
    currency: "Peru Nuevo Sol",
    abbreviation: "PEN",
    symbol: "&#83;&#47;&#46;"
  },
  {
    currency: "Philippines Peso",
    abbreviation: "PHP",
    symbol: "&#8369;"
  },
  {
    currency: "Poland Zloty",
    abbreviation: "PLN",
    symbol: "&#122;&#322;"
  },
  {
    currency: "Qatar Riyal",
    abbreviation: "QAR",
    symbol: "&#65020;"
  },
  {
    currency: "Romania New Leu",
    abbreviation: "RON",
    symbol: "&#108;&#101;&#105;"
  },
  {
    currency: "Russia Ruble",
    abbreviation: "RUB",
    symbol: "&#1088;&#1091;&#1073;"
  },
  {
    currency: "Saint Helena Pound",
    abbreviation: "SHP",
    symbol: "&#163;"
  },
  {
    currency: "Saudi Arabia Riyal",
    abbreviation: "SAR",
    symbol: "&#65020;"
  },
  {
    currency: "Serbia Dinar",
    abbreviation: "RSD",
    symbol: "&#1044;&#1080;&#1085;&#46;"
  },
  {
    currency: "Seychelles Rupee",
    abbreviation: "SCR",
    symbol: "&#8360;"
  },
  {
    currency: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "&#36;"
  },
  {
    currency: "Solomon Islands Dollar",
    abbreviation: "SBD",
    symbol: "&#36;"
  },
  {
    currency: "Somalia Shilling",
    abbreviation: "SOS",
    symbol: "&#83;"
  },
  {
    currency: "South Africa Rand",
    abbreviation: "ZAR",
    symbol: "&#82;"
  },
  {
    currency: "Korea (South) Won",
    abbreviation: "KRW",
    symbol: "&#8361;"
  },
  {
    currency: "Sri Lanka Rupee",
    abbreviation: "LKR",
    symbol: "&#8360;"
  },
  {
    currency: "Sweden Krona",
    abbreviation: "SEK",
    symbol: "&#107;&#114;"
  },
  {
    currency: "Switzerland Franc",
    abbreviation: "CHF",
    symbol: "&#67;&#72;&#70;"
  },
  {
    currency: "Suriname Dollar",
    abbreviation: "SRD",
    symbol: "&#36;"
  },
  {
    currency: "Syria Pound",
    abbreviation: "SYP",
    symbol: "&#163;"
  },
  {
    currency: "Taiwan New Dollar",
    abbreviation: "TWD",
    symbol: "&#78;&#84;&#36;"
  },
  {
    currency: "Thailand Baht",
    abbreviation: "THB",
    symbol: "&#3647;"
  },
  {
    currency: "Trinidad and Tobago Dollar",
    abbreviation: "TTD",
    symbol: "&#84;&#84;&#36;"
  },
  {
    currency: "Turkey Lira",
    abbreviation: "TRL",
    symbol: "&#8356;"
  },
  {
    currency: "Tuvalu Dollar",
    abbreviation: "TVD",
    symbol: "&#36;"
  },
  {
    currency: "Ukraine Hryvna",
    abbreviation: "UAH",
    symbol: "&#8372;"
  },
  {
    currency: "United Kingdom Pound",
    abbreviation: "GBP",
    symbol: "&#163;"
  },
  {
    currency: "United States Dollar",
    abbreviation: "USD",
    symbol: "&#36;"
  },
  {
    currency: "Uruguay Peso",
    abbreviation: "UYU",
    symbol: "&#36;&#85;"
  },
  {
    currency: "Uzbekistan Som",
    abbreviation: "UZS",
    symbol: "&#1083;&#1074;"
  },
  {
    currency: "Venezuela Bolivar",
    abbreviation: "VEF",
    symbol: "&#66;&#115;"
  },
  {
    currency: "Viet Nam Dong",
    abbreviation: "VND",
    symbol: "&#8363;"
  },
  {
    currency: "Yemen Rial",
    abbreviation: "YER",
    symbol: "&#65020;"
  },
  {
    currency: "Zimbabwe Dollar",
    abbreviation: "ZWD",
    symbol: "&#90;&#36;"
  }
];

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Accordion.js
var Accordion = __webpack_require__(96654);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/embedCodeModal.js









const EmbedCodeModal = ({
  productId,
  isVisibleEmbedCode,
  handleCloseEmbedCode,
  isSubscription
}) => {
  const [expandProduct, setExpandProduct] = (0,react.useState)(false);
  const [expandPayment, setExpandPayment] = (0,react.useState)(false);
  return /* @__PURE__ */ react.createElement(Box.Box, null, isVisibleEmbedCode && /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: handleCloseEmbedCode,
    labelledBy: "title"
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    direction: "column",
    alignItems: "start"
  }, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    variant: "beta",
    textColor: "neutral800",
    as: "h2",
    id: "title"
  }, "Embed Code")), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "omega"
  }, "Enable the Stripe Payment button in your frontend app by following the simple steps mentioned below:")))), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "top"
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingRight: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Step\xA01:")), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Embed the script tag in the html header section of your product list, payment success and payment failure pages:"))), /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral100",
    padding: 2,
    marginTop: 4,
    marginBottom: 4
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, `
                <script
                  type="text/javascript"
                  src="${window.location.origin}/plugins/strapi-stripe/static/stripe.js"
                >
                  
                <\/script>
                `)), /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "top"
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingRight: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Step\xA02a:")), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Show the \u201CBuy Now\u201D button next to your product details on the product list page."))), /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral100",
    padding: 2,
    marginTop: 4,
    marginBottom: 4
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, `
                <button class="css style" type="button" class="SS_ProductCheckout"  data-id="${productId}" data-url="${window.location.origin}">
                ${isSubscription ? "Subscribe" : "BuyNow"}
                </button>
                `)), /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "top"
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingRight: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Step\xA02b:")), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Optionally, you can fetch product details such as title, description, image and price from the API end-point mentioned below and show them."))), /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral100",
    padding: 2,
    marginTop: 4,
    marginBottom: 4
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, `const response = await axios.get(
                   " ${window.location.origin}/strapi-stripe/getProduct/${productId}"
                  ) `)), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 4,
    background: "neutral100",
    marginBottom: 4
  }, /* @__PURE__ */ react.createElement(Accordion.Accordion, {
    expanded: expandProduct,
    toggle: () => setExpandProduct((s) => !s),
    id: "acc-1",
    size: "S"
  }, /* @__PURE__ */ react.createElement(Accordion.AccordionToggle, {
    title: "Sample Product response object"
  }), /* @__PURE__ */ react.createElement(Accordion.AccordionContent, null, /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 3
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, /* @__PURE__ */ react.createElement("pre", null, JSON.stringify(ProductRespone, null, 2))))))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    alignItems: "top"
  }, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingRight: 2
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Step\xA03:")), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon"
  }, "Optionally, you can show payment transaction status and details on your payment success (or error) page. Use the API call mentioned below:"))), /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral100",
    padding: 2,
    marginTop: 4,
    marginBottom: 4
  }, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, null, `
                  const params = new URLSearchParams(document.location.search);
                  `)), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, null, `const checkoutSessionId = params.get("sessionId");`)), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Typography.Typography, null, `const response = await axios.get(${window.location.origin}/strapi-stripe/retrieveCheckoutSession/${"$"}{checkoutSessionId}
                    )
                   `)), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 4,
    background: "neutral100"
  }, /* @__PURE__ */ react.createElement(Accordion.Accordion, {
    expanded: expandPayment,
    toggle: () => setExpandPayment((s) => !s),
    id: "acc-1",
    size: "S"
  }, /* @__PURE__ */ react.createElement(Accordion.AccordionToggle, {
    title: "Sample stripe payment response object"
  }), /* @__PURE__ */ react.createElement(Accordion.AccordionContent, null, /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 3
  }, /* @__PURE__ */ react.createElement(Typography.Typography, null, /* @__PURE__ */ react.createElement("pre", null, JSON.stringify(stripeResponse, null, 2)))))))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: handleCloseEmbedCode,
      variant: "tertiary"
    }, "Cancel"),
    endActions: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: handleCloseEmbedCode
    }, "Finish")
  })));
};
EmbedCodeModal.propTypes = {
  productId: (prop_types_default()).any.isRequired,
  isVisibleEmbedCode: (prop_types_default()).any.isRequired,
  handleCloseEmbedCode: (prop_types_default()).func.isRequired,
  isSubscription: (prop_types_default()).any.isRequired
};
/* harmony default export */ const embedCodeModal = (EmbedCodeModal);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Link.js
var design_system_Link = __webpack_require__(85104);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ArrowRight.js
var ArrowRight = __webpack_require__(77602);
var ArrowRight_default = /*#__PURE__*/__webpack_require__.n(ArrowRight);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/SettingLink.js






const SettingLink = () => {
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Box.Box, {
    shadow: "tableShadow",
    background: "neutral0",
    paddingTop: 6,
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 6,
    hasRadius: true
  }, /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 4
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(design_system_Link.Link, {
    to: "/settings/strapi-stripe",
    endIcon: /* @__PURE__ */ react.createElement((ArrowRight_default()), null)
  }, "Manage Your Stripe Configuration")), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6,
    s: 12
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi"
  }, "Need help? Contact us at : support@higheredlab.com"))))));
};
/* harmony default export */ const ProductList_SettingLink = (SettingLink);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/productTable.js























const ProductTable = ({
  products,
  handleSortAscendingName,
  handleSortDescendingName,
  handleEditClick,
  totalCount,
  page,
  sortAscendingName,
  handleSortAscendingPrice,
  handleSortDescendingPrice,
  sortAscendingPrice,
  handleClickCreateProduct
}) => {
  let { url } = (0,react_router_dom_min.useRouteMatch)();
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const [productId, setIsProductId] = (0,react.useState)("");
  const [isSubscription, setIsSubscription] = (0,react.useState)(false);
  const handleSortCarretUp = () => {
    handleSortDescendingName();
  };
  const handleSortCarretDown = () => {
    handleSortAscendingName();
  };
  const handleSortCarretUpPrice = () => {
    handleSortDescendingPrice();
  };
  const handleSortCarretDownPrice = () => {
    handleSortAscendingPrice();
  };
  const handleClickLink = (productId2, isSubscription2) => {
    setIsProductId(productId2);
    setIsSubscription(isSubscription2);
    setIsVisible(true);
  };
  const handleCloseEmbedModal = () => {
    setIsVisible(false);
  };
  const getProductPrice = (price, currency) => {
    const currencyObj = currencies.find(
      (item) => item.abbreviation.toLowerCase() === currency.toLowerCase()
    );
    const symbol = currencyObj.symbol;
    const priceWithSymbol = /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement("span", null, node_modules_html_react_parser(symbol)), /* @__PURE__ */ react.createElement(Box.Box, null, new Intl.NumberFormat().format(price)));
    return priceWithSymbol;
  };
  const getDateTime = (date) => {
    const dates = new Date(date);
    const createdDate = dates.toDateString();
    const createdTime = dates.toLocaleTimeString();
    const dateTime = /* @__PURE__ */ react.createElement(Badge.Badge, null, createdDate, "\xA0\xA0\xA0", createdTime);
    return dateTime;
  };
  const getPaymentMode = (isSubscription2, interval) => {
    let mode;
    if (!isSubscription2 && !interval) {
      mode = "One-Time";
    } else if (isSubscription2 && interval) {
      if (interval === "month") {
        mode = "Monthly";
      } else if (interval === "year") {
        mode = "Year";
      } else if (interval === "week") {
        mode = "Weekly";
      }
    }
    return mode;
  };
  const getTrialPeriodDays = (trialPeriodDays, isSubscription2) => {
    let trialDays;
    if (isSubscription2 && trialPeriodDays) {
      trialDays = trialPeriodDays;
    } else if (isSubscription2 && !trialPeriodDays) {
      trialDays = 0;
    } else if (!isSubscription2 && !trialPeriodDays) {
      trialDays = "NA";
    }
    return trialDays;
  };
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(embedCodeModal, {
    productId,
    isVisibleEmbedCode: isVisible,
    handleCloseEmbedCode: handleCloseEmbedModal,
    isSubscription
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7,
    background: "neutral100"
  }, products && products.length > 0 ? /* @__PURE__ */ react.createElement(Table.Table, {
    colCount: COL_COUNT,
    rowCount: ROW_COUNT,
    footer: /* @__PURE__ */ react.createElement(Table.TFooter, {
      icon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      onClick: handleClickCreateProduct
    }, "Create New Product / Subscription")
  }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Name"), "\xA0", sortAscendingName ? /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortCarretUp,
    label: "sort by Name",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretUp_default()), null)
  }) : /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortCarretDown,
    label: "sort by Name",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretDown_default()), null)
  })), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Price"), sortAscendingPrice ? /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortCarretUpPrice,
    label: "sort by price",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretUp_default()), null)
  }) : /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortCarretDownPrice,
    label: "sort by Name",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretDown_default()), null)
  })), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Payment Mode")), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Trial Days")), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden.VisuallyHidden, null, "Actions")))), /* @__PURE__ */ react.createElement(Table.Tbody, null, products && products.map((product) => /* @__PURE__ */ react.createElement(Table.Tr, {
    key: product.id
  }, /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "epsilon",
    textColor: "neutral800",
    textTransform: "capitalize"
  }, product.title), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi"
  }, getDateTime(product.createdAt)))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, getProductPrice(product.price, product.currency))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, getPaymentMode(product.isSubscription, product.interval))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, getTrialPeriodDays(product.trialPeriodDays, product.isSubscription))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "end"
  }, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => handleClickLink(product.id, product.isSubscription),
    label: "Embed Code",
    icon: /* @__PURE__ */ react.createElement(linkIcon, null)
  }), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 3
  }, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => handleEditClick(product.id),
    label: "Edit",
    icon: /* @__PURE__ */ react.createElement((Pencil_default()), null)
  })), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 3
  }, /* @__PURE__ */ react.createElement(react_router_dom_min.Link, {
    to: `${url}/report/${product.id}/${product.title}`,
    style: { textDecoration: "none" }
  }, /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    label: "Report",
    icon: /* @__PURE__ */ react.createElement((ChartPie_default()), null)
  }))))))))) : /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    icon: "",
    content: "",
    action: /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "secondary",
      startIcon: /* @__PURE__ */ react.createElement((Plus_default()), null),
      onClick: handleClickCreateProduct
    }, "Create your first Product / Subscription")
  }))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "end",
    paddingRight: 8
  }, totalCount ? /* @__PURE__ */ react.createElement(Pagination.Pagination, {
    activePage: page,
    pageCount: totalCount
  }, /* @__PURE__ */ react.createElement(Pagination.PreviousLink, {
    to: `/plugins/strapi-stripe?page=${page - 1}`
  }, "Go to previous page"), totalCount && [...Array(totalCount)].map((count, idx) => /* @__PURE__ */ react.createElement(Pagination.PageLink, {
    key: idx,
    number: idx + 1,
    to: `/plugins/strapi-stripe?page=${idx + 1}`
  }, "Go to page 1")), /* @__PURE__ */ react.createElement(Pagination.NextLink, {
    to: `/plugins/strapi-stripe?page=${page + 1}`
  }, "Go to next page")) : ""), /* @__PURE__ */ react.createElement("br", null), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7
  }, /* @__PURE__ */ react.createElement(ProductList_SettingLink, null)));
};
ProductTable.propTypes = {
  products: (prop_types_default()).any.isRequired,
  handleSortAscendingName: (prop_types_default()).any.isRequired,
  handleSortDescendingName: (prop_types_default()).any.isRequired,
  handleEditClick: (prop_types_default()).any.isRequired,
  totalCount: (prop_types_default()).any.isRequired,
  page: (prop_types_default()).any.isRequired,
  sortAscendingName: (prop_types_default()).any.isRequired,
  handleSortAscendingPrice: (prop_types_default()).any.isRequired,
  handleSortDescendingPrice: (prop_types_default()).any.isRequired,
  sortAscendingPrice: (prop_types_default()).any.isRequired,
  handleClickCreateProduct: (prop_types_default()).any.isRequired
};
/* harmony default export */ const productTable = (ProductTable);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/editProduct.js
var editProduct_defProp = Object.defineProperty;
var editProduct_defProps = Object.defineProperties;
var editProduct_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var editProduct_getOwnPropSymbols = Object.getOwnPropertySymbols;
var editProduct_hasOwnProp = Object.prototype.hasOwnProperty;
var editProduct_propIsEnum = Object.prototype.propertyIsEnumerable;
var editProduct_defNormalProp = (obj, key, value) => key in obj ? editProduct_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var editProduct_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (editProduct_hasOwnProp.call(b, prop))
      editProduct_defNormalProp(a, prop, b[prop]);
  if (editProduct_getOwnPropSymbols)
    for (var prop of editProduct_getOwnPropSymbols(b)) {
      if (editProduct_propIsEnum.call(b, prop))
        editProduct_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var editProduct_spreadProps = (a, b) => editProduct_defProps(a, editProduct_getOwnPropDescs(b));
var editProduct_async = (__this, __arguments, generator) => {
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













const EditProduct = ({ productId, isEditVisible, handleCloseEdit, handleClickUpdateEdit }) => {
  const [title, setTitle] = (0,react.useState)("");
  const [price, setPrice] = (0,react.useState)("");
  const [url, setUrl] = (0,react.useState)("");
  const [description, setDescription] = (0,react.useState)("");
  const [stripeProduct, setStripeProduct] = (0,react.useState)("");
  const [paymentType, setIsPaymentType] = (0,react.useState)("");
  const [paymentInterval, setPaymentInterval] = (0,react.useState)("");
  const [trialPeriodDays, setTrialPeriodDays] = (0,react.useState)("");
  const [image, setImage] = (0,react.useState)({});
  const [upload, setUpload] = (0,react.useState)(false);
  const [uploadMessage, setUploadMessage] = (0,react.useState)("");
  const [productImageId, setProductImageId] = (0,react.useState)("");
  const [error, setError] = (0,react.useState)({
    title: "",
    price: "",
    url: "",
    description: ""
  });
  (0,react.useEffect)(() => {
    (() => editProduct_async(void 0, null, function* () {
      const response = yield (0,apiCalls/* getStripeProductProductById */.aR)(productId);
      if (response.status === 200 && response.data) {
        const {
          title: title2,
          price: price2,
          productImage,
          description: description2,
          stripeProductId,
          isSubscription,
          interval,
          trialPeriodDays: trialPeriodDays2
        } = response.data;
        setTitle(title2);
        setPrice(price2);
        setUrl(`${window.location.origin}${productImage.url}`);
        setProductImageId(productImage.id);
        setDescription(description2);
        setStripeProduct(stripeProductId);
        if (isSubscription) {
          setIsPaymentType("subscription");
        } else {
          setIsPaymentType("oneTime");
        }
        setPaymentInterval(interval);
        setTrialPeriodDays(trialPeriodDays2);
      }
    }))();
  }, [productId]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
      setError(editProduct_spreadProps(editProduct_spreadValues({}, error), { title: "" }));
    } else if (name === "price") {
      setPrice(value);
      setError(editProduct_spreadProps(editProduct_spreadValues({}, error), { price: "" }));
    } else if (name === "image") {
      setImage(event.target.files);
    } else if (name === "description") {
      setDescription(value);
      setError(editProduct_spreadProps(editProduct_spreadValues({}, error), { description: "" }));
    }
  };
  const handleUpdateProduct = () => editProduct_async(void 0, null, function* () {
    if (!title && !price && !description) {
      setError(editProduct_spreadProps(editProduct_spreadValues({}, error), {
        title: "Title is required",
        price: "Price is required",
        description: "Description is required"
      }));
    } else if (!title) {
      setError(editProduct_spreadProps(editProduct_spreadValues({}, error), {
        title: "Title is required",
        price: "",
        description: ""
      }));
    } else if (!price) {
      setError(editProduct_spreadProps(editProduct_spreadValues({}, error), {
        title: "",
        price: "Price is required",
        description: ""
      }));
    } else if (!description) {
      setError(editProduct_spreadProps(editProduct_spreadValues({}, error), {
        title: "",
        price: "",
        description: "Description is required"
      }));
    } else {
      let imageId;
      let imageUrl;
      if (image.length > 0) {
        setUpload(true);
        setUploadMessage("Uploading Product image");
        const response = yield (0,apiCalls/* uploadFiles */.IL)(image);
        if (response.data[0].id) {
          imageUrl = `${window.location.origin}${response.data[0].url}`;
          imageId = response.data[0].id;
        }
        handleClickUpdateEdit(productId, title, imageUrl, description, imageId, stripeProduct);
      } else {
        handleClickUpdateEdit(productId, title, url, description, productImageId, stripeProduct);
      }
      setUpload(false);
    }
  });
  return /* @__PURE__ */ react.createElement(Box.Box, null, isEditVisible && /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: handleCloseEdit,
    labelledBy: "title"
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    fontWeight: "bold",
    textColor: "neutral800",
    as: "h2",
    id: "title",
    variant: "beta"
  }, "Edit ", paymentType)), /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
    gap: 5
  }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    id: "select1",
    label: "Payment Type",
    required: true,
    clearLabel: "Clear the payment type",
    hint: "Ex:One-Time or Subscription",
    disabled: true,
    value: paymentType
  }, /* @__PURE__ */ react.createElement(Select.Option, {
    value: "oneTime"
  }, "One-Time"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "subscription"
  }, "Subscription"))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    placeholder: "Enter the price of the product",
    type: "number",
    label: "Price",
    name: "price",
    value: price,
    onChange: handleChange,
    error: error.price ? error.price : "",
    required: true,
    disabled: true
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    label: "Title",
    name: "title",
    value: title,
    onChange: handleChange,
    error: error.title ? error.title : "",
    required: true
  })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "pi",
    fontWeight: "bold"
  }, "Image"), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 3
  }, /* @__PURE__ */ react.createElement("input", {
    type: "file",
    name: "image",
    onChange: handleChange,
    accept: "image/*"
  }))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 12
  }, /* @__PURE__ */ react.createElement(Textarea.Textarea, {
    label: "Description",
    name: "description",
    onChange: handleChange,
    error: error.description ? error.description : "",
    required: true
  }, description)), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(Select.Select, {
    id: "select2",
    label: "Payment Interval",
    disabled: true,
    clearLabel: "Clear the payment interval ",
    hint: "Subscription billing frequency: weekly, monthly or yearly.",
    value: paymentInterval
  }, /* @__PURE__ */ react.createElement(Select.Option, {
    value: "month"
  }, "Month"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "year"
  }, "Year"), /* @__PURE__ */ react.createElement(Select.Option, {
    value: "week"
  }, "Week"))), /* @__PURE__ */ react.createElement(Grid.GridItem, {
    col: 6
  }, /* @__PURE__ */ react.createElement(TextInput.TextInput, {
    label: "Trial Period Days",
    name: "trialPeriodDays",
    disabled: true,
    hint: "Free trial period for the subscription.",
    value: trialPeriodDays || ""
  })))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
    startActions: /* @__PURE__ */ react.createElement(Button.Button, {
      onClick: handleCloseEdit,
      variant: "tertiary"
    }, "Cancel"),
    endActions: upload ? /* @__PURE__ */ react.createElement(Flex.Flex, {
      justifyContent: "center"
    }, /* @__PURE__ */ react.createElement(Loader.Loader, {
      small: true
    }, "Loading......"), /* @__PURE__ */ react.createElement(Typography.Typography, {
      fontWeight: "bold",
      textColor: "primary600",
      as: "h2"
    }, uploadMessage || "")) : /* @__PURE__ */ react.createElement(Button.Button, {
      variant: "default",
      onClick: handleUpdateProduct
    }, "Update")
  })));
};
EditProduct.propTypes = {
  productId: (prop_types_default()).any.isRequired,
  isEditVisible: (prop_types_default()).bool.isRequired,
  handleCloseEdit: (prop_types_default()).func.isRequired,
  handleClickUpdateEdit: (prop_types_default()).func.isRequired
};
/* harmony default export */ const editProduct = (EditProduct);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/ProductList/index.js
var ProductList_async = (__this, __arguments, generator) => {
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









const limit = 5;
const ProductList = () => {
  const search = (0,react_router_dom_min.useLocation)().search;
  const page = new URLSearchParams(search).get("page");
  const pageNumber = page ? parseInt(page, 10) : 1;
  const [isVisible, setIsVisible] = (0,react.useState)(false);
  const [productData, setProductData] = (0,react.useState)();
  const [isEditVisible, setEditVisible] = (0,react.useState)(false);
  const [productId, setProductId] = (0,react.useState)();
  const [count, setCount] = (0,react.useState)();
  const [sortAscendingName, setSortAscendingName] = (0,react.useState)(true);
  const [sortAscendingPrice, setSortAscendingPrice] = (0,react.useState)(true);
  const [sortOrderName, setSortOrderName] = (0,react.useState)(true);
  const [sortOrderPrice, setSortOrderPrice] = (0,react.useState)(false);
  const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * limit;
  (0,react.useEffect)(() => {
    (() => ProductList_async(void 0, null, function* () {
      let sort;
      let order;
      if (sortOrderName) {
        sort = "name";
        order = sortAscendingName ? "asc" : "desc";
      } else if (sortOrderPrice) {
        sort = "price";
        order = sortAscendingPrice ? "asc" : "desc";
      }
      const response = yield (0,apiCalls/* getStripeProduct */.HY)(offset, limit, sort, order);
      setProductData(response.data.res);
      setCount(response.data.count);
    }))();
  }, [isVisible, isEditVisible, offset, sortAscendingName, sortAscendingPrice]);
  const handleCloseModal = () => {
    setIsVisible(false);
  };
  const handleSaveProduct = (title, price, imageId, imageUrl, description, isSubscription, paymentInterval, trialPeriodDays) => ProductList_async(void 0, null, function* () {
    var _a;
    const createProduct = yield (0,apiCalls/* createStripeProduct */.m5)(
      title,
      price,
      imageId,
      imageUrl,
      description,
      isSubscription,
      paymentInterval,
      trialPeriodDays
    );
    if ((_a = createProduct == null ? void 0 : createProduct.data) == null ? void 0 : _a.id) {
      setIsVisible(false);
    }
  });
  const handleSortAscendingName = () => {
    setSortAscendingName(true);
    sortOrderName(true);
    sortOrderPrice(false);
  };
  const handleSortDescendingName = () => {
    setSortAscendingName(false);
    sortOrderName(true);
    sortOrderPrice(false);
  };
  const handleSortAscendingPrice = () => {
    setSortAscendingPrice(true);
    setSortOrderName(false);
    setSortOrderPrice(true);
  };
  const handleSortDescendingPrice = () => {
    setSortAscendingPrice(false);
    setSortOrderName(false);
    setSortOrderPrice(true);
  };
  const handleEnableEditMode = (id) => ProductList_async(void 0, null, function* () {
    setProductId(id);
    setEditVisible(true);
  });
  const handleCloseEditModal = () => {
    setEditVisible(false);
  };
  const handleUpdateProduct = (productId2, title, url, description, productImageId, stripeProductId) => ProductList_async(void 0, null, function* () {
    var _a;
    const updateProduct = yield (0,apiCalls/* updateStripeProduct */.CI)(
      productId2,
      title,
      url,
      description,
      productImageId,
      stripeProductId
    );
    if ((_a = updateProduct == null ? void 0 : updateProduct.data) == null ? void 0 : _a.id) {
      setEditVisible(false);
    }
  });
  const handleClickCreateProduct = () => setIsVisible((prev) => !prev);
  return /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingLeft: 7
  }, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "alpha"
  }, "Payment via Stripe"), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "omega"
  }, "The payment plugin enables you to accept online payments using Credit Card, Apple pay and Google pay on your Strapi website or app via Stripe."))), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 3
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(components_CreateProduct, {
    isVisible,
    handleClose: handleCloseModal,
    handleClickSave: (title, price, imageId, imageUrl, description, isSubscription, paymentInterval, trialPeriodDays) => handleSaveProduct(
      title,
      price,
      imageId,
      imageUrl,
      description,
      isSubscription,
      paymentInterval,
      trialPeriodDays
    )
  }), /* @__PURE__ */ react.createElement(editProduct, {
    productId,
    isEditVisible,
    handleCloseEdit: handleCloseEditModal,
    handleClickUpdateEdit: (productId2, title, url, description, productImageId, stripeProductId) => handleUpdateProduct(productId2, title, url, description, productImageId, stripeProductId)
  }), /* @__PURE__ */ react.createElement(Box.Box, null, /* @__PURE__ */ react.createElement(productTable, {
    products: productData,
    handleSortAscendingName,
    handleSortDescendingName,
    handleEditClick: (id) => handleEnableEditMode(id),
    totalCount: Math.ceil(count / limit),
    page: pageNumber,
    sortAscendingName,
    handleSortAscendingPrice,
    handleSortDescendingPrice,
    sortAscendingPrice,
    handleClickCreateProduct
  })));
};
/* harmony default export */ const components_ProductList = (ProductList);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/pages/HomePage/index.js


const HomePage = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(components_ProductList, null));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(68115);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(9008);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ArrowLeft.js
var ArrowLeft = __webpack_require__(68717);
var ArrowLeft_default = /*#__PURE__*/__webpack_require__.n(ArrowLeft);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ExclamationMarkCircle.js
var ExclamationMarkCircle = __webpack_require__(51359);
var ExclamationMarkCircle_default = /*#__PURE__*/__webpack_require__.n(ExclamationMarkCircle);
;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Report/paymentDetailsTable.js
var paymentDetailsTable_async = (__this, __arguments, generator) => {
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





















const paymentDetailsTable_limit = 7;
const PaymentDetailsTable = () => {
  const { productId, productName } = (0,react_router_dom_min.useParams)();
  const search = (0,react_router_dom_min.useLocation)().search;
  const page = new URLSearchParams(search).get("page");
  const pageNumber = page ? parseInt(page, 10) : 1;
  const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * paymentDetailsTable_limit;
  const [payments, setPayments] = (0,react.useState)();
  const [productDetail, setProductDetail] = (0,react.useState)();
  const [sortAscendingName, setSortAscendingName] = (0,react.useState)(true);
  const [sortAscendingEmail, setSortAscendingEmail] = (0,react.useState)(true);
  const [sortAscendingTxnDate, setSortAscendingTxnDate] = (0,react.useState)(true);
  const [sortOrderName, setSortOrderName] = (0,react.useState)(true);
  const [sortOrderEmail, setSortOrderEmail] = (0,react.useState)(false);
  const [sortOrderTxnDate, setSortOrderTxnDate] = (0,react.useState)(false);
  const [totalCount, setTotalCount] = (0,react.useState)();
  const pageCount = Math.ceil(totalCount / paymentDetailsTable_limit);
  (0,react.useEffect)(() => paymentDetailsTable_async(void 0, null, function* () {
    let sort;
    let order;
    if (sortOrderName) {
      sort = "name";
      order = sortAscendingName ? "asc" : "desc";
    } else if (sortOrderEmail) {
      sort = "email";
      order = sortAscendingEmail ? "asc" : "desc";
    } else if (sortOrderTxnDate) {
      sort = "date";
      order = sortAscendingTxnDate ? "asc" : "desc";
    }
    const response = yield (0,apiCalls/* getProductPayments */.qc)(productId, sort, order, offset, paymentDetailsTable_limit);
    if (response == null ? void 0 : response.data) {
      setPayments(response.data.payments);
      setProductDetail(response.data.payments[0].stripeProduct);
      setTotalCount(response.data.count);
    }
  }), [sortAscendingName, sortAscendingEmail, sortAscendingTxnDate, offset]);
  const getTransactionAmount = (txnAmount, currency) => {
    const currencyObj = currencies.find(
      (item) => item.abbreviation.toLowerCase() === (currency == null ? void 0 : currency.toLowerCase())
    );
    const symbol = currencyObj == null ? void 0 : currencyObj.symbol;
    const txnAmountWithCurrency = /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement("span", null, symbol ? node_modules_html_react_parser(symbol) : ""), /* @__PURE__ */ react.createElement(Box.Box, null, new Intl.NumberFormat().format(txnAmount)));
    return txnAmountWithCurrency;
  };
  const getTransactionDateTime = (date) => {
    const dates = new Date(date);
    const paymentDate = dates.toDateString();
    const paymentTime = dates.toLocaleTimeString();
    const dateTime = /* @__PURE__ */ react.createElement(Badge.Badge, null, paymentDate, "\xA0\xA0\xA0", paymentTime);
    return dateTime;
  };
  const handleSortNameCarretUp = () => paymentDetailsTable_async(void 0, null, function* () {
    setSortAscendingName(false);
    setSortOrderName(true);
    setSortOrderEmail(false);
    setSortOrderTxnDate(false);
  });
  const handleSortNameCarretDown = () => paymentDetailsTable_async(void 0, null, function* () {
    setSortAscendingName(true);
    setSortOrderName(true);
    setSortOrderEmail(false);
    setSortOrderTxnDate(false);
  });
  const handleSortEmailCarretUp = () => paymentDetailsTable_async(void 0, null, function* () {
    setSortAscendingEmail(false);
    setSortOrderName(false);
    setSortOrderEmail(true);
    setSortOrderTxnDate(false);
  });
  const handleSortEmailCarretDown = () => paymentDetailsTable_async(void 0, null, function* () {
    setSortAscendingEmail(true);
    setSortOrderName(false);
    setSortOrderEmail(true);
    setSortOrderTxnDate(false);
  });
  const handleSortTxnDateCarretUp = () => paymentDetailsTable_async(void 0, null, function* () {
    setSortAscendingTxnDate(false);
    setSortOrderName(false);
    setSortOrderEmail(false);
    setSortOrderTxnDate(true);
  });
  const handleSortTxnDateCarretDown = () => paymentDetailsTable_async(void 0, null, function* () {
    setSortAscendingTxnDate(true);
    setSortOrderName(false);
    setSortOrderEmail(false);
    setSortOrderTxnDate(true);
  });
  const getPaymentMode = (isSubscription, interval) => {
    let mode;
    if (!isSubscription && !interval) {
      mode = "One-Time";
    } else if (isSubscription && interval) {
      if (interval === "month") {
        mode = "Monthly";
      } else if (interval === "year") {
        mode = "Year";
      } else if (interval === "week") {
        mode = "Weekly";
      }
    }
    return mode;
  };
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  return /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(Box.Box, {
    paddingLeft: 7,
    paddingTop: 6
  }, /* @__PURE__ */ react.createElement(design_system_Link.Link, {
    to: "/plugins/strapi-stripe",
    startIcon: /* @__PURE__ */ react.createElement((ArrowLeft_default()), null)
  }, "Back")), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 4,
    paddingLeft: 7
  }, /* @__PURE__ */ react.createElement(Stack.Stack, {
    horizontal: true,
    spacing: 3
  }, /* @__PURE__ */ react.createElement(Breadcrumbs.Breadcrumbs, {
    label: "Category model, name field"
  }, /* @__PURE__ */ react.createElement(Breadcrumbs.Crumb, null, productName), /* @__PURE__ */ react.createElement(Breadcrumbs.Crumb, null, "Transaction Details")))), /* @__PURE__ */ react.createElement(Box.Box, {
    padding: 3
  }, /* @__PURE__ */ react.createElement(Divider.Divider, null)), /* @__PURE__ */ react.createElement(Box.Box, {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7,
    background: "neutral100"
  }, payments && payments.length > 0 ? /* @__PURE__ */ react.createElement(Table.Table, {
    colCount: COL_COUNT,
    rowCount: ROW_COUNT
  }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Customer Name"), sortAscendingName ? /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortNameCarretUp,
    label: "sort by Name",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretUp_default()), null)
  }) : /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortNameCarretDown,
    label: "sort by Name",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretDown_default()), null)
  })), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Customer Email"), sortAscendingEmail ? /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortEmailCarretUp,
    label: "sort by Email",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretUp_default()), null)
  }) : /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortEmailCarretDown,
    label: "sort by Email",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretDown_default()), null)
  })), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Payment Type")), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Transaction Amount")), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma"
  }, "Purchased Date"), sortAscendingTxnDate ? /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortTxnDateCarretUp,
    label: "sort by TxnDate",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretUp_default()), null)
  }) : /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: handleSortTxnDateCarretDown,
    label: "sort by TxnDate",
    noBorder: true,
    icon: /* @__PURE__ */ react.createElement((CarretDown_default()), null)
  })))), /* @__PURE__ */ react.createElement(Table.Tbody, null, payments && payments.map((payment) => /* @__PURE__ */ react.createElement(Table.Tr, {
    key: payment.id
  }, /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, payment.customerName)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, payment.customerEmail)), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, getPaymentMode(
    payment.stripeProduct.isSubscription,
    payment.stripeProduct.interval
  ))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, getTransactionAmount(payment.txnAmount, productDetail == null ? void 0 : productDetail.currency))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    textColor: "neutral800"
  }, getTransactionDateTime(payment.txnDate))))))) : /* @__PURE__ */ react.createElement(Box.Box, {
    background: "neutral100"
  }, /* @__PURE__ */ react.createElement(EmptyStateLayout.EmptyStateLayout, {
    icon: /* @__PURE__ */ react.createElement((ExclamationMarkCircle_default()), null),
    content: "This product dont have any transaction"
  }))), /* @__PURE__ */ react.createElement(Flex.Flex, {
    justifyContent: "end",
    paddingRight: 8
  }, pageCount ? /* @__PURE__ */ react.createElement(Pagination.Pagination, {
    activePage: pageNumber,
    pageCount
  }, /* @__PURE__ */ react.createElement(Pagination.PreviousLink, {
    to: `/plugins/strapi-stripe/report/${productId}/${productName}?page=${pageNumber - 1}`
  }, "Go to previous page"), [...Array(pageCount)].map((count, idx) => /* @__PURE__ */ react.createElement(Pagination.PageLink, {
    number: idx + 1,
    to: `/plugins/strapi-stripe/report/${productId}/${productName}?page=${idx + 1}`
  }, "Go to page 1")), /* @__PURE__ */ react.createElement(Pagination.NextLink, {
    to: `/plugins/strapi-stripe/report/${productId}/${productName}?page=${pageNumber + 1}`
  }, "Go to next page")) : ""));
};
/* harmony default export */ const paymentDetailsTable = (PaymentDetailsTable);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/components/Report/index.js


const PaymentReport = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(paymentDetailsTable, null));
};
/* harmony default export */ const Report = (PaymentReport);

;// CONCATENATED MODULE: ./node_modules/strapi-stripe/admin/src/pages/App/index.js






const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${(pluginId_default())}`,
    component: pages_HomePage,
    exact: true
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    path: `/plugins/${(pluginId_default())}/report/:productId/:productName`,
    component: Report
  }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, {
    component: build.NotFound
  })));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 60885:
/***/ ((module) => {

/**
 * SVG elements are case-sensitive.
 *
 * @see {@link https://developer.mozilla.org/docs/Web/SVG/Element#SVG_elements_A_to_Z}
 */
var CASE_SENSITIVE_TAG_NAMES = [
  'animateMotion',
  'animateTransform',
  'clipPath',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussainBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'foreignObject',
  'linearGradient',
  'radialGradient',
  'textPath'
];

module.exports = {
  CASE_SENSITIVE_TAG_NAMES: CASE_SENSITIVE_TAG_NAMES
};


/***/ }),

/***/ 38276:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// constants
var HTML = 'html';
var HEAD = 'head';
var BODY = 'body';
var FIRST_TAG_REGEX = /<([a-zA-Z]+[0-9]?)/; // e.g., <h1>
var HEAD_TAG_REGEX = /<head.*>/i;
var BODY_TAG_REGEX = /<body.*>/i;

// falls back to `parseFromString` if `createHTMLDocument` cannot be used
var parseFromDocument = function () {
  throw new Error(
    'This browser does not support `document.implementation.createHTMLDocument`'
  );
};

var parseFromString = function () {
  throw new Error(
    'This browser does not support `DOMParser.prototype.parseFromString`'
  );
};

/**
 * DOMParser (performance: slow).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMParser#Parsing_an_SVG_or_HTML_document
 */
if (typeof window.DOMParser === 'function') {
  var domParser = new window.DOMParser();
  var mimeType = 'text/html';

  /**
   * Creates an HTML document using `DOMParser.parseFromString`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromString = function (html, tagName) {
    if (tagName) {
      html = '<' + tagName + '>' + html + '</' + tagName + '>';
    }

    return domParser.parseFromString(html, mimeType);
  };

  parseFromDocument = parseFromString;
}

/**
 * DOMImplementation (performance: fair).
 *
 * @see https://developer.mozilla.org/docs/Web/API/DOMImplementation/createHTMLDocument
 */
if (document.implementation) {
  var isIE = (__webpack_require__(1507).isIE);

  // title parameter is required in IE
  // https://msdn.microsoft.com/en-us/library/ff975457(v=vs.85).aspx
  var doc = document.implementation.createHTMLDocument(
    isIE() ? 'html-dom-parser' : undefined
  );

  /**
   * Use HTML document created by `document.implementation.createHTMLDocument`.
   *
   * @param  {string} html      - The HTML string.
   * @param  {string} [tagName] - The element to render the HTML (with 'body' as fallback).
   * @return {HTMLDocument}
   */
  parseFromDocument = function (html, tagName) {
    if (tagName) {
      doc.documentElement.getElementsByTagName(tagName)[0].innerHTML = html;
      return doc;
    }

    doc.documentElement.innerHTML = html;
    return doc;
  };
}

/**
 * Template (performance: fast).
 *
 * @see https://developer.mozilla.org/docs/Web/HTML/Element/template
 */
var template = document.createElement('template');
var parseFromTemplate;

if (template.content) {
  /**
   * Uses a template element (content fragment) to parse HTML.
   *
   * @param  {string} html - The HTML string.
   * @return {NodeList}
   */
  parseFromTemplate = function (html) {
    template.innerHTML = html;
    return template.content.childNodes;
  };
}

/**
 * Parses HTML string to DOM nodes.
 *
 * @param  {string}   html - HTML markup.
 * @return {NodeList}
 */
function domparser(html) {
  var firstTagName;
  var match = html.match(FIRST_TAG_REGEX);

  if (match && match[1]) {
    firstTagName = match[1].toLowerCase();
  }

  var doc;
  var element;
  var elements;

  switch (firstTagName) {
    case HTML:
      doc = parseFromString(html);

      // the created document may come with filler head/body elements,
      // so make sure to remove them if they don't actually exist
      if (!HEAD_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(HEAD)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      if (!BODY_TAG_REGEX.test(html)) {
        element = doc.getElementsByTagName(BODY)[0];
        if (element) {
          element.parentNode.removeChild(element);
        }
      }

      return doc.getElementsByTagName(HTML);

    case HEAD:
    case BODY:
      elements = parseFromDocument(html).getElementsByTagName(firstTagName);

      // if there's a sibling element, then return both elements
      if (BODY_TAG_REGEX.test(html) && HEAD_TAG_REGEX.test(html)) {
        return elements[0].parentNode.childNodes;
      }
      return elements;

    // low-level tag or text
    default:
      if (parseFromTemplate) {
        return parseFromTemplate(html);
      }

      return parseFromDocument(html, BODY).getElementsByTagName(BODY)[0]
        .childNodes;
  }
}

module.exports = domparser;


/***/ }),

/***/ 14152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domparser = __webpack_require__(38276);
var formatDOM = (__webpack_require__(1507).formatDOM);

var DIRECTIVE_REGEX = /<(![a-zA-Z\s]+)>/; // e.g., <!doctype html>

/**
 * Parses HTML string to DOM nodes in browser.
 *
 * @param  {string} html  - HTML markup.
 * @return {DomElement[]} - DOM elements.
 */
function HTMLDOMParser(html) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (html === '') {
    return [];
  }

  // match directive
  var match = html.match(DIRECTIVE_REGEX);
  var directive;

  if (match && match[1]) {
    directive = match[1];
  }

  return formatDOM(domparser(html), null, directive);
}

module.exports = HTMLDOMParser;


/***/ }),

/***/ 1507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constants = __webpack_require__(60885);
var domhandler = __webpack_require__(97790);

var CASE_SENSITIVE_TAG_NAMES = constants.CASE_SENSITIVE_TAG_NAMES;

var Comment = domhandler.Comment;
var Element = domhandler.Element;
var ProcessingInstruction = domhandler.ProcessingInstruction;
var Text = domhandler.Text;

var caseSensitiveTagNamesMap = {};
var tagName;

for (var i = 0, len = CASE_SENSITIVE_TAG_NAMES.length; i < len; i++) {
  tagName = CASE_SENSITIVE_TAG_NAMES[i];
  caseSensitiveTagNamesMap[tagName.toLowerCase()] = tagName;
}

/**
 * Gets case-sensitive tag name.
 *
 * @param  {string}           tagName - Tag name in lowercase.
 * @return {string|undefined}         - Case-sensitive tag name.
 */
function getCaseSensitiveTagName(tagName) {
  return caseSensitiveTagNamesMap[tagName];
}

/**
 * Formats DOM attributes to a hash map.
 *
 * @param  {NamedNodeMap} attributes - List of attributes.
 * @return {object}                  - Map of attribute name to value.
 */
function formatAttributes(attributes) {
  var result = {};
  var attribute;
  // `NamedNodeMap` is array-like
  for (var i = 0, len = attributes.length; i < len; i++) {
    attribute = attributes[i];
    result[attribute.name] = attribute.value;
  }
  return result;
}

/**
 * Corrects the tag name if it is case-sensitive (SVG).
 * Otherwise, returns the lowercase tag name (HTML).
 *
 * @param  {string} tagName - Lowercase tag name.
 * @return {string}         - Formatted tag name.
 */
function formatTagName(tagName) {
  tagName = tagName.toLowerCase();
  var caseSensitiveTagName = getCaseSensitiveTagName(tagName);
  if (caseSensitiveTagName) {
    return caseSensitiveTagName;
  }
  return tagName;
}

/**
 * Transforms DOM nodes to `domhandler` nodes.
 *
 * @param  {NodeList}     nodes         - DOM nodes.
 * @param  {Element|null} [parent=null] - Parent node.
 * @param  {string}       [directive]   - Directive.
 * @return {Array<Comment|Element|ProcessingInstruction|Text>}
 */
function formatDOM(nodes, parent, directive) {
  parent = parent || null;
  var result = [];

  for (var index = 0, len = nodes.length; index < len; index++) {
    var node = nodes[index];
    var current;

    // set the node data given the type
    switch (node.nodeType) {
      case 1:
        // script, style, or tag
        current = new Element(
          formatTagName(node.nodeName),
          formatAttributes(node.attributes)
        );
        current.children = formatDOM(node.childNodes, current);
        break;

      case 3:
        current = new Text(node.nodeValue);
        break;

      case 8:
        current = new Comment(node.nodeValue);
        break;

      default:
        continue;
    }

    // set previous node next
    var prev = result[index - 1] || null;
    if (prev) {
      prev.next = current;
    }

    // set properties for current node
    current.parent = parent;
    current.prev = prev;
    current.next = null;

    result.push(current);
  }

  if (directive) {
    current = new ProcessingInstruction(
      directive.substring(0, directive.indexOf(' ')).toLowerCase(),
      directive
    );
    current.next = result[0] || null;
    current.parent = parent;
    result.unshift(current);

    if (result[1]) {
      result[1].prev = result[0];
    }
  }

  return result;
}

/**
 * Detects if browser is Internet Explorer.
 *
 * @return {boolean} - Whether IE is detected.
 */
function isIE() {
  return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
}

module.exports = {
  formatAttributes: formatAttributes,
  formatDOM: formatDOM,
  isIE: isIE
};


/***/ }),

/***/ 30488:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var domToReact = __webpack_require__(53670);
var attributesToProps = __webpack_require__(50484);
var htmlToDOM = __webpack_require__(14152);

// support backwards compatibility for ES Module
htmlToDOM =
  /* istanbul ignore next */
  typeof htmlToDOM.default === 'function' ? htmlToDOM.default : htmlToDOM;

var domParserOptions = { lowerCaseAttributeNames: false };

/**
 * Converts HTML string to React elements.
 *
 * @param {string} html - HTML string.
 * @param {object} [options] - Parser options.
 * @param {object} [options.htmlparser2] - htmlparser2 options.
 * @param {object} [options.library] - Library for React, Preact, etc.
 * @param {Function} [options.replace] - Replace method.
 * @returns {JSX.Element|JSX.Element[]|string} - React element(s), empty array, or string.
 */
function HTMLReactParser(html, options) {
  if (typeof html !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  if (html === '') {
    return [];
  }
  options = options || {};
  return domToReact(
    htmlToDOM(html, options.htmlparser2 || domParserOptions),
    options
  );
}

HTMLReactParser.domToReact = domToReact;
HTMLReactParser.htmlToDOM = htmlToDOM;
HTMLReactParser.attributesToProps = attributesToProps;
HTMLReactParser.Element = (__webpack_require__(47915).Element);

// support CommonJS and ES Modules
module.exports = HTMLReactParser;
module.exports["default"] = HTMLReactParser;


/***/ }),

/***/ 50484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var reactProperty = __webpack_require__(83);
var utilities = __webpack_require__(74606);

/**
 * Converts HTML/SVG DOM attributes to React props.
 *
 * @param {object} [attributes={}] - HTML/SVG DOM attributes.
 * @returns - React props.
 */
module.exports = function attributesToProps(attributes) {
  attributes = attributes || {};

  var valueOnlyInputs = {
    reset: true,
    submit: true
  };

  var attributeName;
  var attributeNameLowerCased;
  var attributeValue;
  var propName;
  var propertyInfo;
  var props = {};
  var inputIsValueOnly = attributes.type && valueOnlyInputs[attributes.type];

  for (attributeName in attributes) {
    attributeValue = attributes[attributeName];

    // ARIA (aria-*) or custom data (data-*) attribute
    if (reactProperty.isCustomAttribute(attributeName)) {
      props[attributeName] = attributeValue;
      continue;
    }

    // convert HTML/SVG attribute to React prop
    attributeNameLowerCased = attributeName.toLowerCase();
    propName = getPropName(attributeNameLowerCased);

    if (propName) {
      propertyInfo = reactProperty.getPropertyInfo(propName);

      // convert attribute to uncontrolled component prop (e.g., `value` to `defaultValue`)
      // https://reactjs.org/docs/uncontrolled-components.html
      if (
        (propName === 'checked' || propName === 'value') &&
        !inputIsValueOnly
      ) {
        propName = getPropName('default' + attributeNameLowerCased);
      }

      props[propName] = attributeValue;

      switch (propertyInfo && propertyInfo.type) {
        case reactProperty.BOOLEAN:
          props[propName] = true;
          break;
        case reactProperty.OVERLOADED_BOOLEAN:
          if (attributeValue === '') {
            props[propName] = true;
          }
          break;
      }
      continue;
    }

    // preserve custom attribute if React >=16
    if (utilities.PRESERVE_CUSTOM_ATTRIBUTES) {
      props[attributeName] = attributeValue;
    }
  }

  // transform inline style to object
  utilities.setStyleProp(attributes.style, props);

  return props;
};

/**
 * Gets prop name from lowercased attribute name.
 *
 * @param {string} attributeName - Lowercased attribute name.
 * @returns - Prop name.
 */
function getPropName(attributeName) {
  return reactProperty.possibleStandardNames[attributeName];
}


/***/ }),

/***/ 53670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(67294);
var attributesToProps = __webpack_require__(50484);
var utilities = __webpack_require__(74606);

var setStyleProp = utilities.setStyleProp;
var canTextBeChildOfNode = utilities.canTextBeChildOfNode;

/**
 * Converts DOM nodes to JSX element(s).
 *
 * @param {DomElement[]} nodes - DOM nodes.
 * @param {object} [options={}] - Options.
 * @param {Function} [options.replace] - Replacer.
 * @param {object} [options.library] - Library (React, Preact, etc.).
 * @returns - String or JSX element(s).
 */
function domToReact(nodes, options) {
  options = options || {};

  var library = options.library || React;
  var cloneElement = library.cloneElement;
  var createElement = library.createElement;
  var isValidElement = library.isValidElement;

  var result = [];
  var node;
  var isWhitespace;
  var hasReplace = typeof options.replace === 'function';
  var replaceElement;
  var props;
  var children;
  var trim = options.trim;

  for (var i = 0, len = nodes.length; i < len; i++) {
    node = nodes[i];

    // replace with custom React element (if present)
    if (hasReplace) {
      replaceElement = options.replace(node);

      if (isValidElement(replaceElement)) {
        // set "key" prop for sibling elements
        // https://fb.me/react-warning-keys
        if (len > 1) {
          replaceElement = cloneElement(replaceElement, {
            key: replaceElement.key || i
          });
        }
        result.push(replaceElement);
        continue;
      }
    }

    if (node.type === 'text') {
      isWhitespace = !node.data.trim().length;

      if (isWhitespace && node.parent && !canTextBeChildOfNode(node.parent)) {
        // We have a whitespace node that can't be nested in its parent
        // so skip it
        continue;
      }

      if (trim && isWhitespace) {
        // Trim is enabled and we have a whitespace node
        // so skip it
        continue;
      }

      // We have a text node that's not whitespace and it can be nested
      // in its parent so add it to the results
      result.push(node.data);
      continue;
    }

    props = node.attribs;
    if (skipAttributesToProps(node)) {
      setStyleProp(props.style, props);
    } else if (props) {
      props = attributesToProps(props);
    }

    children = null;

    switch (node.type) {
      case 'script':
      case 'style':
        // prevent text in <script> or <style> from being escaped
        // https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
        if (node.children[0]) {
          props.dangerouslySetInnerHTML = {
            __html: node.children[0].data
          };
        }
        break;

      case 'tag':
        // setting textarea value in children is an antipattern in React
        // https://reactjs.org/docs/forms.html#the-textarea-tag
        if (node.name === 'textarea' && node.children[0]) {
          props.defaultValue = node.children[0].data;
        } else if (node.children && node.children.length) {
          // continue recursion of creating React elements (if applicable)
          children = domToReact(node.children, options);
        }
        break;

      // skip all other cases (e.g., comment)
      default:
        continue;
    }

    // set "key" prop for sibling elements
    // https://fb.me/react-warning-keys
    if (len > 1) {
      props.key = i;
    }

    result.push(createElement(node.name, props, children));
  }

  return result.length === 1 ? result[0] : result;
}

/**
 * Determines whether DOM element attributes should be transformed to props.
 * Web Components should not have their attributes transformed except for `style`.
 *
 * @param {DomElement} node
 * @returns - Whether node attributes should be converted to props.
 */
function skipAttributesToProps(node) {
  return (
    utilities.PRESERVE_CUSTOM_ATTRIBUTES &&
    node.type === 'tag' &&
    utilities.isCustomComponent(node.name, node.attribs)
  );
}

module.exports = domToReact;


/***/ }),

/***/ 74606:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(67294);
var styleToJS = (__webpack_require__(41476)["default"]);

/**
 * Swap key with value in an object.
 *
 * @param {object} obj - The object.
 * @param {Function} [override] - The override method.
 * @returns - The inverted object.
 */
function invertObject(obj, override) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('First argument must be an object');
  }

  var key;
  var value;
  var isOverridePresent = typeof override === 'function';
  var overrides = {};
  var result = {};

  for (key in obj) {
    value = obj[key];

    if (isOverridePresent) {
      overrides = override(key, value);
      if (overrides && overrides.length === 2) {
        result[overrides[0]] = overrides[1];
        continue;
      }
    }

    if (typeof value === 'string') {
      result[value] = key;
    }
  }

  return result;
}

/**
 * Check if a given tag is a custom component.
 *
 * @see {@link https://github.com/facebook/react/blob/v16.6.3/packages/react-dom/src/shared/isCustomComponent.js}
 *
 * @param {string} tagName - The name of the html tag.
 * @param {object} props - The props being passed to the element.
 * @returns - Whether tag is custom component.
 */
function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return props && typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var styleToJSOptions = { reactCompat: true };

/**
 * Sets style prop.
 *
 * @param {null|undefined|string} style
 * @param {object} props
 */
function setStyleProp(style, props) {
  if (style === null || style === undefined) {
    return;
  }
  try {
    props.style = styleToJS(style, styleToJSOptions);
  } catch (err) {
    props.style = {};
  }
}

/**
 * @constant {boolean}
 * @see {@link https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html}
 */
var PRESERVE_CUSTOM_ATTRIBUTES = React.version.split('.')[0] >= 16;

// Taken from
// https://github.com/facebook/react/blob/cae635054e17a6f107a39d328649137b83f25972/packages/react-dom/src/client/validateDOMNesting.js#L213
var elementsWithNoTextChildren = new Set([
  'tr',
  'tbody',
  'thead',
  'tfoot',
  'colgroup',
  'table',
  'head',
  'html',
  'frameset'
]);

/**
 * Checks if the given node can contain text nodes
 *
 * @param {DomElement} node - Node.
 * @returns - Whether node can contain text nodes.
 */
function canTextBeChildOfNode(node) {
  return !elementsWithNoTextChildren.has(node.name);
}

module.exports = {
  PRESERVE_CUSTOM_ATTRIBUTES: PRESERVE_CUSTOM_ATTRIBUTES,
  invertObject: invertObject,
  isCustomComponent: isCustomComponent,
  setStyleProp: setStyleProp,
  canTextBeChildOfNode: canTextBeChildOfNode,
  elementsWithNoTextChildren: elementsWithNoTextChildren
};


/***/ }),

/***/ 18139:
/***/ ((module) => {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      attributeName = _ref2[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function capitalize(token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

var _require = __webpack_require__(78229),
    CAMELCASE = _require.CAMELCASE,
    SAME = _require.SAME,
    possibleStandardNamesOptimized = _require.possibleStandardNames;

var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */

var isCustomAttribute = RegExp.prototype.test.bind( // eslint-disable-next-line no-misleading-character-class
new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
var possibleStandardNames = Object.keys(possibleStandardNamesOptimized).reduce(function (accumulator, standardName) {
  var propName = possibleStandardNamesOptimized[standardName];

  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }

  return accumulator;
}, {});

exports.BOOLEAN = BOOLEAN;
exports.BOOLEANISH_STRING = BOOLEANISH_STRING;
exports.NUMERIC = NUMERIC;
exports.OVERLOADED_BOOLEAN = OVERLOADED_BOOLEAN;
exports.POSITIVE_NUMERIC = POSITIVE_NUMERIC;
exports.RESERVED = RESERVED;
exports.STRING = STRING;
exports.getPropertyInfo = getPropertyInfo;
exports.isCustomAttribute = isCustomAttribute;
exports.possibleStandardNames = possibleStandardNames;


/***/ }),

/***/ 78229:
/***/ ((__unused_webpack_module, exports) => {

// An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').
var SAME = 0;
exports.SAME = SAME;

// An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').
var CAMELCASE = 1;
exports.CAMELCASE = CAMELCASE;

exports.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  'accept-charset': 'acceptCharset',
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: 'className',
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: 'htmlFor',
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  'http-equiv': 'httpEquiv',
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  'accent-height': 'accentHeight',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  'alignment-baseline': 'alignmentBaseline',
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  'arabic-form': 'arabicForm',
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  'baseline-shift': 'baselineShift',
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  'cap-height': 'capHeight',
  clip: 0,
  clipPath: 1,
  'clip-path': 'clipPath',
  clipPathUnits: 1,
  clipRule: 1,
  'clip-rule': 'clipRule',
  color: 0,
  colorInterpolation: 1,
  'color-interpolation': 'colorInterpolation',
  colorInterpolationFilters: 1,
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorProfile: 1,
  'color-profile': 'colorProfile',
  colorRendering: 1,
  'color-rendering': 'colorRendering',
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  'dominant-baseline': 'dominantBaseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  'enable-background': 'enableBackground',
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  'fill-opacity': 'fillOpacity',
  fillRule: 1,
  'fill-rule': 'fillRule',
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  'flood-opacity': 'floodOpacity',
  floodColor: 1,
  'flood-color': 'floodColor',
  focusable: 0,
  fontFamily: 1,
  'font-family': 'fontFamily',
  fontSize: 1,
  'font-size': 'fontSize',
  fontSizeAdjust: 1,
  'font-size-adjust': 'fontSizeAdjust',
  fontStretch: 1,
  'font-stretch': 'fontStretch',
  fontStyle: 1,
  'font-style': 'fontStyle',
  fontVariant: 1,
  'font-variant': 'fontVariant',
  fontWeight: 1,
  'font-weight': 'fontWeight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  'glyph-name': 'glyphName',
  glyphOrientationHorizontal: 1,
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphOrientationVertical: 1,
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  'horiz-adv-x': 'horizAdvX',
  horizOriginX: 1,
  'horiz-origin-x': 'horizOriginX',
  ideographic: 0,
  imageRendering: 1,
  'image-rendering': 'imageRendering',
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  'letter-spacing': 'letterSpacing',
  lightingColor: 1,
  'lighting-color': 'lightingColor',
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  'marker-end': 'markerEnd',
  markerHeight: 1,
  markerMid: 1,
  'marker-mid': 'markerMid',
  markerStart: 1,
  'marker-start': 'markerStart',
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  'overline-position': 'overlinePosition',
  overlineThickness: 1,
  'overline-thickness': 'overlineThickness',
  paintOrder: 1,
  'paint-order': 'paintOrder',
  panose1: 0,
  'panose-1': 'panose1',
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  'pointer-events': 'pointerEvents',
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  'rendering-intent': 'renderingIntent',
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  'shape-rendering': 'shapeRendering',
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  'stop-color': 'stopColor',
  stopOpacity: 1,
  'stop-opacity': 'stopOpacity',
  strikethroughPosition: 1,
  'strikethrough-position': 'strikethroughPosition',
  strikethroughThickness: 1,
  'strikethrough-thickness': 'strikethroughThickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  'stroke-dasharray': 'strokeDasharray',
  strokeDashoffset: 1,
  'stroke-dashoffset': 'strokeDashoffset',
  strokeLinecap: 1,
  'stroke-linecap': 'strokeLinecap',
  strokeLinejoin: 1,
  'stroke-linejoin': 'strokeLinejoin',
  strokeMiterlimit: 1,
  'stroke-miterlimit': 'strokeMiterlimit',
  strokeWidth: 1,
  'stroke-width': 'strokeWidth',
  strokeOpacity: 1,
  'stroke-opacity': 'strokeOpacity',
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  'text-anchor': 'textAnchor',
  textDecoration: 1,
  'text-decoration': 'textDecoration',
  textLength: 1,
  textRendering: 1,
  'text-rendering': 'textRendering',
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  'underline-position': 'underlinePosition',
  underlineThickness: 1,
  'underline-thickness': 'underlineThickness',
  unicode: 0,
  unicodeBidi: 1,
  'unicode-bidi': 'unicodeBidi',
  unicodeRange: 1,
  'unicode-range': 'unicodeRange',
  unitsPerEm: 1,
  'units-per-em': 'unitsPerEm',
  unselectable: 0,
  vAlphabetic: 1,
  'v-alphabetic': 'vAlphabetic',
  values: 0,
  vectorEffect: 1,
  'vector-effect': 'vectorEffect',
  version: 0,
  vertAdvY: 1,
  'vert-adv-y': 'vertAdvY',
  vertOriginX: 1,
  'vert-origin-x': 'vertOriginX',
  vertOriginY: 1,
  'vert-origin-y': 'vertOriginY',
  vHanging: 1,
  'v-hanging': 'vHanging',
  vIdeographic: 1,
  'v-ideographic': 'vIdeographic',
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  'v-mathematical': 'vMathematical',
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  'word-spacing': 'wordSpacing',
  writingMode: 1,
  'writing-mode': 'writingMode',
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  'x-height': 'xHeight',
  xlinkActuate: 1,
  'xlink:actuate': 'xlinkActuate',
  xlinkArcrole: 1,
  'xlink:arcrole': 'xlinkArcrole',
  xlinkHref: 1,
  'xlink:href': 'xlinkHref',
  xlinkRole: 1,
  'xlink:role': 'xlinkRole',
  xlinkShow: 1,
  'xlink:show': 'xlinkShow',
  xlinkTitle: 1,
  'xlink:title': 'xlinkTitle',
  xlinkType: 1,
  'xlink:type': 'xlinkType',
  xmlBase: 1,
  'xml:base': 'xmlBase',
  xmlLang: 1,
  'xml:lang': 'xmlLang',
  xmlns: 0,
  'xml:space': 'xmlSpace',
  xmlnsXlink: 1,
  'xmlns:xlink': 'xmlnsXlink',
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};


/***/ }),

/***/ 41476:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var style_to_object_1 = __importDefault(__webpack_require__(57848));
var utilities_1 = __webpack_require__(6818);
function StyleToJS(style, options) {
    var output = {};
    if (!style || typeof style !== 'string') {
        return output;
    }
    (0, style_to_object_1["default"])(style, function (property, value) {
        if (property && value) {
            output[(0, utilities_1.camelCase)(property, options)] = value;
        }
    });
    return output;
}
exports["default"] = StyleToJS;


/***/ }),

/***/ 6818:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.camelCase = void 0;
var CUSTOM_PROPERTY_REGEX = /^--[a-zA-Z0-9-]+$/;
var HYPHEN_REGEX = /-([a-z])/g;
var NO_HYPHEN_REGEX = /^[^-]+$/;
var VENDOR_PREFIX_REGEX = /^-(webkit|moz|ms|o|khtml)-/;
var MS_VENDOR_PREFIX_REGEX = /^-(ms)-/;
var skipCamelCase = function (property) {
    return !property ||
        NO_HYPHEN_REGEX.test(property) ||
        CUSTOM_PROPERTY_REGEX.test(property);
};
var capitalize = function (match, character) {
    return character.toUpperCase();
};
var trimHyphen = function (match, prefix) { return "".concat(prefix, "-"); };
var camelCase = function (property, options) {
    if (options === void 0) { options = {}; }
    if (skipCamelCase(property)) {
        return property;
    }
    property = property.toLowerCase();
    if (options.reactCompat) {
        property = property.replace(MS_VENDOR_PREFIX_REGEX, trimHyphen);
    }
    else {
        property = property.replace(VENDOR_PREFIX_REGEX, trimHyphen);
    }
    return property.replace(HYPHEN_REGEX, capitalize);
};
exports.camelCase = camelCase;


/***/ }),

/***/ 57848:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(18139);

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ })

}]);