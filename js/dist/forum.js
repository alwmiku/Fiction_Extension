/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);

flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('flarum/fictionextension', function () {
  console.log('[flarum/fictionextension] Hello, forum and admin!');
});

/***/ }),

/***/ "./src/forum/BooksHome.js":
/*!********************************!*\
  !*** ./src/forum/BooksHome.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BooksPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BooksPage */ "./src/forum/components/BooksPage.js");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Routes)().add('flarum.Fiction_Extension.forntPages', '/Fiction/homepage', _components_BooksPage__WEBPACK_IMPORTED_MODULE_1__["default"])
//下面这句话用的是文档中的结构。根本不行，结果就是不可以。去掉反而好使了。
// .add('flarum.Fiction_Extension.forntPages', '/Fiction/homepage', <BooksPage />)
.helper('FictionHomePages', function () {
  flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().route('flarum.Fiction_Extension.forntPages');
})]);

/***/ }),

/***/ "./src/forum/components/BooksPage.js":
/*!*******************************************!*\
  !*** ./src/forum/components/BooksPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BooksPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Page */ "flarum/common/components/Page");
/* harmony import */ var flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1__);


var BooksPage = /*#__PURE__*/function (_Page) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BooksPage, _Page);
  function BooksPage() {
    return _Page.apply(this, arguments) || this;
  }
  var _proto = BooksPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);
  };
  _proto.oncreate = function oncreate(vnode) {
    _Page.prototype.oncreate.call(this, vnode);
  };
  _proto.onupdate = function onupdate(vnode) {
    _Page.prototype.onupdate.call(this, vnode);
  };
  _proto.view = function view() {
    return m("div", {
      className: "BooksPage"
    }, "BooksPage\u5DF2\u7ECF\u521D\u59CB\u5316\u3002 \u6D4B\u8BD5ssh\u7684\u529F\u80FD\u662F\u5426\u6B63\u5E38\u3002");
  };
  return BooksPage;
}((flarum_common_components_Page__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _BooksHome__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BooksHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooksHome */ "./src/forum/BooksHome.js");
/* harmony import */ var flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/HeaderPrimary */ "flarum/common/components/HeaderPrimary");
/* harmony import */ var flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__);





flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('flarum/fictionextension', function () {
  // console.log('[flarum/fictionextension] Hello, forum!');
  var bookUrl = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default().route('flarum.Fiction_Extension.forntPages');
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_4__.extend)((flarum_common_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_2___default().prototype), 'items', function (items) {
    items.add('fictionextension', m((flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: bookUrl
    }, "\u4E66\u7AD9"));
  });
});

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/components/HeaderPrimary":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['common/components/HeaderPrimary']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/HeaderPrimary'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/components/Page":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Page']" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Page'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_forum__WEBPACK_IMPORTED_MODULE_1__.extend)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map