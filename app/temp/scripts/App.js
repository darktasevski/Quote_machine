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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const link = document.querySelector('#quote__wiki');

$('#quote__button').click(function getQuote() {
	$.getJSON("http://www.quotzzy.co/api/quote").done(update).fail(handleErr);
});
function update(response) {
	var modObj = JSON.parse(JSON.stringify(response)); // mutating JSON into an object 
	console.log(modObj);
	$('.quote__text').text(modObj.text);
	$('.quote__author').text(modObj.author.name);
	$('#quote__wiki').attr("href", modObj.author.wiki);
	$('html').css('background', randomColor);
	// $('.container').css('background', randomColor);
}

function handleErr(jqxhr, textStatus, err) {
	var err = 'Something is wrong, please try again.';
	console.log("Request Failed: " + textStatus + ", " + err);
	$('.quote__text').text(err);
}

function randomColor() {
	var green = Math.floor(Math.random() * 256);
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	var rgbArr = [red, green, blue];
	console.log(rgbArr);
	var currentColor = Math.round((parseInt(rgbArr[0]) * 299 + parseInt(rgbArr[1]) * 587 + parseInt(rgbArr[2]) * 114) / 1000);
	// dynamic changing the color of text based on background color
	if (currentColor > 125) {
		$('html').css('color', 'black');
		$('.quote__author').css('color', 'black');
		$('#quote__button').css('color', 'black');
	} else {
		$('html').css('color', 'white');
		$('.quote__author').css('color', 'white');
		$('#quote__button').css('color', 'white');
	}
	return 'rgb(' + red + ', ' + green + ', ' + blue + ')'; // spaces are important
}

/***/ })
/******/ ]);