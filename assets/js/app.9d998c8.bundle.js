/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n__webpack_require__(/*! ./assets/styles/_app.scss */ \"./assets/styles/_app.scss\");\n\n__webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ \"../node_modules/owl.carousel/dist/assets/owl.carousel.css\");\n\n__webpack_require__(/*! owl.carousel */ \"../node_modules/owl.carousel/dist/owl.carousel.js\");\n\n$(document).ready(function () {\n  console.log('Ready!');\n\n  __webpack_require__(/*! ./assets/scripts/demo */ \"./assets/scripts/demo.js\");\n\n  $('.navMenu__account').on('click', function () {\n    $('.toggleMenu').slideToggle('fast');\n  });\n\n  $('.header-navMenu__mobileIcon').on('click', function (event) {\n    $('.header-navMenu__mobileIcon').toggleClass(\"active\");\n    $('.navMenu').toggleClass(\"active\");\n    $('.header-navMenu').toggleClass(\"header-navMenu--active\");\n\n    event.preventDefault();\n  });\n\n  var wasScroll = false;\n\n  $(window).scroll(function () {\n    if ($(window).scrollTop() > 100 && $(window).width() > 1100) {\n      $('.header').css({\n        backgroundColor: '#000'\n      });\n\n      $('.toggleMenu').addClass('toggleMenu--active');\n    } else {\n      $('.header').css({\n        backgroundColor: 'transparent'\n      });\n\n      $('.toggleMenu').removeClass('toggleMenu--active');\n    }\n\n    if ($(window).scrollTop() > 600 && !$('.header-navMenu__mobileIcon').hasClass('active')) {\n      $('.header-navMenu__mobileIcon').css('color', '#000');\n      wasScroll = true;\n    } else {\n      $('.header-navMenu__mobileIcon').css('color', '#fff');\n      wasScroll = false;\n    }\n\n    if ($(window).scrollTop() < 900) {\n      $('.header-scrollUp').hide().css('backgroundColor', 'transparent');\n    } else {\n      if ($(window).width() < 1090) {\n        $('.header-scrollUp').css('backgroundColor', 'rgb(219, 242, 254, 0)');\n      } else {\n        $('.header-scrollUp').css('backgroundColor', 'rgb(219, 242, 254, 0.2)');\n      }\n\n      $('.header-scrollUp').show();\n    }\n  });\n\n  if ($(window).width() > 1100) {\n    $('.header-scrollUp').on('click', function () {\n      $('body,html').animate({ scrollTop: 0 }, 800);\n    });\n  } else if ($(window).width() < 1100) {\n    $('.header-scrollUp svg').on('click', function () {\n      $('body,html').animate({ scrollTop: 0 }, 800);\n    });\n  }\n\n  $('.header-navMenu__mobileIcon').on('click', function () {\n    if ($('.header-navMenu__mobileIcon').hasClass('active')) {\n      $('.header-navMenu__mobileIcon').css('color', '#fff');\n    } else if (wasScroll) {\n      $('.header-navMenu__mobileIcon').css('color', '#000');\n    }\n  });\n\n  $('.owl-carousel').owlCarousel({\n    loop: true,\n    margin: 50,\n    nav: false,\n    dots: true,\n    responsive: {\n      0: {\n        items: 1\n      }\n    }\n  });\n}); /* src/app.js */\n\n// Styles\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./assets/scripts/demo.js":
/*!********************************!*\
  !*** ./assets/scripts/demo.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('Demo!');\n\n//# sourceURL=webpack:///./assets/scripts/demo.js?");

/***/ }),

/***/ "./assets/styles/_app.scss":
/*!*********************************!*\
  !*** ./assets/styles/_app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/styles/_app.scss?");

/***/ })

/******/ });