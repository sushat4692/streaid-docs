webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
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


var _jsxFileName = "C:\\Users\\sush\\Documents\\Virtual\\twitch-support-tool-docs\\pages\\index.tsx",
    _this = undefined;

 // Context

 // Style

// Component







var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_locale__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: "en-us",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Introduction__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Install__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_History__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztDQUdBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUN6QixzQkFDSSxxRUFBQyx1REFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFDLE9BQTlCO0FBQUEsNEJBQ0kscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUkscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBSUkscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0kscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBTUkscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KLGVBT0kscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBV0gsQ0FaRDs7S0FBTUEsSTtBQWNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZWRmMGU1NTkwMDMyYTRkNmIyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBDb250ZXh0XG5pbXBvcnQgTG9jYWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbGVcIjtcblxuLy8gU3R5bGVcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuLy8gQ29tcG9uZW50XG5pbXBvcnQgTWV0YSBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXRhXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IEhlcm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVyb1wiO1xuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRyb2R1Y3Rpb25cIjtcbmltcG9ydCBJbnN0YWxsIGZyb20gXCIuLi9jb21wb25lbnRzL0luc3RhbGxcIjtcbmltcG9ydCBIaXN0b3J5IGZyb20gXCIuLi9jb21wb25lbnRzL0hpc3RvcnlcIjtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExvY2FsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9XCJlbi11c1wiPlxuICAgICAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgICAgIDxOYXYgLz5cblxuICAgICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICAgIDxJbnRyb2R1Y3Rpb24gLz5cbiAgICAgICAgICAgIDxJbnN0YWxsIC8+XG4gICAgICAgICAgICA8SGlzdG9yeSAvPlxuICAgICAgICA8L0xvY2FsZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9