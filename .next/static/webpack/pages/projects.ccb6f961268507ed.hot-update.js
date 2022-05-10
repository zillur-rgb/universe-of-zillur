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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Project = function(param) {\n    var project = param.project;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showWhole = ref[0], setShowWhole = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAll = ref1[0], setShowAll = ref1[1];\n    var remaining = project.techs.length - 3;\n    console.log(remaining);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full p-6 border border-lynch rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: project.image,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-yellow text-lg font-medium my-4\",\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: project.githubClient,\n                        children: \"GitHub \"\n                    }, void 0, false, {\n                        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lynch leading-7\",\n                    children: [\n                        showWhole ? project.desc : \"\".concat(project.desc.slice(0, 60), \"...\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" cursor-pointer hover:text-white\",\n                            onClick: function() {\n                                return setShowWhole(!showWhole);\n                            },\n                            children: [\n                                \"Show \",\n                                showWhole ? \" Less\" : \" More\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-3\",\n                    children: showAll ? project.techs.map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap border p-2 rounded-full text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, _this1);\n                    }) : project.techs.slice(0, 3).map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap border-x-2 p-2 rounded-full text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: project.techs.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center border-b-2 text-white\",\n                        onClick: function() {\n                            return setShowAll(!showAll);\n                        },\n                        children: [\n                            \"Show \",\n                            showAll ? \"Less\" : \"\".concat(remaining, \" More\")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Project, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFLLENBQUM7Ozs7Ozs2QkFDckM7Ozs7O3lCQUVQOzs7Ozs7aUJBQ0Y7cUJBQ0wsQ0FDSDtDQUNIO0dBM0RLTixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUE2RGIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3QuanN4PzhmYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUHJvamVjdCA9ICh7IHByb2plY3QgfSkgPT4ge1xuICBjb25zdCBbc2hvd1dob2xlLCBzZXRTaG93V2hvbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0FsbCwgc2V0U2hvd0FsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlbWFpbmluZyA9IHByb2plY3QudGVjaHMubGVuZ3RoIC0gMztcbiAgY29uc29sZS5sb2cocmVtYWluaW5nKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgYm9yZGVyIGJvcmRlci1seW5jaCByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3cgdGV4dC1sZyBmb250LW1lZGl1bSBteS00XCI+XG4gICAgICAgICAge3Byb2plY3QudGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5naXRodWJDbGllbnR9PkdpdEh1YiA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWx5bmNoIGxlYWRpbmctN1wiPlxuICAgICAgICAgIHtzaG93V2hvbGUgPyBwcm9qZWN0LmRlc2MgOiBgJHtwcm9qZWN0LmRlc2Muc2xpY2UoMCwgNjApfS4uLmB9XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dXaG9sZSghc2hvd1dob2xlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IHtzaG93V2hvbGUgPyBcIiBMZXNzXCIgOiBcIiBNb3JlXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zXCI+XG4gICAgICAgICAge3Nob3dBbGxcbiAgICAgICAgICAgID8gcHJvamVjdC50ZWNocy5tYXAoKHRlY2gsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWx5bmNoIHdoaXRlc3BhY2Utbm93cmFwIGJvcmRlciBwLTIgcm91bmRlZC1mdWxsIHRleHQtY2VudGVyIGJvcmRlci1seW5jaCBtLTJcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBwcm9qZWN0LnRlY2hzLnNsaWNlKDAsIDMpLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbHluY2ggd2hpdGVzcGFjZS1ub3dyYXAgYm9yZGVyLXgtMiBwLTIgcm91bmRlZC1mdWxsIHRleHQtY2VudGVyIGJvcmRlci1seW5jaCBtLTJcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7cHJvamVjdC50ZWNocy5sZW5ndGggPiAzICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYm9yZGVyLWItMiB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0FsbCghc2hvd0FsbCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNob3cge3Nob3dBbGwgPyBcIkxlc3NcIiA6IGAke3JlbWFpbmluZ30gTW9yZWB9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlByb2plY3QiLCJwcm9qZWN0Iiwic2hvd1dob2xlIiwic2V0U2hvd1dob2xlIiwic2hvd0FsbCIsInNldFNob3dBbGwiLCJyZW1haW5pbmciLCJ0ZWNocyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImgxIiwidGl0bGUiLCJhIiwiaHJlZiIsImdpdGh1YkNsaWVudCIsInAiLCJkZXNjIiwic2xpY2UiLCJiciIsInNwYW4iLCJvbkNsaWNrIiwibWFwIiwidGVjaCIsImlkeCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.jsx\n");

/***/ })

});