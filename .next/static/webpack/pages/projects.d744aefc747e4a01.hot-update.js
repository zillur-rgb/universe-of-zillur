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

/***/ "./components/FrontendProject.jsx":
/*!****************************************!*\
  !*** ./components/FrontendProject.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar FrontendProject = function(param) {\n    var project = param.project;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showWhole = ref[0], setShowWhole = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAll = ref1[0], setShowAll = ref1[1];\n    var remaining = project.techs.length - 4;\n    console.log(project);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full p-6 border border-lynch rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: project.image,\n                    alt: \"project img\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-yellow text-lg font-medium my-7\",\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" border-b my-5 border-lynch opacity-30\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between my-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-2 px-6 rounded-lg border-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow\",\n                            href: project.githubClient,\n                            target: \"_blank\",\n                            children: \"Client Side\"\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, _this),\n                        project.githubServer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-2 px-4 rounded-lg border-2s text-lynch hover:text-bg font-medium hover:bg-yellow hover:border-yellow\",\n                            target: \"_blank\",\n                            href: project.githubServer,\n                            children: [\n                                \"Server Side\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-2 px-4 rounded-lg border-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow\",\n                            target: \"_blank\",\n                            href: project.live,\n                            children: [\n                                \"Live Link\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" border-b my-5 border-lynch opacity-30\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lynch leading-7\",\n                    children: [\n                        showWhole ? project.desc : \"\".concat(project.desc.slice(0, 60), \"...\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" cursor-pointer hover:text-white\",\n                            onClick: function() {\n                                return setShowWhole(!showWhole);\n                            },\n                            children: [\n                                \"Show \",\n                                showWhole ? \" Less\" : \" More\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" border-b my-3 border-lynch opacity-30\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4\",\n                    children: showAll ? project.techs.map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, _this1);\n                    }) : project.techs.slice(0, 4).map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: project.techs.length > 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center border-b-2 text-white my-4\",\n                        onClick: function() {\n                            return setShowAll(!showAll);\n                        },\n                        children: [\n                            \"Show \",\n                            showAll ? \"Less\" : \"\".concat(remaining, \" More\")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/FrontendProject.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(FrontendProject, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = FrontendProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontendProject);\nvar _c;\n$RefreshReg$(_c, \"FrontendProject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUIsOERBQUNSLEdBQUM7NEJBQ0FiLFNBQVMsRUFBQywyREFBNkQ7c0NBR3RFb0IsSUFBSTsyQkFGQUMsR0FBRzs7OztrQ0FHTjtxQkFDTCxDQUFDLEdBQ0ZoQyxPQUFPLENBQUNNLEtBQUssQ0FBQ29CLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEdBQUc7NkNBQ3RDLDhEQUFDUixHQUFDOzRCQUNBYixTQUFTLEVBQUMsMkRBQTZEO3NDQUd0RW9CLElBQUk7MkJBRkFDLEdBQUc7Ozs7a0NBR047cUJBQ0wsQ0FBQzs7Ozs7eUJBQ0Y7OEJBQ04sOERBQUN0QixLQUFHO29CQUFDQyxTQUFTLEVBQUMsa0NBQWtDOzhCQUM5Q1gsT0FBTyxDQUFDTSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLGtCQUN2Qiw4REFBQzBCLFFBQU07d0JBQ0x0QixTQUFTLEVBQUMsd0NBQXdDO3dCQUNsRGtCLE9BQU8sRUFBRTttQ0FBTXpCLFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7eUJBQUE7OzRCQUNwQyxPQUNNOzRCQUFDQSxPQUFPLEdBQUcsTUFBTSxHQUFHLEVBQUMsQ0FBWSxNQUFLLENBQWZFLFNBQVMsRUFBQyxPQUFLLENBQUM7Ozs7Ozs2QkFDckM7Ozs7O3lCQUVQOzs7Ozs7aUJBQ0Y7cUJBQ0wsQ0FDSDtDQUNIO0dBcEZLTixlQUFlO0FBQWZBLEtBQUFBLGVBQWU7QUFzRnJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gcm9udGVuZFByb2plY3QuanN4PzNiNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRnJvbnRlbmRQcm9qZWN0ID0gKHsgcHJvamVjdCB9KSA9PiB7XG4gIGNvbnN0IFtzaG93V2hvbGUsIHNldFNob3dXaG9sZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93QWxsLCBzZXRTaG93QWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVtYWluaW5nID0gcHJvamVjdC50ZWNocy5sZW5ndGggLSA0O1xuICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgYm9yZGVyIGJvcmRlci1seW5jaCByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9XCJwcm9qZWN0IGltZ1wiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdyB0ZXh0LWxnIGZvbnQtbWVkaXVtIG15LTdcIj5cbiAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9yZGVyLWIgbXktNSBib3JkZXItbHluY2ggb3BhY2l0eS0zMFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG15LTVcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJnIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXllbGxvdyBob3Zlcjpib3JkZXIteWVsbG93XCJcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHViQ2xpZW50fVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbGllbnQgU2lkZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICB7cHJvamVjdC5naXRodWJTZXJ2ZXIgJiYgKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IHJvdW5kZWQtbGcgYm9yZGVyLTJzIHRleHQtbHluY2ggaG92ZXI6dGV4dC1iZyBmb250LW1lZGl1bSBob3ZlcjpiZy15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvd1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHViU2VydmVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTZXJ2ZXIgU2lkZXtcIiBcIn1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNCByb3VuZGVkLWxnIGJvcmRlci0yIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1iZyBmb250LW1lZGl1bSBob3ZlcjpiZy15ZWxsb3cgaG92ZXI6Ym9yZGVyLXllbGxvd1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17cHJvamVjdC5saXZlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExpdmUgTGlua3tcIiBcIn1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBib3JkZXItYiBteS01IGJvcmRlci1seW5jaCBvcGFjaXR5LTMwXCI+PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbHluY2ggbGVhZGluZy03XCI+XG4gICAgICAgICAge3Nob3dXaG9sZSA/IHByb2plY3QuZGVzYyA6IGAke3Byb2plY3QuZGVzYy5zbGljZSgwLCA2MCl9Li4uYH1cbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1dob2xlKCFzaG93V2hvbGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cge3Nob3dXaG9sZSA/IFwiIExlc3NcIiA6IFwiIE1vcmVcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9yZGVyLWIgbXktMyBib3JkZXItbHluY2ggb3BhY2l0eS0zMFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7c2hvd0FsbFxuICAgICAgICAgICAgPyBwcm9qZWN0LnRlY2hzLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbHluY2ggd2hpdGVzcGFjZS1ub3dyYXAgICB0ZXh0LWNlbnRlciBib3JkZXItbHluY2ggbS0yXCJcbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogcHJvamVjdC50ZWNocy5zbGljZSgwLCA0KS5tYXAoKHRlY2gsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWx5bmNoIHdoaXRlc3BhY2Utbm93cmFwICAgdGV4dC1jZW50ZXIgYm9yZGVyLWx5bmNoIG0tMlwiXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtwcm9qZWN0LnRlY2hzLmxlbmd0aCA+IDQgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBib3JkZXItYi0yIHRleHQtd2hpdGUgbXktNFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBbGwoIXNob3dBbGwpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaG93IHtzaG93QWxsID8gXCJMZXNzXCIgOiBgJHtyZW1haW5pbmd9IE1vcmVgfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyb250ZW5kUHJvamVjdDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZyb250ZW5kUHJvamVjdCIsInByb2plY3QiLCJzaG93V2hvbGUiLCJzZXRTaG93V2hvbGUiLCJzaG93QWxsIiwic2V0U2hvd0FsbCIsInJlbWFpbmluZyIsInRlY2hzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaDEiLCJ0aXRsZSIsImEiLCJocmVmIiwiZ2l0aHViQ2xpZW50IiwidGFyZ2V0IiwiZ2l0aHViU2VydmVyIiwibGl2ZSIsInAiLCJkZXNjIiwic2xpY2UiLCJiciIsInNwYW4iLCJvbkNsaWNrIiwibWFwIiwidGVjaCIsImlkeCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FrontendProject.jsx\n");

/***/ })

});