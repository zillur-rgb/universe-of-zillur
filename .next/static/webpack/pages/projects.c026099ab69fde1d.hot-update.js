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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Project = function(param) {\n    var project = param.project;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showWhole = ref[0], setShowWhole = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAll = ref1[0], setShowAll = ref1[1];\n    var remaining = project.techs.length - 4;\n    console.log(project);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full p-6 border border-lynch rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: project.image,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-yellow text-lg font-medium my-4\",\n                    children: project.title\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-3 px-4 rounded-lg border-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow\",\n                            href: project.githubClient,\n                            target: \"_blank\",\n                            children: \"Client Side\"\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-3 px-4 mx-2 rounded-lg border-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow\",\n                            target: \"_blank\",\n                            href: project.githubServer,\n                            children: [\n                                \"Server Side\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-3 px-4 rounded-lg border-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow\",\n                            target: \"_blank\",\n                            href: project.live,\n                            children: [\n                                \"Live Link\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lynch leading-7\",\n                    children: [\n                        showWhole ? project.desc : \"\".concat(project.desc.slice(0, 60), \"...\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" cursor-pointer hover:text-white\",\n                            onClick: function() {\n                                return setShowWhole(!showWhole);\n                            },\n                            children: [\n                                \"Show \",\n                                showWhole ? \" Less\" : \" More\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-4\",\n                    children: showAll ? project.techs.map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, _this1);\n                    }) : project.techs.slice(0, 4).map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: project.techs.length > 3 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center border-b-2 text-white\",\n                        onClick: function() {\n                            return setShowAll(!showAll);\n                        },\n                        children: [\n                            \"Show \",\n                            showAll ? \"Less\" : \"\".concat(remaining, \" More\")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zillur-rgb/Documents/developer-portfolio/components/Project.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Project, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQWlDOztBQUVqQyxJQUFNQyxPQUFPLEdBQUcsZ0JBQWlCO1FBQWRDLE9BQU8sU0FBUEEsT0FBTzs7O0lBQ3hCLElBQWtDRixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBSG5ELFNBR2tCLEdBQWtCQSxHQUFlLEdBQWpDLEVBSGxCLFlBR2dDLEdBQUlBLEdBQWUsR0FBbkI7SUFDOUIsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFKL0MsT0FJZ0IsR0FBZ0JBLElBQWUsR0FBL0IsRUFKaEIsVUFJNEIsR0FBSUEsSUFBZSxHQUFuQjtJQUMxQixJQUFNTyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ00sS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQztJQUMxQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNULE9BQU8sQ0FBQyxDQUFDO0lBRXJCLHFCQUNFO2tCQUNFLDRFQUFDVSxLQUFHO1lBQUNDLFNBQVMsRUFBQywyQ0FBMkM7OzhCQUN4RCw4REFBQ0MsS0FBRztvQkFBQ0MsR0FBRyxFQUFFYixPQUFPLENBQUNjLEtBQUs7b0JBQUVDLEdBQUcsRUFBQyxFQUFFOzs7Ozt5QkFBRzs4QkFDbEMsOERBQUNDLElBQUU7b0JBQUNMLFNBQVMsRUFBQyxzQ0FBc0M7OEJBQ2pEWCxPQUFPLENBQUNpQixLQUFLOzs7Ozt5QkFDWDs4QkFDTCw4REFBQ1AsS0FBRzs7c0NBQ0YsOERBQUNRLEdBQUM7NEJBQ0FQLFNBQVMsRUFBQyx3R0FBd0c7NEJBQ2xIUSxJQUFJLEVBQUVuQixPQUFPLENBQUNvQixZQUFZOzRCQUMxQkMsTUFBTSxFQUFDLFFBQVE7c0NBQ2hCLGFBRUQ7Ozs7O2lDQUFJO3NDQUNKLDhEQUFDSCxHQUFDOzRCQUNBUCxTQUFTLEVBQUMsNkdBQTZHOzRCQUN2SFUsTUFBTSxFQUFDLFFBQVE7NEJBQ2ZGLElBQUksRUFBRW5CLE9BQU8sQ0FBQ3NCLFlBQVk7O2dDQUMzQixhQUNZO2dDQUFDLEdBQUc7Ozs7OztpQ0FDYjtzQ0FDSiw4REFBQ0osR0FBQzs0QkFDQVAsU0FBUyxFQUFDLHdHQUF3Rzs0QkFDbEhVLE1BQU0sRUFBQyxRQUFROzRCQUNmRixJQUFJLEVBQUVuQixPQUFPLENBQUN1QixJQUFJOztnQ0FDbkIsV0FDVTtnQ0FBQyxHQUFHOzs7Ozs7aUNBQ1g7Ozs7Ozt5QkFDQTs4QkFDTiw4REFBQ0MsR0FBQztvQkFBQ2IsU0FBUyxFQUFDLHNCQUFzQjs7d0JBQ2hDVixTQUFTLEdBQUdELE9BQU8sQ0FBQ3lCLElBQUksR0FBRyxFQUFDLENBQTRCLE1BQUcsQ0FBN0J6QixPQUFPLENBQUN5QixJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FBRyxDQUFDO3NDQUM3RCw4REFBQ0MsSUFBRTs7OztpQ0FBTTtzQ0FDVCw4REFBQ0MsTUFBSTs0QkFDSGpCLFNBQVMsRUFBQyxrQ0FBa0M7NEJBQzVDa0IsT0FBTyxFQUFFO3VDQUFNM0IsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQzs2QkFBQTs7Z0NBQ3hDLE9BQ007Z0NBQUNBLFNBQVMsR0FBRyxPQUFPLEdBQUcsT0FBTzs7Ozs7O2lDQUM5Qjs7Ozs7O3lCQUNMOzhCQUVKLDhEQUFDUyxLQUFHO29CQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzhCQUM5QlIsT0FBTyxHQUNKSCxPQUFPLENBQUNNLEtBQUssQ0FBQ3dCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEdBQUc7NkNBQzFCLDhEQUFDUixHQUFDOzRCQUNBYixTQUFTLEVBQUMsMkRBQTZEO3NDQUd0RW9CLElBQUk7MkJBRkFDLEdBQUc7Ozs7a0NBR047cUJBQ0wsQ0FBQyxHQUNGaEMsT0FBTyxDQUFDTSxLQUFLLENBQUNvQixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDSSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxHQUFHOzZDQUN0Qyw4REFBQ1IsR0FBQzs0QkFDQWIsU0FBUyxFQUFDLDJEQUE2RDtzQ0FHdEVvQixJQUFJOzJCQUZBQyxHQUFHOzs7O2tDQUdOO3FCQUNMLENBQUM7Ozs7O3lCQUNGOzhCQUNOLDhEQUFDdEIsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGtDQUFrQzs4QkFDOUNYLE9BQU8sQ0FBQ00sS0FBSyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxrQkFDdkIsOERBQUMwQixRQUFNO3dCQUNMdEIsU0FBUyxFQUFDLG1DQUFtQzt3QkFDN0NrQixPQUFPLEVBQUU7bUNBQU16QixVQUFVLENBQUMsQ0FBQ0QsT0FBTyxDQUFDO3lCQUFBOzs0QkFDcEMsT0FDTTs0QkFBQ0EsT0FBTyxHQUFHLE1BQU0sR0FBRyxFQUFDLENBQVksTUFBSyxDQUFmRSxTQUFTLEVBQUMsT0FBSyxDQUFDOzs7Ozs7NkJBQ3JDOzs7Ozt5QkFFUDs7Ozs7O2lCQUNGO3FCQUNMLENBQ0g7Q0FDSDtHQS9FS04sT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBaUZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0LmpzeD84ZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFByb2plY3QgPSAoeyBwcm9qZWN0IH0pID0+IHtcbiAgY29uc3QgW3Nob3dXaG9sZSwgc2V0U2hvd1dob2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dBbGwsIHNldFNob3dBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZW1haW5pbmcgPSBwcm9qZWN0LnRlY2hzLmxlbmd0aCAtIDQ7XG4gIGNvbnNvbGUubG9nKHByb2plY3QpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBib3JkZXIgYm9yZGVyLWx5bmNoIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuaW1hZ2V9IGFsdD1cIlwiIC8+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdyB0ZXh0LWxnIGZvbnQtbWVkaXVtIG15LTRcIj5cbiAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC00IHJvdW5kZWQtbGcgYm9yZGVyLTIgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJnIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXllbGxvdyBob3Zlcjpib3JkZXIteWVsbG93XCJcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHViQ2xpZW50fVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbGllbnQgU2lkZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC00IG14LTIgcm91bmRlZC1sZyBib3JkZXItMiB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmcgZm9udC1tZWRpdW0gaG92ZXI6YmcteWVsbG93IGhvdmVyOmJvcmRlci15ZWxsb3dcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHViU2VydmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNlcnZlciBTaWRle1wiIFwifVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC00IHJvdW5kZWQtbGcgYm9yZGVyLTIgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJnIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXllbGxvdyBob3Zlcjpib3JkZXIteWVsbG93XCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPXtwcm9qZWN0LmxpdmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGl2ZSBMaW5re1wiIFwifVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbHluY2ggbGVhZGluZy03XCI+XG4gICAgICAgICAge3Nob3dXaG9sZSA/IHByb2plY3QuZGVzYyA6IGAke3Byb2plY3QuZGVzYy5zbGljZSgwLCA2MCl9Li4uYH1cbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1dob2xlKCFzaG93V2hvbGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNob3cge3Nob3dXaG9sZSA/IFwiIExlc3NcIiA6IFwiIE1vcmVcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTRcIj5cbiAgICAgICAgICB7c2hvd0FsbFxuICAgICAgICAgICAgPyBwcm9qZWN0LnRlY2hzLm1hcCgodGVjaCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbHluY2ggd2hpdGVzcGFjZS1ub3dyYXAgICB0ZXh0LWNlbnRlciBib3JkZXItbHluY2ggbS0yXCJcbiAgICAgICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIDogcHJvamVjdC50ZWNocy5zbGljZSgwLCA0KS5tYXAoKHRlY2gsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWx5bmNoIHdoaXRlc3BhY2Utbm93cmFwICAgdGV4dC1jZW50ZXIgYm9yZGVyLWx5bmNoIG0tMlwiXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtwcm9qZWN0LnRlY2hzLmxlbmd0aCA+IDMgJiYgKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBib3JkZXItYi0yIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWxsKCFzaG93QWxsKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hvdyB7c2hvd0FsbCA/IFwiTGVzc1wiIDogYCR7cmVtYWluaW5nfSBNb3JlYH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUHJvamVjdCIsInByb2plY3QiLCJzaG93V2hvbGUiLCJzZXRTaG93V2hvbGUiLCJzaG93QWxsIiwic2V0U2hvd0FsbCIsInJlbWFpbmluZyIsInRlY2hzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiaDEiLCJ0aXRsZSIsImEiLCJocmVmIiwiZ2l0aHViQ2xpZW50IiwidGFyZ2V0IiwiZ2l0aHViU2VydmVyIiwibGl2ZSIsInAiLCJkZXNjIiwic2xpY2UiLCJiciIsInNwYW4iLCJvbkNsaWNrIiwibWFwIiwidGVjaCIsImlkeCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Project.jsx\n");

/***/ })

});