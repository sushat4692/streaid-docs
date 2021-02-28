webpackHotUpdate_N_E("pages/jp",{

/***/ "./components/Install.tsx":
/*!********************************!*\
  !*** ./components/Install.tsx ***!
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
/* harmony import */ var _styles_components_Install_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Install.module.css */ "./styles/components/Install.module.css");
/* harmony import */ var _styles_components_Install_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Install_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\sush\\Documents\\Virtual\\twitch-support-tool-docs\\components\\Install.tsx",
    _this = undefined,
    _s = $RefreshSig$();

 // Util




var InstallComponent = function InstallComponent() {
  _s();

  var locale = Object(_util_locale__WEBPACK_IMPORTED_MODULE_2__["useLocale"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: _styles_components_Install_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _styles_components_Install_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      children: locale.getMessage({
        id: "Component.Install.Header",
        defaultMessage: "Installation"
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_components_Install_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.lead,
      children: locale.getMessage({
        id: "Component.Install.Description",
        defaultMessage: "You can download latest version from the following link."
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "https://github.com/sushat4692/twitch-support-tool/releases/latest",
      target: "_blank",
      rel: "noreferer",
      className: _styles_components_Install_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      children: locale.getMessage({
        id: "Component.Install.Button",
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

_s(InstallComponent, "ubkSS9Gz1bw7UV2c73rm/bCUdh8=", false, function () {
  return [_util_locale__WEBPACK_IMPORTED_MODULE_2__["useLocale"]];
});

_c = InstallComponent;
/* harmony default export */ __webpack_exports__["default"] = (InstallComponent);

var _c;

$RefreshReg$(_c, "InstallComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnN0YWxsLnRzeCJdLCJuYW1lcyI6WyJJbnN0YWxsQ29tcG9uZW50IiwibG9jYWxlIiwidXNlTG9jYWxlIiwic3R5bGVzIiwic2VjdGlvbiIsImhlYWRlciIsImdldE1lc3NhZ2UiLCJpZCIsImRlZmF1bHRNZXNzYWdlIiwibGVhZCIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxnQkFBMEIsR0FBRyxTQUE3QkEsZ0JBQTZCLEdBQU07QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUVBLHNCQUNJO0FBQVMsYUFBUyxFQUFFQyw0RUFBTSxDQUFDQyxPQUEzQjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFFRCw0RUFBTSxDQUFDRSxNQUF0QjtBQUFBLGdCQUNLSixNQUFNLENBQUNLLFVBQVAsQ0FBa0I7QUFDZkMsVUFBRSxFQUFFLDBCQURXO0FBRWZDLHNCQUFjLEVBQUU7QUFGRCxPQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJO0FBQUcsZUFBUyxFQUFFTCw0RUFBTSxDQUFDTSxJQUFyQjtBQUFBLGdCQUNLUixNQUFNLENBQUNLLFVBQVAsQ0FBa0I7QUFDZkMsVUFBRSxFQUFFLCtCQURXO0FBRWZDLHNCQUFjLEVBQ1Y7QUFIVyxPQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQWdCSTtBQUNJLFVBQUksRUFBQyxtRUFEVDtBQUVJLFlBQU0sRUFBQyxRQUZYO0FBR0ksU0FBRyxFQUFDLFdBSFI7QUFJSSxlQUFTLEVBQUVMLDRFQUFNLENBQUNPLE1BSnRCO0FBQUEsZ0JBTUtULE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQjtBQUNmQyxVQUFFLEVBQUUsMEJBRFc7QUFFZkMsc0JBQWMsRUFBRTtBQUZELE9BQWxCO0FBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQThCSCxDQWpDRDs7R0FBTVIsZ0I7VUFDYUUsc0Q7OztLQURiRixnQjtBQW1DU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvanAuYjMzYmVjZmFhNDlhYTZjYjkwZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFV0aWxcclxuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcIi4uL3V0aWwvbG9jYWxlXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9JbnN0YWxsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEluc3RhbGxDb21wb25lbnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbG9jYWxlID0gdXNlTG9jYWxlKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICB7bG9jYWxlLmdldE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIkNvbXBvbmVudC5JbnN0YWxsLkhlYWRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlOiBcIkluc3RhbGxhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5sZWFkfT5cclxuICAgICAgICAgICAgICAgIHtsb2NhbGUuZ2V0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiQ29tcG9uZW50Lkluc3RhbGwuRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3UgY2FuIGRvd25sb2FkIGxhdGVzdCB2ZXJzaW9uIGZyb20gdGhlIGZvbGxvd2luZyBsaW5rLlwiLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N1c2hhdDQ2OTIvdHdpdGNoLXN1cHBvcnQtdG9vbC9yZWxlYXNlcy9sYXRlc3RcIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsb2NhbGUuZ2V0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiQ29tcG9uZW50Lkluc3RhbGwuQnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6IFwiRG93bmxvYWQgbGF0ZXN0IFZlcnNpb25cIixcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc3RhbGxDb21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=