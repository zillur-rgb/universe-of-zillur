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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ \"./components/Carousel.jsx\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar FrontendProject = function(param) {\n    var project = param.project;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showWhole = ref[0], setShowWhole = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showAll = ref1[0], setShowAll = ref1[1];\n    var remaining = project.techs.length - 4;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"animate__animated animate__fadeIn w-full p-6 border border-lynch rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: project.live,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            image: project === null || project === void 0 ? void 0 : project.image\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-yellow text-lg font-medium my-7\",\n                            children: project.title\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" border-b my-5 border-lynch opacity-30\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between flex-col sm:flex-row my-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-2 px-6 rounded-lg border-2 text-center my-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow whitespace-nowrap\",\n                            href: project.githubClient,\n                            target: \"_blank\",\n                            children: \"Client Side\"\n                        }, void 0, false, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, _this),\n                        project.githubServer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-2 px-4 rounded-lg border-2 text-center my-2 text-white hover:text-bg font-medium hover:bg-yellow hover:border-yellow whitespace-nowrap\",\n                            target: \"_blank\",\n                            href: project.githubServer,\n                            children: [\n                                \"Server Side\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"py-2 px-4 rounded-lg border-2 text-white hover:text-bg text-center my-2 font-medium hover:bg-yellow hover:border-yellow whitespace-nowrap\",\n                            target: \"_blank\",\n                            href: project.live,\n                            children: [\n                                \"Live Link\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" border-b my-5 border-lynch opacity-30\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lynch leading-7\",\n                    children: [\n                        showWhole ? project.desc : \"\".concat(project.desc.slice(0, 60), \"...\"),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" cursor-pointer hover:text-white\",\n                            onClick: function() {\n                                return setShowWhole(!showWhole);\n                            },\n                            children: [\n                                \"Show \",\n                                showWhole ? \" Less\" : \" More\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" border-b my-3 border-lynch opacity-30\"\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 lg:grid-cols-4\",\n                    children: showAll ? project.techs.map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-left lg:text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, _this1);\n                    }) : project.techs.slice(0, 4).map(function(tech, idx) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lynch whitespace-nowrap text-center border-lynch m-2\",\n                            children: tech\n                        }, idx, false, {\n                            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 17\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: project.techs.length > 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-center border-b-2 text-white my-4\",\n                        onClick: function() {\n                            return setShowAll(!showAll);\n                        },\n                        children: [\n                            \"Show \",\n                            showAll ? \"Less\" : \"\".concat(remaining, \" More\")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/zillur-rgb/working-projects/universe-of-zillur/components/FrontendProject.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(FrontendProject, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = FrontendProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FrontendProject);\nvar _c;\n$RefreshReg$(_c, \"FrontendProject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ21CLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEdBQUc7NkNBQzFCLDhEQUFDUixHQUFDOzRCQUNBVixTQUFTLEVBQUMsd0VBQXlFO3NDQUdsRmlCLElBQUk7MkJBRkFDLEdBQUc7Ozs7a0NBR047cUJBQ0wsQ0FBQyxHQUNGM0IsT0FBTyxDQUFDTSxLQUFLLENBQUNlLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEdBQUc7NkNBQ3RDLDhEQUFDUixHQUFDOzRCQUNBVixTQUFTLEVBQUMsMkRBQTZEO3NDQUd0RWlCLElBQUk7MkJBRkFDLEdBQUc7Ozs7a0NBR047cUJBQ0wsQ0FBQzs7Ozs7eUJBQ0Y7OEJBQ04sOERBQUNuQixLQUFHO29CQUFDQyxTQUFTLEVBQUMsa0NBQWtDOzhCQUM5Q1QsT0FBTyxDQUFDTSxLQUFLLENBQUNDLE1BQU0sR0FBRyxDQUFDLGtCQUN2Qiw4REFBQ3FCLFFBQU07d0JBQ0xuQixTQUFTLEVBQUMsd0NBQXdDO3dCQUNsRGUsT0FBTyxFQUFFO21DQUFNcEIsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQzt5QkFBQTs7NEJBQ3BDLE9BQ007NEJBQUNBLE9BQU8sR0FBRyxNQUFNLEdBQUcsRUFBQyxDQUFZLE1BQUssQ0FBZkUsU0FBUyxFQUFDLE9BQUssQ0FBQzs7Ozs7OzZCQUNyQzs7Ozs7eUJBRVA7Ozs7OztpQkFDRjtxQkFDTCxDQUNIO0NBQ0g7R0F0RktOLGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQXdGckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zyb250ZW5kUHJvamVjdC5qc3g/M2I1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XG5cbmNvbnN0IEZyb250ZW5kUHJvamVjdCA9ICh7IHByb2plY3QgfSkgPT4ge1xuICBjb25zdCBbc2hvd1dob2xlLCBzZXRTaG93V2hvbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0FsbCwgc2V0U2hvd0FsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlbWFpbmluZyA9IHByb2plY3QudGVjaHMubGVuZ3RoIC0gNDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJbiB3LWZ1bGwgcC02IGJvcmRlciBib3JkZXItbHluY2ggcm91bmRlZC1sZ1wiPlxuICAgICAgICA8YSBocmVmPXtwcm9qZWN0LmxpdmV9PlxuICAgICAgICAgIHsvKiA8aW1nIHNyYz17cHJvamVjdC5pbWFnZX0gYWx0PVwicHJvamVjdCBpbWdcIiAvPiAqL31cbiAgICAgICAgICA8Q2Fyb3VzZWwgaW1hZ2U9e3Byb2plY3Q/LmltYWdlfSAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdyB0ZXh0LWxnIGZvbnQtbWVkaXVtIG15LTdcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9yZGVyLWIgbXktNSBib3JkZXItbHluY2ggb3BhY2l0eS0zMFwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXgtY29sIHNtOmZsZXgtcm93IG15LTVcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC02IHJvdW5kZWQtbGcgYm9yZGVyLTIgdGV4dC1jZW50ZXIgbXktMiB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmcgZm9udC1tZWRpdW0gaG92ZXI6YmcteWVsbG93IGhvdmVyOmJvcmRlci15ZWxsb3cgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgaHJlZj17cHJvamVjdC5naXRodWJDbGllbnR9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsaWVudCBTaWRlXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIHtwcm9qZWN0LmdpdGh1YlNlcnZlciAmJiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgcm91bmRlZC1sZyBib3JkZXItMiB0ZXh0LWNlbnRlciBteS0yICB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmcgZm9udC1tZWRpdW0gaG92ZXI6YmcteWVsbG93IGhvdmVyOmJvcmRlci15ZWxsb3cgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LmdpdGh1YlNlcnZlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2VydmVyIFNpZGV7XCIgXCJ9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIHB4LTQgcm91bmRlZC1sZyBib3JkZXItMiB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmcgdGV4dC1jZW50ZXIgbXktMiAgZm9udC1tZWRpdW0gaG92ZXI6YmcteWVsbG93IGhvdmVyOmJvcmRlci15ZWxsb3cgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3QubGl2ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMaXZlIExpbmt7XCIgXCJ9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYm9yZGVyLWIgbXktNSBib3JkZXItbHluY2ggb3BhY2l0eS0zMFwiPjwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWx5bmNoIGxlYWRpbmctN1wiPlxuICAgICAgICAgIHtzaG93V2hvbGUgPyBwcm9qZWN0LmRlc2MgOiBgJHtwcm9qZWN0LmRlc2Muc2xpY2UoMCwgNjApfS4uLmB9XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dXaG9sZSghc2hvd1dob2xlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTaG93IHtzaG93V2hvbGUgPyBcIiBMZXNzXCIgOiBcIiBNb3JlXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJvcmRlci1iIG15LTMgYm9yZGVyLWx5bmNoIG9wYWNpdHktMzBcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGxnOmdyaWQtY29scy00XCI+XG4gICAgICAgICAge3Nob3dBbGxcbiAgICAgICAgICAgID8gcHJvamVjdC50ZWNocy5tYXAoKHRlY2gsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWx5bmNoIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtbGVmdCAgbGc6dGV4dC1jZW50ZXIgYm9yZGVyLWx5bmNoIG0tMlwiXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICA6IHByb2plY3QudGVjaHMuc2xpY2UoMCwgNCkubWFwKCh0ZWNoLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1seW5jaCB3aGl0ZXNwYWNlLW5vd3JhcCAgIHRleHQtY2VudGVyIGJvcmRlci1seW5jaCBtLTJcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7cHJvamVjdC50ZWNocy5sZW5ndGggPiA0ICYmIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYm9yZGVyLWItMiB0ZXh0LXdoaXRlIG15LTRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QWxsKCFzaG93QWxsKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hvdyB7c2hvd0FsbCA/IFwiTGVzc1wiIDogYCR7cmVtYWluaW5nfSBNb3JlYH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZFByb2plY3Q7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJvdXNlbCIsIkZyb250ZW5kUHJvamVjdCIsInByb2plY3QiLCJzaG93V2hvbGUiLCJzZXRTaG93V2hvbGUiLCJzaG93QWxsIiwic2V0U2hvd0FsbCIsInJlbWFpbmluZyIsInRlY2hzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJsaXZlIiwiaW1hZ2UiLCJoMSIsInRpdGxlIiwiZ2l0aHViQ2xpZW50IiwidGFyZ2V0IiwiZ2l0aHViU2VydmVyIiwicCIsImRlc2MiLCJzbGljZSIsImJyIiwic3BhbiIsIm9uQ2xpY2siLCJtYXAiLCJ0ZWNoIiwiaWR4IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FrontendProject.jsx\n");

/***/ })

});