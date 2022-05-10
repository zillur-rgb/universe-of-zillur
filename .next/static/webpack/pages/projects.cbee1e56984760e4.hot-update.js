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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Project = function(param) {\n    var project = param.project;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showWhole = ref[0], setShowWhole = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAll = ref1[0], setShowAll = ref1[1];\n    var remaining = project.techs.length - 4;\n    console.log(project);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full p-6 border border-lynch rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: project.image,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-yellow text-lg font-medium my-4\",\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-3 px-4 border text-white hover:text-yellow hover:border-yellow\",\n                            href: project.githubClient,\n                            children: \"Client Side\"\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: project.githubServer,\n                            children: \"Server Side \"\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: project.live,\n                            children: \"Live Link \"\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lynch leading-7\",\n                    children: [\n                        showWhole ? project.desc : \"\".concat(project.desc.slice(0, 60), \"...\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" cursor-pointer hover:text-white\",\n                            onClick: function() {\n                                return setShowWhole(!showWhole);\n                            },\n                            children: [\n                                \"Show \",\n                                showWhole ? \" Less\" : \" More\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4\",\n                    children: showAll ? project.techs.map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, _this1);\n                    }) : project.techs.slice(0, 4).map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: project.techs.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center border-b-2 text-white\",\n                        onClick: function() {\n                            return setShowAll(!showAll);\n                        },\n                        children: [\n                            \"Show \",\n                            showAll ? \"Less\" : \"\".concat(remaining, \" More\")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Project, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsa0JBQ3ZCLDhEQUFDeUIsUUFBTTt3QkFDTHJCLFNBQVMsRUFBQyxtQ0FBbUM7d0JBQzdDaUIsT0FBTyxFQUFFO21DQUFNeEIsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQzt5QkFBQTs7NEJBQ3BDLE9BQ007NEJBQUNBLE9BQU8sR0FBRyxNQUFNLEdBQUcsRUFBQyxDQUFZLE1BQUssQ0FBZkUsU0FBUyxFQUFDLE9BQUssQ0FBQzs7Ozs7OzZCQUNyQzs7Ozs7eUJBRVA7Ozs7OztpQkFDRjtxQkFDTCxDQUNIO0NBQ0g7R0FsRUtOLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQW9FYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdC5qc3g/OGZhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKHsgcHJvamVjdCB9KSA9PiB7XG4gIGNvbnN0IFtzaG93V2hvbGUsIHNldFNob3dXaG9sZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93QWxsLCBzZXRTaG93QWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVtYWluaW5nID0gcHJvamVjdC50ZWNocy5sZW5ndGggLSA0O1xuICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgYm9yZGVyIGJvcmRlci1seW5jaCByb3VuZGVkLWxnXCI+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmltYWdlfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3cgdGV4dC1sZyBmb250LW1lZGl1bSBteS00XCI+XG4gICAgICAgICAge3Byb2plY3QudGl0bGV9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMgcHgtNCBib3JkZXIgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXllbGxvdyBob3Zlcjpib3JkZXIteWVsbG93XCJcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHViQ2xpZW50fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsaWVudCBTaWRlXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3QuZ2l0aHViU2VydmVyfT5TZXJ2ZXIgU2lkZSA8L2E+XG4gICAgICAgICAgPGEgaHJlZj17cHJvamVjdC5saXZlfT5MaXZlIExpbmsgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1seW5jaCBsZWFkaW5nLTdcIj5cbiAgICAgICAgICB7c2hvd1dob2xlID8gcHJvamVjdC5kZXNjIDogYCR7cHJvamVjdC5kZXNjLnNsaWNlKDAsIDYwKX0uLi5gfVxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93V2hvbGUoIXNob3dXaG9sZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hvdyB7c2hvd1dob2xlID8gXCIgTGVzc1wiIDogXCIgTW9yZVwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNFwiPlxuICAgICAgICAgIHtzaG93QWxsXG4gICAgICAgICAgICA/IHByb2plY3QudGVjaHMubWFwKCh0ZWNoLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1seW5jaCB3aGl0ZXNwYWNlLW5vd3JhcCAgIHRleHQtY2VudGVyIGJvcmRlci1seW5jaCBtLTJcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBwcm9qZWN0LnRlY2hzLnNsaWNlKDAsIDQpLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbHluY2ggd2hpdGVzcGFjZS1ub3dyYXAgICB0ZXh0LWNlbnRlciBib3JkZXItbHluY2ggbS0yXCJcbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge3Byb2plY3QudGVjaHMubGVuZ3RoID4gMyAmJiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGJvcmRlci1iLTIgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dBbGwoIXNob3dBbGwpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaG93IHtzaG93QWxsID8gXCJMZXNzXCIgOiBgJHtyZW1haW5pbmd9IE1vcmVgfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJQcm9qZWN0IiwicHJvamVjdCIsInNob3dXaG9sZSIsInNldFNob3dXaG9sZSIsInNob3dBbGwiLCJzZXRTaG93QWxsIiwicmVtYWluaW5nIiwidGVjaHMiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMSIsInRpdGxlIiwiYSIsImhyZWYiLCJnaXRodWJDbGllbnQiLCJnaXRodWJTZXJ2ZXIiLCJsaXZlIiwicCIsImRlc2MiLCJzbGljZSIsImJyIiwic3BhbiIsIm9uQ2xpY2siLCJtYXAiLCJ0ZWNoIiwiaWR4IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Project.jsx\n");

/***/ })

});