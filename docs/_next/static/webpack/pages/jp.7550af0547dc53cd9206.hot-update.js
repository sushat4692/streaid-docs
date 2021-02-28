webpackHotUpdate_N_E("pages/jp",{

/***/ "./components/History.tsx":
/*!********************************!*\
  !*** ./components/History.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/locale */ "./util/locale.ts");
/* harmony import */ var _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/History.module.css */ "./styles/components/History.module.css");
/* harmony import */ var _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\sush\\Documents\\Virtual\\twitch-support-tool-docs\\components\\History.tsx",
    _this = undefined,
    _s = $RefreshSig$();

 // Util




var HistoryComponent = function HistoryComponent() {
  _s();

  var locale = Object(_util_locale__WEBPACK_IMPORTED_MODULE_2__["useLocale"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      children: locale.getMessage({
        id: "Component.History.Header",
        defaultMessage: "Historyation"
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lead,
      children: locale.getMessage({
        id: "Component.History.Description",
        defaultMessage: "You can download latest version from the following link."
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://github.com/sushat4692/twitch-support-tool/releases/latest",
      target: "_blank",
      rel: "noreferrer",
      className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      children: locale.getMessage({
        id: "Component.History.Button",
        defaultMessage: "Download latest Version"
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, _this);
};

_s(HistoryComponent, "ubkSS9Gz1bw7UV2c73rm/bCUdh8=", false, function () {
  return [_util_locale__WEBPACK_IMPORTED_MODULE_2__["useLocale"]];
});

_c = HistoryComponent;
/* harmony default export */ __webpack_exports__["default"] = (HistoryComponent);

var _c;

$RefreshReg$(_c, "HistoryComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/History.module.css":
/*!**********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/components/History.module.css ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".History_section__1BiYD {\n  width: 100%;\n}\n\n@media (min-width: 640px) {\n  .History_section__1BiYD {\n    max-width: 640px;\n  }\n}\n\n@media (min-width: 768px) {\n  .History_section__1BiYD {\n    max-width: 768px;\n  }\n}\n\n@media (min-width: 1024px) {\n  .History_section__1BiYD {\n    max-width: 1024px;\n  }\n}\n\n@media (min-width: 1280px) {\n  .History_section__1BiYD {\n    max-width: 1280px;\n  }\n}\n\n@media (min-width: 1536px) {\n  .History_section__1BiYD {\n    max-width: 1536px;\n  }\n}\n\n.History_section__1BiYD {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.History_header__1TqSW {\n  font-weight: 800;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  margin-bottom: 2rem;\n}\n\n@media (min-width: 640px) {\n  .History_header__1TqSW {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .History_header__1TqSW {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\n\n.History_list__1ZVUQ {\n  list-style-type: disc;\n  margin-left: 1.6em;\n}\n\n.History_list__item__2oa1m + .History_list__item__2oa1m {\n  margin-top: 0.5rem;\n}", "",{"version":3,"sources":["webpack://styles/components/History.module.css","webpack://node_modules/tailwindcss/lib/lib/substituteClassApplyAtRules.js","<no source>"],"names":[],"mappings":"AAAA;ECCA,WAAoB;ADCpB;;AEFA;EDCA;IAAA,gBAAA;EAAoB;ADOpB;;AERA;EDCA;IAAA,gBAAA;EAAoB;ADapB;;AEdA;EDCA;IAAA,iBAAA;EAAoB;ADmBpB;;AEpBA;EDCA;IAAA,iBAAA;EAAoB;ADyBpB;;AE1BA;EDCA;IAAA,iBAAA;EAAoB;AD+BpB;;AC9BA;EAAA,kBAAmB;EAAnB,qBAAmB;EAAnB,iBAAmB;EAAnB,kBAAA;AAAmB;;ADEnB;ECFA,gBAAmB;EAAnB,iBAAmB;EAAnB,iBAAmB;EAAnB,mBAAmB;ADInB;;AENA;EDEA;IAAA,kBAAmB;IAAnB,mBAAA;EAAmB;ADmDnB;;AErDA;EDEA;IAAA,eAAmB;IAAnB,cAAA;EAAmB;AD0DnB;;AApDA;ECNA,qBAAmB;EDQf,kBAAkB;AACtB;;AACA;ECVA,kBAAmB;ADYnB","sourcesContent":[".section {\r\n    @apply container mx-auto my-10;\r\n}\r\n\r\n.header {\r\n    @apply md:text-5xl sm:text-4xl text-2xl font-extrabold mb-8;\r\n}\r\n\r\n.list {\r\n    @apply list-disc;\r\n    margin-left: 1.6em;\r\n}\r\n.list__item + .list__item {\r\n    @apply mt-2;\r\n}","@tailwind base;\n@tailwind components;\n@tailwind utilities;",null],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": "History_section__1BiYD",
	"header": "History_header__1TqSW",
	"list": "History_list__1ZVUQ",
	"list__item": "History_list__item__2oa1m"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./pages/jp.tsx":
/*!**********************!*\
  !*** ./pages/jp.tsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/locale */ "./context/locale.ts");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.tsx");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.tsx");
/* harmony import */ var _components_Introduction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Introduction */ "./components/Introduction.tsx");
/* harmony import */ var _components_Install__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Install */ "./components/Install.tsx");
/* harmony import */ var _components_History__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/History */ "./components/History.tsx");


var _jsxFileName = "C:\\Users\\sush\\Documents\\Virtual\\twitch-support-tool-docs\\pages\\jp.tsx",
    _this = undefined;

 // Context

 // Style

// Component







var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_locale__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: "ja-jp",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "outer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Introduction__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Install__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_History__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/components/History.module.css":
/*!**********************************************!*\
  !*** ./styles/components/History.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./History.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/History.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./History.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/History.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./History.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/components/History.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2NvbXBvbmVudHMvSGlzdG9yeS5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9qcC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jb21wb25lbnRzL0hpc3RvcnkubW9kdWxlLmNzcz9hODQwIl0sIm5hbWVzIjpbIkhpc3RvcnlDb21wb25lbnQiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJzdHlsZXMiLCJzZWN0aW9uIiwiaGVhZGVyIiwiZ2V0TWVzc2FnZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJsZWFkIiwiYnV0dG9uIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxnQkFBMEIsR0FBRyxTQUE3QkEsZ0JBQTZCLEdBQU07QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUVBLHNCQUNJO0FBQVMsYUFBUyxFQUFFQyw0RUFBTSxDQUFDQyxPQUEzQjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFFRCw0RUFBTSxDQUFDRSxNQUF0QjtBQUFBLGdCQUNLSixNQUFNLENBQUNLLFVBQVAsQ0FBa0I7QUFDZkMsVUFBRSxFQUFFLDBCQURXO0FBRWZDLHNCQUFjLEVBQUU7QUFGRCxPQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJO0FBQUcsZUFBUyxFQUFFTCw0RUFBTSxDQUFDTSxJQUFyQjtBQUFBLGdCQUNLUixNQUFNLENBQUNLLFVBQVAsQ0FBa0I7QUFDZkMsVUFBRSxFQUFFLCtCQURXO0FBRWZDLHNCQUFjLEVBQ1Y7QUFIVyxPQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQWdCSTtBQUNJLFVBQUksRUFBQyxtRUFEVDtBQUVJLFlBQU0sRUFBQyxRQUZYO0FBR0ksU0FB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QUFNQSxJO0FBa0JTQSxtRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBLFVBQVUsbUJBQU8sQ0FBQyxzTkFBMkc7QUFDN0gsMEJBQTBCLG1CQUFPLENBQUMsMlVBQWdMOztBQUVsTjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSwyVUFBZ0w7QUFDdEw7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQywyVUFBZ0w7O0FBRTFNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanAuNzU1MGFmMDU0N2RjNTNjZDkyMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFV0aWxcclxuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcIi4uL3V0aWwvbG9jYWxlXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9IaXN0b3J5Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEhpc3RvcnlDb21wb25lbnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9jYWxlID0gdXNlTG9jYWxlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICB7bG9jYWxlLmdldE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIkNvbXBvbmVudC5IaXN0b3J5LkhlYWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcIkhpc3RvcnlhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWFkfT5cclxuICAgICAgICAgICAgICAgIHtsb2NhbGUuZ2V0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiQ29tcG9uZW50Lkhpc3RvcnkuRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgY2FuIGRvd25sb2FkIGxhdGVzdCB2ZXJzaW9uIGZyb20gdGhlIGZvbGxvd2luZyBsaW5rLlwiLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1c2hhdDQ2OTIvdHdpdGNoLXN1cHBvcnQtdG9vbC9yZWxlYXNlcy9sYXRlc3RcIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bG9jYWxlLmdldE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIkNvbXBvbmVudC5IaXN0b3J5LkJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcIkRvd25sb2FkIGxhdGVzdCBWZXJzaW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5Q29tcG9uZW50O1xyXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSGlzdG9yeV9zZWN0aW9uX18xQmlZRCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICAuSGlzdG9yeV9zZWN0aW9uX18xQmlZRCB7XFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLkhpc3Rvcnlfc2VjdGlvbl9fMUJpWUQge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAuSGlzdG9yeV9zZWN0aW9uX18xQmlZRCB7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuICAuSGlzdG9yeV9zZWN0aW9uX18xQmlZRCB7XFxuICAgIG1heC13aWR0aDogMTI4MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuICAuSGlzdG9yeV9zZWN0aW9uX18xQmlZRCB7XFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcbiAgfVxcbn1cXG5cXG4uSGlzdG9yeV9zZWN0aW9uX18xQmlZRCB7XFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLkhpc3RvcnlfaGVhZGVyX18xVHFTVyB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgLkhpc3RvcnlfaGVhZGVyX18xVHFTVyB7XFxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuSGlzdG9yeV9oZWFkZXJfXzFUcVNXIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gIH1cXG59XFxuXFxuLkhpc3RvcnlfbGlzdF9fMVpWVVEge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbiAgbWFyZ2luLWxlZnQ6IDEuNmVtO1xcbn1cXG5cXG4uSGlzdG9yeV9saXN0X19pdGVtX18yb2ExbSArIC5IaXN0b3J5X2xpc3RfX2l0ZW1fXzJvYTFtIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9jb21wb25lbnRzL0hpc3RvcnkubW9kdWxlLmNzc1wiLFwid2VicGFjazovL25vZGVfbW9kdWxlcy90YWlsd2luZGNzcy9saWIvbGliL3N1YnN0aXR1dGVDbGFzc0FwcGx5QXRSdWxlcy5qc1wiLFwiPG5vIHNvdXJjZT5cIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUNDQSxXQUFvQjtBRENwQjs7QUVGQTtFRENBO0lBQUEsZ0JBQUE7RUFBb0I7QURPcEI7O0FFUkE7RURDQTtJQUFBLGdCQUFBO0VBQW9CO0FEYXBCOztBRWRBO0VEQ0E7SUFBQSxpQkFBQTtFQUFvQjtBRG1CcEI7O0FFcEJBO0VEQ0E7SUFBQSxpQkFBQTtFQUFvQjtBRHlCcEI7O0FFMUJBO0VEQ0E7SUFBQSxpQkFBQTtFQUFvQjtBRCtCcEI7O0FDOUJBO0VBQUEsa0JBQW1CO0VBQW5CLHFCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsa0JBQUE7QUFBbUI7O0FERW5CO0VDRkEsZ0JBQW1CO0VBQW5CLGlCQUFtQjtFQUFuQixpQkFBbUI7RUFBbkIsbUJBQW1CO0FESW5COztBRU5BO0VERUE7SUFBQSxrQkFBbUI7SUFBbkIsbUJBQUE7RUFBbUI7QURtRG5COztBRXJEQTtFREVBO0lBQUEsZUFBbUI7SUFBbkIsY0FBQTtFQUFtQjtBRDBEbkI7O0FBcERBO0VDTkEscUJBQW1CO0VEUWYsa0JBQWtCO0FBQ3RCOztBQUNBO0VDVkEsa0JBQW1CO0FEWW5CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWN0aW9uIHtcXHJcXG4gICAgQGFwcGx5IGNvbnRhaW5lciBteC1hdXRvIG15LTEwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgQGFwcGx5IG1kOnRleHQtNXhsIHNtOnRleHQtNHhsIHRleHQtMnhsIGZvbnQtZXh0cmFib2xkIG1iLTg7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gICAgQGFwcGx5IGxpc3QtZGlzYztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNmVtO1xcclxcbn1cXHJcXG4ubGlzdF9faXRlbSArIC5saXN0X19pdGVtIHtcXHJcXG4gICAgQGFwcGx5IG10LTI7XFxyXFxufVwiLFwiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNlY3Rpb25cIjogXCJIaXN0b3J5X3NlY3Rpb25fXzFCaVlEXCIsXG5cdFwiaGVhZGVyXCI6IFwiSGlzdG9yeV9oZWFkZXJfXzFUcVNXXCIsXG5cdFwibGlzdFwiOiBcIkhpc3RvcnlfbGlzdF9fMVpWVVFcIixcblx0XCJsaXN0X19pdGVtXCI6IFwiSGlzdG9yeV9saXN0X19pdGVtX18yb2ExbVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy8gQ29udGV4dFxuaW1wb3J0IExvY2FsZUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxlXCI7XG5cbi8vIFN0eWxlXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IE1ldGEgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWV0YVwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9cIjtcbmltcG9ydCBJbnRyb2R1Y3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW50cm9kdWN0aW9uXCI7XG5pbXBvcnQgSW5zdGFsbCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnN0YWxsXCI7XG5pbXBvcnQgSGlzdG9yeSBmcm9tIFwiLi4vY29tcG9uZW50cy9IaXN0b3J5XCI7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMb2NhbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPVwiamEtanBcIj5cbiAgICAgICAgICAgIDxNZXRhIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm91dGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYgLz5cblxuICAgICAgICAgICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgICAgICAgICAgICA8SW50cm9kdWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnN0YWxsIC8+XG4gICAgICAgICAgICAgICAgICAgIDxIaXN0b3J5IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Mb2NhbGVDb250ZXh0LlByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9IaXN0b3J5Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0hpc3RvcnkubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL0hpc3RvcnkubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9