(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{10:function(e,_,t){"use strict";t.d(_,"a",(function(){return c})),t.d(_,"e",(function(){return i})),t.d(_,"b",(function(){return s})),t.d(_,"c",(function(){return u}));var n=t(14),r=t(2),a=Object(n.b)({name:"calculator",initialState:{darkTheme:!1,history:[]},reducers:{changeTheme:function(e){e.darkTheme=!e.darkTheme},saveExpression:function(e,_){Object(r.a)(e.history).length>10&&e.history.pop(),e.history.unshift(_.payload)},cleanExpression:function(e){e.history=[]},clickExpressionItem:function(e,_){var t=_.payload,n=Object(r.a)(e.history)[t];e.history.splice(t,1),e.history.unshift(n)}}}),o=a.actions,c=o.changeTheme,i=o.saveExpression,s=o.cleanExpression,u=o.clickExpressionItem;_.d=a.reducer},12:function(e,_,t){"use strict";t.d(_,"a",(function(){return a})),t.d(_,"b",(function(){return o}));var n=t(54),r=t(1),a={ADD:"ADD",DELETE:"DELETE",CLEAN:"CLEAN",CALC:"CALC"},o=[{display:"C",keydown:"Delete",action:a.CLEAN,ariaLabel:"clean",control:!0},{display:"(",keydown:"(",action:a.ADD,control:!0},{display:")",keydown:")",action:a.ADD,control:!0},{display:"\xf7",keydown:"/",action:a.ADD,operation:!0},{display:"7",keydown:"7",action:a.ADD},{display:"8",keydown:"8",action:a.ADD},{display:"9",keydown:"9",action:a.ADD},{display:"x",keydown:"*",action:a.ADD,operation:!0},{display:"4",keydown:"4",action:a.ADD},{display:"5",keydown:"5",action:a.ADD},{display:"6",keydown:"6",action:a.ADD},{display:"+",keydown:"+",action:a.ADD,operation:!0},{display:"1",keydown:"1",action:a.ADD},{display:"2",keydown:"2",action:a.ADD},{display:"3",keydown:"3",action:a.ADD},{display:"-",keydown:"-",action:a.ADD,operation:!0},{display:Object(r.jsx)(n.a,{size:"28px"}),keydown:"Backspace",action:a.DELETE,ariaLabel:"delete",control:!0},{display:"0",keydown:"0",action:a.ADD},{display:".",keydown:".",action:a.ADD},{display:"=",keydown:"Enter",action:a.CALC,equals:!0}]},17:function(e,_,t){"use strict";var n;t.d(_,"a",(function(){return n})),function(e){e[e.Previous=0]="Previous",e[e.Current=1]="Current"}(n||(n={}))},32:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var _Users_meiyi_Documents_code_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_icon_park_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(56),_icon_park_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(57),_icon_park_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(58),_icon_park_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(59),_store_hook__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_store_calculatorSlice__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(12),_styled_Container__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(4),_HistoryList__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(36),_components_Message__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(37),_contexts_EnumType__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(17),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);function Calculator(){var dispatch=Object(_store_hook__WEBPACK_IMPORTED_MODULE_6__.a)(),_useAppSelector=Object(_store_hook__WEBPACK_IMPORTED_MODULE_6__.b)((function(e){return e.calculator})),darkTheme=_useAppSelector.darkTheme,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState2=Object(_Users_meiyi_Documents_code_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),OpenHistoryList=_useState2[0],setOpenHistoryList=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(_Users_meiyi_Documents_code_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),current=_useState4[0],setCurrent=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState6=Object(_Users_meiyi_Documents_code_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),previous=_useState6[0],setPrevious=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState8=Object(_Users_meiyi_Documents_code_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),isCopied=_useState8[0],setIsCopied=_useState8[1],appendValue=function(e){var _=current.slice(-1);"."===e&&"."===_||"+"===e&&"+"===_||"-"===e&&"-"===_||"x"===e&&"x"===_||"\xf7"===e&&"\xf7"===_||!("+"!==_&&"-"!==_||"x"!==e&&"\xf7"!==e)||setCurrent((function(_){return 0!==_.length||"."!==e&&"+"!==e&&"-"!==e&&"x"!==e&&"\xf7"!==e?_+e:0+e}))},handleDelete=function(){setCurrent((function(e){return e.slice(0,-1)}))},handleAllClear=function(){setCurrent(""),setPrevious("")},handleReplaceText=function(e){var _=e;return _.includes("x")?_=_.replace("x","*"):_.includes("\xf7")&&(_=_.replace("\xf7","/")),_},equals=function equals(){if(""!==current){var sliceTempCurrent=current;isNaN(Number(sliceTempCurrent.slice(-1)))&&(sliceTempCurrent=String(current).slice(0,-1));try{var newPrevious=sliceTempCurrent+"=",total=eval(handleReplaceText(sliceTempCurrent)).toString();setPrevious(newPrevious),setCurrent(total),dispatch(Object(_store_calculatorSlice__WEBPACK_IMPORTED_MODULE_7__.e)({expression:newPrevious,total:total}))}catch(_unused){setPrevious(current+"="),setCurrent("0")}}},btnClick=function(e){switch(e.action){case _contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__.a.ADD:return appendValue(e.display);case _contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__.a.DELETE:return handleDelete();case _contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__.a.CLEAN:return handleAllClear();case _contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__.a.CALC:return equals()}},handleKeyDown=function(e){var _=_contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__.b.findIndex((function(_){return e.key===_.keydown}));-1!==_&&btnClick(_contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__.b[_])};Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return window.addEventListener("keydown",handleKeyDown),function(){window.removeEventListener("keydown",handleKeyDown)}}),[handleKeyDown]);var copyTextToClipboard=function(e){navigator.clipboard.writeText(e).then((function(){setIsCopied(!0),setTimeout((function(){setIsCopied(!1)}),2e3)})).catch((function(e){console.log(e)}))},handleCopy=function(e){e===_contexts_EnumType__WEBPACK_IMPORTED_MODULE_12__.a.Previous?copyTextToClipboard(previous+current):e===_contexts_EnumType__WEBPACK_IMPORTED_MODULE_12__.a.Current&&copyTextToClipboard(current)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.c,{className:"container ",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.i,{className:"screen",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.k,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.j,{onClick:function(){return dispatch(Object(_store_calculatorSlice__WEBPACK_IMPORTED_MODULE_7__.a)())},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_2__.a,{size:"20px",className:darkTheme?void 0:"action"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_3__.a,{size:"20px",className:darkTheme?"action":void 0})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_4__.a,{size:"20px",onClick:function(){return setOpenHistoryList(!0)}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.h,{onClick:function(){return handleCopy(_contexts_EnumType__WEBPACK_IMPORTED_MODULE_12__.a.Previous)},children:previous}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.d,{className:"current",onClick:function(){return handleCopy(_contexts_EnumType__WEBPACK_IMPORTED_MODULE_12__.a.Current)},children:current})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.b,{children:_contexts_ButtonConfig__WEBPACK_IMPORTED_MODULE_8__.b.map((function(e,_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_styled_Container__WEBPACK_IMPORTED_MODULE_9__.a,{"aria-label":e.ariaLabel,control:e.control,gridSpan:e.gridSpan,data:e.data,operation:e.operation,equals:e.equals,onClick:function(){return btnClick(e)},children:e.display},_)}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_HistoryList__WEBPACK_IMPORTED_MODULE_10__.a,{OpenHistoryList:OpenHistoryList,setOpenHistoryList:setOpenHistoryList,setCurrent:setCurrent,setPrevious:setPrevious}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Message__WEBPACK_IMPORTED_MODULE_11__.a,{text:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_icon_park_react__WEBPACK_IMPORTED_MODULE_5__.a,{})," Copied!"]}),isCopied:isCopied})]})}},36:function(e,_,t){"use strict";t(0);var n=t(55),r=t(4),a=t(9),o=t(10),c=t(1);_.a=function(e){var _=e.OpenHistoryList,t=e.setOpenHistoryList,i=e.setCurrent,s=e.setPrevious,u=Object(a.a)(),l=Object(a.b)((function(e){return e.calculator})).history,d=function(){t(!1)};return Object(c.jsx)(r.f,{show:_,onClick:d,children:Object(c.jsxs)(r.e,{onClick:function(e){e.stopPropagation()},className:"slide-top",children:[Object(c.jsx)(n.a,{size:"20px",onClick:function(){u(Object(o.b)())}}),l.map((function(e,_){return Object(c.jsxs)(r.g,{onClick:function(){return function(e,_){i(e.total),s(e.expression),d(),u(Object(o.c)(_))}(e,_)},children:[Object(c.jsx)("span",{children:e.expression}),Object(c.jsx)("span",{children:e.total})]},_)}))]})})}},37:function(e,_,t){"use strict";var n=t(1);_.a=function(e){var _=e.text,t=e.isCopied;return Object(n.jsx)("div",{id:"Message",className:t?"show":void 0,children:_})}},4:function(e,_,t){"use strict";t.d(_,"c",(function(){return b})),t.d(_,"k",(function(){return P})),t.d(_,"j",(function(){return C})),t.d(_,"i",(function(){return M})),t.d(_,"h",(function(){return f})),t.d(_,"d",(function(){return y})),t.d(_,"b",(function(){return m})),t.d(_,"a",(function(){return x})),t.d(_,"f",(function(){return T})),t.d(_,"e",(function(){return A})),t.d(_,"g",(function(){return L}));var n,r,a,o,c,i,s,u,l,d,E,O,p=t(5),D=t(6),b=D.a.div(n||(n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),P=D.a.div(r||(r=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),C=D.a.div(a||(a=Object(p.a)(["\n  background: var(--Button-Container);\n  border-radius: 10px;\n  > span {\n    display: inline-block;\n    padding: 8px 10px;\n\n    &:not(.action) {\n      opacity: 0.5;\n    }\n  }\n"]))),M=D.a.div(o||(o=Object(p.a)(["\n  flex: 1 0;\n  display: grid;\n  align-items: end;\n  grid-template-rows: 40px auto 50px;\n  gap: 1rem;\n  color: var(--Text);\n  font-weight: 500;\n  word-wrap: break-word; /*\u6a19\u660e\u700f\u89bd\u5668\u518d\u55ae\u8a5e\u5167\u9032\u884c\u65b7\u884c\uff0c\u9632\u6b62\u5b57\u7b26\u4e32\u592a\u9577\u627e\u4e0d\u5230\u4ed6\u7684\u81ea\u7136\u65b7\u53e5\u7522\u751f\u6ea2\u51fa*/\n  word-break: break-all; /*\u6a19\u660e\u600e\u9ebc\u600e\u9ebc\u9032\u884c\u55ae\u8a5e\u5167\u7684\u65b7\u53e5*/\n  text-align: right;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),j=D.a.div(c||(c=Object(p.a)(["\n  padding: 0 4px;\n  cursor: pointer;\n  \n  &:hover {\n    background-color: rgb(91 91 117 / 30%);\n    border-radius: 5px;\n  }\n"]))),f=Object(D.a)(j)(i||(i=Object(p.a)(["\n  color: var(--Previous);\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]))),y=Object(D.a)(j)(s||(s=Object(p.a)(["\n  font-size: 2.5rem;\n"]))),m=D.a.div(u||(u=Object(p.a)(["\n  flex: 1.5 0;\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  gap: 0.5rem;\n  padding: 1rem 1rem;\n  border-radius: 1.5rem 1.5rem 0 0;\n  background: var(--Button-Container);\n"]))),x=D.a.button(l||(l=Object(p.a)(["\n  cursor: pointer;\n  font-size: 2rem;\n  border: none;\n  outline: none;\n  border-radius: 1.5rem;\n  font-weight: 500;\n  color: var(--Text);\n  background: transparent;\n  &:hover {\n    background-color: var(--Background);\n  }\n\n  /*EXPANDED FORM EXAMPLE \u64f4\u5c55\u8868\u683cJS*/\n  ","\n\n  /*\u4e0a\u9762\u7c21\u5316\u5f8c\u8b8a\u4e0b\u9762\u7684*/\n  ","\n  ","\n  ","\n  ","\n"])),(function(e){var _=e.gridSpan;if(_)return"grid-column: span ".concat(_,";")}),(function(e){var _=e.gridSpan;return _&&"grid-column: span ".concat(_,";")}),(function(e){return e.operation&&"color: var(--Green)"}),(function(e){return e.control&&"color: var(--Blue)"}),(function(e){return e.equals&&"background-color: var(--Background-Green);"})),T=D.a.div(d||(d=Object(p.a)(["\n  display: ",";\n  position: absolute;\n  background-color: rgb(0 0 0 / 50%);\n  width: 100%;\n  height: 100%;\n"])),(function(e){return e.show?"inline-block":"none"})),A=D.a.div(E||(E=Object(p.a)(["\n  height: 80%;\n  width: 100%;\n  background: var(--Button-Container);\n  padding: 1rem;\n  overflow: auto;\n"]))),L=D.a.div(O||(O=Object(p.a)(["\n  padding: 1rem 0;\n  text-align: right;\n\n  > span {\n    display: block;    \n  }\n\n  > span:first-child{\n    color: var(--Previous);\n    padding-bottom: 8px;\n  }\n"])))},49:function(e,_,t){},53:function(e,_,t){"use strict";t.r(_);var n=t(28),r=t(16),a=t(8),o=t(31),c=(t(49),t(0)),i=t(32),s=t(9),u=t(1);var l=function(){var e=Object(s.b)((function(e){return e.calculator})).darkTheme;return Object(c.useEffect)((function(){e?document.body.classList.add("dark"):document.body.classList.remove("dark")}),[e]),Object(u.jsx)(i.a,{})},d=t(38),E=t.n(d),O=t(14),p=t(3),D=t(10),b=Object(p.b)({calculator:D.d}),P={key:"root",storage:E.a,whitelist:["calculator"]},C=Object(a.g)(P,b),M=Object(O.a)({reducer:C,middleware:function(e){return e({serializableCheck:{ignoredActions:[a.a,a.f,a.b,a.c,a.d,a.e]}})}}),j=function(){return Object(u.jsx)("footer",{children:Object(u.jsxs)("p",{children:["Made by @",Object(u.jsx)("a",{href:"https://github.com/MeganxLi",children:"Megan Lee"})]})})},f=document.getElementById("root"),y=Object(n.createRoot)(f),m=Object(a.h)(M);y.render(Object(u.jsx)(r.a,{store:M,children:Object(u.jsxs)(o.a,{loading:null,persistor:m,children:[Object(u.jsx)(l,{}),Object(u.jsx)(j,{})]})}))},9:function(e,_,t){"use strict";t.d(_,"a",(function(){return r})),t.d(_,"b",(function(){return a}));var n=t(16),r=n.b,a=n.c}},[[53,1,2]]]);
//# sourceMappingURL=main.7135614f.chunk.js.map