"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/Project.jsx":
/*!********************************!*\
  !*** ./components/Project.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Project = function(param) {\n    var project = param.project;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showWhole = ref[0], setShowWhole = ref[1];\n    var sese = project.techs.map(function(tech) {\n        return tech;\n    });\n    console.log(sese);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full p-6 border border-lynch rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: project.image,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-yellow text-lg font-medium my-4\",\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lynch leading-7\",\n                    children: [\n                        showWhole ? project.desc : \"\".concat(project.desc.slice(0, 60), \"...\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" cursor-pointer hover:text-white\",\n                            onClick: function() {\n                                return setShowWhole(!showWhole);\n                            },\n                            children: [\n                                \"Show \",\n                                showWhole ? \" Less\" : \" More\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-yellow\",\n                    children: project === null || project === void 0 ? void 0 : project.techs.map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.githubClient,\n                    children: \"GitHub \"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Project, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlDOztBQUVqQyxJQUFNQyxPQUFPLEdBQUcsZ0JBQWlCO1FBQWRDLE9BQU8sU0FBUEEsT0FBTzs7O0lBQ3hCLElBQWtDRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSG5ELFNBR2tCLEdBQWtCQSxHQUFlLEdBQWpDLEVBSGxCLFlBR2dDLEdBQUlBLEdBQWUsR0FBbkI7SUFDOUIsSUFBTUssSUFBSSxHQUFHSCxPQUFPLENBQUNJLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUk7ZUFBS0EsSUFBSTtLQUFBLENBQUM7SUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJLENBQUMsQ0FBQztJQUNsQixxQkFDRTtrQkFDRSw0RUFBQ00sS0FBRztZQUFDQyxTQUFTLEVBQUMsMkNBQTJDOzs4QkFDeEQsOERBQUNDLEtBQUc7b0JBQUNDLEdBQUcsRUFBRVosT0FBTyxDQUFDYSxLQUFLO29CQUFFQyxHQUFHLEVBQUMsRUFBRTs7Ozs7eUJBQUc7OEJBQ2xDLDhEQUFDQyxJQUFFO29CQUFDTCxTQUFTLEVBQUMsc0NBQXNDOzhCQUNqRFYsT0FBTyxDQUFDZ0IsS0FBSzs7Ozs7eUJBQ1g7OEJBQ0wsOERBQUNDLEdBQUM7b0JBQUNQLFNBQVMsRUFBQyxzQkFBc0I7O3dCQUNoQ1QsU0FBUyxHQUFHRCxPQUFPLENBQUNrQixJQUFJLEdBQUcsRUFBQyxDQUE0QixNQUFHLENBQTdCbEIsT0FBTyxDQUFDa0IsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEtBQUcsQ0FBQztzQ0FDN0QsOERBQUNDLElBQUU7Ozs7aUNBQU07c0NBQ1QsOERBQUNDLE1BQUk7NEJBQ0hYLFNBQVMsRUFBQyxrQ0FBa0M7NEJBQzVDWSxPQUFPLEVBQUU7dUNBQU1wQixZQUFZLENBQUMsQ0FBQ0QsU0FBUyxDQUFDOzZCQUFBOztnQ0FDeEMsT0FDTTtnQ0FBQ0EsU0FBUyxHQUFHLE9BQU8sR0FBRyxPQUFPOzs7Ozs7aUNBQzlCOzs7Ozs7eUJBQ0w7OEJBRUosOERBQUNRLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOzhCQUN2QlYsT0FBTyxhQUFQQSxPQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxPQUFPLENBQUVJLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRWlCLEdBQUc7NkNBQzVCLDhEQUFDTixHQUFDOzRCQUFDUCxTQUFTLEVBQUMsWUFBWTtzQ0FDdEJKLElBQUk7MkJBRHdCaUIsR0FBRzs7OztrQ0FFOUI7cUJBQ0wsQ0FBQzs7Ozs7eUJBQ0U7OEJBRU4sOERBQUNDLEdBQUM7b0JBQUNDLElBQUksRUFBRXpCLE9BQU8sQ0FBQzBCLFlBQVk7OEJBQUUsU0FBTzs7Ozs7eUJBQUk7Ozs7OztpQkFDdEM7cUJBQ0wsQ0FDSDtDQUNIO0dBbENLM0IsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBb0NiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzeD84ZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb2plY3QgPSAoeyBwcm9qZWN0IH0pID0+IHtcbiAgY29uc3QgW3Nob3dXaG9sZSwgc2V0U2hvd1dob2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc2VzZSA9IHByb2plY3QudGVjaHMubWFwKCh0ZWNoKSA9PiB0ZWNoKTtcbiAgY29uc29sZS5sb2coc2VzZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBib3JkZXIgYm9yZGVyLWx5bmNoIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdyB0ZXh0LWxnIGZvbnQtbWVkaXVtIG15LTRcIj5cbiAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1seW5jaCBsZWFkaW5nLTdcIj5cbiAgICAgICAgICB7c2hvd1dob2xlID8gcHJvamVjdC5kZXNjIDogYCR7cHJvamVjdC5kZXNjLnNsaWNlKDAsIDYwKX0uLi5gfVxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93V2hvbGUoIXNob3dXaG9sZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvdyB7c2hvd1dob2xlID8gXCIgTGVzc1wiIDogXCIgTW9yZVwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93XCI+XG4gICAgICAgICAge3Byb2plY3Q/LnRlY2hzLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWx5bmNoXCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGEgaHJlZj17cHJvamVjdC5naXRodWJDbGllbnR9PkdpdEh1YiA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQcm9qZWN0IiwicHJvamVjdCIsInNob3dXaG9sZSIsInNldFNob3dXaG9sZSIsInNlc2UiLCJ0ZWNocyIsIm1hcCIsInRlY2giLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMSIsInRpdGxlIiwicCIsImRlc2MiLCJzbGljZSIsImJyIiwic3BhbiIsIm9uQ2xpY2siLCJpZHgiLCJhIiwiaHJlZiIsImdpdGh1YkNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.jsx\n");

/***/ })

});