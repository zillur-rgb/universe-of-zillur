"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Form = function() {\n    _s();\n    var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var sendEmail = function(e) {\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY).then(function(result) {\n            console.log(result.text);\n        }, function(error) {\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        ref: form,\n        onSubmit: sendEmail,\n        className: \"md:w-3/5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Fullname\",\n                name: \"user_name\",\n                className: \"px-5 py-4 rounded-lg focus:outline-yellow focus:outline-1 focus:border-none bg-secondary w-full border-lynch border my-4 text-white\"\n            }, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                placeholder: \"Email\",\n                name: \"user_email\",\n                className: \"px-5 py-4 rounded-lg focus:outline-yellow focus:outline-1 focus:border-none text-white bg-secondary w-full border-lynch border my-4 caret-yellow\"\n            }, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                name: \"message\",\n                className: \"px-5 py-4 rounded-lg focus:outline-yellow focus:outline-1 focus:border-none bg-secondary w-full border-lynch text-white border my-4 caret-yellow\",\n                rows: \"10\",\n                placeholder: \"Write your message here\"\n            }, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \" py-3 px-12 rounded-lg text-yellow w-full hover:bg-yellow hover:text-bg font-bold border border-yellow caret-yellow\",\n                value: \"send\",\n                children: \"Send\"\n            }, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Form.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Form, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQjtBQUNLO0FBQ1E7O0FBRXZDLElBQU1HLElBQUksR0FBRyxXQUFNOztJQUNqQixJQUFNQyxJQUFJLEdBQUdILDZDQUFNLEVBQUU7SUFFckIsSUFBTUksU0FBUyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQkwsaUVBQ1csQ0FDUE8sT0FBTyxDQUFDQyxHQUFHLENBQUNDLG9CQUFvQixFQUNoQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNFLHFCQUFxQixFQUNqQ1IsSUFBSSxDQUFDUyxPQUFPLEVBQ1pDLG9CQUFvQixDQUNyQixDQUNBQyxJQUFJLENBQ0gsU0FBQ0MsTUFBTSxFQUFLO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDO1NBQzFCLEVBQ0QsU0FBQ0MsS0FBSyxFQUFLO1lBQ1RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUNELElBQUksQ0FBQyxDQUFDO1NBQ3pCLENBQ0YsQ0FBQztLQUNMO0lBQ0QscUJBQ0UsOERBQUNmLE1BQUk7UUFBQ2lCLEdBQUcsRUFBRWpCLElBQUk7UUFBRWtCLFFBQVEsRUFBRWpCLFNBQVM7UUFBRWtCLFNBQVMsRUFBQyxpQkFBaUI7OzBCQUMvRCw4REFBQ0MsT0FBSztnQkFDSkMsSUFBSSxFQUFDLE1BQU07Z0JBQ1hDLFdBQVcsRUFBQyxVQUFVO2dCQUN0QkMsSUFBSSxFQUFDLFdBQVc7Z0JBQ2hCSixTQUFTLEVBQUMscUlBQXFJOzs7OztxQkFDL0k7MEJBQ0YsOERBQUNLLElBQUU7Ozs7cUJBQUc7MEJBQ04sOERBQUNKLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxPQUFPO2dCQUNaQyxXQUFXLEVBQUMsT0FBTztnQkFDbkJDLElBQUksRUFBQyxZQUFZO2dCQUNqQkosU0FBUyxFQUFDLGtKQUFrSjs7Ozs7cUJBQzVKOzBCQUNGLDhEQUFDSyxJQUFFOzs7O3FCQUFHOzBCQUNOLDhEQUFDQyxVQUFRO2dCQUNQRixJQUFJLEVBQUMsU0FBUztnQkFDZEosU0FBUyxFQUFDLGtKQUFrSjtnQkFDNUpPLElBQUksRUFBQyxJQUFJO2dCQUNUSixXQUFXLEVBQUMseUJBQXlCOzs7OztxQkFDM0I7MEJBQ1osOERBQUNFLElBQUU7Ozs7cUJBQUc7MEJBQ04sOERBQUNHLFFBQU07Z0JBQ0xSLFNBQVMsRUFBQyxxSEFBcUg7Z0JBQy9IUyxLQUFLLEVBQUMsTUFBTTswQkFDYixNQUVEOzs7OztxQkFBUzs7Ozs7O2FBQ0osQ0FDUDtDQUNIO0dBcERLN0IsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBc0RWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzP2ZiOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZW1haWxqcyBmcm9tIFwiQGVtYWlsanMvYnJvd3NlclwiO1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZW1haWxqc1xuICAgICAgLnNlbmRGb3JtKFxuICAgICAgICBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0VSVklDRV9JRCxcbiAgICAgICAgcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1RFTVBMQVRFX0lELFxuICAgICAgICBmb3JtLmN1cnJlbnQsXG4gICAgICAgIFJFQUNUX0FQUF9QVUJMSUNfS0VZXG4gICAgICApXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm0gcmVmPXtmb3JtfSBvblN1Ym1pdD17c2VuZEVtYWlsfSBjbGFzc05hbWU9XCJtZDp3LTMvNSB3LWZ1bGxcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRnVsbG5hbWVcIlxuICAgICAgICBuYW1lPVwidXNlcl9uYW1lXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNSBweS00IHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS15ZWxsb3cgZm9jdXM6b3V0bGluZS0xIGZvY3VzOmJvcmRlci1ub25lIGJnLXNlY29uZGFyeSB3LWZ1bGwgYm9yZGVyLWx5bmNoIGJvcmRlciBteS00IHRleHQtd2hpdGVcIlxuICAgICAgLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICBuYW1lPVwidXNlcl9lbWFpbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktNCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUteWVsbG93IGZvY3VzOm91dGxpbmUtMSBmb2N1czpib3JkZXItbm9uZSB0ZXh0LXdoaXRlIGJnLXNlY29uZGFyeSB3LWZ1bGwgYm9yZGVyLWx5bmNoIGJvcmRlciBteS00IGNhcmV0LXllbGxvd1wiXG4gICAgICAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8dGV4dGFyZWFcbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTQgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLXllbGxvdyBmb2N1czpvdXRsaW5lLTEgZm9jdXM6Ym9yZGVyLW5vbmUgYmctc2Vjb25kYXJ5IHctZnVsbCBib3JkZXItbHluY2ggdGV4dC13aGl0ZSBib3JkZXIgbXktNCBjYXJldC15ZWxsb3dcIlxuICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIldyaXRlIHlvdXIgbWVzc2FnZSBoZXJlXCJcbiAgICAgID48L3RleHRhcmVhPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIiBweS0zIHB4LTEyIHJvdW5kZWQtbGcgdGV4dC15ZWxsb3cgdy1mdWxsIGhvdmVyOmJnLXllbGxvdyBob3Zlcjp0ZXh0LWJnIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXllbGxvdyBjYXJldC15ZWxsb3dcIlxuICAgICAgICB2YWx1ZT1cInNlbmRcIlxuICAgICAgPlxuICAgICAgICBTZW5kXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiZW1haWxqcyIsIkZvcm0iLCJmb3JtIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX1NFUlZJQ0VfSUQiLCJSRUFDVF9BUFBfVEVNUExBVEVfSUQiLCJjdXJyZW50IiwiUkVBQ1RfQVBQX1BVQkxJQ19LRVkiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJlcnJvciIsInJlZiIsIm9uU3VibWl0IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwiYnIiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.js\n");

/***/ })

});