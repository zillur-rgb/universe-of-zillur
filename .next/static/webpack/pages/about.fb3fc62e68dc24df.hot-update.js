"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/FrontendCard.js":
/*!************************************!*\
  !*** ./components/FrontendCard.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\nvar _this = undefined;\n\n\nvar FrontendCard = function() {\n    var _this1 = _this;\n    var frontend = [\n        \"JavaScript(ES7)\",\n        \"ReactJs\",\n        \"NextJs\",\n        \"NodeJs\",\n        \"ExpressJs\",\n        \"MongoDB\",\n        \"Tailwind CSS\",\n        \"Styled Components\",\n        \"Jest\",\n        \"Firebase Auth\",\n        \"SASS\",\n        \"Heroku\", \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5 bg-secondary w-4/7 rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-text text-xl font-nunito font-bold\",\n                children: \"Frontend Technologies I have been using\"\n            }, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendCard.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2\",\n                children: frontend.map(function(front, idx) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_1__.BiBadgeCheck, {\n                                className: \"text-yellow\"\n                            }, void 0, false, {\n                                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendCard.js\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, _this1),\n                            \" \",\n                            front\n                        ]\n                    }, idx, true, {\n                        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendCard.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendCard.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendCard.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = FrontendCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontendCard);\nvar _c;\n$RefreshReg$(_c, \"FrontendCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zyb250ZW5kQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQThDO0FBRTlDLElBQU1DLFlBQVksR0FBRyxXQUFNOztJQUN6QixJQUFNQyxRQUFRLEdBQUc7UUFDZixpQkFBaUI7UUFDakIsU0FBUztRQUNULFFBQVE7UUFDUixRQUFRO1FBQ1IsV0FBVztRQUNYLFNBQVM7UUFDVCxjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLE1BQU07UUFDTixlQUFlO1FBQ2YsTUFBTTtRQUNOLFFBQVE7S0FDVDtJQUNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvQ0FBb0M7OzBCQUNqRCw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLHlDQUF5QzswQkFBQyx5Q0FFeEQ7Ozs7O3FCQUFLOzBCQUNMLDhEQUFDRSxJQUFFO2dCQUFDRixTQUFTLEVBQUMsa0JBQWtCOzBCQUM3QkYsUUFBUSxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFFQyxHQUFHO3lDQUN2Qiw4REFBQ0MsSUFBRTt3QkFBV04sU0FBUyxFQUFDLG1CQUFtQjs7MENBQ3pDLDhEQUFDSix3REFBWTtnQ0FBQ0ksU0FBUyxFQUFDLGFBQWE7Ozs7O3NDQUFHOzRCQUFBLEdBQUM7NEJBQUNJLEtBQUs7O3VCQUR4Q0MsR0FBRzs7Ozs4QkFFUDtpQkFDTixDQUFDOzs7OztxQkFDQzs7Ozs7O2FBQ0QsQ0FDTjtDQUNIO0FBN0JLUixLQUFBQSxZQUFZO0FBK0JsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRnJvbnRlbmRDYXJkLmpzP2VmMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlCYWRnZUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5cbmNvbnN0IEZyb250ZW5kQ2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZnJvbnRlbmQgPSBbXG4gICAgXCJKYXZhU2NyaXB0KEVTNylcIixcbiAgICBcIlJlYWN0SnNcIixcbiAgICBcIk5leHRKc1wiLFxuICAgIFwiTm9kZUpzXCIsXG4gICAgXCJFeHByZXNzSnNcIixcbiAgICBcIk1vbmdvREJcIixcbiAgICBcIlRhaWx3aW5kIENTU1wiLFxuICAgIFwiU3R5bGVkIENvbXBvbmVudHNcIixcbiAgICBcIkplc3RcIixcbiAgICBcIkZpcmViYXNlIEF1dGhcIixcbiAgICBcIlNBU1NcIixcbiAgICBcIkhlcm9rdVwiLFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGJnLXNlY29uZGFyeSB3LTQvNyByb3VuZGVkLTJ4bFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtdGV4dCB0ZXh0LXhsIGZvbnQtbnVuaXRvIGZvbnQtYm9sZFwiPlxuICAgICAgICBGcm9udGVuZCBUZWNobm9sb2dpZXMgSSBoYXZlIGJlZW4gdXNpbmdcbiAgICAgIDwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMlwiPlxuICAgICAgICB7ZnJvbnRlbmQubWFwKChmcm9udCwgaWR4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aWR4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPEJpQmFkZ2VDaGVjayBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvd1wiIC8+IHtmcm9udH1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZENhcmQ7XG4iXSwibmFtZXMiOlsiQmlCYWRnZUNoZWNrIiwiRnJvbnRlbmRDYXJkIiwiZnJvbnRlbmQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibWFwIiwiZnJvbnQiLCJpZHgiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FrontendCard.js\n");

/***/ })

});