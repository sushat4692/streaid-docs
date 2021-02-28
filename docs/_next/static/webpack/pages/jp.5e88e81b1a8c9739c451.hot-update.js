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
        defaultMessage: "Update History"
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: _styles_components_History_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.version_name,
      children: "v0.0.1"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaXN0b3J5LnRzeCJdLCJuYW1lcyI6WyJIaXN0b3J5Q29tcG9uZW50IiwibG9jYWxlIiwidXNlTG9jYWxlIiwic3R5bGVzIiwic2VjdGlvbiIsImhlYWRlciIsImdldE1lc3NhZ2UiLCJpZCIsImRlZmF1bHRNZXNzYWdlIiwidmVyc2lvbl9uYW1lIiwibGlzdCIsImxpc3RfX2l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBRUE7O0FBRUEsSUFBTUEsZ0JBQTBCLEdBQUcsU0FBN0JBLGdCQUE2QixHQUFNO0FBQUE7O0FBQ3JDLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFFQSxzQkFDSTtBQUFTLGFBQVMsRUFBRUMsNEVBQU0sQ0FBQ0MsT0FBM0I7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBRUQsNEVBQU0sQ0FBQ0UsTUFBdEI7QUFBQSxnQkFDS0osTUFBTSxDQUFDSyxVQUFQLENBQWtCO0FBQ2ZDLFVBQUUsRUFBRSwwQkFEVztBQUVmQyxzQkFBYyxFQUFFO0FBRkQsT0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRSTtBQUFJLGVBQVMsRUFBRUwsNEVBQU0sQ0FBQ00sWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQVNJO0FBQUksZUFBUyxFQUFFTiw0RUFBTSxDQUFDTyxJQUF0QjtBQUFBLDZCQUNJO0FBQUksaUJBQVMsRUFBRVAsNEVBQU0sQ0FBQ1EsVUFBdEI7QUFBQSxrQkFDS1YsTUFBTSxDQUFDSyxVQUFQLENBQWtCO0FBQ2ZDLFlBQUUsRUFBRSxrQ0FEVztBQUVmQyx3QkFBYyxFQUFFO0FBRkQsU0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0JILENBdkJEOztHQUFNUixnQjtVQUNhRSxzRDs7O0tBRGJGLGdCO0FBeUJTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9qcC41ZTg4ZTgxYjFhOGM5NzM5YzQ1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gVXRpbFxyXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tIFwiLi4vdXRpbC9sb2NhbGVcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0hpc3RvcnkubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgSGlzdG9yeUNvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIHtsb2NhbGUuZ2V0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiQ29tcG9uZW50Lkhpc3RvcnkuSGVhZGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiVXBkYXRlIEhpc3RvcnlcIixcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnZlcnNpb25fbmFtZX0+djAuMC4xPC9oMz5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtsb2NhbGUuZ2V0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIkNvbXBvbmVudC5JbnRyb2R1Y250aW9uLkZlYXR1cmUxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcIkludHJvZHVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yeUNvbXBvbmVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==