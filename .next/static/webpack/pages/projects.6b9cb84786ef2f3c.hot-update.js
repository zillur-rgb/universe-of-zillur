"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects", {
  /***/ "./pages/projects.js":
    /*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\n\nvar projects = function() {\n    var projectsArray = [\n        {\n            title: "Invoice Master - A Invoice Management App",\n            image: "https://i.ibb.co/wKS4zKB/6ea69d6f-cb38-4327-a5dc-50c2318b0edd.jpg",\n            live: "https://invoice-master-10e23.web.app/",\n            githubClient: "https://github.com/zillur-rgb/Invoice-Master-Client",\n            githubServer: "https://github.com/zillur-rgb/invoice-master-server",\n            techs: [\n                "Figma",\n                "Balsamiq",\n                "ReactJS",\n                "NodeJS",\n                "ExpressJS",\n                "MongoDB",\n                "Firebase Auth",\n                "TailwindCSS",\n                "Heroku", \n            ],\n            desc: "The task is mainly to create a system where user will be able to manage invoice for their client. User will be able to create, delete or update their invoice. User must login to use the system and also to keep the data."\n        },\n        {\n            title: "Wheel Wave - Inventory Management Website",\n            image: "https://i.ibb.co/cNCT20N/Frame-12.png",\n            live: "https://wheel-wave.web.app/",\n            githubClient: "https://github.com/zillur-rgb/wheel-wave-client",\n            githubServer: "https://github.com/zillur-rgb/wheel-wave-client",\n            techs: [\n                "Figma",\n                "Balsamiq",\n                "ReactJS",\n                "NodeJS",\n                "ExpressJS",\n                "Mongoose",\n                "Firebase Auth",\n                "React-Bootstrap",\n                "Heroku",\n                "Firebase Hosting", \n            ],\n            desc: "Wheel Wave is a 3rd party cycle supplier who sells cycle of other companies. So this homepage was mainly for suppliers. Supplier can add new products, delete or can update if a product is delivered. But he/ she must be logged in."\n        },\n        {\n            title: "Flexytrips - A Website for Tour Agency.",\n            image: "https://i.ibb.co/XXHxR1j/Frame-2.png",\n            live: "https://flexytrips.web.app/",\n            githubClient: "https://github.com/zillur-rgb/flexytrips-client",\n            githubServer: "https://github.com/zillur-rgb/flexytrips-server",\n            techs: [\n                "Figma",\n                "Balsamiq",\n                "ReactJS",\n                "NodeJS",\n                "ExpressJS",\n                "Mongoose",\n                "Firebase Auth",\n                "CSS 3",\n                "Heroku",\n                "Firebase Hosting", \n            ],\n            desc: "The website is for a tour agency who arranges trip across the Europe with resasonable costs. An user can see trending trips, also check all trips also can see details. User can search for trips with their budget and destinations."\n        },\n        {\n            title: "Audiophile - A shop for Gadget Lovers",\n            image: "https://i.ibb.co/zJQvJ5t/Frame-5.png",\n            live: "https://fabulous-melba-86f75b.netlify.app/",\n            githubClient: "https://github.com/zillur-rgb/Audiophile",\n            techs: [\n                "ReactJS",\n                "Tailwind CSS",\n                "Netlify"\n            ],\n            desc: "This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order."\n        },\n        {\n            title: "Notes App with TypeScript.",\n            image: "https://i.ibb.co/kHR6KW5/Frame-7.png",\n            live: "https://silly-kulfi-eba079.netlify.app/",\n            githubClient: "https://github.com/zillur-rgb/notes-app-react-typescript",\n            techs: [\n                "ReactJS",\n                "TypeScript",\n                "Netlify",\n                "Bootstrap 5"\n            ],\n            desc: "This is a simple website about gadgets such as speaker, eqarphone or headphone. Use rcan see difference products, add them to cart and place an order."\n        },\n        {\n            title: "Recipe App",\n            image: "https://i.ibb.co/tpF7grM/Frame-9.png",\n            live: "https://storied-starlight-7f24e7.netlify.app/",\n            githubClient: "https://github.com/zillur-rgb/Recipe-App",\n            techs: [\n                "ReactJS",\n                "Styled Components",\n                "Netlify",\n                "API",\n                "Bootstrap 5"\n            ],\n            desc: "The task was to create a recipe app where visitor can see different types of recipe and if they click any recipe they can see details for example preparation, ingredients etc."\n        },\n        {\n            title: "Rock Paper Scissor game",\n            image: "https://i.ibb.co/2PLqKPR/Frame-11.png",\n            live: "https://zillur-rgb.github.io/rock-paper-scissor/",\n            githubClient: "https://github.com/zillur-rgb/rock-paper-scissor",\n            techs: [\n                "JavaScript",\n                "CSS"\n            ],\n            desc: "This was one of projects when I was learning JavaScript. Tried to create a Rock Paper Scissor game with the capability of restarting the game when someone wins."\n        },\n        {\n            title: "Resume App",\n            image: "https://i.ibb.co/tpJXmdZ/Frame-6.png",\n            live: "https://effortless-medovik-dc044c.netlify.app/",\n            githubClient: "https://github.com/zillur-rgb/resume-app",\n            techs: [\n                "ReactJS",\n                "Styled Components",\n                "Material UI"\n            ],\n            desc: "Here I have used Material UI for the first time and tried to create a resume app with some routing."\n        },\n        {\n            title: "Money Master",\n            image: "https://i.ibb.co/GJmrNJ7/Frame-4.png",\n            live: "https://zillur-rgb.github.io/money-master/",\n            githubClient: "https://github.com/zillur-rgb/resume-app",\n            techs: [\n                "JavaScript",\n                "Bootstrap 5"\n            ],\n            desc: "This is a project when I was learning JavaScript. This is a money management tool where one can income and expenses also he can calculate how much he can save."\n        },\n        {\n            title: "Zillflix - A Movie App",\n            image: "https://i.ibb.co/XscBSGZ/Frame-8.png",\n            live: "https://delicate-stardust-b57c15.netlify.app/",\n            githubClient: "https://github.com/zillur-rgb/zillflix-A-movie-app",\n            techs: [\n                "ReactJS",\n                "Tailwind CSS",\n                "Daisy UI",\n                "API"\n            ],\n            desc: "This app where I became a fan of TailwindCSS. In this app user can see trending movies, tv series and als latest movie, tv series. He can see the details of the show and also can have some recommendation. User also can search for specific movie."\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: "bg-bg",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {\n                fileName: "/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js",\n                lineNumber: 124,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "w-4/5 xl:w-1170 mx-auto",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "w-1/2 flex border-2",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", _defineProperty({\n                            className: "w-1/4",\n                            src: projectsArray[0].image,\n                            alt: "iag"\n                        }, "className", "w-4/5"), void 0, false, {\n                            fileName: "/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {\n                            children: projectsArray[0].title\n                        }, void 0, false, {\n                            fileName: "/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: "/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js",\n                lineNumber: 125,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: "/home/zillur-rgb/Documents/developer-portfolio/pages/projects.js",\n        lineNumber: 123,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__["default"] = (projects);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSDtBQUVELCtEQUFlRixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/MjVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNBcnJheSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJJbnZvaWNlIE1hc3RlciAtIEEgSW52b2ljZSBNYW5hZ2VtZW50IEFwcFwiLFxuICAgICAgaW1hZ2U6XG4gICAgICAgIFwiaHR0cHM6Ly9pLmliYi5jby93S1M0ektCLzZlYTY5ZDZmLWNiMzgtNDMyNy1hNWRjLTUwYzIzMThiMGVkZC5qcGdcIixcbiAgICAgIGxpdmU6IFwiaHR0cHM6Ly9pbnZvaWNlLW1hc3Rlci0xMGUyMy53ZWIuYXBwL1wiLFxuICAgICAgZ2l0aHViQ2xpZW50OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL0ludm9pY2UtTWFzdGVyLUNsaWVudFwiLFxuICAgICAgZ2l0aHViU2VydmVyOiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL2ludm9pY2UtbWFzdGVyLXNlcnZlclwiLFxuICAgICAgdGVjaHM6IFtcbiAgICAgICAgXCJGaWdtYVwiLFxuICAgICAgICBcIkJhbHNhbXBpcVwiLFxuICAgICAgICBcIlJlYWN0SlNcIixcbiAgICAgICAgXCJOb2RlSlNcIixcbiAgICAgICAgXCJFeHByZXNzSlNcIixcbiAgICAgICAgXCJNb25nb0RCXCIsXG4gICAgICAgIFwiRmlyZWJhc2UgQXV0aFwiLFxuICAgICAgICBcIlRhaWx3aW5kQ1NTXCIsXG4gICAgICAgIFwiSGVyb2t1XCIsXG4gICAgICBdLFxuICAgICAgZGVzYzogXCJUaGUgdGFzayBpcyBtYWlubHkgdG8gY3JlYXRlIGEgc3lzdGVtIHdoZXJlIHVzZXIgd2lsbCBiZSBhYmxlIHRvIG1hbmFnZSBpbnZvaWNlIGZvciB0aGVpciBjbGllbnQuIFVzZXIgd2lsbCBiZSBhYmxlIHRvIGNyZWF0ZSwgZGVsZXRlIG9yIHVwZGF0ZSB0aGVpciBpbnZvaWNlLiBVc2VyIG11c3QgbG9naW4gdG8gdXNlIHRoZSBzeXN0ZW0gYW5kIGFsc28gdG8ga2VlcCB0aGUgZGF0YS5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIldoZWVsIFdhdmUgLSBJbnZlbnRvcnkgTWFuYWdlbWVudCBXZWJzaXRlXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2kuaWJiLmNvL2NOQ1QyME4vRnJhbWUtMTIucG5nXCIsXG4gICAgICBsaXZlOiBcImh0dHBzOi8vd2hlZWwtd2F2ZS53ZWIuYXBwL1wiLFxuICAgICAgZ2l0aHViQ2xpZW50OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL3doZWVsLXdhdmUtY2xpZW50XCIsXG4gICAgICBnaXRodWJTZXJ2ZXI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ppbGx1ci1yZ2Ivd2hlZWwtd2F2ZS1jbGllbnRcIixcbiAgICAgIHRlY2hzOiBbXG4gICAgICAgIFwiRmlnbWFcIixcbiAgICAgICAgXCJCYWxzYW1waXFcIixcbiAgICAgICAgXCJSZWFjdEpTXCIsXG4gICAgICAgIFwiTm9kZUpTXCIsXG4gICAgICAgIFwiRXhwcmVzc0pTXCIsXG4gICAgICAgIFwiTW9uZ29vc2VcIixcbiAgICAgICAgXCJGaXJlYmFzZSBBdXRoXCIsXG4gICAgICAgIFwiUmVhY3QtQm9vdHN0cmFwXCIsXG4gICAgICAgIFwiSGVyb2t1XCIsXG4gICAgICAgIFwiRmlyZWJhc2UgSG9zdGluZ1wiLFxuICAgICAgXSxcbiAgICAgIGRlc2M6IFwiV2hlZWwgV2F2ZSBpcyBhIDNyZCBwYXJ0eSBjeWNsZSBzdXBwbGllciB3aG8gc2VsbHMgY3ljbGUgb2Ygb3RoZXIgY29tcGFuaWVzLiBTbyB0aGlzIGhvbWVwYWdlIHdhcyBtYWlubHkgZm9yIHN1cHBsaWVycy4gU3VwcGxpZXIgY2FuIGFkZCBuZXcgcHJvZHVjdHMsIGRlbGV0ZSBvciBjYW4gdXBkYXRlIGlmIGEgcHJvZHVjdCBpcyBkZWxpdmVyZWQuIEJ1dCBoZS8gc2hlIG11c3QgYmUgbG9nZ2VkIGluLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRmxleHl0cmlwcyAtIEEgV2Vic2l0ZSBmb3IgVG91ciBBZ2VuY3kuXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2kuaWJiLmNvL1hYSHhSMWovRnJhbWUtMi5wbmdcIixcbiAgICAgIGxpdmU6IFwiaHR0cHM6Ly9mbGV4eXRyaXBzLndlYi5hcHAvXCIsXG4gICAgICBnaXRodWJDbGllbnQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ppbGx1ci1yZ2IvZmxleHl0cmlwcy1jbGllbnRcIixcbiAgICAgIGdpdGh1YlNlcnZlcjogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9mbGV4eXRyaXBzLXNlcnZlclwiLFxuICAgICAgdGVjaHM6IFtcbiAgICAgICAgXCJGaWdtYVwiLFxuICAgICAgICBcIkJhbHNhbXBpcVwiLFxuICAgICAgICBcIlJlYWN0SlNcIixcbiAgICAgICAgXCJOb2RlSlNcIixcbiAgICAgICAgXCJFeHByZXNzSlNcIixcbiAgICAgICAgXCJNb25nb29zZVwiLFxuICAgICAgICBcIkZpcmViYXNlIEF1dGhcIixcbiAgICAgICAgXCJDU1MgM1wiLFxuICAgICAgICBcIkhlcm9rdVwiLFxuICAgICAgICBcIkZpcmViYXNlIEhvc3RpbmdcIixcbiAgICAgIF0sXG4gICAgICBkZXNjOiBcIlRoZSB3ZWJzaXRlIGlzIGZvciBhIHRvdXIgYWdlbmN5IHdobyBhcnJhbmdlcyB0cmlwIGFjcm9zcyB0aGUgRXVyb3BlIHdpdGggcmVzYXNvbmFibGUgY29zdHMuIEFuIHVzZXIgY2FuIHNlZSB0cmVuZGluZyB0cmlwcywgYWxzbyBjaGVjayBhbGwgdHJpcHMgYWxzbyBjYW4gc2VlIGRldGFpbHMuIFVzZXIgY2FuIHNlYXJjaCBmb3IgdHJpcHMgd2l0aCB0aGVpciBidWRnZXQgYW5kIGRlc3RpbmF0aW9ucy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkF1ZGlvcGhpbGUgLSBBIHNob3AgZm9yIEdhZGdldCBMb3ZlcnNcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vekpRdko1dC9GcmFtZS01LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL2ZhYnVsb3VzLW1lbGJhLTg2Zjc1Yi5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9BdWRpb3BoaWxlXCIsXG4gICAgICB0ZWNoczogW1wiUmVhY3RKU1wiLCBcIlRhaWx3aW5kIENTU1wiLCBcIk5ldGxpZnlcIl0sXG4gICAgICBkZXNjOiBcIlRoaXMgaXMgYSBzaW1wbGUgd2Vic2l0ZSBhYm91dCBnYWRnZXRzIHN1Y2ggYXMgc3BlYWtlciwgZXFhcnBob25lIG9yIGhlYWRwaG9uZS4gVXNlIHJjYW4gc2VlIGRpZmZlcmVuY2UgcHJvZHVjdHMsIGFkZCB0aGVtIHRvIGNhcnQgYW5kIHBsYWNlIGFuIG9yZGVyLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTm90ZXMgQXBwIHdpdGggVHlwZVNjcmlwdC5cIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28va0hSNktXNS9GcmFtZS03LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3NpbGx5LWt1bGZpLWViYTA3OS5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9ub3Rlcy1hcHAtcmVhY3QtdHlwZXNjcmlwdFwiLFxuICAgICAgdGVjaHM6IFtcIlJlYWN0SlNcIiwgXCJUeXBlU2NyaXB0XCIsIFwiTmV0bGlmeVwiLCBcIkJvb3RzdHJhcCA1XCJdLFxuICAgICAgZGVzYzogXCJUaGlzIGlzIGEgc2ltcGxlIHdlYnNpdGUgYWJvdXQgZ2FkZ2V0cyBzdWNoIGFzIHNwZWFrZXIsIGVxYXJwaG9uZSBvciBoZWFkcGhvbmUuIFVzZSByY2FuIHNlZSBkaWZmZXJlbmNlIHByb2R1Y3RzLCBhZGQgdGhlbSB0byBjYXJ0IGFuZCBwbGFjZSBhbiBvcmRlci5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlJlY2lwZSBBcHBcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vdHBGN2dyTS9GcmFtZS05LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3N0b3JpZWQtc3RhcmxpZ2h0LTdmMjRlNy5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9SZWNpcGUtQXBwXCIsXG4gICAgICB0ZWNoczogW1wiUmVhY3RKU1wiLCBcIlN0eWxlZCBDb21wb25lbnRzXCIsIFwiTmV0bGlmeVwiLCBcIkFQSVwiLCBcIkJvb3RzdHJhcCA1XCJdLFxuICAgICAgZGVzYzogXCJUaGUgdGFzayB3YXMgdG8gY3JlYXRlIGEgcmVjaXBlIGFwcCB3aGVyZSB2aXNpdG9yIGNhbiBzZWUgZGlmZmVyZW50IHR5cGVzIG9mIHJlY2lwZSBhbmQgaWYgdGhleSBjbGljayBhbnkgcmVjaXBlIHRoZXkgY2FuIHNlZSBkZXRhaWxzIGZvciBleGFtcGxlIHByZXBhcmF0aW9uLCBpbmdyZWRpZW50cyBldGMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJSb2NrIFBhcGVyIFNjaXNzb3IgZ2FtZVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmliYi5jby8yUExxS1BSL0ZyYW1lLTExLnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3ppbGx1ci1yZ2IuZ2l0aHViLmlvL3JvY2stcGFwZXItc2Npc3Nvci9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9yb2NrLXBhcGVyLXNjaXNzb3JcIixcbiAgICAgIHRlY2hzOiBbXCJKYXZhU2NyaXB0XCIsIFwiQ1NTXCJdLFxuICAgICAgZGVzYzogXCJUaGlzIHdhcyBvbmUgb2YgcHJvamVjdHMgd2hlbiBJIHdhcyBsZWFybmluZyBKYXZhU2NyaXB0LiBUcmllZCB0byBjcmVhdGUgYSBSb2NrIFBhcGVyIFNjaXNzb3IgZ2FtZSB3aXRoIHRoZSBjYXBhYmlsaXR5IG9mIHJlc3RhcnRpbmcgdGhlIGdhbWUgd2hlbiBzb21lb25lIHdpbnMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJSZXN1bWUgQXBwXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2kuaWJiLmNvL3RwSlhtZFovRnJhbWUtNi5wbmdcIixcbiAgICAgIGxpdmU6IFwiaHR0cHM6Ly9lZmZvcnRsZXNzLW1lZG92aWstZGMwNDRjLm5ldGxpZnkuYXBwL1wiLFxuICAgICAgZ2l0aHViQ2xpZW50OiBcImh0dHBzOi8vZ2l0aHViLmNvbS96aWxsdXItcmdiL3Jlc3VtZS1hcHBcIixcbiAgICAgIHRlY2hzOiBbXCJSZWFjdEpTXCIsIFwiU3R5bGVkIENvbXBvbmVudHNcIiwgXCJNYXRlcmlhbCBVSVwiXSxcbiAgICAgIGRlc2M6IFwiSGVyZSBJIGhhdmUgdXNlZCBNYXRlcmlhbCBVSSBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kIHRyaWVkIHRvIGNyZWF0ZSBhIHJlc3VtZSBhcHAgd2l0aCBzb21lIHJvdXRpbmcuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJNb25leSBNYXN0ZXJcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vR0ptck5KNy9GcmFtZS00LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL3ppbGx1ci1yZ2IuZ2l0aHViLmlvL21vbmV5LW1hc3Rlci9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi9yZXN1bWUtYXBwXCIsXG4gICAgICB0ZWNoczogW1wiSmF2YVNjcmlwdFwiLCBcIkJvb3RzdHJhcCA1XCJdLFxuICAgICAgZGVzYzogXCJUaGlzIGlzIGEgcHJvamVjdCB3aGVuIEkgd2FzIGxlYXJuaW5nIEphdmFTY3JpcHQuIFRoaXMgaXMgYSBtb25leSBtYW5hZ2VtZW50IHRvb2wgd2hlcmUgb25lIGNhbiBpbmNvbWUgYW5kIGV4cGVuc2VzIGFsc28gaGUgY2FuIGNhbGN1bGF0ZSBob3cgbXVjaCBoZSBjYW4gc2F2ZS5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlppbGxmbGl4IC0gQSBNb3ZpZSBBcHBcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pYmIuY28vWHNjQlNHWi9GcmFtZS04LnBuZ1wiLFxuICAgICAgbGl2ZTogXCJodHRwczovL2RlbGljYXRlLXN0YXJkdXN0LWI1N2MxNS5uZXRsaWZ5LmFwcC9cIixcbiAgICAgIGdpdGh1YkNsaWVudDogXCJodHRwczovL2dpdGh1Yi5jb20vemlsbHVyLXJnYi96aWxsZmxpeC1BLW1vdmllLWFwcFwiLFxuICAgICAgdGVjaHM6IFtcIlJlYWN0SlNcIiwgXCJUYWlsd2luZCBDU1NcIiwgXCJEYWlzeSBVSVwiLCBcIkFQSVwiXSxcbiAgICAgIGRlc2M6IFwiVGhpcyBhcHAgd2hlcmUgSSBiZWNhbWUgYSBmYW4gb2YgVGFpbHdpbmRDU1MuIEluIHRoaXMgYXBwIHVzZXIgY2FuIHNlZSB0cmVuZGluZyBtb3ZpZXMsIHR2IHNlcmllcyBhbmQgYWxzIGxhdGVzdCBtb3ZpZSwgdHYgc2VyaWVzLiBIZSBjYW4gc2VlIHRoZSBkZXRhaWxzIG9mIHRoZSBzaG93IGFuZCBhbHNvIGNhbiBoYXZlIHNvbWUgcmVjb21tZW5kYXRpb24uIFVzZXIgYWxzbyBjYW4gc2VhcmNoIGZvciBzcGVjaWZpYyBtb3ZpZS5cIixcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmdcIj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00LzUgeGw6dy0xMTcwIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBmbGV4IGJvcmRlci0yXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzRcIlxuICAgICAgICAgICAgc3JjPXtwcm9qZWN0c0FycmF5WzBdLmltYWdlfVxuICAgICAgICAgICAgYWx0PVwiaWFnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNC81XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMT57cHJvamVjdHNBcnJheVswXS50aXRsZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvamVjdHMiLCJwcm9qZWN0c0FycmF5IiwidGl0bGUiLCJpbWFnZSIsImxpdmUiLCJnaXRodWJDbGllbnQiLCJnaXRodWJTZXJ2ZXIiLCJ0ZWNocyIsImRlc2MiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.js\n'
      );

      /***/
    },
});
