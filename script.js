/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener("DOMContentLoaded", function () {
  __webpack_require__(2)();
  const Event = __webpack_require__(3).default;
  const Other = __webpack_require__(4).default;
  let variable = "Item";
  console.log(variable);
  Event.event(".hamburger", () => {
    document.querySelector(".header").classList.toggle("header-mobile-menu-open");
  }, "all");
  Event.event("#scrollToTop", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  Event.event("body", e => {}, "all");
});
(d => {
  const hearts = document.querySelectorAll('.heart');
  const iconSearch = document.querySelector('.icon-search');
  const searchForm = document.querySelector('.search-form');
  const overlay = document.querySelector('.overlay');
  const burgerShow = document.querySelector('.icon-burger');
  const burgerClose = document.querySelector('.icon-burger-close');
  const explore = document.querySelector('.explore');
  hearts.forEach(heart => heart.addEventListener('click', function () {
    heart.classList.toggle('heart-active');
  }));
  iconSearch.addEventListener('click', () => {
    searchForm.style.display = 'block';
    overlay.style.display = 'block';
  });
  overlay.addEventListener('click', () => {
    searchForm.style.display = 'none';
    overlay.style.display = 'none';
  });
  burgerShow.addEventListener('click', () => {
    explore.style.display = 'block';
  });
  burgerClose.addEventListener('click', () => {
    explore.style.display = 'none';
  });
})(document);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var observer = new IntersectionObserver(function (entries) {
  for (i in entries) {
    if (entries[i].isIntersecting === true) {
      if ((!entries[i].target.getAttribute("src") || entries[i].target.getAttribute("src") == "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnPjwvc3ZnPg== 100w") && entries[i].target.dataset.src) {
        entries[i].target.setAttribute("src", entries[i].target.dataset.src);
      }
      if ((!entries[i].target.getAttribute("srcset") || entries[i].target.getAttribute("srcset") == "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnPjwvc3ZnPg== 100w") && entries[i].target.dataset.srcset) {
        entries[i].target.setAttribute("srcset", entries[i].target.dataset.srcset);
      }
    }
  }
}, {
  threshold: [0]
});
let lazyLoad = () => {
  let mas = document.querySelectorAll('[data-src],[data-srcset]');
  for (var i = 0; i < mas.length; i++) {
    observer.observe(mas[i]);
  }
};
module.exports = lazyLoad;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Event {
  event(selector, callback) {
    let target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "one";
    let event = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "click";
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    if (event === "click") {
      if (target === "all") {
        this._onClickAll(selector, callback, options);
      }
      if (target === "one") {
        this._onClick(selector, callback, options);
      }
    } else {
      if (target === "all") {
        this._onEventAll(selector, event, callback, options);
      }
      if (target === "one") {
        this._onEvent(selector, event, callback, options);
      }
    }
  }
  _onEvent(arg, event2, func) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (document.querySelector(arg)) {
      document.querySelector(arg).addEventListener(event2, func, options);
    }
  }
  _onEventAll(arg, event, func) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (document.querySelector(arg)) {
      let mas = document.querySelectorAll(arg);
      for (let i = mas.length - 1; i >= 0; i--) {
        mas[i].addEventListener(event, func, options);
      }
    }
  }
  _onClick(arg, callback) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (document.querySelector(arg)) {
      if ('touchstart' in document.documentElement) {
        document.querySelector(arg).addEventListener('touchstart', callback, options);
      } else {
        document.querySelector(arg).addEventListener('click', callback, options);
      }
    }
  }
  _onClickAll(arg, callback) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (document.querySelectorAll(arg)) {
      let list = document.querySelectorAll(arg);
      if ('touchstart' in document.documentElement) {
        for (let i = list.length - 1; i >= 0; i--) {
          list[i].addEventListener('touchstart', callback, options);
        }
      } else {
        for (let i = list.length - 1; i >= 0; i--) {
          list[i].addEventListener('click', callback, options);
        }
      }
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new Event());

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Other {
  sheludeBlockSubmit() {
    if (window.location.pathname.indexOf('/shelude') !== -1) {
      let submit = document.querySelector('.find-submit');
      if (!submit) {
        return false;
      }
      submit.addEventListener("click", function () {
        let shelude = document.querySelector('.shelude');
        if (shelude) {
          shelude.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, true);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (new Other());

/***/ })
/******/ ]);