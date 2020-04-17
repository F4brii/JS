webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Layout */ "./src/components/Layout.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _src_components_dashboard_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/dashboard/Nav */ "./src/components/dashboard/Nav.js");
/* harmony import */ var _src_components_dashboard_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/dashboard/Footer */ "./src/components/dashboard/Footer.js");
var _this = undefined,
    _jsxFileName = "/home/fabricio/Escritorio/app/pages/profile.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //components


 //cookies

var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_3__["Cookies"]();

var settings = function settings() {
  var activo = cookies.get('activo');

  if (!activo) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, "Usuario Inactivo, vaya al login."), __jsx("button", {
      type: "button",
      onClick: function onClick() {
        Router.push('/');
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, "Login"));
  }

  return __jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1785573994" + " " + 'main',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_src_components_dashboard_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-1785573994",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1785573994" + " " + 'container',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: "jsx-1785573994",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Perfil"), __jsx("p", {
    className: "jsx-1785573994",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Usuario: ", cookies.get('username')), __jsx("p", {
    className: "jsx-1785573994",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Token: ", cookies.get('token'))), __jsx("br", {
    className: "jsx-1785573994",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }), __jsx(_src_components_dashboard_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1785573994",
    __self: _this
  }, "html,body,body>div:first-child,div#__next,div#__next>div,div#__next>div>div{height:100%;}*{box-sizing:border-box;}.main{width:100%;height:100%;background:linear-gradient(180deg,#C2C0C0,white);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhYnJpY2lvL0VzY3JpdG9yaW8vYXBwL3BhZ2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0MrQixBQVFpQyxBQUlVLEFBSVgsV0FDQyxDQVJoQixVQUlBLENBS3VELGlEQUN2RCIsImZpbGUiOiIvaG9tZS9mYWJyaWNpby9Fc2NyaXRvcmlvL2FwcC9wYWdlcy9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHsgQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbi8vY29tcG9uZW50c1xuXG5pbXBvcnQgTmF2IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2Rhc2hib2FyZC9OYXYnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9kYXNoYm9hcmQvRm9vdGVyJztcblxuLy9jb29raWVzXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSAoKSA9PiB7XG4gICAgbGV0IGFjdGl2byA9IGNvb2tpZXMuZ2V0KCdhY3Rpdm8nKVxuICAgIGlmICghYWN0aXZvKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoMT5Vc3VhcmlvIEluYWN0aXZvLCB2YXlhIGFsIGxvZ2luLjwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8aDE+UGVyZmlsPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHA+VXN1YXJpbzoge2Nvb2tpZXMuZ2V0KCd1c2VybmFtZScpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+VG9rZW46IHtjb29raWVzLmdldCgndG9rZW4nKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICBib2R5ID4gZGl2OmZpcnN0LWNoaWxkLFxuICAgICAgICAgICAgICAgIGRpdiNfX25leHQsXG4gICAgICAgICAgICAgICAgZGl2I19fbmV4dCA+IGRpdixcbiAgICAgICAgICAgICAgICBkaXYjX19uZXh0ID4gZGl2ID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICp7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW57XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNDMkMwQzAsIHdoaXRlKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXR0aW5nczsiXX0= */\n/*@ sourceURL=/home/fabricio/Escritorio/app/pages/profile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ })

})
//# sourceMappingURL=profile.js.cad2b7652ec5022d9025.hot-update.js.map