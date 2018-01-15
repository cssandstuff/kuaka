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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ({

/***/ 61:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Failed to find 'tachyons/src/_normalize'\n    in [ \n        /Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/css\n    ]\n    at /Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/node_modules/postcss-import/lib/resolve-id.js:61:11\n    at runLoaders (/Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at /Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/node_modules/postcss-loader/index.js:148:13\n    at process._tickCallback (internal/process/next_tick.js:103:7)");

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/tim.clulow/Documents/_git/kuaka/themes/kuaka/src/node_modules/jquery/src/jquery.js'");

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(61);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
var $ = __webpack_require__(62);

// And write your code
// $('body').append('<p>Jquery is working</p>');
//
// You can also "require" any script from its location in the node modules folder. Webpack often knows what to look for, but you can add a script directly like this:
// var javascriptthingy = require('name/folder/file.js');
function updateLangs() {
  var internalUploadcare;
  uploadcare.plugin(function (internal) {
    internalUploadcare = internal;
  });

  $('#languages a').off().on('click', function () {
    var locale = $(this).data('lang');
    console.log(locale);
    internalUploadcare.locale.rebuild({
      locale: locale
    });

    $('#uploader').html($('#uploader input:eq(0)'));
    uploadcare.initialize($('#uploader'));
  });
}
$(document).ready(function () {
  updateLangs();
  $('#navMain li').stop().click(function () {
    $('#navMain li').removeClass('selected');
    $(this).addClass('selected');
  });

  $('#pageBg .bg').css('background', 'url(' + $('#pageBg .bg').attr('data-src') + ') no-repeat top center fixed');
  $('#pageBg .bg').css('background-size', 'cover');
  $('#pageBg .bg').removeClass('hidden');
});

$("#contactform").submit(function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  console.log(formData);
  $.ajax({
    url: 'https://formspree.io/info@kuakatranslations.co.nz',
    type: 'POST',
    data: formData,
    dataType: "json",
    success: function success(data) {
      console.log(data);
    },
    cache: false,
    contentType: false,
    processData: false
  });
});

// Nifty stuff to load pages asynchronously:
// https://albertarmea.com/post/async-load-hugo/
var changeBg = '';
var transitioning = false;
function loadPage(newUrl) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState !== XMLHttpRequest.DONE) return;

    var newDocument = httpRequest.responseXML;
    console.log(newDocument.getElementById("mainContent"));
    if (newDocument === null) return;

    var newContent = httpRequest.responseXML.getElementById("mainContent");
    var newNav = httpRequest.responseXML.getElementById("navMain");
    var newLanguage = httpRequest.responseXML.getElementById("languages");
    var newPageBg = httpRequest.responseXML.getElementById("pageBg");
    var newForm = httpRequest.responseXML.getElementById("form");

    if (newContent === null) return;

    document.title = newDocument.title;

    var contentElement = document.getElementById("mainContent");
    var navElement = document.getElementById("navMain");
    var languagesElement = document.getElementById("languages");
    var pageBg = document.getElementById("pageBg");
    var contentForm = document.getElementById("formHolder");
    var downloadingImage = new Image();

    contentElement.replaceWith(newContent);
    if ($('.main-content').hasClass('onpageform')) {
      //remove form
      $('#formHolder').empty();
    } else {
      $('#formHolder').empty();
      if (newForm != null) {
        $('#formHolder').append(newForm);
      }
    }

    $("#contactform").submit(function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      console.log(formData);
      $.ajax({
        url: 'https://formspree.io/tim@cssandstuff.com',
        type: 'POST',
        data: formData,
        dataType: "json",
        success: function success(data) {
          console.log(data);
        },
        cache: false,
        contentType: false,
        processData: false
      });
    });

    if ($(languagesElement).find('a:nth-child(1)').hasClass('selected') != $(newLanguage).find('a:nth-child(1)').hasClass('selected')) {
      navElement.replaceWith(newNav);
      $('#navMain li').stop().click(function () {
        $('#navMain li').removeClass('selected');
        $(this).addClass('selected');
      });
    }

    languagesElement.replaceWith(newLanguage);
    updateLangs();

    clearTimeout(changeBg);
    downloadingImage.onload = function () {
      //image.src = this.src;   
      changeBg = setTimeout(function () {
        if (!transitioning) {

          //console.log('yip');
          if ($('#pageBg .bgnew').hasClass('hidden')) {
            $('#pageBg .bgnew').css('background', 'url(' + downloadingImage.src + ') no-repeat top center fixed');
            $('#pageBg .bgnew').css('background-size', 'cover');
            $('#pageBg .bgnew').removeClass('hidden');
            $('#pageBg .bg').addClass('hidden');
          } else {
            $('#pageBg .bg').css('background', 'url(' + downloadingImage.src + ') no-repeat top center fixed');
            $('#pageBg .bg').css('background-size', 'cover');
            $('#pageBg .bg').removeClass('hidden');
            $('#pageBg .bgnew').addClass('hidden');
          }

          setTimeout(function () {
            transitioning = false;
          }, 1800);
        }
      }, 0);
    };
    downloadingImage.src = $(newPageBg).find('.bg').attr('data-src');
    //alert(downloadingImage.src);
  };

  httpRequest.responseType = "document";
  httpRequest.open("GET", newUrl);
  httpRequest.send();
};

window.onload = function () {

  document.querySelector("body").addEventListener("click", function (event) {
    if (event.target.tagName !== "A") return;

    if (history === null) return;
    var newUrl = event.target.href;
    var domain = window.location.origin;
    if (typeof domain !== "string" || newUrl.search(domain) !== 0) {
      event.preventDefault();
      window.open(newUrl, "_blank");
    } else {
      event.preventDefault();
      loadPage(newUrl);
      history.pushState(null, "", newUrl);
    }
  });
};

window.onpopstate = function (event) {
  loadPage(window.location);
};

/***/ })

/******/ });
