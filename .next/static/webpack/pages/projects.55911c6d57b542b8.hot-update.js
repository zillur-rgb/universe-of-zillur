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

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _components_FrontendProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FrontendProject */ \"./components/FrontendProject.jsx\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/react-loader-spinner.esm.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\nvar _this = undefined;\n\n\n\n\n\nvar projects = function() {\n    var _this1 = _this;\n    var projectsArray = [\n        {\n            title: \"Invoice Master - A Invoice Management App\",\n            image: \"https://i.ibb.co/wKS4zKB/6ea69d6f-cb38-4327-a5dc-50c2318b0edd.jpg\",\n            live: \"https://invoice-master-10e23.web.app/\",\n            githubClient: \"https://github.com/zillur-rgb/Invoice-Master-Client\",\n            githubServer: \"https://github.com/zillur-rgb/invoice-master-server\",\n            techs: [\n                \"Figma\",\n                \"Balsamiq\",\n                \"ReactJS\",\n                \"NodeJS\",\n                \"ExpressJS\",\n                \"MongoDB\",\n                \"Firebase Auth\",\n                \"TailwindCSS\",\n                \"Heroku\", \n            ],\n            desc: \"The task is mainly to create a system where user will be able to manage invoice for their client. User will be able to create, delete or update their invoice. User must login to use the system and also to keep the data.\"\n        },\n        {\n            title: \"Wheel Wave - Inventory Management Website\",\n            image: \"https://i.ibb.co/cNCT20N/Frame-12.png\",\n            live: \"https://wheel-wave.web.app/\",\n            githubClient: \"https://github.com/zillur-rgb/wheel-wave-client\",\n            githubServer: \"https://github.com/zillur-rgb/wheel-wave-client\",\n            techs: [\n                \"Figma\",\n                \"Balsamiq\",\n                \"ReactJS\",\n                \"NodeJS\",\n                \"ExpressJS\",\n                \"Mongoose\",\n                \"Firebase Auth\",\n                \"React-Bootstrap\",\n                \"Heroku\",\n                \"Firebase Hosting\", \n            ],\n            desc: \"Wheel Wave is a 3rd party cycle supplier who sells cycle of other companies. So this homepage was mainly for suppliers. Supplier can add new products, delete or can update if a product is delivered. But he/ she must be logged in.\"\n        },\n        {\n            title: \"Flexytrips - A Website for Tour Agency.\",\n            image: \"https://i.ibb.co/XXHxR1j/Frame-2.png\",\n            live: \"https://flexytrips.web.app/\",\n            githubClient: \"https://github.com/zillur-rgb/flexytrips-client\",\n            githubServer: \"https://github.com/zillur-rgb/flexytrips-server\",\n            techs: [\n                \"Figma\",\n                \"Balsamiq\",\n                \"ReactJS\",\n                \"NodeJS\",\n                \"ExpressJS\",\n                \"Mongoose\",\n                \"Firebase Auth\",\n                \"CSS 3\",\n                \"Heroku\",\n                \"Firebase Hosting\", \n            ],\n            desc: \"The website is for a tour agency who arranges trip across the Europe with resasonable costs. An user can see trending trips, also check all trips also can see details. User can search for trips with their budget and destinations.\"\n        },\n        {\n            title: \"Audiophile - A shop for Gadget Lovers\",\n            image: \"https://i.ibb.co/zJQvJ5t/Frame-5.png\",\n            live: \"https://fabulous-melba-86f75b.netlify.app/\",\n            githubClient: \"https://github.com/zillur-rgb/Audiophile\",\n            techs: [\n                \"ReactJS\",\n                \"Tailwind CSS\",\n                \"Netlify\"\n            ],\n            desc: \"This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order.\"\n        },\n        {\n            title: \"Notes App with TypeScript.\",\n            image: \"https://i.ibb.co/kHR6KW5/Frame-7.png\",\n            live: \"https://silly-kulfi-eba079.netlify.app/\",\n            githubClient: \"https://github.com/zillur-rgb/notes-app-react-typescript\",\n            techs: [\n                \"ReactJS\",\n                \"TypeScript\",\n                \"Netlify\",\n                \"Bootstrap 5\"\n            ],\n            desc: \"This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order.\"\n        },\n        {\n            title: \"Recipe App\",\n            image: \"https://i.ibb.co/tpF7grM/Frame-9.png\",\n            live: \"https://storied-starlight-7f24e7.netlify.app/\",\n            githubClient: \"https://github.com/zillur-rgb/Recipe-App\",\n            techs: [\n                \"ReactJS\",\n                \"Styled Components\",\n                \"Netlify\",\n                \"API\",\n                \"Bootstrap 5\"\n            ],\n            desc: \"The task was to create a recipe app where visitor can see different types of recipe and if they click any recipe they can see details for example preparation, ingredients etc.\"\n        },\n        {\n            title: \"Rock Paper Scissor game\",\n            image: \"https://i.ibb.co/2PLqKPR/Frame-11.png\",\n            live: \"https://zillur-rgb.github.io/rock-paper-scissor/\",\n            githubClient: \"https://github.com/zillur-rgb/rock-paper-scissor\",\n            techs: [\n                \"JavaScript\",\n                \"CSS\"\n            ],\n            desc: \"This was one of projects when I was learning JavaScript. Tried to create a Rock Paper Scissor game with the capability of restarting the game when someone wins.\"\n        },\n        {\n            title: \"Resume App\",\n            image: \"https://i.ibb.co/tpJXmdZ/Frame-6.png\",\n            live: \"https://effortless-medovik-dc044c.netlify.app/\",\n            githubClient: \"https://github.com/zillur-rgb/resume-app\",\n            techs: [\n                \"ReactJS\",\n                \"Styled Components\",\n                \"Material UI\"\n            ],\n            desc: \"Here I have used Material UI for the first time and tried to create a resume app with some routing.\"\n        },\n        {\n            title: \"Money Master\",\n            image: \"https://i.ibb.co/GJmrNJ7/Frame-4.png\",\n            live: \"https://zillur-rgb.github.io/money-master/\",\n            githubClient: \"https://github.com/zillur-rgb/resume-app\",\n            techs: [\n                \"JavaScript\",\n                \"Bootstrap 5\"\n            ],\n            desc: \"This is a project when I was learning JavaScript. This is a money management tool where one can income and expenses also he can calculate how much he can save.\"\n        },\n        {\n            title: \"Zillflix - A Movie App\",\n            image: \"https://i.ibb.co/XscBSGZ/Frame-8.png\",\n            live: \"https://delicate-stardust-b57c15.netlify.app/\",\n            githubClient: \"https://github.com/zillur-rgb/zillflix-A-movie-app\",\n            techs: [\n                \"ReactJS\",\n                \"Tailwind CSS\",\n                \"Daisy UI\",\n                \"API\"\n            ],\n            desc: \"This app where I became a fan of TailwindCSS. In this app user can see trending movies, tv series and als latest movie, tv series. He can see the details of the show and also can have some recommendation. User also can search for specific movie.\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-screen h-auto bg-bg relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-5/6 flex items-center justify-between mt-20 mb-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-4/5 xl:w-1170 mx-auto flex items-center justify-between h-4/5 lg:flex-row flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6\",\n                        children: projectsArray.map(function(project) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FrontendProject__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                project: project\n                            }, project.title, false, {\n                                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js\",\n                                lineNumber: 132,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (projects);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBRzs7Ozs7O2FBQ04sQ0FDTjtDQUNIO0FBRUQsK0RBQWVDLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy5qcz8yNWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgRnJvbnRlbmRQcm9qZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0Zyb250ZW5kUHJvamVjdFwiO1xuaW1wb3J0IHsgSW5maW5pdHlTcGluIH0gZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNBcnJheSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJJbnZvaWNlIE1hc3RlciAtIEEgSW52b2ljZSBNYW5hZ2VtZW50IEFwcFwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly9pLmliYi5jby93S1M0ektCLzZlYTY5ZDZmLWNiMzgtNDMyNy1hNWRjLTUwYzIzMThiMGVkZC5qcGdcIixcbiAgICAgIGxpdmU6IFwiaHR0cHM6Ly9pbnZvaWNlLW1hc3Rlci0xMGUyMy53ZWIuYXBwL1wiLFxuICAgICAgZ2l0aHViQ2xpZW50OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL0ludm9pY2UtTWFzdGVyLUNsaWVudFwiLFxuICAgICAgZ2l0aHViU2VydmVyOiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL2ludm9pY2UtbWFzdGVyLXNlcnZlclwiLFxuICAgICAgdGVjaHM6IFtcbiAgICAgICAgXCJGaWdtYVwiLFxuICAgICAgICBcIkJhbHNhbWlxXCIsXG4gICAgICAgIFwiUmVhY3RKU1wiLFxuICAgICAgICBcIk5vZGVKU1wiLFxuICAgICAgICBcIkV4cHJlc3NKU1wiLFxuICAgICAgICBcIk1vbmdvREJcIixcbiAgICAgICAgXCJGaXJlYmFzZSBBdXRoXCIsXG4gICAgICAgIFwiVGFpbHdpbmRDU1NcIixcbiAgICAgICAgXCJIZXJva3VcIixcbiAgICAgIF0sXG4gICAgICBkZXNjOiBcIlRoZSB0YXNrIGlzIG1haW5seSB0byBjcmVhdGUgYSBzeXN0ZW0gd2hlcmUgdXNlciB3aWxsIGJlIGFibGUgdG8gbWFuYWdlIGludm9pY2UgZm9yIHRoZWlyIGNsaWVudC4gVXNlciB3aWxsIGJlIGFibGUgdG8gY3JlYXRlLCBkZWxldGUgb3IgdXBkYXRlIHRoZWlyIGludm9pY2UuIFVzZXIgbXVzdCBsb2dpbiB0byB1c2UgdGhlIHN5c3RlbSBhbmQgYWxzbyB0byBrZWVwIHRoZSBkYXRhLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiV2hlZWwgV2F2ZSAtIEludmVudG9yeSBNYW5hZ2VtZW50IFdlYnNpdGVcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vY05DVDIwTi9GcmFtZS0xMi5wbmdcIixcbiAgICAgIGxpdmU6IFwiaHR0cHM6Ly93aGVlbC13YXZlLndlYi5hcHAvXCIsXG4gICAgICBnaXRodWJDbGllbnQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ppbGx1ci1yZ2Ivd2hlZWwtd2F2ZS1jbGllbnRcIixcbiAgICAgIGdpdGh1YlNlcnZlcjogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi93aGVlbC13YXZlLWNsaWVudFwiLFxuICAgICAgdGVjaHM6IFtcbiAgICAgICAgXCJGaWdtYVwiLFxuICAgICAgICBcIkJhbHNhbWlxXCIsXG4gICAgICAgIFwiUmVhY3RKU1wiLFxuICAgICAgICBcIk5vZGVKU1wiLFxuICAgICAgICBcIkV4cHJlc3NKU1wiLFxuICAgICAgICBcIk1vbmdvb3NlXCIsXG4gICAgICAgIFwiRmlyZWJhc2UgQXV0aFwiLFxuICAgICAgICBcIlJlYWN0LUJvb3RzdHJhcFwiLFxuICAgICAgICBcIkhlcm9rdVwiLFxuICAgICAgICBcIkZpcmViYXNlIEhvc3RpbmdcIixcbiAgICAgIF0sXG4gICAgICBkZXNjOiBcIldoZWVsIFdhdmUgaXMgYSAzcmQgcGFydHkgY3ljbGUgc3VwcGxpZXIgd2hvIHNlbGxzIGN5Y2xlIG9mIG90aGVyIGNvbXBhbmllcy4gU28gdGhpcyBob21lcGFnZSB3YXMgbWFpbmx5IGZvciBzdXBwbGllcnMuIFN1cHBsaWVyIGNhbiBhZGQgbmV3IHByb2R1Y3RzLCBkZWxldGUgb3IgY2FuIHVwZGF0ZSBpZiBhIHByb2R1Y3QgaXMgZGVsaXZlcmVkLiBCdXQgaGUvIHNoZSBtdXN0IGJlIGxvZ2dlZCBpbi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkZsZXh5dHJpcHMgLSBBIFdlYnNpdGUgZm9yIFRvdXIgQWdlbmN5LlwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmliYi5jby9YWEh4UjFqL0ZyYW1lLTIucG5nXCIsXG4gICAgICBsaXZlOiBcImh0dHBzOi8vZmxleHl0cmlwcy53ZWIuYXBwL1wiLFxuICAgICAgZ2l0aHViQ2xpZW50OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL2ZsZXh5dHJpcHMtY2xpZW50XCIsXG4gICAgICBnaXRodWJTZXJ2ZXI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ppbGx1ci1yZ2IvZmxleHl0cmlwcy1zZXJ2ZXJcIixcbiAgICAgIHRlY2hzOiBbXG4gICAgICAgIFwiRmlnbWFcIixcbiAgICAgICAgXCJCYWxzYW1pcVwiLFxuICAgICAgICBcIlJlYWN0SlNcIixcbiAgICAgICAgXCJOb2RlSlNcIixcbiAgICAgICAgXCJFeHByZXNzSlNcIixcbiAgICAgICAgXCJNb25nb29zZVwiLFxuICAgICAgICBcIkZpcmViYXNlIEF1dGhcIixcbiAgICAgICAgXCJDU1MgM1wiLFxuICAgICAgICBcIkhlcm9rdVwiLFxuICAgICAgICBcIkZpcmViYXNlIEhvc3RpbmdcIixcbiAgICAgIF0sXG4gICAgICBkZXNjOiBcIlRoZSB3ZWJzaXRlIGlzIGZvciBhIHRvdXIgYWdlbmN5IHdobyBhcnJhbmdlcyB0cmlwIGFjcm9zcyB0aGUgRXVyb3BlIHdpdGggcmVzYXNvbmFibGUgY29zdHMuIEFuIHVzZXIgY2FuIHNlZSB0cmVuZGluZyB0cmlwcywgYWxzbyBjaGVjayBhbGwgdHJpcHMgYWxzbyBjYW4gc2VlIGRldGFpbHMuIFVzZXIgY2FuIHNlYXJjaCBmb3IgdHJpcHMgd2l0aCB0aGVpciBidWRnZXQgYW5kIGRlc3RpbmF0aW9ucy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkF1ZGlvcGhpbGUgLSBBIHNob3AgZm9yIEdhZGdldCBMb3ZlcnNcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vekpRdko1dC9GcmFtZS01LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL2ZhYnVsb3VzLW1lbGJhLTg2Zjc1Yi5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9BdWRpb3BoaWxlXCIsXG4gICAgICB0ZWNoczogW1wiUmVhY3RKU1wiLCBcIlRhaWx3aW5kIENTU1wiLCBcIk5ldGxpZnlcIl0sXG4gICAgICBkZXNjOiBcIlRoaXMgaXMgYSBzaW1wbGUgd2Vic2l0ZSBhYm91dCBnYWRnZXRzIHN1Y2ggYXMgc3BlYWtlciwgZXFhcnBob25lIG9yIGhlYWRwaG9uZS4gVXNlIHJjYW4gc2VlIGRpZmZlcmVuY2UgcHJvZHVjdHMsIGFkZCB0aGVtIHRvIGNhcnQgYW5kIHBsYWNlIGFuIG9yZGVyLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTm90ZXMgQXBwIHdpdGggVHlwZVNjcmlwdC5cIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28va0hSNktXNS9GcmFtZS03LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3NpbGx5LWt1bGZpLWViYTA3OS5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9ub3Rlcy1hcHAtcmVhY3QtdHlwZXNjcmlwdFwiLFxuICAgICAgdGVjaHM6IFtcIlJlYWN0SlNcIiwgXCJUeXBlU2NyaXB0XCIsIFwiTmV0bGlmeVwiLCBcIkJvb3RzdHJhcCA1XCJdLFxuICAgICAgZGVzYzogXCJUaGlzIGlzIGEgc2ltcGxlIHdlYnNpdGUgYWJvdXQgZ2FkZ2V0cyBzdWNoIGFzIHNwZWFrZXIsIGVxYXJwaG9uZSBvciBoZWFkcGhvbmUuIFVzZSByY2FuIHNlZSBkaWZmZXJlbmNlIHByb2R1Y3RzLCBhZGQgdGhlbSB0byBjYXJ0IGFuZCBwbGFjZSBhbiBvcmRlci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlJlY2lwZSBBcHBcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vdHBGN2dyTS9GcmFtZS05LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3N0b3JpZWQtc3RhcmxpZ2h0LTdmMjRlNy5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9SZWNpcGUtQXBwXCIsXG4gICAgICB0ZWNoczogW1wiUmVhY3RKU1wiLCBcIlN0eWxlZCBDb21wb25lbnRzXCIsIFwiTmV0bGlmeVwiLCBcIkFQSVwiLCBcIkJvb3RzdHJhcCA1XCJdLFxuICAgICAgZGVzYzogXCJUaGUgdGFzayB3YXMgdG8gY3JlYXRlIGEgcmVjaXBlIGFwcCB3aGVyZSB2aXNpdG9yIGNhbiBzZWUgZGlmZmVyZW50IHR5cGVzIG9mIHJlY2lwZSBhbmQgaWYgdGhleSBjbGljayBhbnkgcmVjaXBlIHRoZXkgY2FuIHNlZSBkZXRhaWxzIGZvciBleGFtcGxlIHByZXBhcmF0aW9uLCBpbmdyZWRpZW50cyBldGMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJSb2NrIFBhcGVyIFNjaXNzb3IgZ2FtZVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmliYi5jby8yUExxS1BSL0ZyYW1lLTExLnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3ppbGx1ci1yZ2IuZ2l0aHViLmlvL3JvY2stcGFwZXItc2Npc3Nvci9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9yb2NrLXBhcGVyLXNjaXNzb3JcIixcbiAgICAgIHRlY2hzOiBbXCJKYXZhU2NyaXB0XCIsIFwiQ1NTXCJdLFxuICAgICAgZGVzYzogXCJUaGlzIHdhcyBvbmUgb2YgcHJvamVjdHMgd2hlbiBJIHdhcyBsZWFybmluZyBKYXZhU2NyaXB0LiBUcmllZCB0byBjcmVhdGUgYSBSb2NrIFBhcGVyIFNjaXNzb3IgZ2FtZSB3aXRoIHRoZSBjYXBhYmlsaXR5IG9mIHJlc3RhcnRpbmcgdGhlIGdhbWUgd2hlbiBzb21lb25lIHdpbnMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJSZXN1bWUgQXBwXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2kuaWJiLmNvL3RwSlhtZFovRnJhbWUtNi5wbmdcIixcbiAgICAgIGxpdmU6IFwiaHR0cHM6Ly9lZmZvcnRsZXNzLW1lZG92aWstZGMwNDRjLm5ldGxpZnkuYXBwL1wiLFxuICAgICAgZ2l0aHViQ2xpZW50OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL3Jlc3VtZS1hcHBcIixcbiAgICAgIHRlY2hzOiBbXCJSZWFjdEpTXCIsIFwiU3R5bGVkIENvbXBvbmVudHNcIiwgXCJNYXRlcmlhbCBVSVwiXSxcbiAgICAgIGRlc2M6IFwiSGVyZSBJIGhhdmUgdXNlZCBNYXRlcmlhbCBVSSBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kIHRyaWVkIHRvIGNyZWF0ZSBhIHJlc3VtZSBhcHAgd2l0aCBzb21lIHJvdXRpbmcuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNb25leSBNYXN0ZXJcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vR0ptck5KNy9GcmFtZS00LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3ppbGx1ci1yZ2IuZ2l0aHViLmlvL21vbmV5LW1hc3Rlci9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9yZXN1bWUtYXBwXCIsXG4gICAgICB0ZWNoczogW1wiSmF2YVNjcmlwdFwiLCBcIkJvb3RzdHJhcCA1XCJdLFxuICAgICAgZGVzYzogXCJUaGlzIGlzIGEgcHJvamVjdCB3aGVuIEkgd2FzIGxlYXJuaW5nIEphdmFTY3JpcHQuIFRoaXMgaXMgYSBtb25leSBtYW5hZ2VtZW50IHRvb2wgd2hlcmUgb25lIGNhbiBpbmNvbWUgYW5kIGV4cGVuc2VzIGFsc28gaGUgY2FuIGNhbGN1bGF0ZSBob3cgbXVjaCBoZSBjYW4gc2F2ZS5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlppbGxmbGl4IC0gQSBNb3ZpZSBBcHBcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vWHNjQlNHWi9GcmFtZS04LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL2RlbGljYXRlLXN0YXJkdXN0LWI1N2MxNS5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi96aWxsZmxpeC1BLW1vdmllLWFwcFwiLFxuICAgICAgdGVjaHM6IFtcIlJlYWN0SlNcIiwgXCJUYWlsd2luZCBDU1NcIiwgXCJEYWlzeSBVSVwiLCBcIkFQSVwiXSxcbiAgICAgIGRlc2M6IFwiVGhpcyBhcHAgd2hlcmUgSSBiZWNhbWUgYSBmYW4gb2YgVGFpbHdpbmRDU1MuIEluIHRoaXMgYXBwIHVzZXIgY2FuIHNlZSB0cmVuZGluZyBtb3ZpZXMsIHR2IHNlcmllcyBhbmQgYWxzIGxhdGVzdCBtb3ZpZSwgdHYgc2VyaWVzLiBIZSBjYW4gc2VlIHRoZSBkZXRhaWxzIG9mIHRoZSBzaG93IGFuZCBhbHNvIGNhbiBoYXZlIHNvbWUgcmVjb21tZW5kYXRpb24uIFVzZXIgYWxzbyBjYW4gc2VhcmNoIGZvciBzcGVjaWZpYyBtb3ZpZS5cIixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctc2NyZWVuIGgtYXV0byBiZy1iZyByZWxhdGl2ZVwiPlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTUvNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMjAgbWItMzJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNSB4bDp3LTExNzAgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC00LzUgbGc6ZmxleC1yb3cgZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTIgZ2FwLTZcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0c0FycmF5Lm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICA8RnJvbnRlbmRQcm9qZWN0IHByb2plY3Q9e3Byb2plY3R9IGtleT17cHJvamVjdC50aXRsZX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiRnJvbnRlbmRQcm9qZWN0IiwiSW5maW5pdHlTcGluIiwiRm9vdGVyIiwicHJvamVjdHMiLCJwcm9qZWN0c0FycmF5IiwidGl0bGUiLCJpbWFnZSIsImxpdmUiLCJnaXRodWJDbGllbnQiLCJnaXRodWJTZXJ2ZXIiLCJ0ZWNocyIsImRlc2MiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

});