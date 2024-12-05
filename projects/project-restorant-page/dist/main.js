/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**********************************************************!*\
  !*** ./assets/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bruce-tang-vRMyLOFkrRc-unsplash.jpg": "./assets/bruce-tang-vRMyLOFkrRc-unsplash.jpg",
	"./clark-douglas-LmHK7VeCwZ4-unsplash.jpg": "./assets/clark-douglas-LmHK7VeCwZ4-unsplash.jpg",
	"./eiliv-aceron-IA1J0X-KX3Q-unsplash.jpg": "./assets/eiliv-aceron-IA1J0X-KX3Q-unsplash.jpg",
	"./emiliano-vittoriosi-OFismyezPnY-unsplash.jpg": "./assets/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg",
	"./jason-leung-AUAuEgUxg5Q-unsplash.jpg": "./assets/jason-leung-AUAuEgUxg5Q-unsplash.jpg",
	"./jermaine-ee-HVjuen9ik-U-unsplash.jpg": "./assets/jermaine-ee-HVjuen9ik-U-unsplash.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  color: rgb(227, 212, 212);
  
  background-color: #dbb3b1;

  min-height: 100vh;
  width: 100vw;
  margin: 0;
  border: 1px solid #000;

  display: grid;
  grid-template-rows: 100px 3fr 110px;
  grid-template-columns: 100%;
}

header {
  width: 100%;
  padding: 10px;
}

nav {
  /* width: 100%; */
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav > button, footer button {
  background-color: #2c1a1d;
  color: rgb(227, 212, 212);

  border: none;
  border-radius: 15%;
  height: 50px;
  padding: 0.5rem;

  transition-duration: 0.4s;

}

nav > button:hover, footer button:hover {
  background-color: #4f3237;
}

nav > button:active, footer button:active {
  transform: translateY(5px);
}

#content {
  background-color: #2c1a1d;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
}


#list-menu-img {
  /* width: 100%; */
  
  background-color: #dbb3b123;
  margin-top: 10px;
  padding: 10px;
  /* border: .5px solid #b89a9aa3; */
  justify-self: end;

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  
  gap: 5px;
} 

.menu-img {
  flex: 0 0 auto;

  /* border: 1px solid #9b787896; */
  border-radius: 20px;
  min-width: 150px;
  height: 100px;
  background-color: rgb(67, 109, 109);
}

.menu-img > img {
  /* border: 3px solid #000; */
  border-radius: 20px;
  display: block;
  width: 100%;
  height: 100%;
}

/* MENU, ABOUT*/

ul {
  width: 100%;
  list-style-type: none;
  text-align: justify;
  padding: 10px;

  display: flex;
  gap: 10px;
}

#menu-info {
  color: rgb(109, 81, 81);
  font-size: 0.8rem;

}

/* ----------------------------------------- */

/* List img Sources */

/* #about-content2 style also on #menu-name line */
#about-content2 {
  font-size: 1.2rem;
}

#img-sources {
  margin-top: 0;
  flex-direction: column;
  align-items: center;
}

#img-sources li {
  width: 50%;
  list-style-type: circle;
  border: none;
}

@media screen and (max-width: 500px) {
  ul {
    flex-wrap: wrap;
  }

}

li {
  border: 2px solid #741212;
  border-radius: 10px;
  padding: 5px;
}

.menu-name, #about-content2 {
  font-weight: 700;
  color: #9e4851;
}

.link-sources {
  text-decoration: none;
  /* display: block; */
}

#img-link {
  color: white;
}

/* -------------------------------- */

/* FOOTER */
footer {
  background-color: #c89fa3;

  border: 1px solid #000;
  border-radius: 15px;
  padding: 10px;
  margin: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

#author {
  font-size: 24px;
  color: #000
  /* border: 1px solid #000; */
}

#contact-link {
  width: 100%;
  position: absolute;
  background-color: #2c1a1d;

  padding: 10px;

  border-radius: 10px;
}

.close {
  margin-top: 10px;
  text-align: center;
  border: 1px solid #8d7171;
}

/* ---------------------------------------- */

/* NOTE */
  /* footer button on #nav button line */`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,sEAAsE;EACtE,eAAe;EACf,yBAAyB;;EAEzB,yBAAyB;;EAEzB,iBAAiB;EACjB,YAAY;EACZ,SAAS;EACT,sBAAsB;;EAEtB,aAAa;EACb,mCAAmC;EACnC,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,YAAY;;EAEZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;;EAEzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;;EAEf,yBAAyB;;AAE3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;;EAElB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;;AAGA;EACE,iBAAiB;;EAEjB,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,iBAAiB;;EAEjB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;;EAEhB,QAAQ;AACV;;AAEA;EACE,cAAc;;EAEd,iCAAiC;EACjC,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,mCAAmC;AACrC;;AAEA;EACE,4BAA4B;EAC5B,mBAAmB;EACnB,cAAc;EACd,WAAW;EACX,YAAY;AACd;;AAEA,eAAe;;AAEf;EACE,WAAW;EACX,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;;EAEb,aAAa;EACb,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;;AAEnB;;AAEA,8CAA8C;;AAE9C,qBAAqB;;AAErB,kDAAkD;AAClD;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE;IACE,eAAe;EACjB;;AAEF;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA,qCAAqC;;AAErC,WAAW;AACX;EACE,yBAAyB;;EAEzB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,YAAY;;EAEZ,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,yBAAyB;;EAEzB,aAAa;;EAEb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA,6CAA6C;;AAE7C,SAAS;EACP,sCAAsC","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n  font-size: 16px;\r\n  color: rgb(227, 212, 212);\r\n  \r\n  background-color: #dbb3b1;\r\n\r\n  min-height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  border: 1px solid #000;\r\n\r\n  display: grid;\r\n  grid-template-rows: 100px 3fr 110px;\r\n  grid-template-columns: 100%;\r\n}\r\n\r\nheader {\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\n\r\nnav {\r\n  /* width: 100%; */\r\n  height: 100%;\r\n\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nnav > button, footer button {\r\n  background-color: #2c1a1d;\r\n  color: rgb(227, 212, 212);\r\n\r\n  border: none;\r\n  border-radius: 15%;\r\n  height: 50px;\r\n  padding: 0.5rem;\r\n\r\n  transition-duration: 0.4s;\r\n\r\n}\r\n\r\nnav > button:hover, footer button:hover {\r\n  background-color: #4f3237;\r\n}\r\n\r\nnav > button:active, footer button:active {\r\n  transform: translateY(5px);\r\n}\r\n\r\n#content {\r\n  background-color: #2c1a1d;\r\n  text-align: center;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n#list-menu-img {\r\n  /* width: 100%; */\r\n  \r\n  background-color: #dbb3b123;\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  /* border: .5px solid #b89a9aa3; */\r\n  justify-self: end;\r\n\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  overflow-x: auto;\r\n  \r\n  gap: 5px;\r\n} \r\n\r\n.menu-img {\r\n  flex: 0 0 auto;\r\n\r\n  /* border: 1px solid #9b787896; */\r\n  border-radius: 20px;\r\n  min-width: 150px;\r\n  height: 100px;\r\n  background-color: rgb(67, 109, 109);\r\n}\r\n\r\n.menu-img > img {\r\n  /* border: 3px solid #000; */\r\n  border-radius: 20px;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/* MENU, ABOUT*/\r\n\r\nul {\r\n  width: 100%;\r\n  list-style-type: none;\r\n  text-align: justify;\r\n  padding: 10px;\r\n\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n#menu-info {\r\n  color: rgb(109, 81, 81);\r\n  font-size: 0.8rem;\r\n\r\n}\r\n\r\n/* ----------------------------------------- */\r\n\r\n/* List img Sources */\r\n\r\n/* #about-content2 style also on #menu-name line */\r\n#about-content2 {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n#img-sources {\r\n  margin-top: 0;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#img-sources li {\r\n  width: 50%;\r\n  list-style-type: circle;\r\n  border: none;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  ul {\r\n    flex-wrap: wrap;\r\n  }\r\n\r\n}\r\n\r\nli {\r\n  border: 2px solid #741212;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n}\r\n\r\n.menu-name, #about-content2 {\r\n  font-weight: 700;\r\n  color: #9e4851;\r\n}\r\n\r\n.link-sources {\r\n  text-decoration: none;\r\n  /* display: block; */\r\n}\r\n\r\n#img-link {\r\n  color: white;\r\n}\r\n\r\n/* -------------------------------- */\r\n\r\n/* FOOTER */\r\nfooter {\r\n  background-color: #c89fa3;\r\n\r\n  border: 1px solid #000;\r\n  border-radius: 15px;\r\n  padding: 10px;\r\n  margin: 10px;\r\n\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n#author {\r\n  font-size: 24px;\r\n  color: #000\r\n  /* border: 1px solid #000; */\r\n}\r\n\r\n#contact-link {\r\n  width: 100%;\r\n  position: absolute;\r\n  background-color: #2c1a1d;\r\n\r\n  padding: 10px;\r\n\r\n  border-radius: 10px;\r\n}\r\n\r\n.close {\r\n  margin-top: 10px;\r\n  text-align: center;\r\n  border: 1px solid #8d7171;\r\n}\r\n\r\n/* ---------------------------------------- */\r\n\r\n/* NOTE */\r\n  /* footer button on #nav button line */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateAboutContent: () => (/* binding */ activateAboutContent)
/* harmony export */ });
document.createElement('h1').innerText = 'About'; 

const about = document.createElement('div');

const aboutContent = document.createElement('p');

const aboutContent2 = document.createElement('div');
aboutContent2.id = 'about-content2'

aboutContent2.innerText = 'The images i used in this task are: '


const imagesArray = [
  {
    artist: '@eejermaine',
    profile: 'https://unsplash.com/@eejermaine',
    imgTitle: 'brown-chips-on-white-ceramic-bowl',
    linkImg: 'https://unsplash.com/photos/brown-chips-on-white-ceramic-bowl-HVjuen9ik-U'
  },

  {
    artist: '@clark_douglas',
    profile: 'https://unsplash.com/@clark_douglas',
    imgTitle: 'a-person-holding-a-tray-of-doughnuts-on-a-sidewall',
    linkImg: 'https://unsplash.com/photos/a-person-holding-a-tray-of-doughnuts-on-a-sidewalk-LmHK7VeCwZ4'
  },

  {
    artist: '@brucetml',
    profile: 'https://unsplash.com/@brucetml',
    imgTitle: 'cooked-food',
    linkImg: 'https://unsplash.com/photos/cooked-food-vRMyLOFkrRc'
  },

  {
    artist: '@ninjason',
    profile: 'https://unsplash.com/@ninjason',
    imgTitle: 'meta-balls-with-noodles-served-on-white-ceramic-bowl',
    linkImg: 'https://unsplash.com/photos/meta-balls-with-noodles-served-on-white-ceramic-bowl-AUAuEgUxg5Q'
  },

  {
    artist: '@emilianovittoriosi',
    profile: 'https://unsplash.com/@emilianovittoriosi',
    imgTitle: 'meat-balls-on-oval-white-plate',
    linkImg: 'https://unsplash.com/photos/meat-balls-on-oval-white-plate-OFismyezPnY'
  },

  {
    artist: '@shootdelicious',
    profile: 'https://unsplash.com/@shootdelicious',
    imgTitle: 'cooked-pasta-dish-on-round-brown-ceramic-plate',
    linkImg: 'https://unsplash.com/photos/cooked-pasta-dish-on-round-brown-ceramic-plate-IA1J0X-KX3Q'
  }
]

aboutContent.id = 'about-content';
aboutContent.innerHTML = `
  <div>
  This is a project task that i did in learning Web Development through The Odin Project curricuclum.
  </div>
`;

// List Image Element
const imgSources = document.createElement('ul');
imgSources.id = 'img-sources'

imagesArray.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `
      <a href='${item.linkImg}' class='link-sources' id='img-link'>${item.imgTitle.split('-').join(' ')}</a> by 
      <a href='${item.profile}' class='link-sources'>${item.artist}</a>
    </div>`;

  imgSources.appendChild(li);
})



function activateAboutContent(content) {
  content.append(aboutContent);
  content.append(aboutContent2);
  content.appendChild(imgSources);
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateContent: () => (/* binding */ activateContent)
/* harmony export */ });
const elementsArray = [
  {
    el: 'div',
    id: 'welcome',
    text: 'Welcome To My Restorant Page'
  },

  {
    el: 'p',
    id: 'description',
    text: 'This is a page for doing my Odin Learning Path.'
  },

  {
    el: 'p',
    id: undefined,
    text: 'See some menu below:'
  },

  {
    el: 'div',
    id: 'list-menu-img',
    text: '',
    child: ['div', 6, 'menu-img']
  }
]

// IMAGES FROM ASSET
function importAll(listIMG) {
  let images = {};

  listIMG.keys().map((item, index) => { 
    // console.log(item);
    // console.log(listIMG(item));

    images[item.replace('./', '').split('-')[0]] = listIMG(item); 
  });
  return images;
}

const images = importAll(__webpack_require__("./assets sync \\.(png%7Cjpe?g%7Csvg)$"));

console.log(images);
console.log(Object.keys(images));

// -------------------------------------------

// CONTENT CHILD
function activateContent(content) {

  elementsArray.forEach((item, index, array) => {
    const el = document.createElement(item.el);
    el.innerText = item.text;
    
    
    if (item.id !== undefined) {
      el.setAttribute('id', item.id);
    }
    
    if (item.hasOwnProperty('child')) {
      for (let i = 0; i < item.child[1]; i++) {
        const child = document.createElement(item.child[0]);
        child.classList.add(item.child[2]);
        el.appendChild(child);
      }
    }
    
    content.appendChild(el);
    
  });

  // List-menu images
  const listMenu = document.querySelectorAll('.menu-img');
  const listImgKeys = Object.keys(images);

  listMenu.forEach((item, i) => {
    // Get images keys

    // create list of imgs
    const menuImg = document.createElement('img');

    item.appendChild(menuImg)
    menuImg.src = images[listImgKeys[i]]
  });

}

// ----------------------------------------------

// Contact and Link
const footer = document.querySelector('footer');
const contactButton = document.getElementById('contact-button');
const linkButton = document.getElementById('link-button');

const footerArray = ['contact-link', 'link-button']
let contactLink = 'non-active';

// activate contact-link dialog
function activateContactLink() {

  if (contactLink === 'active') {
    footer.removeChild(document.getElementById('contact-link'));
    contactLink ='non-active'
    return;
  }
  const newElement =document.createElement('p');
  newElement.id = 'contact-link';
  newElement.innerHTML = `
    <div>Contact</div>
    <div>
    my github link: <a href=''>This is my github Link<a/>
    </div>
    <div class='close'><button'>x</button></div>
  `
  contactLink = 'active'
  footer.insertBefore(newElement, footer.childNodes[0]);

  // Close button for contact link modal
  if (contactLink === 'active') {
    // const close = document.getElementById('contact-link');
    const x = document.querySelector('.close');
    x.addEventListener('click', () => {
      footer.removeChild(newElement);

      contactLink = 'non-active';
    });
  
  }

}

contactButton.addEventListener('click', activateContactLink);

linkButton.addEventListener('click', activateContactLink);




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateMenu: () => (/* binding */ activateMenu)
/* harmony export */ });
// copilot

const menuArray = {
  classic_ItalianMeatballs: 'Classic Italian Meatballs: Tender beef and pork meatballs simmered in a rich marinara sauce, served over a bed of al dente spaghetti. Perfect for those craving a traditional Italian experience.',

  turkeyMeatballs: 'Turkey Meatballs with Romesco Sauce: Healthy and flavorful turkey meatballs served with a nutty, roasted red pepper Romesco sauce. A great option for those looking for a lighter alternative.',

  lambMeatballs: 'Lamb Meatballs with Pecan Romesco: Juicy lamb meatballs filled with gooey cheese and bathed in a creamy pecan Romesco sauce. A hearty and indulgent choice for meat lovers.',

  coconutCurryMeatballs: 'Coconut Curry Meatballs: Aromatic meatballs cooked in a creamy coconut curry sauce, infused with spices and herbs. Ideal for those who enjoy a bit of heat and exotic flavors.',

  meatballSubSandwich: 'Meatball Sub Sandwich: Soft, freshly baked bread filled with savory meatballs, melted cheese, and a tangy marinara sauce. A satisfying and portable meal for a quick lunch or dinner.'

}

const source = document.createElement('div')
source.id = 'menu-info';

source.innerText = 'The text above is generated by windows copilot.';

function activateMenu(content) {
  const menu = document.createElement('ul');

  for (const [key, value] of Object.entries(menuArray)) {
    const valueSplitted = value.split(':');
  
    const menuItem = document.createElement('li');
    menuItem.innerHTML = `<span class='menu-name'>${valueSplitted[0]}:</span> ${valueSplitted[1]}`;
    
    menuItem.setAttribute('id', key);
    
    menu.appendChild(menuItem);
  }

  content.appendChild(menu);
  
  content.appendChild(source);
}


/***/ }),

/***/ "./assets/bruce-tang-vRMyLOFkrRc-unsplash.jpg":
/*!****************************************************!*\
  !*** ./assets/bruce-tang-vRMyLOFkrRc-unsplash.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d333b8f7785697f0a9be.jpg";

/***/ }),

/***/ "./assets/clark-douglas-LmHK7VeCwZ4-unsplash.jpg":
/*!*******************************************************!*\
  !*** ./assets/clark-douglas-LmHK7VeCwZ4-unsplash.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e4a015ff8aadd284173.jpg";

/***/ }),

/***/ "./assets/eiliv-aceron-IA1J0X-KX3Q-unsplash.jpg":
/*!******************************************************!*\
  !*** ./assets/eiliv-aceron-IA1J0X-KX3Q-unsplash.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "62212649c4ea1ce7443d.jpg";

/***/ }),

/***/ "./assets/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./assets/emiliano-vittoriosi-OFismyezPnY-unsplash.jpg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c7637ba7b7c601ca9c9.jpg";

/***/ }),

/***/ "./assets/jason-leung-AUAuEgUxg5Q-unsplash.jpg":
/*!*****************************************************!*\
  !*** ./assets/jason-leung-AUAuEgUxg5Q-unsplash.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9e1c6d5fe2e0f090980e.jpg";

/***/ }),

/***/ "./assets/jermaine-ee-HVjuen9ik-U-unsplash.jpg":
/*!*****************************************************!*\
  !*** ./assets/jermaine-ee-HVjuen9ik-U-unsplash.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c73bf4e38058aac8db3c.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





// ------------------------------------------

// NAV
const nav = document.getElementById('nav');

Array.from(nav.children).forEach(button => {
  button.id = button.innerText.toLowerCase();
  button.classList.add('nav-buttons');
});

// button
const buttons = document.querySelectorAll('.nav-buttons');

const content = document.getElementById('content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'menu') {
      content.innerHTML = '';
      return (0,_menu__WEBPACK_IMPORTED_MODULE_1__.activateMenu)(content);
    }
    else if (button.id === 'home') {
      content.innerHTML = '';
      return (0,_home__WEBPACK_IMPORTED_MODULE_0__.activateContent)(content);
    }
    
    else if (button.id === 'about') {
      content.innerHTML = '';
      return (0,_about__WEBPACK_IMPORTED_MODULE_2__.activateAboutContent)(content);
    }

  })
});

// Initial Content
(0,_home__WEBPACK_IMPORTED_MODULE_0__.activateContent)(content);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDSDtBQUNTO0FBQ3pCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbURBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzREFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNERBQW9CO0FBQ2pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQSxzREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2UvLi9hc3NldHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0b3JhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RvcmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RvcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0b3JhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RvcmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0b3JhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0b3JhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RvcmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0b3JhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0b3JhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtcmVzdG9yYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RvcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0b3JhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RvcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RvcmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9icnVjZS10YW5nLXZSTXlMT0ZrclJjLXVuc3BsYXNoLmpwZ1wiOiBcIi4vYXNzZXRzL2JydWNlLXRhbmctdlJNeUxPRmtyUmMtdW5zcGxhc2guanBnXCIsXG5cdFwiLi9jbGFyay1kb3VnbGFzLUxtSEs3VmVDd1o0LXVuc3BsYXNoLmpwZ1wiOiBcIi4vYXNzZXRzL2NsYXJrLWRvdWdsYXMtTG1ISzdWZUN3WjQtdW5zcGxhc2guanBnXCIsXG5cdFwiLi9laWxpdi1hY2Vyb24tSUExSjBYLUtYM1EtdW5zcGxhc2guanBnXCI6IFwiLi9hc3NldHMvZWlsaXYtYWNlcm9uLUlBMUowWC1LWDNRLXVuc3BsYXNoLmpwZ1wiLFxuXHRcIi4vZW1pbGlhbm8tdml0dG9yaW9zaS1PRmlzbXllelBuWS11bnNwbGFzaC5qcGdcIjogXCIuL2Fzc2V0cy9lbWlsaWFuby12aXR0b3Jpb3NpLU9GaXNteWV6UG5ZLXVuc3BsYXNoLmpwZ1wiLFxuXHRcIi4vamFzb24tbGV1bmctQVVBdUVnVXhnNVEtdW5zcGxhc2guanBnXCI6IFwiLi9hc3NldHMvamFzb24tbGV1bmctQVVBdUVnVXhnNVEtdW5zcGxhc2guanBnXCIsXG5cdFwiLi9qZXJtYWluZS1lZS1IVmp1ZW45aWstVS11bnNwbGFzaC5qcGdcIjogXCIuL2Fzc2V0cy9qZXJtYWluZS1lZS1IVmp1ZW45aWstVS11bnNwbGFzaC5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoMjI3LCAyMTIsIDIxMik7XHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiYjNiMTtcclxuXHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggM2ZyIDExMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubmF2ID4gYnV0dG9uLCBmb290ZXIgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMxYTFkO1xyXG4gIGNvbG9yOiByZ2IoMjI3LCAyMTIsIDIxMik7XHJcblxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNSU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuXHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbn1cclxuXHJcbm5hdiA+IGJ1dHRvbjpob3ZlciwgZm9vdGVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmMzIzNztcclxufVxyXG5cclxubmF2ID4gYnV0dG9uOmFjdGl2ZSwgZm9vdGVyIGJ1dHRvbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjMWExZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNsaXN0LW1lbnUtaW1nIHtcclxuICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJiM2IxMjM7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIC8qIGJvcmRlcjogLjVweCBzb2xpZCAjYjg5YTlhYTM7ICovXHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIFxyXG4gIGdhcDogNXB4O1xyXG59IFxyXG5cclxuLm1lbnUtaW1nIHtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuXHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzliNzg3ODk2OyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NywgMTA5LCAxMDkpO1xyXG59XHJcblxyXG4ubWVudS1pbWcgPiBpbWcge1xyXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qIE1FTlUsIEFCT1VUKi9cclxuXHJcbnVsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuI21lbnUtaW5mbyB7XHJcbiAgY29sb3I6IHJnYigxMDksIDgxLCA4MSk7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcblxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogTGlzdCBpbWcgU291cmNlcyAqL1xyXG5cclxuLyogI2Fib3V0LWNvbnRlbnQyIHN0eWxlIGFsc28gb24gI21lbnUtbmFtZSBsaW5lICovXHJcbiNhYm91dC1jb250ZW50MiB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbiNpbWctc291cmNlcyB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNpbWctc291cmNlcyBsaSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgdWwge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmxpIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNzQxMjEyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWVudS1uYW1lLCAjYWJvdXQtY29udGVudDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICM5ZTQ4NTE7XHJcbn1cclxuXHJcbi5saW5rLXNvdXJjZXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxufVxyXG5cclxuI2ltZy1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBGT09URVIgKi9cclxuZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzg5ZmEzO1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2F1dGhvciB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMDAwXHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDsgKi9cclxufVxyXG5cclxuI2NvbnRhY3QtbGluayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzFhMWQ7XHJcblxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhkNzE3MTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogTk9URSAqL1xyXG4gIC8qIGZvb3RlciBidXR0b24gb24gI25hdiBidXR0b24gbGluZSAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzRUFBc0U7RUFDdEUsZUFBZTtFQUNmLHlCQUF5Qjs7RUFFekIseUJBQXlCOztFQUV6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFNBQVM7RUFDVCxzQkFBc0I7O0VBRXRCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZOztFQUVaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5Qjs7RUFFekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTs7RUFFZix5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsaUJBQWlCOztFQUVqQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsaUJBQWlCOztFQUVqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCOztFQUVoQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjOztFQUVkLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLGVBQWU7O0FBRWY7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixhQUFhOztFQUViLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCOztBQUVuQjs7QUFFQSw4Q0FBOEM7O0FBRTlDLHFCQUFxQjs7QUFFckIsa0RBQWtEO0FBQ2xEO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7QUFFRjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLHFDQUFxQzs7QUFFckMsV0FBVztBQUNYO0VBQ0UseUJBQXlCOztFQUV6QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZOztFQUVaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7RUFFekIsYUFBYTs7RUFFYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQSw2Q0FBNkM7O0FBRTdDLFNBQVM7RUFDUCxzQ0FBc0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjb2xvcjogcmdiKDIyNywgMjEyLCAyMTIpO1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJiM2IxO1xcclxcblxcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggM2ZyIDExMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gYnV0dG9uLCBmb290ZXIgYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzFhMWQ7XFxyXFxuICBjb2xvcjogcmdiKDIyNywgMjEyLCAyMTIpO1xcclxcblxcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubmF2ID4gYnV0dG9uOmhvdmVyLCBmb290ZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjMyMzc7XFxyXFxufVxcclxcblxcclxcbm5hdiA+IGJ1dHRvbjphY3RpdmUsIGZvb3RlciBidXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMxYTFkO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2xpc3QtbWVudS1pbWcge1xcclxcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICBcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmIzYjEyMztcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgLyogYm9yZGVyOiAuNXB4IHNvbGlkICNiODlhOWFhMzsgKi9cXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3cteDogYXV0bztcXHJcXG4gIFxcclxcbiAgZ2FwOiA1cHg7XFxyXFxufSBcXHJcXG5cXHJcXG4ubWVudS1pbWcge1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxuXFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjOWI3ODc4OTY7ICovXFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbWluLXdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjcsIDEwOSwgMTA5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaW1nID4gaW1nIHtcXHJcXG4gIC8qIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7ICovXFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSwgQUJPVVQqL1xcclxcblxcclxcbnVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1pbmZvIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTA5LCA4MSwgODEpO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxyXFxuXFxyXFxuLyogTGlzdCBpbWcgU291cmNlcyAqL1xcclxcblxcclxcbi8qICNhYm91dC1jb250ZW50MiBzdHlsZSBhbHNvIG9uICNtZW51LW5hbWUgbGluZSAqL1xcclxcbiNhYm91dC1jb250ZW50MiB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2ltZy1zb3VyY2VzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2ltZy1zb3VyY2VzIGxpIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIHVsIHtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNzQxMjEyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbmFtZSwgI2Fib3V0LWNvbnRlbnQyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogIzllNDg1MTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmstc291cmNlcyB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAvKiBkaXNwbGF5OiBibG9jazsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2ltZy1saW5rIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4vKiBGT09URVIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4OWZhMztcXHJcXG5cXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhdXRob3Ige1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICMwMDBcXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LWxpbmsge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMxYTFkO1xcclxcblxcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzhkNzE3MTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcclxcblxcclxcbi8qIE5PVEUgKi9cXHJcXG4gIC8qIGZvb3RlciBidXR0b24gb24gI25hdiBidXR0b24gbGluZSAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpLmlubmVyVGV4dCA9ICdBYm91dCc7IFxyXG5cclxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbmNvbnN0IGFib3V0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbmNvbnN0IGFib3V0Q29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYWJvdXRDb250ZW50Mi5pZCA9ICdhYm91dC1jb250ZW50MidcclxuXHJcbmFib3V0Q29udGVudDIuaW5uZXJUZXh0ID0gJ1RoZSBpbWFnZXMgaSB1c2VkIGluIHRoaXMgdGFzayBhcmU6ICdcclxuXHJcblxyXG5jb25zdCBpbWFnZXNBcnJheSA9IFtcclxuICB7XHJcbiAgICBhcnRpc3Q6ICdAZWVqZXJtYWluZScsXHJcbiAgICBwcm9maWxlOiAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQGVlamVybWFpbmUnLFxyXG4gICAgaW1nVGl0bGU6ICdicm93bi1jaGlwcy1vbi13aGl0ZS1jZXJhbWljLWJvd2wnLFxyXG4gICAgbGlua0ltZzogJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9icm93bi1jaGlwcy1vbi13aGl0ZS1jZXJhbWljLWJvd2wtSFZqdWVuOWlrLVUnXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgYXJ0aXN0OiAnQGNsYXJrX2RvdWdsYXMnLFxyXG4gICAgcHJvZmlsZTogJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BjbGFya19kb3VnbGFzJyxcclxuICAgIGltZ1RpdGxlOiAnYS1wZXJzb24taG9sZGluZy1hLXRyYXktb2YtZG91Z2hudXRzLW9uLWEtc2lkZXdhbGwnLFxyXG4gICAgbGlua0ltZzogJ2h0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9hLXBlcnNvbi1ob2xkaW5nLWEtdHJheS1vZi1kb3VnaG51dHMtb24tYS1zaWRld2Fsay1MbUhLN1ZlQ3daNCdcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBhcnRpc3Q6ICdAYnJ1Y2V0bWwnLFxyXG4gICAgcHJvZmlsZTogJ2h0dHBzOi8vdW5zcGxhc2guY29tL0BicnVjZXRtbCcsXHJcbiAgICBpbWdUaXRsZTogJ2Nvb2tlZC1mb29kJyxcclxuICAgIGxpbmtJbWc6ICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvY29va2VkLWZvb2QtdlJNeUxPRmtyUmMnXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgYXJ0aXN0OiAnQG5pbmphc29uJyxcclxuICAgIHByb2ZpbGU6ICdodHRwczovL3Vuc3BsYXNoLmNvbS9AbmluamFzb24nLFxyXG4gICAgaW1nVGl0bGU6ICdtZXRhLWJhbGxzLXdpdGgtbm9vZGxlcy1zZXJ2ZWQtb24td2hpdGUtY2VyYW1pYy1ib3dsJyxcclxuICAgIGxpbmtJbWc6ICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvbWV0YS1iYWxscy13aXRoLW5vb2RsZXMtc2VydmVkLW9uLXdoaXRlLWNlcmFtaWMtYm93bC1BVUF1RWdVeGc1USdcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBhcnRpc3Q6ICdAZW1pbGlhbm92aXR0b3Jpb3NpJyxcclxuICAgIHByb2ZpbGU6ICdodHRwczovL3Vuc3BsYXNoLmNvbS9AZW1pbGlhbm92aXR0b3Jpb3NpJyxcclxuICAgIGltZ1RpdGxlOiAnbWVhdC1iYWxscy1vbi1vdmFsLXdoaXRlLXBsYXRlJyxcclxuICAgIGxpbmtJbWc6ICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvbWVhdC1iYWxscy1vbi1vdmFsLXdoaXRlLXBsYXRlLU9GaXNteWV6UG5ZJ1xyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGFydGlzdDogJ0BzaG9vdGRlbGljaW91cycsXHJcbiAgICBwcm9maWxlOiAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQHNob290ZGVsaWNpb3VzJyxcclxuICAgIGltZ1RpdGxlOiAnY29va2VkLXBhc3RhLWRpc2gtb24tcm91bmQtYnJvd24tY2VyYW1pYy1wbGF0ZScsXHJcbiAgICBsaW5rSW1nOiAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2Nvb2tlZC1wYXN0YS1kaXNoLW9uLXJvdW5kLWJyb3duLWNlcmFtaWMtcGxhdGUtSUExSjBYLUtYM1EnXHJcbiAgfVxyXG5dXHJcblxyXG5hYm91dENvbnRlbnQuaWQgPSAnYWJvdXQtY29udGVudCc7XHJcbmFib3V0Q29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdj5cclxuICBUaGlzIGlzIGEgcHJvamVjdCB0YXNrIHRoYXQgaSBkaWQgaW4gbGVhcm5pbmcgV2ViIERldmVsb3BtZW50IHRocm91Z2ggVGhlIE9kaW4gUHJvamVjdCBjdXJyaWN1Y2x1bS5cclxuICA8L2Rpdj5cclxuYDtcclxuXHJcbi8vIExpc3QgSW1hZ2UgRWxlbWVudFxyXG5jb25zdCBpbWdTb3VyY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuaW1nU291cmNlcy5pZCA9ICdpbWctc291cmNlcydcclxuXHJcbmltYWdlc0FycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgPGEgaHJlZj0nJHtpdGVtLmxpbmtJbWd9JyBjbGFzcz0nbGluay1zb3VyY2VzJyBpZD0naW1nLWxpbmsnPiR7aXRlbS5pbWdUaXRsZS5zcGxpdCgnLScpLmpvaW4oJyAnKX08L2E+IGJ5IFxyXG4gICAgICA8YSBocmVmPScke2l0ZW0ucHJvZmlsZX0nIGNsYXNzPSdsaW5rLXNvdXJjZXMnPiR7aXRlbS5hcnRpc3R9PC9hPlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgaW1nU291cmNlcy5hcHBlbmRDaGlsZChsaSk7XHJcbn0pXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlQWJvdXRDb250ZW50KGNvbnRlbnQpIHtcclxuICBjb250ZW50LmFwcGVuZChhYm91dENvbnRlbnQpO1xyXG4gIGNvbnRlbnQuYXBwZW5kKGFib3V0Q29udGVudDIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nU291cmNlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFjdGl2YXRlQWJvdXRDb250ZW50IH07XHJcbiIsImNvbnN0IGVsZW1lbnRzQXJyYXkgPSBbXHJcbiAge1xyXG4gICAgZWw6ICdkaXYnLFxyXG4gICAgaWQ6ICd3ZWxjb21lJyxcclxuICAgIHRleHQ6ICdXZWxjb21lIFRvIE15IFJlc3RvcmFudCBQYWdlJ1xyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIGVsOiAncCcsXHJcbiAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIHRleHQ6ICdUaGlzIGlzIGEgcGFnZSBmb3IgZG9pbmcgbXkgT2RpbiBMZWFybmluZyBQYXRoLidcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBlbDogJ3AnLFxyXG4gICAgaWQ6IHVuZGVmaW5lZCxcclxuICAgIHRleHQ6ICdTZWUgc29tZSBtZW51IGJlbG93OidcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBlbDogJ2RpdicsXHJcbiAgICBpZDogJ2xpc3QtbWVudS1pbWcnLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICBjaGlsZDogWydkaXYnLCA2LCAnbWVudS1pbWcnXVxyXG4gIH1cclxuXVxyXG5cclxuLy8gSU1BR0VTIEZST00gQVNTRVRcclxuZnVuY3Rpb24gaW1wb3J0QWxsKGxpc3RJTUcpIHtcclxuICBsZXQgaW1hZ2VzID0ge307XHJcblxyXG4gIGxpc3RJTUcua2V5cygpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHsgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RJTUcoaXRlbSkpO1xyXG5cclxuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpLnNwbGl0KCctJylbMF1dID0gbGlzdElNRyhpdGVtKTsgXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGltYWdlcztcclxufVxyXG5cclxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xyXG5cclxuY29uc29sZS5sb2coaW1hZ2VzKTtcclxuY29uc29sZS5sb2coT2JqZWN0LmtleXMoaW1hZ2VzKSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBDT05URU5UIENISUxEXHJcbmZ1bmN0aW9uIGFjdGl2YXRlQ29udGVudChjb250ZW50KSB7XHJcblxyXG4gIGVsZW1lbnRzQXJyYXkuZm9yRWFjaCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXRlbS5lbCk7XHJcbiAgICBlbC5pbm5lclRleHQgPSBpdGVtLnRleHQ7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKGl0ZW0uaWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgaXRlbS5pZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KCdjaGlsZCcpKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbS5jaGlsZFsxXTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0ZW0uY2hpbGRbMF0pO1xyXG4gICAgICAgIGNoaWxkLmNsYXNzTGlzdC5hZGQoaXRlbS5jaGlsZFsyXSk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgXHJcbiAgfSk7XHJcblxyXG4gIC8vIExpc3QtbWVudSBpbWFnZXNcclxuICBjb25zdCBsaXN0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWltZycpO1xyXG4gIGNvbnN0IGxpc3RJbWdLZXlzID0gT2JqZWN0LmtleXMoaW1hZ2VzKTtcclxuXHJcbiAgbGlzdE1lbnUuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgLy8gR2V0IGltYWdlcyBrZXlzXHJcblxyXG4gICAgLy8gY3JlYXRlIGxpc3Qgb2YgaW1nc1xyXG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobWVudUltZylcclxuICAgIG1lbnVJbWcuc3JjID0gaW1hZ2VzW2xpc3RJbWdLZXlzW2ldXVxyXG4gIH0pO1xyXG5cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQ29udGFjdCBhbmQgTGlua1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcclxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWJ1dHRvbicpO1xyXG5jb25zdCBsaW5rQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmstYnV0dG9uJyk7XHJcblxyXG5jb25zdCBmb290ZXJBcnJheSA9IFsnY29udGFjdC1saW5rJywgJ2xpbmstYnV0dG9uJ11cclxubGV0IGNvbnRhY3RMaW5rID0gJ25vbi1hY3RpdmUnO1xyXG5cclxuLy8gYWN0aXZhdGUgY29udGFjdC1saW5rIGRpYWxvZ1xyXG5mdW5jdGlvbiBhY3RpdmF0ZUNvbnRhY3RMaW5rKCkge1xyXG5cclxuICBpZiAoY29udGFjdExpbmsgPT09ICdhY3RpdmUnKSB7XHJcbiAgICBmb290ZXIucmVtb3ZlQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtbGluaycpKTtcclxuICAgIGNvbnRhY3RMaW5rID0nbm9uLWFjdGl2ZSdcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgY29uc3QgbmV3RWxlbWVudCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIG5ld0VsZW1lbnQuaWQgPSAnY29udGFjdC1saW5rJztcclxuICBuZXdFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXY+Q29udGFjdDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgIG15IGdpdGh1YiBsaW5rOiA8YSBocmVmPScnPlRoaXMgaXMgbXkgZ2l0aHViIExpbms8YS8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9J2Nsb3NlJz48YnV0dG9uJz54PC9idXR0b24+PC9kaXY+XHJcbiAgYFxyXG4gIGNvbnRhY3RMaW5rID0gJ2FjdGl2ZSdcclxuICBmb290ZXIuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIGZvb3Rlci5jaGlsZE5vZGVzWzBdKTtcclxuXHJcbiAgLy8gQ2xvc2UgYnV0dG9uIGZvciBjb250YWN0IGxpbmsgbW9kYWxcclxuICBpZiAoY29udGFjdExpbmsgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAvLyBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0LWxpbmsnKTtcclxuICAgIGNvbnN0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGZvb3Rlci5yZW1vdmVDaGlsZChuZXdFbGVtZW50KTtcclxuXHJcbiAgICAgIGNvbnRhY3RMaW5rID0gJ25vbi1hY3RpdmUnO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlQ29udGFjdExpbmspO1xyXG5cclxubGlua0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFjdGl2YXRlQ29udGFjdExpbmspO1xyXG5cclxuXHJcbmV4cG9ydCB7IGFjdGl2YXRlQ29udGVudCB9OyIsIi8vIGNvcGlsb3RcclxuXHJcbmNvbnN0IG1lbnVBcnJheSA9IHtcclxuICBjbGFzc2ljX0l0YWxpYW5NZWF0YmFsbHM6ICdDbGFzc2ljIEl0YWxpYW4gTWVhdGJhbGxzOiBUZW5kZXIgYmVlZiBhbmQgcG9yayBtZWF0YmFsbHMgc2ltbWVyZWQgaW4gYSByaWNoIG1hcmluYXJhIHNhdWNlLCBzZXJ2ZWQgb3ZlciBhIGJlZCBvZiBhbCBkZW50ZSBzcGFnaGV0dGkuIFBlcmZlY3QgZm9yIHRob3NlIGNyYXZpbmcgYSB0cmFkaXRpb25hbCBJdGFsaWFuIGV4cGVyaWVuY2UuJyxcclxuXHJcbiAgdHVya2V5TWVhdGJhbGxzOiAnVHVya2V5IE1lYXRiYWxscyB3aXRoIFJvbWVzY28gU2F1Y2U6IEhlYWx0aHkgYW5kIGZsYXZvcmZ1bCB0dXJrZXkgbWVhdGJhbGxzIHNlcnZlZCB3aXRoIGEgbnV0dHksIHJvYXN0ZWQgcmVkIHBlcHBlciBSb21lc2NvIHNhdWNlLiBBIGdyZWF0IG9wdGlvbiBmb3IgdGhvc2UgbG9va2luZyBmb3IgYSBsaWdodGVyIGFsdGVybmF0aXZlLicsXHJcblxyXG4gIGxhbWJNZWF0YmFsbHM6ICdMYW1iIE1lYXRiYWxscyB3aXRoIFBlY2FuIFJvbWVzY286IEp1aWN5IGxhbWIgbWVhdGJhbGxzIGZpbGxlZCB3aXRoIGdvb2V5IGNoZWVzZSBhbmQgYmF0aGVkIGluIGEgY3JlYW15IHBlY2FuIFJvbWVzY28gc2F1Y2UuIEEgaGVhcnR5IGFuZCBpbmR1bGdlbnQgY2hvaWNlIGZvciBtZWF0IGxvdmVycy4nLFxyXG5cclxuICBjb2NvbnV0Q3VycnlNZWF0YmFsbHM6ICdDb2NvbnV0IEN1cnJ5IE1lYXRiYWxsczogQXJvbWF0aWMgbWVhdGJhbGxzIGNvb2tlZCBpbiBhIGNyZWFteSBjb2NvbnV0IGN1cnJ5IHNhdWNlLCBpbmZ1c2VkIHdpdGggc3BpY2VzIGFuZCBoZXJicy4gSWRlYWwgZm9yIHRob3NlIHdobyBlbmpveSBhIGJpdCBvZiBoZWF0IGFuZCBleG90aWMgZmxhdm9ycy4nLFxyXG5cclxuICBtZWF0YmFsbFN1YlNhbmR3aWNoOiAnTWVhdGJhbGwgU3ViIFNhbmR3aWNoOiBTb2Z0LCBmcmVzaGx5IGJha2VkIGJyZWFkIGZpbGxlZCB3aXRoIHNhdm9yeSBtZWF0YmFsbHMsIG1lbHRlZCBjaGVlc2UsIGFuZCBhIHRhbmd5IG1hcmluYXJhIHNhdWNlLiBBIHNhdGlzZnlpbmcgYW5kIHBvcnRhYmxlIG1lYWwgZm9yIGEgcXVpY2sgbHVuY2ggb3IgZGlubmVyLidcclxuXHJcbn1cclxuXHJcbmNvbnN0IHNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnNvdXJjZS5pZCA9ICdtZW51LWluZm8nO1xyXG5cclxuc291cmNlLmlubmVyVGV4dCA9ICdUaGUgdGV4dCBhYm92ZSBpcyBnZW5lcmF0ZWQgYnkgd2luZG93cyBjb3BpbG90Lic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVNZW51KGNvbnRlbnQpIHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWVudUFycmF5KSkge1xyXG4gICAgY29uc3QgdmFsdWVTcGxpdHRlZCA9IHZhbHVlLnNwbGl0KCc6Jyk7XHJcbiAgXHJcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBtZW51SXRlbS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9J21lbnUtbmFtZSc+JHt2YWx1ZVNwbGl0dGVkWzBdfTo8L3NwYW4+ICR7dmFsdWVTcGxpdHRlZFsxXX1gO1xyXG4gICAgXHJcbiAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2lkJywga2V5KTtcclxuICAgIFxyXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbSk7XHJcbiAgfVxyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gIFxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc291cmNlKTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGFjdGl2YXRlQ29udGVudCB9IGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgeyBhY3RpdmF0ZUFib3V0Q29udGVudCB9IGZyb20gXCIuL2Fib3V0XCI7XHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBOQVZcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpO1xyXG5cclxuQXJyYXkuZnJvbShuYXYuY2hpbGRyZW4pLmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b24uaWQgPSBidXR0b24uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJyk7XHJcbn0pO1xyXG5cclxuLy8gYnV0dG9uXHJcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbnMnKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGJ1dHRvbi5pZCA9PT0gJ21lbnUnKSB7XHJcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHJldHVybiBhY3RpdmF0ZU1lbnUoY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChidXR0b24uaWQgPT09ICdob21lJykge1xyXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICByZXR1cm4gYWN0aXZhdGVDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIGlmIChidXR0b24uaWQgPT09ICdhYm91dCcpIHtcclxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgcmV0dXJuIGFjdGl2YXRlQWJvdXRDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICB9KVxyXG59KTtcclxuXHJcbi8vIEluaXRpYWwgQ29udGVudFxyXG5hY3RpdmF0ZUNvbnRlbnQoY29udGVudCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==