webpackHotUpdate_N_E("pages/index",{

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
        defaultMessage: "Update History"
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.version_name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list__item,
        children: locale.getMessage({
          id: "Component.Introducntion.Feature1",
          defaultMessage: "Introduction"
        })
      }, void 0, false, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5LnRzeCJdLCJuYW1lcyI6WyJIaXN0b3J5Q29tcG9uZW50IiwibG9jYWxlIiwidXNlTG9jYWxlIiwic3R5bGVzIiwic2VjdGlvbiIsImhlYWRlciIsImdldE1lc3NhZ2UiLCJpZCIsImRlZmF1bHRNZXNzYWdlIiwidmVyc2lvbl9uYW1lIiwibGlzdCIsImxpc3RfX2l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBRUE7O0FBRUEsSUFBTUEsZ0JBQTBCLEdBQUcsU0FBN0JBLGdCQUE2QixHQUFNO0FBQUE7O0FBQ3JDLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFFQSxzQkFDSTtBQUFTLGFBQVMsRUFBRUMsNEVBQU0sQ0FBQ0MsT0FBM0I7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBRUQsNEVBQU0sQ0FBQ0UsTUFBdEI7QUFBQSxnQkFDS0osTUFBTSxDQUFDSyxVQUFQLENBQWtCO0FBQ2ZDLFVBQUUsRUFBRSwwQkFEVztBQUVmQyxzQkFBYyxFQUFFO0FBRkQsT0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRSTtBQUFJLGVBQVMsRUFBRUwsNEVBQU0sQ0FBQ007QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBU0k7QUFBSSxlQUFTLEVBQUVOLDRFQUFNLENBQUNPLElBQXRCO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFFUCw0RUFBTSxDQUFDUSxVQUF0QjtBQUFBLGtCQUNLVixNQUFNLENBQUNLLFVBQVAsQ0FBa0I7QUFDZkMsWUFBRSxFQUFFLGtDQURXO0FBRWZDLHdCQUFjLEVBQUU7QUFGRCxTQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQkgsQ0F2QkQ7O0dBQU1SLGdCO1VBQ2FFLHNEOzs7S0FEYkYsZ0I7QUF5QlNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMxZGM0YTFhZDVlMjExYWQ2ZDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBVdGlsXHJcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gXCIuLi91dGlsL2xvY2FsZVwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvSGlzdG9yeS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBIaXN0b3J5Q29tcG9uZW50OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxvY2FsZSA9IHVzZUxvY2FsZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAge2xvY2FsZS5nZXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogXCJDb21wb25lbnQuSGlzdG9yeS5IZWFkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogXCJVcGRhdGUgSGlzdG9yeVwiLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMudmVyc2lvbl9uYW1lfT48L2gzPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9faXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvY2FsZS5nZXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiQ29tcG9uZW50LkludHJvZHVjbnRpb24uRmVhdHVyZTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiSW50cm9kdWN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5Q29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9