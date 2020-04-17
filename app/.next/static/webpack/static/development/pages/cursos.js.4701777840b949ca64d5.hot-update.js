webpackHotUpdate("static/development/pages/cursos.js",{

/***/ "./src/components/dashboard/Settings.js":
/*!**********************************************!*\
  !*** ./src/components/dashboard/Settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");





var _jsxFileName = "/home/fabricio/Escritorio/app/src/components/dashboard/Settings.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // set up cookies

var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_8__["Cookies"]();

var _default = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("nav", {
        id: "menu",
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }
      }, __jsx("ul", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }
      }, __jsx("button", {
        type: "button",
        className: "jsx-691774604" + " " + 'btm',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 29
        }
      }), __jsx("ul", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }
      }, __jsx("li", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 33
        }
      }, __jsx("button", {
        type: "button",
        disabled: true,
        className: "jsx-691774604" + " " + 'rectangulo',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 37
        }
      }, "Settings")), __jsx("li", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 33
        }
      }, __jsx("button", {
        type: "button",
        onClick: function onClick() {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/profile');
        },
        className: "jsx-691774604" + " " + 'rectangulo',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 37
        }
      }, "Profile")), __jsx("li", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 33
        }
      }, __jsx("button", {
        type: "button",
        onClick: function onClick() {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/settings');
        },
        className: "jsx-691774604" + " " + 'rectangulo',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 37
        }
      }, "Settings")), __jsx("li", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 33
        }
      }, __jsx("button", {
        type: "button",
        disabled: true,
        className: "jsx-691774604" + " " + 'rectangulo',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 37
        }
      })), __jsx("li", {
        className: "jsx-691774604",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 33
        }
      }, __jsx("button", {
        type: "button",
        onClick: function onClick() {
          cookies.set('token', '');
          cookies.set('activo', false);
          cookies.set('username', '');
          cookies.set('password', '');
          return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
        },
        className: "jsx-691774604" + " " + 'rectangulo',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 37
        }
      }, "Logout")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "691774604",
        __self: this
      }, "#menu.jsx-691774604{font-size:16px;}#menu.jsx-691774604 .btm.jsx-691774604{width:2.5em;height:2.5em;border-radius:150px;border:1px solid;}#menu.jsx-691774604 .rectangulo.jsx-691774604{width:100%;background:transparent;border:none;}.btm.jsx-691774604:hover{opacity:0.50;-moz-opacity:.50;-webkit-filter:alpha (opacity=50);filter:alpha (opacity=50);}#menu.jsx-691774604 ul.jsx-691774604{list-style:none;margin:0;padding:0;}#menu.jsx-691774604 ul.jsx-691774604 .btm.jsx-691774604{display:block;-webkit-text-decoration:none;text-decoration:none;font-weight:400;padding:10px;text-transform:uppercase;}#menu.jsx-691774604 ul.jsx-691774604 li.jsx-691774604{position:relative;float:left;margin:0;padding:0;}#menu.jsx-691774604 ul.jsx-691774604 ul.jsx-691774604{display:none;position:absolute;top:100%;left:0;padding:0;border-radiux:5px;}#menu.jsx-691774604 ul.jsx-691774604 ul.jsx-691774604 li.jsx-691774604{float:none;width:200px;margin-left:-150px;background:white;border:0.1px solid gray;}#menu.jsx-691774604 ul.jsx-691774604 ul.jsx-691774604 button.jsx-691774604{line-height:120%;padding:10px 15px;}#menu.jsx-691774604 ul.jsx-691774604 li.jsx-691774604:hover>ul.jsx-691774604{display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYnJpY2lvL0VzY3JpdG9yaW8vYXBwL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9TZXR0aW5ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjRCLEFBSWdDLEFBSUgsQUFPRCxBQU1FLEFBTUUsQUFNRixBQVFJLEFBT0wsQUFTRixBQVFNLEFBS0gsV0F0RFUsQUEwQ1osQ0FqREUsQ0FhSSxBQTJCQSxDQWZHLEFBcUN4QixDQWxFQSxDQXVCWSxDQXNDUyxDQXhCUCxLQWlCUyxFQWpEQSxBQW1CVixJQWNELENBcEJpQixDQTJCakIsR0FqQ0ksQ0FhaEIsQUFxQ0EsR0F2QmEsRUFPSCxFQVNXLEdBakRBLENBT3JCLENBa0NhLENBUGIsU0FRc0IsRUFRTSxHQWpENUIsRUF1Qm1CLFdBbUJuQixLQWxCZ0IsR0EwQmhCLE9BdENBLEdBYTRCLHlCQUM1QiIsImZpbGUiOiIvaG9tZS9mYWJyaWNpby9Fc2NyaXRvcmlvL2FwcC9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvU2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbi8vIHNldCB1cCBjb29raWVzXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPG5hdiBpZD0nbWVudSc+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG0nPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3JlY3Rhbmd1bG8nIGRpc2FibGVkPlNldHRpbmdzPC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J3JlY3Rhbmd1bG8nIG9uQ2xpY2s9eygpID0+IHsgUm91dGVyLnB1c2goJy9wcm9maWxlJykgfX0+UHJvZmlsZTwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdyZWN0YW5ndWxvJyBvbkNsaWNrPXsoKSA9PiB7IFJvdXRlci5wdXNoKCcvc2V0dGluZ3MnKSB9fT5TZXR0aW5nczwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdyZWN0YW5ndWxvJyBkaXNhYmxlZD48L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0ncmVjdGFuZ3Vsbycgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llcy5zZXQoJ3Rva2VuJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llcy5zZXQoJ2FjdGl2bycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZXMuc2V0KCd1c2VybmFtZScsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZXMuc2V0KCdwYXNzd29yZCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSb3V0ZXIucHVzaCgnLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PkxvZ291dDwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAjbWVudXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICNtZW51IC5idG17XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIuNWVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI21lbnUgLnJlY3Rhbmd1bG97XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRtOmhvdmVye1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTA7XG4gICAgICAgICAgICAgICAgLW1vei1vcGFjaXR5OiAuNTA7XG4gICAgICAgICAgICAgICAgZmlsdGVyOmFscGhhIChvcGFjaXR5PTUwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI21lbnUgdWx7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgI21lbnUgdWwgLmJ0bXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbWVudSB1bCBsaSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNtZW51IHVsIHVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOjEwMCU7XG4gICAgICAgICAgICAgICAgbGVmdDowO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXV4OiA1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNtZW51IHVsIHVsIGxpIHtcbiAgICAgICAgICAgICAgICBmbG9hdDpub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLjFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbWVudSB1bCB1bCBidXR0b24ge1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEyMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzoxMHB4IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNtZW51IHVsIGxpOmhvdmVyID4gdWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn0iXX0= */\n/*@ sourceURL=/home/fabricio/Escritorio/app/src/components/dashboard/Settings.js */"));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=cursos.js.4701777840b949ca64d5.hot-update.js.map