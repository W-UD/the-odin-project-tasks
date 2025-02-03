"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `#footer, #todo-container .todo .td-button-container, #todo-container .todo, #content #mydialog #form-todo .input-container, #content #mydialog #form-todo, #content, .rename-form, .menu .mr-0, #menus-container, #project-title, header {
  display: flex;
  flex-direction: column;
}

#content #pl-button-con, #content #title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#menus-container, header {
  align-items: center;
  gap: 20px;
}

@media (max-width: 900px) {
  header {
    left: -400px;
    top: 50px;
  }
}

@media (min-width: 900px) {
  #nav-container #show-menu-div {
    display: none;
  }
}

* {
  box-sizing: border-box;
}

body {
  /* border: 1px solid #000; */
  background-color: #246a7d;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

header {
  width: 200px;
  min-height: inherit;
  z-index: 100;
  background-color: #e4d8fd;
  padding: 20px;
  position: fixed;
}

.show-menus {
  top: 50px;
  animation: animateShow 1s forwards;
}
@keyframes animateShow {
  0% {
    left: 0;
  }
  100% {
    left: -400;
  }
}

.hide-menus {
  top: 50px;
  border-right: 2px solid #3189a0;
  animation: animateHide 1s forwards;
}
@keyframes animateHide {
  0% {
    left: -400;
  }
  100% {
    left: 0;
  }
}

#project-title {
  background-color: #0f6b83;
  font-weight: 900;
  font-size: larger;
  text-align: center;
  color: white;
  justify-content: center;
  border-radius: 16px;
  width: 80%;
  height: 40px;
}

@media (min-width: 501px) {
  #show-menu-button {
    display: none;
  }
}

#menus-container {
  width: inherit;
  height: auto;
  padding: 10px;
}

.menu {
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.menu img {
  display: block;
  justify-self: end;
  background-color: #3189a0;
  border: none;
  border-radius: 5px;
  margin: 3px;
  padding: 5px;
  color: rgba(255, 255, 255, 0.9019607843);
  font-weight: 500;
  transition: 0.35s linear;
}
.menu img:hover {
  background-color: rgb(248, 148, 77);
  cursor: pointer;
  transform: scale(1);
}
.menu .mr-0 {
  padding: inherit;
  border-radius: 5px;
  padding: 5px;
  max-width: 100px;
  color: rgba(255, 255, 255, 0.9019607843);
  font-weight: 700;
  font-size: 1.05rem;
  overflow-wrap: anywhere;
  background-color: #3189a0;
  transition: background-color 0.45s ease, transform 0.45s ease;
  justify-content: center;
}
.menu .mr-0:hover {
  background-color: rgb(248, 148, 77);
  cursor: pointer;
  transform: scale(1.05);
}

.rename-form {
  background-color: #abad35;
  border-radius: 10px;
  padding: 10px;
  z-index: 10;
  border: 2px solid #524c4c;
  position: absolute;
  left: 100px;
}
.rename-form #change-project-name, .rename-form #del-rename-form {
  display: block;
  color: white;
  background-color: #3189a0;
  border-radius: 5px;
  border: none;
  padding: 5px;
  margin: 5px auto 0 auto;
}
.rename-form #change-project-name:hover, .rename-form #del-rename-form:hover {
  background-color: rgb(248, 148, 77);
  cursor: pointer;
  transform: scale(1.03);
}
.rename-form #del-rename-form {
  margin: 0 0 3px auto;
}

#ap-form #button-iap, #ap-form #input-ap {
  display: block;
  width: 100%;
}

#ap-form {
  /* border: 1px solid #a41b1b; */
  width: 100%;
}
#ap-form #input-ap {
  border: 2px solid #0f6b83;
  border-radius: 5px;
  padding: 5px;
}
#ap-form #button-iap {
  margin: 5px auto;
  width: fit-content;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: #abad35;
  font-size: 0.85rem;
  font-weight: 700;
  color: rgb(233, 240, 207);
  transition: 0.3s;
}
#ap-form #button-iap:hover {
  background-color: rgb(248, 148, 77);
  cursor: pointer;
  transform: scale(1.02);
}

/* ----------------------------------------------------------- */
#nav-container {
  border-bottom: 2px solid #3189a0;
  background-color: #e4d8fd;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
#nav-container #show-menu-div {
  height: 40px;
  border: 2px solid rgba(59, 12, 12, 0.678);
  padding: 3px;
  border-radius: 3px;
  background-color: rgb(247, 226, 211);
  position: absolute;
  left: 3px;
  top: 3px;
}
#nav-container #show-menu-div #show-menu-img {
  display: block;
  height: 100%;
  width: 100%;
  transition: all 0.4s ease-out;
}
#nav-container #show-menu-div #show-menu-img:hover {
  background-color: rgb(248, 148, 77);
  cursor: pointer;
  transform: scale(1.4);
}
#nav-container .nav-logo-img {
  display: block;
  width: 100%;
  height: 100%;
}

/* ----------------------------------------------------------- */
#content {
  border: 3px solid #e4d8fd;
  width: 100%;
}
#content #title-container {
  padding-right: 10px;
  background-color: #e4d8fd;
  z-index: 50;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
}
@media (min-width: 500px) {
  #content #title-container {
    justify-content: space-around;
  }
}
@media (min-width: 901px) {
  #content #title-container {
    margin-left: 207px;
    border-left: 3px solid #3189a0;
  }
}
#content #projectTitle {
  border-left: 5px solid #246a7d;
  padding: 5px;
  width: fit-content;
  margin-left: 10px;
  overflow-wrap: anywhere;
}
#content #pl-button-con {
  margin-left: 10px;
  margin-top: 0;
  gap: 5px;
}
#content #pl-button-con > div {
  background-color: #3189a0;
  color: rgba(255, 255, 255, 0.9019607843);
  display: block;
  width: 50px;
  height: 30px;
  border-radius: 3px;
  border: none;
  padding: 3px;
  transition: 0.45s;
}
#content #pl-button-con > div:hover {
  background-color: rgb(248, 148, 77);
  cursor: pointer;
  transform: scale(1.1);
}
#content #pl-button-con > div #addpl-svg {
  width: 100%;
  height: 100%;
}
#content #mydialog {
  padding: 0;
  border: none;
  border-radius: 15px;
}
@media (max-width: 600px) {
  #content #mydialog {
    width: 60%;
  }
}
@media (min-width: 601px) {
  #content #mydialog {
    width: 40%;
  }
}
@media (max-width: 400px) {
  #content #mydialog {
    width: 80%;
  }
}
#content #mydialog #form-todo {
  width: 100%;
  padding: 20px;
  background-color: #abad35;
  gap: 10px;
}
#content #mydialog #form-todo .input-container {
  padding-bottom: 5px;
}
#content #mydialog #form-todo .input-container label {
  color: rgb(3, 56, 3);
  font-weight: 700;
}
#content #mydialog #form-todo .input-container input, #content #mydialog #form-todo .input-container select, #content #mydialog #form-todo .input-container textarea {
  padding: 0 10px;
  border: none;
  border-radius: 3px;
}
#content #mydialog #form-todo .input-container textarea {
  height: 50px;
  border-bottom: 1px solid black;
}
#content #mydialog #form-todo .input-container .input-l:not([type=textarea]):not(label):not([type=checkbox]) {
  height: 30px;
}
#content #mydialog #form-todo .input-container input[type=checkbox], #content #mydialog #form-todo .input-container textarea[type=checkbox], #content #mydialog #form-todo .input-container select[type=checkbox] {
  border: 1px solid #7c1515;
  accent-color: rgb(0, 255, 162);
  align-self: self-start;
}
#content #mydialog #form-todo #input-btn, #content #mydialog #form-todo #close-form-btn {
  margin: 0 auto;
  height: 35px;
  border: none;
  color: rgb(232, 231, 231);
  background-color: rgb(43, 43, 81);
}
#content #mydialog #form-todo #input-btn:hover, #content #mydialog #form-todo #close-form-btn:hover {
  background-color: green;
}
#content #mydialog #form-todo #input-btn:active, #content #mydialog #form-todo #close-form-btn:active {
  transform: scale(1.1);
}
#content #mydialog #form-todo #close-form-btn {
  width: 35px;
  padding: 8px;
  border-radius: 17px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
#content #mydialog #form-todo #input-btn {
  width: 100px;
  font-weight: 700;
  letter-spacing: 0.12ch;
  transition: transform 0.35s, background-color 0.35s;
}

/* CONTENT TODO */
#todo-container {
  display: grid;
  grid-template-columns: 22.5% 22.5% 22.5% 22.5%;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  padding-top: 120px;
}
@media (min-width: 901px) {
  #todo-container {
    margin-left: 207px;
  }
}
@media (max-width: 900px) {
  #todo-container {
    grid-template-columns: 32.5% 32.5%;
  }
}
@media (max-width: 650px) {
  #todo-container {
    grid-template-columns: 40% 40%;
  }
}
@media (max-width: 365px) {
  #todo-container {
    grid-template-columns: 85%;
  }
}
#todo-container .todo {
  border-radius: 10px;
  padding: 10px;
  background-color: #3189a0;
  color: rgba(255, 255, 255, 0.9019607843);
  position: relative;
  align-items: center;
  gap: 15px;
}
#todo-container .todo .td-info {
  width: 100%;
  justify-content: space-around;
  word-wrap: break-word;
}
#todo-container .todo .td-info img {
  position: relative;
}
#todo-container .todo .td-info img#icon-priority {
  width: 16px;
  height: 20px;
  bottom: -3px;
  opacity: 0.8;
}
#todo-container .todo .td-info img#icon-progress {
  width: 30px;
  height: 30px;
  bottom: -8px;
}
#todo-container .todo .tdi-title {
  max-width: 150px;
  border-bottom: 1px solid rgb(87, 91, 116);
  padding-bottom: 5px;
  font-weight: bold;
}
#todo-container .todo .tdi-title:before {
  font-size: 0.76rem;
  justify-self: flex-start;
  margin-right: 10px;
  color: rgba(214, 214, 47, 0.794);
  content: "Title:";
}
#todo-container .todo .tdi-description {
  max-width: 150px;
  border-bottom: 1px solid rgb(87, 91, 116);
  padding-bottom: 5px;
  font-weight: bold;
  display: block;
  height: auto;
}
#todo-container .todo .tdi-description:before {
  font-size: 0.76rem;
  justify-self: flex-start;
  margin-right: 10px;
  color: rgba(214, 214, 47, 0.794);
  content: "Description:";
}
#todo-container .todo .tdi-dueDate {
  max-width: 150px;
  border-bottom: 1px solid rgb(87, 91, 116);
  padding-bottom: 5px;
  font-weight: bold;
}
#todo-container .todo .tdi-dueDate:before {
  font-size: 0.76rem;
  justify-self: flex-start;
  margin-right: 10px;
  color: rgba(214, 214, 47, 0.794);
  content: "Due Date:";
}
#todo-container .todo .tdi-priority {
  max-width: 150px;
  border-bottom: 1px solid rgb(87, 91, 116);
  padding-bottom: 5px;
  font-weight: bold;
}
#todo-container .todo .tdi-priority:before {
  font-size: 0.76rem;
  justify-self: flex-start;
  margin-right: 10px;
  color: rgba(214, 214, 47, 0.794);
  content: "Priority:";
}
#todo-container .todo .tdi-notes {
  max-width: 150px;
  border-bottom: 1px solid rgb(87, 91, 116);
  padding-bottom: 5px;
  font-weight: bold;
  height: auto;
  display: block;
}
#todo-container .todo .tdi-notes:before {
  font-size: 0.76rem;
  justify-self: flex-start;
  margin-right: 10px;
  color: rgba(214, 214, 47, 0.794);
  content: "Notes:";
}
#todo-container .todo .tdi-checklist {
  max-width: 150px;
  border-bottom: 1px solid rgb(87, 91, 116);
  padding-bottom: 5px;
  font-weight: bold;
}
#todo-container .todo .tdi-checklist:before {
  font-size: 0.76rem;
  justify-self: flex-start;
  margin-right: 10px;
  color: rgba(214, 214, 47, 0.794);
  content: "Checklist:";
}
#todo-container .todo .tdi-project {
  max-width: 150px;
  border-bottom: 1px solid rgb(87, 91, 116);
  padding-bottom: 5px;
  font-weight: bold;
}
#todo-container .todo .tdi-project:before {
  font-size: 0.76rem;
  justify-self: flex-start;
  margin-right: 10px;
  color: rgba(214, 214, 47, 0.794);
  content: "Project:";
}
#todo-container .todo #priority-high {
  display: inline-block;
  color: rgb(97, 19, 5);
  font-weight: 900;
  letter-spacing: 0.5ch;
}
#todo-container .todo .td-button-container {
  width: 50px;
  height: 90px;
  box-shadow: 5px 5px 5px 0.2px rgb(45, 45, 85);
  border-radius: 6px;
  padding: 3px;
  background-color: #abad35;
  opacity: 0;
  transition: opacity 0.35s;
  position: absolute;
  top: 0;
  right: -25px;
  z-index: 20;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
#todo-container .todo .td-button-container .td-button {
  border-radius: 4px;
  transition: 0.35s;
}
#todo-container .todo .td-button-container .td-button:hover {
  background-color: rgb(248, 148, 77);
  cursor: pointer;
  transform: scale(1.3);
  opacity: 1;
  background-color: rgb(77, 77, 195);
}
#todo-container .todo:hover .td-button-container {
  opacity: 0.5;
}

#footer {
  padding: 5px;
  color: rgba(255, 255, 255, 0.9019607843);
  font-size: 0.8em;
  line-height: 1.5em;
  align-items: center;
  gap: 15px;
}
#footer #study-review {
  font-style: italic;
}`, "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\r\n\r\n$primary-color: #246a7d;\r\n// $secondary-color: #9e78f2;\r\n$secondary-color: #e4d8fd;\r\n\r\n$third-color: #3189a0;\r\n$fourth-color: #779fa9;\r\n$fifth-color: #ffffffe6;\r\n$sixth-color: #0f6b83;\r\n\r\n$ap-button-color: #abad35;\r\n\r\n// Form color\r\n$green-text: rgb(3, 56, 3);\r\n\r\n// Flex\r\n%flex-column-display {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n%flex-row-center-display {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n%flex-align-g20 {\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n// Animation\r\n@mixin animate-width200-hideShow($name, $rule) {\r\n    @if $rule == 'hide' {\r\n      animation: $name 1s forwards;\r\n      @keyframes #{$name} {\r\n        0% {\r\n          left: -400;\r\n        }\r\n        \r\n        100% {\r\n          left: 0;\r\n        }\r\n      }\r\n\r\n      @content;\r\n\r\n    } @else if $rule == 'show' {\r\n      animation: $name 1s forwards;\r\n      // animation: name duration timing-function delay iteration-count direction fill-mode;\r\n      @keyframes #{$name} {\r\n        0% {\r\n          left: 0;\r\n        }\r\n        \r\n        100% {\r\n          left: -400;\r\n        }\r\n      }\r\n\r\n      @content;\r\n    }\r\n}\r\n\r\n// Hover\r\n@mixin hoverEl($scale) {\r\n  &:hover {\r\n    background-color: rgb(248, 148, 77);\r\n    cursor: pointer;\r\n    transform: scale($scale);\r\n    @content;\r\n  }\r\n}\r\n\r\n\r\n// Media Queries\r\n$mq-small: 500px;\r\n\r\n%media-max-small-hidden {\r\n  @media (max-width: calc($mq-small + 400px)) {\r\n    // position: fixed;\r\n    left: -400px;\r\n    top: 50px;\r\n    // border: 1px solid #000;\r\n  }\r\n}\r\n\r\n@mixin media-max-high-appear($size) {\r\n  @media (min-width: calc($mq-small + $size)) {\r\n    margin-left: 207px;\r\n    @content;\r\n  }\r\n}\r\n\r\n%media-501up-none {\r\n  @media (min-width: calc($mq-small + 400px)) {\r\n    display: none;\r\n  }\r\n}\r\n\r\n\r\n// ---------------------------------------------------------------\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  /* border: 1px solid #000; */\r\n  background-color: $primary-color;\r\n  min-height: 100vh;\r\n  position: relative;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\nheader {\r\n  width: 200px;\r\n  min-height: inherit;\r\n  z-index: 100;\r\n  // border-radius: 10px;\r\n  background-color: $secondary-color;\r\n  padding: 20px;\r\n  \r\n  position: fixed;\r\n  \r\n  @extend %flex-column-display;\r\n  @extend %flex-align-g20;\r\n  @extend %media-max-small-hidden;\r\n}\r\n\r\n.show-menus {\r\n  top: 50px;\r\n  @include animate-width200-hideShow(animateShow, 'show');\r\n}\r\n\r\n.hide-menus {\r\n  top: 50px;\r\n  border-right: 2px solid $third-color;\r\n  @include animate-width200-hideShow(animateHide, 'hide');\r\n}\r\n\r\n#project-title {\r\n  background-color: $sixth-color;\r\n  \r\n  font-weight: 900;\r\n  font-size: larger;\r\n  text-align: center;\r\n  color: white;\r\n\r\n  @extend %flex-column-display;\r\n  justify-content: center;\r\n\r\n  border-radius: 16px;\r\n  width: 80%;\r\n  height: 40px;\r\n}\r\n\r\n#show-menu-button {\r\n  @media (min-width: 501px) {\r\n    display: none;\r\n  }\r\n}\r\n\r\n#menus-container {\r\n  // border: 1px solid #000;\r\n  width: inherit;\r\n  height: auto;\r\n  padding: 10px;\r\n\r\n  @extend %flex-column-display;\r\n  @extend %flex-align-g20;\r\n}\r\n\r\n\r\n.menu {\r\n  width: 100%;\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  // border: 1px solid #000;\r\n\r\n  position: relative;\r\n  \r\n  & img {\r\n    display: block;\r\n    justify-self: end;\r\n    background-color: $third-color;\r\n  \r\n    border: none;\r\n    border-radius: 5px;\r\n    margin: 3px;\r\n    padding: 5px;\r\n  \r\n    color: $fifth-color;\r\n    font-weight: 500;\r\n    transition: 0.35s linear;\r\n\r\n    @include hoverEl(1);\r\n  }\r\n\r\n  .mr-0 {\r\n    padding: inherit;\r\n    // border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    max-width: 100px;\r\n\r\n    color: $fifth-color;\r\n    font-weight: 700;\r\n    font-size: 1.05rem;\r\n    overflow-wrap: anywhere;\r\n    \r\n    background-color: $third-color;\r\n    transition: background-color 0.45s ease, transform 0.45s ease;\r\n\r\n    @extend %flex-column-display;\r\n    justify-content: center;\r\n\r\n    @include hoverEl(1.05);\r\n  }\r\n\r\n}\r\n\r\n\r\n.rename-form {\r\n  background-color:  $ap-button-color;\r\n  border-radius: 10px;\r\n  padding: 10px;\r\n  z-index: 10;\r\n  border: 2px solid #524c4c;\r\n  position: absolute;\r\n  left: 100px;\r\n  @extend %flex-column-display;\r\n  \r\n  & #change-project-name {\r\n    display: block;\r\n\r\n    color: white;\r\n    background-color: $third-color;\r\n\r\n    border-radius: 5px;\r\n    border: none;\r\n    padding: 5px;\r\n    margin: 5px auto 0 auto;\r\n    @include hoverEl(1.03);\r\n  }\r\n  \r\n  & #del-rename-form {\r\n    @extend #change-project-name;\r\n    margin: 0 0 3px auto;\r\n  }\r\n}\r\n\r\n// ---------------------------------------------------------------\r\n\r\n// AP FORM\r\n%input-ap-display-width {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n#ap-form {\r\n  /* border: 1px solid #a41b1b; */\r\n  width: 100%;\r\n\r\n  #input-ap {\r\n    border: 2px solid $sixth-color;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n\r\n    @extend %input-ap-display-width;\r\n  }\r\n\r\n  #button-iap {\r\n    margin: 5px auto;\r\n    width: fit-content;\r\n    padding: 8px;\r\n    border-radius: 5px;\r\n    border: none;\r\n  \r\n    background-color: $ap-button-color;\r\n  \r\n    font-size: .85rem;\r\n    font-weight: 700;\r\n    color: rgb(233, 240, 207);\r\n    transition: 0.3s;\r\n\r\n    @extend %input-ap-display-width;\r\n    @include hoverEl(1.02);\r\n  }\r\n\r\n}\r\n\r\n\r\n/* ----------------------------------------------------------- */\r\n\r\n#nav-container {\r\n  border-bottom: 2px solid $third-color;\r\n  // border-radius: 10px;\r\n  background-color: $secondary-color;\r\n  width: 100%;\r\n  height: 50px;\r\n  // margin: 0 10px 0px 10px;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n\r\n  z-index: 50;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  \r\n  #show-menu-div {\r\n    height: 40px;\r\n    border: 2px solid rgba(59, 12, 12, 0.678);\r\n    padding: 3px;\r\n    border-radius: 3px;\r\n\r\n    background-color: rgb(247, 226, 211);\r\n    \r\n    position: absolute;\r\n    left: 3px;\r\n    top: 3px;\r\n    \r\n    @extend %media-501up-none;\r\n    \r\n    \r\n    #show-menu-img {\r\n      display: block;\r\n      // border: 3px solid #1f31a7;\r\n      height: 100%;\r\n      width: 100%;\r\n      transition: all 0.4s ease-out;\r\n\r\n      @include hoverEl(1.4);\r\n    }\r\n\r\n  }\r\n\r\n  .nav-logo-img {\r\n    // border: 2px solid #567f1d;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n}\r\n\r\n/* ----------------------------------------------------------- */\r\n\r\n#content {\r\n  border: 3px solid $secondary-color;\r\n  width: 100%;\r\n  @extend %flex-column-display;\r\n\r\n  #title-container {\r\n    padding-right: 10px;\r\n    // border: 3px solid #000;\r\n    background-color: $secondary-color;\r\n\r\n    z-index: 50;\r\n    position: fixed;\r\n    top: 50px;\r\n    left: 0;\r\n    right: 0;\r\n    @extend %flex-row-center-display;\r\n\r\n    @media (min-width: 500px) {\r\n      justify-content: space-around;\r\n    }\r\n\r\n    @include media-max-high-appear(401px) {\r\n     border-left: 3px solid $third-color;\r\n    };\r\n  }\r\n\r\n  #projectTitle {\r\n    border-left: 5px solid $primary-color;\r\n    padding: 5px;\r\n    // border-bottom: 2px solid #ae0a0a;\r\n    width: fit-content;\r\n    margin-left: 10px;\r\n\r\n    overflow-wrap: anywhere;\r\n  }\r\n\r\n  #pl-button-con {\r\n    // border: 1px solid #000;\r\n    margin-left: 10px;\r\n    margin-top: 0;\r\n    \r\n    @extend %flex-row-center-display;\r\n    gap: 5px;\r\n    \r\n    & > div {\r\n      background-color: $third-color;\r\n      color: $fifth-color;\r\n      display: block;\r\n      \r\n      width: 50px;\r\n      height: 30px;\r\n      // border: 1px solid #000;\r\n      border-radius: 3px;\r\n      border: none;\r\n      padding: 3px;\r\n\r\n      transition: 0.45s;\r\n      @include hoverEl(1.1);\r\n\r\n      #addpl-svg {\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n    }\r\n  }\r\n\r\n  // --------------------------------------------------------------------\r\n\r\n  // Dialog\r\n  #mydialog {\r\n    padding: 0;\r\n    border: none;\r\n    border-radius: 15px;\r\n\r\n    \r\n    @media (max-width: 600px) {\r\n      width: 60%;\r\n    } \r\n    \r\n    @media (min-width: 601px) {\r\n      width: 40%;\r\n    } \r\n\r\n    @media (max-width: 400px) {\r\n      width: 80%;\r\n    } \r\n    // Form Todo\r\n    #form-todo {\r\n      width: 100%;\r\n      // border: 2px solid #770d0d;\r\n      padding: 20px;\r\n      background-color: $ap-button-color;\r\n    \r\n      gap: 10px;\r\n      @extend %flex-column-display;\r\n\r\n      // Input Container\r\n      .input-container {\r\n        // border: 1px solid #000;\r\n        padding-bottom: 5px;\r\n        // border-bottom: 1px solid #000;\r\n        @extend %flex-column-display;\r\n\r\n        // label\r\n        label {\r\n          color: $green-text;\r\n          font-weight: 700;\r\n        }\r\n\r\n        // input-l\r\n        input {\r\n          padding: 0 10px;\r\n          border: none;\r\n          border-radius: 3px;\r\n        }\r\n        \r\n        textarea {\r\n          @extend input;\r\n          height: 50px;\r\n          border-bottom: 1px solid black;\r\n          // border-radius: 10px;\r\n        }\r\n\r\n        select {\r\n          @extend input;\r\n        }\r\n\r\n        .input-l:not([type='textarea']):not(label):not([type='checkbox']) {\r\n          height: 30px;\r\n        }\r\n\r\n        // Input Checkbox\r\n        input[type=\"checkbox\"] {\r\n          border: 1px solid #7c1515;\r\n          accent-color: rgb(0, 255, 162);\r\n          align-self: self-start;\r\n        }\r\n\r\n        \r\n        \r\n      }\r\n\r\n      // Input Button\r\n      %form-button {\r\n        margin: 0 auto;\r\n        height: 35px;\r\n        border: none;\r\n        \r\n        color: rgb(232, 231, 231);\r\n        background-color: rgb(43, 43, 81);\r\n\r\n        &:hover {\r\n          background-color: green;\r\n        }\r\n\r\n        &:active {\r\n          transform: scale(1.1);\r\n        }\r\n      }\r\n\r\n      #close-form-btn {\r\n        width: 35px;\r\n        padding: 8px;\r\n        border-radius: 17px;\r\n        font-size: 1.5rem;\r\n\r\n        display: flex;\r\n        justify-content:  center;\r\n        align-items: center;\r\n\r\n        @extend %form-button;\r\n      }\r\n\r\n      #input-btn {\r\n        width: 100px;\r\n        \r\n        font-weight: 700;\r\n        letter-spacing: 0.12ch;\r\n\r\n        transition: transform 0.35s, background-color 0.35s;\r\n        @extend %form-button;\r\n       \r\n      }\r\n\r\n    }\r\n  }\r\n}\r\n\r\n// --------------------------------------------------\r\n\r\n/* CONTENT TODO */\r\n\r\n#todo-container {\r\n  $grid-size: math.div(100%-10%, 4);\r\n  $grid-size-900: math.div(100%-35%, 2);\r\n  $grid-size-650: math.div(100%-20%, 2);\r\n  $grid-size-360: 100% - 15%;\r\n  display: grid;\r\n  grid-template-columns: $grid-size $grid-size $grid-size $grid-size;\r\n  justify-content: center;\r\n  gap: 15px;\r\n\r\n  margin-top: 20px;\r\n  padding-top: 120px;\r\n  // border: 5px solid $ap-button-color;\r\n\r\n  \r\n  @include media-max-high-appear(401px);\r\n  \r\n  @media (max-width: 900px) {\r\n    & {\r\n      grid-template-columns: $grid-size-900 $grid-size-900;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 650px) {\r\n    & {\r\n      grid-template-columns: $grid-size-650 $grid-size-650;\r\n    }\r\n  }\r\n\r\n  @media (max-width: 365px) {\r\n    & {\r\n      grid-template-columns: $grid-size-360;\r\n    }\r\n  }\r\n\r\n  .todo {\r\n    // border: 1px solid #000;\r\n    // width: 180px;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: $third-color;\r\n    color: $fifth-color;\r\n    // color: $fifth-color;\r\n    position: relative;\r\n  \r\n    @extend %flex-column-display;\r\n    align-items: center;\r\n    gap: 15px;\r\n\r\n    $td-info-map: (\r\n      title: 'Title:',\r\n      description: 'Description:',\r\n      dueDate: 'Due Date:',\r\n      priority: 'Priority:',\r\n      notes: 'Notes:',\r\n      checklist: 'Checklist:',\r\n      project: 'Project:',\r\n    );\r\n\r\n    .td-info {\r\n      width: 100%;\r\n      // border: 1px solid #000;\r\n      // @extend %flex-row-center-display;\r\n      justify-content: space-around;\r\n      word-wrap: break-word;\r\n\r\n      img {\r\n        // border: 1px solid #000;\r\n        position: relative;\r\n        \r\n        &#icon-priority {\r\n          width: 16px;\r\n          height: 20px;\r\n          bottom: -3px;\r\n          opacity: 0.8;\r\n        }\r\n\r\n        &#icon-progress {\r\n          width: 30px;\r\n          height: 30px;\r\n          bottom: -8px;\r\n        }\r\n      }\r\n    }\r\n\r\n    // td-info mixin\r\n    @mixin td-info-mixin() {\r\n      &:before {\r\n        font-size: calc(0.76rem);\r\n        justify-self: flex-start;\r\n        margin-right: 10px;\r\n        color: rgba(214, 214, 47, 0.794);\r\n\r\n        // border: 1px solid #000;\r\n        @content;\r\n      }\r\n    }\r\n\r\n    @each $key, $val in $td-info-map {\r\n      .tdi-#{$key} {\r\n        max-width: 150px;\r\n        border-bottom: 1px solid rgb(87, 91, 116);\r\n        padding-bottom: 5px;\r\n        font-weight: bold;\r\n\r\n        @if $key == 'notes' {\r\n          // overflow: auto;\r\n          height: auto;\r\n          display: block;\r\n        }\r\n        \r\n        @if $key == 'description' {\r\n          // overflow: auto;\r\n          display: block;\r\n          height: auto;\r\n        }\r\n\r\n        @include td-info-mixin() {\r\n          content: $val;\r\n        }\r\n      }\r\n    }\r\n\r\n    #priority-high {\r\n      display: inline-block;\r\n      color: rgb(97, 19, 5);\r\n      font-weight: 900;\r\n      letter-spacing: .5ch;\r\n    }\r\n\r\n    .td-button-container {\r\n      // margin-top: 8px;\r\n      // border: 1px solid #000;\r\n      width: 50px;\r\n      height: 90px;\r\n      box-shadow: 5px 5px 5px 0.2px rgb(45, 45, 85);\r\n      border-radius: 6px;\r\n      padding: 3px;\r\n      background-color: #abad35;\r\n      opacity: 0;\r\n      transition: opacity .35s;\r\n\r\n      @extend %flex-column-display;\r\n\r\n      position: absolute;\r\n      top: 0;\r\n      right: -25px;\r\n      z-index: 20;\r\n\r\n      justify-content: center;\r\n      align-items: center;\r\n      gap: 20px;\r\n\r\n      .td-button {\r\n        // border: 1px solid #000;\r\n        border-radius: 4px;\r\n        transition: 0.35s;\r\n        @include hoverEl(1.3) {\r\n          opacity: 1;\r\n          background-color: rgb(77, 77, 195);\r\n        };\r\n      }\r\n    }\r\n\r\n    &:hover .td-button-container {\r\n      opacity: 0.5;\r\n    }\r\n  }\r\n}\r\n\r\n// ----------------------------------------------------------\r\n\r\n#footer {\r\n  // border: 1px solid #000;\r\n  padding: 5px;\r\n\r\n  color: $fifth-color;\r\n  font-size: 0.8em;\r\n  line-height: 1.5em; \r\n  \r\n  @extend %flex-column-display;\r\n  align-items: center;\r\n  gap: 15px;\r\n\r\n  // & > div {\r\n  //   border: 1px solid #000;\r\n  // }\r\n\r\n  #study-review {\r\n    font-style: italic;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateFooter: () => (/* binding */ activateFooter)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");


function activateFooter() {
  const body = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.accesElement)('body', 1);

  const footer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createEl)('footer', '#footer');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addHTML)(footer, `

    <div id='author'>
      <a href='https://w-ud.github.io/the-odin-project-tasks/projects/project-todo-list/todo-list/dist/index.html' target='_blank'>W-UD</a>
    </div>

    <div id='project-code'>This Project Code on <a href='https://github.com/W-UD/the-odin-project-tasks/tree/main/projects/project-todo-list/todo-list/' target='_blank'>here</a>.</div>

    <div id='study-review'>This my task on The Odin Project to understand how Webpack is used through my project. Still lacking on how clean i write it, but i now kind of get how it works.</div>

    <div id='resources-container'>
      <a id='resources' href='https://github.com/W-UD/the-odin-project-tasks/blob/main/projects/project-todo-list/todo-list/src/icon/icon-details.md' target='_blank'>Resources</a>
    </div> 

  `);

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addElement)(footer, body);
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _todo_form_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-form.js */ "./src/todo-form.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content.js */ "./src/content.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
//  Import

















// Body
const body = document.querySelector('body');

// ---------------------------------------------------
// ---------------------------------------------------

// HEADER
// ======

// Header
const createHeader = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('header', '#header');
(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElement)(createHeader, body);

// Project Title
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.activateProjectTitle)();

// Menu Container
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.activateMenuCon)();

// Menu
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.activateMenu)();

// Menu Rows
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.activateMenuRows)();

// Initial Selected Menu 
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.initialSelectedMenu)();


// Menu Row 1 buttons
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.activatemenuRow1Button)();

// ---------------------------------------------------
// ---------------------------------------------------

// Add Project Container
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.activateAPCon)();
(0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.APForm)();

// ---------------------------------------------------
// ---------------------------------------------------

// Content

// Content
const createContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('div', '#content');
(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElement)(createContent, body);

// Activate Nav
(0,_nav_js__WEBPACK_IMPORTED_MODULE_3__.activateNav)();

// Today List h1
(0,_content_js__WEBPACK_IMPORTED_MODULE_6__.activateH1Content)();

// Input
(0,_todo_form_js__WEBPACK_IMPORTED_MODULE_5__.activatedialog)();
(0,_todo_form_js__WEBPACK_IMPORTED_MODULE_5__.activateForm)();
(0,_todo_form_js__WEBPACK_IMPORTED_MODULE_5__.activateInputCon)();
(0,_todo_form_js__WEBPACK_IMPORTED_MODULE_5__.activateInput)();

// showForm();
(0,_todo_form_js__WEBPACK_IMPORTED_MODULE_5__.activateBTN)();

// Project and List
(0,_content_js__WEBPACK_IMPORTED_MODULE_6__.activatePL_BtnCon)();

// Add Project and Todo Buttons
(0,_content_js__WEBPACK_IMPORTED_MODULE_6__.activatePlButton)();

// Activate Todo Container
(0,_todo_form_js__WEBPACK_IMPORTED_MODULE_5__.activateTodoContainer)();

// Initial Project Content
(0,_content_js__WEBPACK_IMPORTED_MODULE_6__.InitialProjectContent)();

// Change Todo Container Padding
(0,_layout_js__WEBPACK_IMPORTED_MODULE_8__.changeTodoConPad)();

// Activate Footer
(0,_footer_js__WEBPACK_IMPORTED_MODULE_7__.activateFooter)();

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateNav: () => (/* binding */ activateNav)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _icon_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/menu.svg */ "./src/icon/menu.svg");
/* harmony import */ var _icon_xmark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/xmark.svg */ "./src/icon/xmark.svg");
/* harmony import */ var _icon_notes_multiple_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon/notes-multiple-svgrepo-com.svg */ "./src/icon/notes-multiple-svgrepo-com.svg");






function activateNav() {
    const content = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.accesElement)('#content', 1);

    const navContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', '#nav-container');
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addElement)(navContainer, content);
  
    const showMenusDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', '#show-menu-div');
    const homeLogo = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createEl)('div', '#home-logo-div');

    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addMulElement)([showMenusDiv, homeLogo], navContainer);

    homeLogo.innerHTML = `<div id=home-logo-text>Todo List Project</div>`;
  
    showMenusDiv.innerHTML = `<img src='${_icon_menu_svg__WEBPACK_IMPORTED_MODULE_1__}' id='show-menu-img' class='nav-logo-img'>`;
    
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addElis)(showMenusDiv, () => {
      const header = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.accesElement)('#header', 1);
      const checkClass_showMenus = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.containCls)(header, 'show-menus');
      const checkClass_hideMenus = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.containCls)(header, 'hide-menus');

      if (!checkClass_showMenus && !checkClass_hideMenus) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(header, '.hide-menus');
        showMenusDiv.innerHTML = `<img src='${_icon_xmark_svg__WEBPACK_IMPORTED_MODULE_2__}' id='show-menu-img' class='nav-logo-img'>`;
      }
      else if (checkClass_showMenus) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass)(header, 'show-menus');
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(header, '.hide-menus');
        showMenusDiv.innerHTML = `<img src='${_icon_xmark_svg__WEBPACK_IMPORTED_MODULE_2__}' id='show-menu-img' class='nav-logo-img'>`;

      } else if (checkClass_hideMenus) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeClass)(header, 'hide-menus');
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addClass)(header, '.show-menus');
        showMenusDiv.innerHTML = `<img src='${_icon_menu_svg__WEBPACK_IMPORTED_MODULE_1__}' id='show-menu-img' class='nav-logo-img'>`;
      }
  
    });
}



/***/ }),

/***/ "./src/icon/menu.svg":
/*!***************************!*\
  !*** ./src/icon/menu.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa391ec9935c2b0eb121.svg";

/***/ }),

/***/ "./src/icon/notes-multiple-svgrepo-com.svg":
/*!*************************************************!*\
  !*** ./src/icon/notes-multiple-svgrepo-com.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89a1ca12bfb760894959.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["data","dom","content","todo-form","menu","layout","local-storage"], () => (__webpack_exec__("./src/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5teWZpbGUtMDVlODRjMGZiY2VhZmNiYjdmZGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1GQUFtRixVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLGFBQWEsWUFBWSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLGFBQWEsYUFBYSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sWUFBWSxLQUFLLFdBQVcsYUFBYSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLFlBQVksS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLFlBQVksS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFdBQVcsVUFBVSxhQUFhLGVBQWUsYUFBYSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsYUFBYSxPQUFPLE1BQU0s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aUI7QUFDakI7QUFDQTtBQUNBLDZEQUFnQjtBQUNoQjtBQUNBO0FBQ0Esb0VBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxrRUFBcUI7QUFDckI7QUFDQTtBQUNBLDREQUFnQjtBQUNoQjtBQUNBO0FBQ0EsMERBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHcUg7QUFDL0Y7QUFDQztBQUNxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQVk7QUFDaEM7QUFDQSx5QkFBeUIsOENBQVE7QUFDakMsSUFBSSxnREFBVTtBQUNkO0FBQ0EseUJBQXlCLDhDQUFRO0FBQ2pDLHFCQUFxQiw4Q0FBUTtBQUM3QjtBQUNBLElBQUksbURBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJDQUFLLENBQUM7QUFDaEQ7QUFDQSxJQUFJLDZDQUFPO0FBQ1gscUJBQXFCLGtEQUFZO0FBQ2pDLG1DQUFtQyxnREFBVTtBQUM3QyxtQ0FBbUMsZ0RBQVU7QUFDN0M7QUFDQTtBQUNBLFFBQVEsOENBQVE7QUFDaEIsOENBQThDLDRDQUFLLENBQUM7QUFDcEQ7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkIsUUFBUSw4Q0FBUTtBQUNoQiw4Q0FBOEMsNENBQUssQ0FBQztBQUNwRDtBQUNBLFFBQVE7QUFDUixRQUFRLGlEQUFXO0FBQ25CLFFBQVEsOENBQVE7QUFDaEIsOENBQThDLDJDQUFLLENBQUM7QUFDcEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNmb290ZXIsICN0b2RvLWNvbnRhaW5lciAudG9kbyAudGQtYnV0dG9uLWNvbnRhaW5lciwgI3RvZG8tY29udGFpbmVyIC50b2RvLCAjY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbyAuaW5wdXQtY29udGFpbmVyLCAjY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbywgI2NvbnRlbnQsIC5yZW5hbWUtZm9ybSwgLm1lbnUgLm1yLTAsICNtZW51cy1jb250YWluZXIsICNwcm9qZWN0LXRpdGxlLCBoZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY29udGVudCAjcGwtYnV0dG9uLWNvbiwgI2NvbnRlbnQgI3RpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI21lbnVzLWNvbnRhaW5lciwgaGVhZGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBsZWZ0OiAtNDAwcHg7XG4gICAgdG9wOiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAjbmF2LWNvbnRhaW5lciAjc2hvdy1tZW51LWRpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDZhN2Q7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuaGVhZGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGQ4ZmQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLnNob3ctbWVudXMge1xuICB0b3A6IDUwcHg7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZVNob3cgMXMgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hdGVTaG93IHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTQwMDtcbiAgfVxufVxuXG4uaGlkZS1tZW51cyB7XG4gIHRvcDogNTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzMxODlhMDtcbiAgYW5pbWF0aW9uOiBhbmltYXRlSGlkZSAxcyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZUhpZGUge1xuICAwJSB7XG4gICAgbGVmdDogLTQwMDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5cbiNwcm9qZWN0LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmNmI4MztcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIHtcbiAgI3Nob3ctbWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuI21lbnVzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBpbmhlcml0O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVudSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTg5YTA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDNweDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwMTk2MDc4NDMpO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiAwLjM1cyBsaW5lYXI7XG59XG4ubWVudSBpbWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNDgsIDc3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLm1lbnUgLm1yLTAge1xuICBwYWRkaW5nOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MDE5NjA3ODQzKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxODlhMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjQ1cyBlYXNlLCB0cmFuc2Zvcm0gMC40NXMgZWFzZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWVudSAubXItMDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE0OCwgNzcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5yZW5hbWUtZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFkMzU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNTI0YzRjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwMHB4O1xufVxuLnJlbmFtZS1mb3JtICNjaGFuZ2UtcHJvamVjdC1uYW1lLCAucmVuYW1lLWZvcm0gI2RlbC1yZW5hbWUtZm9ybSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTg5YTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4IGF1dG8gMCBhdXRvO1xufVxuLnJlbmFtZS1mb3JtICNjaGFuZ2UtcHJvamVjdC1uYW1lOmhvdmVyLCAucmVuYW1lLWZvcm0gI2RlbC1yZW5hbWUtZm9ybTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE0OCwgNzcpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG4ucmVuYW1lLWZvcm0gI2RlbC1yZW5hbWUtZm9ybSB7XG4gIG1hcmdpbjogMCAwIDNweCBhdXRvO1xufVxuXG4jYXAtZm9ybSAjYnV0dG9uLWlhcCwgI2FwLWZvcm0gI2lucHV0LWFwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jYXAtZm9ybSB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNhNDFiMWI7ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuI2FwLWZvcm0gI2lucHV0LWFwIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzBmNmI4MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4jYXAtZm9ybSAjYnV0dG9uLWlhcCB7XG4gIG1hcmdpbjogNXB4IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYWQzNTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiKDIzMywgMjQwLCAyMDcpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuI2FwLWZvcm0gI2J1dHRvbi1pYXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNDgsIDc3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI25hdi1jb250YWluZXIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMxODlhMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZDhmZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHotaW5kZXg6IDUwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4jbmF2LWNvbnRhaW5lciAjc2hvdy1tZW51LWRpdiB7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1OSwgMTIsIDEyLCAwLjY3OCk7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMjYsIDIxMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogM3B4O1xuICB0b3A6IDNweDtcbn1cbiNuYXYtY29udGFpbmVyICNzaG93LW1lbnUtZGl2ICNzaG93LW1lbnUtaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xufVxuI25hdi1jb250YWluZXIgI3Nob3ctbWVudS1kaXYgI3Nob3ctbWVudS1pbWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNDgsIDc3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG59XG4jbmF2LWNvbnRhaW5lciAubmF2LWxvZ28taW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4jY29udGVudCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlNGQ4ZmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2NvbnRlbnQgI3RpdGxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGQ4ZmQ7XG4gIHotaW5kZXg6IDUwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgI2NvbnRlbnQgI3RpdGxlLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xuICAjY29udGVudCAjdGl0bGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjA3cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMzE4OWEwO1xuICB9XG59XG4jY29udGVudCAjcHJvamVjdFRpdGxlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjQ2YTdkO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuI2NvbnRlbnQgI3BsLWJ1dHRvbi1jb24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZ2FwOiA1cHg7XG59XG4jY29udGVudCAjcGwtYnV0dG9uLWNvbiA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTg5YTA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTAxOTYwNzg0Myk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogM3B4O1xuICB0cmFuc2l0aW9uOiAwLjQ1cztcbn1cbiNjb250ZW50ICNwbC1idXR0b24tY29uID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTQ4LCA3Nyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuI2NvbnRlbnQgI3BsLWJ1dHRvbi1jb24gPiBkaXYgI2FkZHBsLXN2ZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jY29udGVudCAjbXlkaWFsb2cge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgI2NvbnRlbnQgI215ZGlhbG9nIHtcbiAgICB3aWR0aDogNjAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcbiAgI2NvbnRlbnQgI215ZGlhbG9nIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgI2NvbnRlbnQgI215ZGlhbG9nIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG4jY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhZDM1O1xuICBnYXA6IDEwcHg7XG59XG4jY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbyAuaW5wdXQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbiNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICBjb2xvcjogcmdiKDMsIDU2LCAzKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgaW5wdXQsICNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgc2VsZWN0LCAjY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbyAuaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbiNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cbiNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgLmlucHV0LWw6bm90KFt0eXBlPXRleHRhcmVhXSk6bm90KGxhYmVsKTpub3QoW3R5cGU9Y2hlY2tib3hdKSB7XG4gIGhlaWdodDogMzBweDtcbn1cbiNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgaW5wdXRbdHlwZT1jaGVja2JveF0sICNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgdGV4dGFyZWFbdHlwZT1jaGVja2JveF0sICNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvIC5pbnB1dC1jb250YWluZXIgc2VsZWN0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdjMTUxNTtcbiAgYWNjZW50LWNvbG9yOiByZ2IoMCwgMjU1LCAxNjIpO1xuICBhbGlnbi1zZWxmOiBzZWxmLXN0YXJ0O1xufVxuI2NvbnRlbnQgI215ZGlhbG9nICNmb3JtLXRvZG8gI2lucHV0LWJ0biwgI2NvbnRlbnQgI215ZGlhbG9nICNmb3JtLXRvZG8gI2Nsb3NlLWZvcm0tYnRuIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogcmdiKDIzMiwgMjMxLCAyMzEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQzLCA4MSk7XG59XG4jY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbyAjaW5wdXQtYnRuOmhvdmVyLCAjY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbyAjY2xvc2UtZm9ybS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbiNjb250ZW50ICNteWRpYWxvZyAjZm9ybS10b2RvICNpbnB1dC1idG46YWN0aXZlLCAjY29udGVudCAjbXlkaWFsb2cgI2Zvcm0tdG9kbyAjY2xvc2UtZm9ybS1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuI2NvbnRlbnQgI215ZGlhbG9nICNmb3JtLXRvZG8gI2Nsb3NlLWZvcm0tYnRuIHtcbiAgd2lkdGg6IDM1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NvbnRlbnQgI215ZGlhbG9nICNmb3JtLXRvZG8gI2lucHV0LWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJjaDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMzVzO1xufVxuXG4vKiBDT05URU5UIFRPRE8gKi9cbiN0b2RvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIuNSUgMjIuNSUgMjIuNSUgMjIuNSU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkge1xuICAjdG9kby1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMDdweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICN0b2RvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMi41JSAzMi41JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICN0b2RvLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzY1cHgpIHtcbiAgI3RvZG8tY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDg1JTtcbiAgfVxufVxuI3RvZG8tY29udGFpbmVyIC50b2RvIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxODlhMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MDE5NjA3ODQzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG59XG4jdG9kby1jb250YWluZXIgLnRvZG8gLnRkLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGQtaW5mbyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jdG9kby1jb250YWluZXIgLnRvZG8gLnRkLWluZm8gaW1nI2ljb24tcHJpb3JpdHkge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3R0b206IC0zcHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGQtaW5mbyBpbWcjaWNvbi1wcm9ncmVzcyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvdHRvbTogLThweDtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGRpLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig4NywgOTEsIDExNik7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3RvZG8tY29udGFpbmVyIC50b2RvIC50ZGktdGl0bGU6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHJnYmEoMjE0LCAyMTQsIDQ3LCAwLjc5NCk7XG4gIGNvbnRlbnQ6IFwiVGl0bGU6XCI7XG59XG4jdG9kby1jb250YWluZXIgLnRvZG8gLnRkaS1kZXNjcmlwdGlvbiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODcsIDkxLCAxMTYpO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGRpLWRlc2NyaXB0aW9uOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDIxNCwgMjE0LCA0NywgMC43OTQpO1xuICBjb250ZW50OiBcIkRlc2NyaXB0aW9uOlwiO1xufVxuI3RvZG8tY29udGFpbmVyIC50b2RvIC50ZGktZHVlRGF0ZSB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODcsIDkxLCAxMTYpO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGRpLWR1ZURhdGU6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6IHJnYmEoMjE0LCAyMTQsIDQ3LCAwLjc5NCk7XG4gIGNvbnRlbnQ6IFwiRHVlIERhdGU6XCI7XG59XG4jdG9kby1jb250YWluZXIgLnRvZG8gLnRkaS1wcmlvcml0eSB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODcsIDkxLCAxMTYpO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGRpLXByaW9yaXR5OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDIxNCwgMjE0LCA0NywgMC43OTQpO1xuICBjb250ZW50OiBcIlByaW9yaXR5OlwiO1xufVxuI3RvZG8tY29udGFpbmVyIC50b2RvIC50ZGktbm90ZXMge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDg3LCA5MSwgMTE2KTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4jdG9kby1jb250YWluZXIgLnRvZG8gLnRkaS1ub3RlczpiZWZvcmUge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogcmdiYSgyMTQsIDIxNCwgNDcsIDAuNzk0KTtcbiAgY29udGVudDogXCJOb3RlczpcIjtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGRpLWNoZWNrbGlzdCB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODcsIDkxLCAxMTYpO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGRpLWNoZWNrbGlzdDpiZWZvcmUge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogcmdiYSgyMTQsIDIxNCwgNDcsIDAuNzk0KTtcbiAgY29udGVudDogXCJDaGVja2xpc3Q6XCI7XG59XG4jdG9kby1jb250YWluZXIgLnRvZG8gLnRkaS1wcm9qZWN0IHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig4NywgOTEsIDExNik7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuI3RvZG8tY29udGFpbmVyIC50b2RvIC50ZGktcHJvamVjdDpiZWZvcmUge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogcmdiYSgyMTQsIDIxNCwgNDcsIDAuNzk0KTtcbiAgY29udGVudDogXCJQcm9qZWN0OlwiO1xufVxuI3RvZG8tY29udGFpbmVyIC50b2RvICNwcmlvcml0eS1oaWdoIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogcmdiKDk3LCAxOSwgNSk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVjaDtcbn1cbiN0b2RvLWNvbnRhaW5lciAudG9kbyAudGQtYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDAuMnB4IHJnYig0NSwgNDUsIDg1KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmFkMzU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogLTI1cHg7XG4gIHotaW5kZXg6IDIwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuI3RvZG8tY29udGFpbmVyIC50b2RvIC50ZC1idXR0b24tY29udGFpbmVyIC50ZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IDAuMzVzO1xufVxuI3RvZG8tY29udGFpbmVyIC50b2RvIC50ZC1idXR0b24tY29udGFpbmVyIC50ZC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNDgsIDc3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDE5NSk7XG59XG4jdG9kby1jb250YWluZXIgLnRvZG86aG92ZXIgLnRkLWJ1dHRvbi1jb250YWluZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbiNmb290ZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTAxOTYwNzg0Myk7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuI2Zvb3RlciAjc3R1ZHktcmV2aWV3IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWlCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQWhCRjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBaEJGOztBQW1CQTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtBQWhCRjs7QUFtRUU7RUFERjtJQUdJLFlBQUE7SUFDQSxTQUFBO0VBaEVGO0FBQ0Y7O0FBNEVFO0VBREY7SUFFSSxh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QUFBO0FBeElOO0FBMklJO0VBR0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBSUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQS9JTjtBQWlKTTtFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7QUFoSlI7QUE3ZUU7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQTRuQk0sVUFBQTtFQUNBLGtDQUFBO0FBNUlWO0FBaUpJO0VBQ0UsWUFBQTtBQS9JTjs7QUFzSkE7RUFFRSxZQUFBO0VBRUEsd0NBOXNCWTtFQStzQlosZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLG1CQUFBO0VBQ0EsU0FBQTtBQXZKRjtBQTZKRTtFQUNFLGtCQUFBO0FBM0pKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxyXFxuXFxyXFxuJHByaW1hcnktY29sb3I6ICMyNDZhN2Q7XFxyXFxuLy8gJHNlY29uZGFyeS1jb2xvcjogIzllNzhmMjtcXHJcXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTRkOGZkO1xcclxcblxcclxcbiR0aGlyZC1jb2xvcjogIzMxODlhMDtcXHJcXG4kZm91cnRoLWNvbG9yOiAjNzc5ZmE5O1xcclxcbiRmaWZ0aC1jb2xvcjogI2ZmZmZmZmU2O1xcclxcbiRzaXh0aC1jb2xvcjogIzBmNmI4MztcXHJcXG5cXHJcXG4kYXAtYnV0dG9uLWNvbG9yOiAjYWJhZDM1O1xcclxcblxcclxcbi8vIEZvcm0gY29sb3JcXHJcXG4kZ3JlZW4tdGV4dDogcmdiKDMsIDU2LCAzKTtcXHJcXG5cXHJcXG4vLyBGbGV4XFxyXFxuJWZsZXgtY29sdW1uLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbiVmbGV4LXJvdy1jZW50ZXItZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiVmbGV4LWFsaWduLWcyMCB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vLyBBbmltYXRpb25cXHJcXG5AbWl4aW4gYW5pbWF0ZS13aWR0aDIwMC1oaWRlU2hvdygkbmFtZSwgJHJ1bGUpIHtcXHJcXG4gICAgQGlmICRydWxlID09ICdoaWRlJyB7XFxyXFxuICAgICAgYW5pbWF0aW9uOiAkbmFtZSAxcyBmb3J3YXJkcztcXHJcXG4gICAgICBAa2V5ZnJhbWVzICN7JG5hbWV9IHtcXHJcXG4gICAgICAgIDAlIHtcXHJcXG4gICAgICAgICAgbGVmdDogLTQwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgMTAwJSB7XFxyXFxuICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIEBjb250ZW50O1xcclxcblxcclxcbiAgICB9IEBlbHNlIGlmICRydWxlID09ICdzaG93JyB7XFxyXFxuICAgICAgYW5pbWF0aW9uOiAkbmFtZSAxcyBmb3J3YXJkcztcXHJcXG4gICAgICAvLyBhbmltYXRpb246IG5hbWUgZHVyYXRpb24gdGltaW5nLWZ1bmN0aW9uIGRlbGF5IGl0ZXJhdGlvbi1jb3VudCBkaXJlY3Rpb24gZmlsbC1tb2RlO1xcclxcbiAgICAgIEBrZXlmcmFtZXMgI3skbmFtZX0ge1xcclxcbiAgICAgICAgMCUge1xcclxcbiAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAxMDAlIHtcXHJcXG4gICAgICAgICAgbGVmdDogLTQwMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gSG92ZXJcXHJcXG5AbWl4aW4gaG92ZXJFbCgkc2NhbGUpIHtcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNDgsIDc3KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKCRzY2FsZSk7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLyBNZWRpYSBRdWVyaWVzXFxyXFxuJG1xLXNtYWxsOiA1MDBweDtcXHJcXG5cXHJcXG4lbWVkaWEtbWF4LXNtYWxsLWhpZGRlbiB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogY2FsYygkbXEtc21hbGwgKyA0MDBweCkpIHtcXHJcXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiAtNDAwcHg7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1lZGlhLW1heC1oaWdoLWFwcGVhcigkc2l6ZSkge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IGNhbGMoJG1xLXNtYWxsICsgJHNpemUpKSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMDdweDtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiVtZWRpYS01MDF1cC1ub25lIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiBjYWxjKCRtcS1zbWFsbCArIDQwMHB4KSkge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzAwMDsgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIFxcclxcbiAgQGV4dGVuZCAlZmxleC1jb2x1bW4tZGlzcGxheTtcXHJcXG4gIEBleHRlbmQgJWZsZXgtYWxpZ24tZzIwO1xcclxcbiAgQGV4dGVuZCAlbWVkaWEtbWF4LXNtYWxsLWhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctbWVudXMge1xcclxcbiAgdG9wOiA1MHB4O1xcclxcbiAgQGluY2x1ZGUgYW5pbWF0ZS13aWR0aDIwMC1oaWRlU2hvdyhhbmltYXRlU2hvdywgJ3Nob3cnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtbWVudXMge1xcclxcbiAgdG9wOiA1MHB4O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJHRoaXJkLWNvbG9yO1xcclxcbiAgQGluY2x1ZGUgYW5pbWF0ZS13aWR0aDIwMC1oaWRlU2hvdyhhbmltYXRlSGlkZSwgJ2hpZGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3QtdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNpeHRoLWNvbG9yO1xcclxcbiAgXFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbi1kaXNwbGF5O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctbWVudS1idXR0b24ge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNtZW51cy1jb250YWluZXIge1xcclxcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIHdpZHRoOiBpbmhlcml0O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG5cXHJcXG4gIEBleHRlbmQgJWZsZXgtY29sdW1uLWRpc3BsYXk7XFxyXFxuICBAZXh0ZW5kICVmbGV4LWFsaWduLWcyMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIFxcclxcbiAgJiBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcXHJcXG4gIFxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAzcHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gIFxcclxcbiAgICBjb2xvcjogJGZpZnRoLWNvbG9yO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjM1cyBsaW5lYXI7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIGhvdmVyRWwoMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubXItMCB7XFxyXFxuICAgIHBhZGRpbmc6IGluaGVyaXQ7XFxyXFxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXHJcXG5cXHJcXG4gICAgY29sb3I6ICRmaWZ0aC1jb2xvcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjQ1cyBlYXNlLCB0cmFuc2Zvcm0gMC40NXMgZWFzZTtcXHJcXG5cXHJcXG4gICAgQGV4dGVuZCAlZmxleC1jb2x1bW4tZGlzcGxheTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIGhvdmVyRWwoMS4wNSk7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi5yZW5hbWUtZm9ybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGFwLWJ1dHRvbi1jb2xvcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTI0YzRjO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMTAwcHg7XFxyXFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbi1kaXNwbGF5O1xcclxcbiAgXFxyXFxuICAmICNjaGFuZ2UtcHJvamVjdC1uYW1lIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBtYXJnaW46IDVweCBhdXRvIDAgYXV0bztcXHJcXG4gICAgQGluY2x1ZGUgaG92ZXJFbCgxLjAzKTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgJiAjZGVsLXJlbmFtZS1mb3JtIHtcXHJcXG4gICAgQGV4dGVuZCAjY2hhbmdlLXByb2plY3QtbmFtZTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgM3B4IGF1dG87XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcclxcblxcclxcbi8vIEFQIEZPUk1cXHJcXG4laW5wdXQtYXAtZGlzcGxheS13aWR0aCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jYXAtZm9ybSB7XFxyXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjYTQxYjFiOyAqL1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICAjaW5wdXQtYXAge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkc2l4dGgtY29sb3I7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICBAZXh0ZW5kICVpbnB1dC1hcC1kaXNwbGF5LXdpZHRoO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2J1dHRvbi1pYXAge1xcclxcbiAgICBtYXJnaW46IDVweCBhdXRvO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwLWJ1dHRvbi1jb2xvcjtcXHJcXG4gIFxcclxcbiAgICBmb250LXNpemU6IC44NXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6IHJnYigyMzMsIDI0MCwgMjA3KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG4gICAgQGV4dGVuZCAlaW5wdXQtYXAtZGlzcGxheS13aWR0aDtcXHJcXG4gICAgQGluY2x1ZGUgaG92ZXJFbCgxLjAyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4jbmF2LWNvbnRhaW5lciB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHRoaXJkLWNvbG9yO1xcclxcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIC8vIG1hcmdpbjogMCAxMHB4IDBweCAxMHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHJcXG4gIHotaW5kZXg6IDUwO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgXFxyXFxuICAjc2hvdy1tZW51LWRpdiB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1OSwgMTIsIDEyLCAwLjY3OCk7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyMjYsIDIxMSk7XFxyXFxuICAgIFxcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDNweDtcXHJcXG4gICAgdG9wOiAzcHg7XFxyXFxuICAgIFxcclxcbiAgICBAZXh0ZW5kICVtZWRpYS01MDF1cC1ub25lO1xcclxcbiAgICBcXHJcXG4gICAgXFxyXFxuICAgICNzaG93LW1lbnUtaW1nIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjMWYzMWE3O1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBob3ZlckVsKDEuNCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbG9nby1pbWcge1xcclxcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjNTY3ZjFkO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBib3JkZXI6IDNweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBAZXh0ZW5kICVmbGV4LWNvbHVtbi1kaXNwbGF5O1xcclxcblxcclxcbiAgI3RpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDUwO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNTBweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIEBleHRlbmQgJWZsZXgtcm93LWNlbnRlci1kaXNwbGF5O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaW5jbHVkZSBtZWRpYS1tYXgtaGlnaC1hcHBlYXIoNDAxcHgpIHtcXHJcXG4gICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHRoaXJkLWNvbG9yO1xcclxcbiAgICB9O1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Byb2plY3RUaXRsZSB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgJHByaW1hcnktY29sb3I7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhZTBhMGE7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3BsLWJ1dHRvbi1jb24ge1xcclxcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgXFxyXFxuICAgIEBleHRlbmQgJWZsZXgtcm93LWNlbnRlci1kaXNwbGF5O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgXFxyXFxuICAgICYgPiBkaXYge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZC1jb2xvcjtcXHJcXG4gICAgICBjb2xvcjogJGZpZnRoLWNvbG9yO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIFxcclxcbiAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgcGFkZGluZzogM3B4O1xcclxcblxcclxcbiAgICAgIHRyYW5zaXRpb246IDAuNDVzO1xcclxcbiAgICAgIEBpbmNsdWRlIGhvdmVyRWwoMS4xKTtcXHJcXG5cXHJcXG4gICAgICAjYWRkcGwtc3ZnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4gIC8vIERpYWxvZ1xcclxcbiAgI215ZGlhbG9nIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcblxcclxcbiAgICBcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgfSBcXHJcXG4gICAgXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xcclxcbiAgICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIH0gXFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIH0gXFxyXFxuICAgIC8vIEZvcm0gVG9kb1xcclxcbiAgICAjZm9ybS10b2RvIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjNzcwZDBkO1xcclxcbiAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFwLWJ1dHRvbi1jb2xvcjtcXHJcXG4gICAgXFxyXFxuICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgIEBleHRlbmQgJWZsZXgtY29sdW1uLWRpc3BsYXk7XFxyXFxuXFxyXFxuICAgICAgLy8gSW5wdXQgQ29udGFpbmVyXFxyXFxuICAgICAgLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgQGV4dGVuZCAlZmxleC1jb2x1bW4tZGlzcGxheTtcXHJcXG5cXHJcXG4gICAgICAgIC8vIGxhYmVsXFxyXFxuICAgICAgICBsYWJlbCB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkZ3JlZW4tdGV4dDtcXHJcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC8vIGlucHV0LWxcXHJcXG4gICAgICAgIGlucHV0IHtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgdGV4dGFyZWEge1xcclxcbiAgICAgICAgICBAZXh0ZW5kIGlucHV0O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHNlbGVjdCB7XFxyXFxuICAgICAgICAgIEBleHRlbmQgaW5wdXQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW5wdXQtbDpub3QoW3R5cGU9J3RleHRhcmVhJ10pOm5vdChsYWJlbCk6bm90KFt0eXBlPSdjaGVja2JveCddKSB7XFxyXFxuICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC8vIElucHV0IENoZWNrYm94XFxyXFxuICAgICAgICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdjMTUxNTtcXHJcXG4gICAgICAgICAgYWNjZW50LWNvbG9yOiByZ2IoMCwgMjU1LCAxNjIpO1xcclxcbiAgICAgICAgICBhbGlnbi1zZWxmOiBzZWxmLXN0YXJ0O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLy8gSW5wdXQgQnV0dG9uXFxyXFxuICAgICAgJWZvcm0tYnV0dG9uIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBjb2xvcjogcmdiKDIzMiwgMjMxLCAyMzEpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MywgODEpO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICNjbG9zZS1mb3JtLWJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ICBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgQGV4dGVuZCAlZm9ybS1idXR0b247XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICNpbnB1dC1idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJjaDtcXHJcXG5cXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cywgYmFja2dyb3VuZC1jb2xvciAwLjM1cztcXHJcXG4gICAgICAgIEBleHRlbmQgJWZvcm0tYnV0dG9uO1xcclxcbiAgICAgICBcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4vKiBDT05URU5UIFRPRE8gKi9cXHJcXG5cXHJcXG4jdG9kby1jb250YWluZXIge1xcclxcbiAgJGdyaWQtc2l6ZTogbWF0aC5kaXYoMTAwJS0xMCUsIDQpO1xcclxcbiAgJGdyaWQtc2l6ZS05MDA6IG1hdGguZGl2KDEwMCUtMzUlLCAyKTtcXHJcXG4gICRncmlkLXNpemUtNjUwOiBtYXRoLmRpdigxMDAlLTIwJSwgMik7XFxyXFxuICAkZ3JpZC1zaXplLTM2MDogMTAwJSAtIDE1JTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICRncmlkLXNpemUgJGdyaWQtc2l6ZSAkZ3JpZC1zaXplICRncmlkLXNpemU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG5cXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTIwcHg7XFxyXFxuICAvLyBib3JkZXI6IDVweCBzb2xpZCAkYXAtYnV0dG9uLWNvbG9yO1xcclxcblxcclxcbiAgXFxyXFxuICBAaW5jbHVkZSBtZWRpYS1tYXgtaGlnaC1hcHBlYXIoNDAxcHgpO1xcclxcbiAgXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgJiB7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkZ3JpZC1zaXplLTkwMCAkZ3JpZC1zaXplLTkwMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuICAgICYge1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGdyaWQtc2l6ZS02NTAgJGdyaWQtc2l6ZS02NTA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNjVweCkge1xcclxcbiAgICAmIHtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICRncmlkLXNpemUtMzYwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kbyB7XFxyXFxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgIC8vIHdpZHRoOiAxODBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWNvbG9yO1xcclxcbiAgICBjb2xvcjogJGZpZnRoLWNvbG9yO1xcclxcbiAgICAvLyBjb2xvcjogJGZpZnRoLWNvbG9yO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBcXHJcXG4gICAgQGV4dGVuZCAlZmxleC1jb2x1bW4tZGlzcGxheTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcblxcclxcbiAgICAkdGQtaW5mby1tYXA6IChcXHJcXG4gICAgICB0aXRsZTogJ1RpdGxlOicsXFxyXFxuICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbjonLFxcclxcbiAgICAgIGR1ZURhdGU6ICdEdWUgRGF0ZTonLFxcclxcbiAgICAgIHByaW9yaXR5OiAnUHJpb3JpdHk6JyxcXHJcXG4gICAgICBub3RlczogJ05vdGVzOicsXFxyXFxuICAgICAgY2hlY2tsaXN0OiAnQ2hlY2tsaXN0OicsXFxyXFxuICAgICAgcHJvamVjdDogJ1Byb2plY3Q6JyxcXHJcXG4gICAgKTtcXHJcXG5cXHJcXG4gICAgLnRkLWluZm8ge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgICAgLy8gQGV4dGVuZCAlZmxleC1yb3ctY2VudGVyLWRpc3BsYXk7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcblxcclxcbiAgICAgIGltZyB7XFxyXFxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAmI2ljb24tcHJpb3JpdHkge1xcclxcbiAgICAgICAgICB3aWR0aDogMTZweDtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICBib3R0b206IC0zcHg7XFxyXFxuICAgICAgICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYjaWNvbi1wcm9ncmVzcyB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgIGJvdHRvbTogLThweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLy8gdGQtaW5mbyBtaXhpblxcclxcbiAgICBAbWl4aW4gdGQtaW5mby1taXhpbigpIHtcXHJcXG4gICAgICAmOmJlZm9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMC43NnJlbSk7XFxyXFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICBjb2xvcjogcmdiYSgyMTQsIDIxNCwgNDcsIDAuNzk0KTtcXHJcXG5cXHJcXG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAgICAgICBAY29udGVudDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGVhY2ggJGtleSwgJHZhbCBpbiAkdGQtaW5mby1tYXAge1xcclxcbiAgICAgIC50ZGktI3ska2V5fSB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig4NywgOTEsIDExNik7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFxyXFxuICAgICAgICBAaWYgJGtleSA9PSAnbm90ZXMnIHtcXHJcXG4gICAgICAgICAgLy8gb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBcXHJcXG4gICAgICAgIEBpZiAka2V5ID09ICdkZXNjcmlwdGlvbicge1xcclxcbiAgICAgICAgICAvLyBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIHRkLWluZm8tbWl4aW4oKSB7XFxyXFxuICAgICAgICAgIGNvbnRlbnQ6ICR2YWw7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwcmlvcml0eS1oaWdoIHtcXHJcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgY29sb3I6IHJnYig5NywgMTksIDUpO1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC41Y2g7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRkLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICAgIC8vIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgIGhlaWdodDogOTBweDtcXHJcXG4gICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAwLjJweCByZ2IoNDUsIDQ1LCA4NSk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJhZDM1O1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzO1xcclxcblxcclxcbiAgICAgIEBleHRlbmQgJWZsZXgtY29sdW1uLWRpc3BsYXk7XFxyXFxuXFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICByaWdodDogLTI1cHg7XFxyXFxuICAgICAgei1pbmRleDogMjA7XFxyXFxuXFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAgICAgLnRkLWJ1dHRvbiB7XFxyXFxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zNXM7XFxyXFxuICAgICAgICBAaW5jbHVkZSBob3ZlckVsKDEuMykge1xcclxcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDc3LCAxOTUpO1xcclxcbiAgICAgICAgfTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciAudGQtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuXFxyXFxuICBjb2xvcjogJGZpZnRoLWNvbG9yO1xcclxcbiAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTsgXFxyXFxuICBcXHJcXG4gIEBleHRlbmQgJWZsZXgtY29sdW1uLWRpc3BsYXk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcblxcclxcbiAgLy8gJiA+IGRpdiB7XFxyXFxuICAvLyAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxuICAvLyB9XFxyXFxuXFxyXFxuICAjc3R1ZHktcmV2aWV3IHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZUVsLCBhY2Nlc0VsZW1lbnQsIGFkZEhUTUwsIGFkZEVsZW1lbnQgfSBmcm9tICcuL2RvbS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgYm9keSA9IGFjY2VzRWxlbWVudCgnYm9keScsIDEpO1xyXG5cclxuICBjb25zdCBmb290ZXIgPSBjcmVhdGVFbCgnZm9vdGVyJywgJyNmb290ZXInKTtcclxuICBhZGRIVE1MKGZvb3RlciwgYFxyXG5cclxuICAgIDxkaXYgaWQ9J2F1dGhvcic+XHJcbiAgICAgIDxhIGhyZWY9J2h0dHBzOi8vdy11ZC5naXRodWIuaW8vdGhlLW9kaW4tcHJvamVjdC10YXNrcy9wcm9qZWN0cy9wcm9qZWN0LXRvZG8tbGlzdC90b2RvLWxpc3QvZGlzdC9pbmRleC5odG1sJyB0YXJnZXQ9J19ibGFuayc+Vy1VRDwvYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgaWQ9J3Byb2plY3QtY29kZSc+VGhpcyBQcm9qZWN0IENvZGUgb24gPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1ctVUQvdGhlLW9kaW4tcHJvamVjdC10YXNrcy90cmVlL21haW4vcHJvamVjdHMvcHJvamVjdC10b2RvLWxpc3QvdG9kby1saXN0LycgdGFyZ2V0PSdfYmxhbmsnPmhlcmU8L2E+LjwvZGl2PlxyXG5cclxuICAgIDxkaXYgaWQ9J3N0dWR5LXJldmlldyc+VGhpcyBteSB0YXNrIG9uIFRoZSBPZGluIFByb2plY3QgdG8gdW5kZXJzdGFuZCBob3cgV2VicGFjayBpcyB1c2VkIHRocm91Z2ggbXkgcHJvamVjdC4gU3RpbGwgbGFja2luZyBvbiBob3cgY2xlYW4gaSB3cml0ZSBpdCwgYnV0IGkgbm93IGtpbmQgb2YgZ2V0IGhvdyBpdCB3b3Jrcy48L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGlkPSdyZXNvdXJjZXMtY29udGFpbmVyJz5cclxuICAgICAgPGEgaWQ9J3Jlc291cmNlcycgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1ctVUQvdGhlLW9kaW4tcHJvamVjdC10YXNrcy9ibG9iL21haW4vcHJvamVjdHMvcHJvamVjdC10b2RvLWxpc3QvdG9kby1saXN0L3NyYy9pY29uL2ljb24tZGV0YWlscy5tZCcgdGFyZ2V0PSdfYmxhbmsnPlJlc291cmNlczwvYT5cclxuICAgIDwvZGl2PiBcclxuXHJcbiAgYCk7XHJcblxyXG4gIGFkZEVsZW1lbnQoZm9vdGVyLCBib2R5KTtcclxufSIsIi8vICBJbXBvcnRcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IHsgbWVudXNEYXRhLCBtYXBNRFRvRGl2LCBpbk1EIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUVsLCBhZGRFbGVtZW50LCBhZGRNdWxFbGVtZW50LCBhY2Nlc0VsZW1lbnQsIGNyZWF0ZU11bEVsLCBhZGRNdWxUZXh0LCBlbXB0eUVsLCBzaG93Rm9ybSwgY2xzRm9ybSwgYWRkRWxpcyB9IGZyb20gJy4vZG9tLmpzJztcclxuXHJcbmltcG9ydCB7IGFjdGl2YXRlTmF2IH0gZnJvbSAnLi9uYXYuanMnO1xyXG5cclxuaW1wb3J0IHsgc3dpdGNoTWVudSwgYWN0aXZhdGVNZW51Um93cywgYWN0aXZhdGVQcm9qZWN0VGl0bGUsIGFjdGl2YXRlTWVudUNvbiwgYWN0aXZhdGVNZW51LCBpbml0aWFsU2VsZWN0ZWRNZW51LCBhY3RpdmF0ZW1lbnVSb3cxQnV0dG9uLCBhY3RpdmF0ZUFQQ29uLCBBUEZvcm0gfSBmcm9tICcuL21lbnUuanMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aXZhdGVkaWFsb2csIGFjdGl2YXRlRm9ybSwgYWN0aXZhdGVJbnB1dENvbiwgYWN0aXZhdGVJbnB1dCwgYWN0aXZhdGVCVE4gLCBhY3RpdmF0ZVRvZG9Db250YWluZXIsIHBvc3RUb0RvLH0gZnJvbSAnLi90b2RvLWZvcm0uanMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aXZhdGVIMUNvbnRlbnQsIGFjdGl2YXRlUExfQnRuQ29uLCBhY3RpdmF0ZVBsQnV0dG9uLCBJbml0aWFsUHJvamVjdENvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnQuanMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aXZhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3Rlci5qcyc7XHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VUb2RvQ29uUGFkIH0gZnJvbSAnLi9sYXlvdXQuanMnO1xyXG5cclxuLy8gQm9keVxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gSEVBREVSXHJcbi8vID09PT09PVxyXG5cclxuLy8gSGVhZGVyXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9IGNyZWF0ZUVsKCdoZWFkZXInLCAnI2hlYWRlcicpO1xyXG5hZGRFbGVtZW50KGNyZWF0ZUhlYWRlciwgYm9keSk7XHJcblxyXG4vLyBQcm9qZWN0IFRpdGxlXHJcbmFjdGl2YXRlUHJvamVjdFRpdGxlKCk7XHJcblxyXG4vLyBNZW51IENvbnRhaW5lclxyXG5hY3RpdmF0ZU1lbnVDb24oKTtcclxuXHJcbi8vIE1lbnVcclxuYWN0aXZhdGVNZW51KCk7XHJcblxyXG4vLyBNZW51IFJvd3NcclxuYWN0aXZhdGVNZW51Um93cygpO1xyXG5cclxuLy8gSW5pdGlhbCBTZWxlY3RlZCBNZW51IFxyXG5pbml0aWFsU2VsZWN0ZWRNZW51KCk7XHJcblxyXG5cclxuLy8gTWVudSBSb3cgMSBidXR0b25zXHJcbmFjdGl2YXRlbWVudVJvdzFCdXR0b24oKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIEFkZCBQcm9qZWN0IENvbnRhaW5lclxyXG5hY3RpdmF0ZUFQQ29uKCk7XHJcbkFQRm9ybSgpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQ29udGVudFxyXG5cclxuLy8gQ29udGVudFxyXG5jb25zdCBjcmVhdGVDb250ZW50ID0gY3JlYXRlRWwoJ2RpdicsICcjY29udGVudCcpO1xyXG5hZGRFbGVtZW50KGNyZWF0ZUNvbnRlbnQsIGJvZHkpO1xyXG5cclxuLy8gQWN0aXZhdGUgTmF2XHJcbmFjdGl2YXRlTmF2KCk7XHJcblxyXG4vLyBUb2RheSBMaXN0IGgxXHJcbmFjdGl2YXRlSDFDb250ZW50KCk7XHJcblxyXG4vLyBJbnB1dFxyXG5hY3RpdmF0ZWRpYWxvZygpO1xyXG5hY3RpdmF0ZUZvcm0oKTtcclxuYWN0aXZhdGVJbnB1dENvbigpO1xyXG5hY3RpdmF0ZUlucHV0KCk7XHJcblxyXG4vLyBzaG93Rm9ybSgpO1xyXG5hY3RpdmF0ZUJUTigpO1xyXG5cclxuLy8gUHJvamVjdCBhbmQgTGlzdFxyXG5hY3RpdmF0ZVBMX0J0bkNvbigpO1xyXG5cclxuLy8gQWRkIFByb2plY3QgYW5kIFRvZG8gQnV0dG9uc1xyXG5hY3RpdmF0ZVBsQnV0dG9uKCk7XHJcblxyXG4vLyBBY3RpdmF0ZSBUb2RvIENvbnRhaW5lclxyXG5hY3RpdmF0ZVRvZG9Db250YWluZXIoKTtcclxuXHJcbi8vIEluaXRpYWwgUHJvamVjdCBDb250ZW50XHJcbkluaXRpYWxQcm9qZWN0Q29udGVudCgpO1xyXG5cclxuLy8gQ2hhbmdlIFRvZG8gQ29udGFpbmVyIFBhZGRpbmdcclxuY2hhbmdlVG9kb0NvblBhZCgpO1xyXG5cclxuLy8gQWN0aXZhdGUgRm9vdGVyXHJcbmFjdGl2YXRlRm9vdGVyKCk7IiwiaW1wb3J0IHsgYWRkTXVsRWxlbWVudCwgY3JlYXRlRWwsIGFkZEVsZW1lbnQsIGFjY2VzRWxlbWVudCwgYWRkRWxpcywgYWRkQ2xhc3MsIHRvZ2dsZUNsYXNzLCByZW1vdmVDbGFzcywgY29udGFpbkNscyB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgaWNvbjEgZnJvbSAnLi9pY29uL21lbnUuc3ZnJztcclxuaW1wb3J0IGljb24yIGZyb20gJy4vaWNvbi94bWFyay5zdmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnLi9pY29uL25vdGVzLW11bHRpcGxlLXN2Z3JlcG8tY29tLnN2Zyc7XHJcblxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVOYXYoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYWNjZXNFbGVtZW50KCcjY29udGVudCcsIDEpO1xyXG5cclxuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnI25hdi1jb250YWluZXInKTtcclxuICAgIGFkZEVsZW1lbnQobmF2Q29udGFpbmVyLCBjb250ZW50KTtcclxuICBcclxuICAgIGNvbnN0IHNob3dNZW51c0RpdiA9IGNyZWF0ZUVsKCdkaXYnLCAnI3Nob3ctbWVudS1kaXYnKTtcclxuICAgIGNvbnN0IGhvbWVMb2dvID0gY3JlYXRlRWwoJ2RpdicsICcjaG9tZS1sb2dvLWRpdicpO1xyXG5cclxuICAgIGFkZE11bEVsZW1lbnQoW3Nob3dNZW51c0RpdiwgaG9tZUxvZ29dLCBuYXZDb250YWluZXIpO1xyXG5cclxuICAgIGhvbWVMb2dvLmlubmVySFRNTCA9IGA8ZGl2IGlkPWhvbWUtbG9nby10ZXh0PlRvZG8gTGlzdCBQcm9qZWN0PC9kaXY+YDtcclxuICBcclxuICAgIHNob3dNZW51c0Rpdi5pbm5lckhUTUwgPSBgPGltZyBzcmM9JyR7aWNvbjF9JyBpZD0nc2hvdy1tZW51LWltZycgY2xhc3M9J25hdi1sb2dvLWltZyc+YDtcclxuICAgIFxyXG4gICAgYWRkRWxpcyhzaG93TWVudXNEaXYsICgpID0+IHtcclxuICAgICAgY29uc3QgaGVhZGVyID0gYWNjZXNFbGVtZW50KCcjaGVhZGVyJywgMSk7XHJcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3Nfc2hvd01lbnVzID0gY29udGFpbkNscyhoZWFkZXIsICdzaG93LW1lbnVzJyk7XHJcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3NfaGlkZU1lbnVzID0gY29udGFpbkNscyhoZWFkZXIsICdoaWRlLW1lbnVzJyk7XHJcblxyXG4gICAgICBpZiAoIWNoZWNrQ2xhc3Nfc2hvd01lbnVzICYmICFjaGVja0NsYXNzX2hpZGVNZW51cykge1xyXG4gICAgICAgIGFkZENsYXNzKGhlYWRlciwgJy5oaWRlLW1lbnVzJyk7XHJcbiAgICAgICAgc2hvd01lbnVzRGl2LmlubmVySFRNTCA9IGA8aW1nIHNyYz0nJHtpY29uMn0nIGlkPSdzaG93LW1lbnUtaW1nJyBjbGFzcz0nbmF2LWxvZ28taW1nJz5gO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoZWNrQ2xhc3Nfc2hvd01lbnVzKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaGVhZGVyLCAnc2hvdy1tZW51cycpO1xyXG4gICAgICAgIGFkZENsYXNzKGhlYWRlciwgJy5oaWRlLW1lbnVzJyk7XHJcbiAgICAgICAgc2hvd01lbnVzRGl2LmlubmVySFRNTCA9IGA8aW1nIHNyYz0nJHtpY29uMn0nIGlkPSdzaG93LW1lbnUtaW1nJyBjbGFzcz0nbmF2LWxvZ28taW1nJz5gO1xyXG5cclxuICAgICAgfSBlbHNlIGlmIChjaGVja0NsYXNzX2hpZGVNZW51cykge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKGhlYWRlciwgJ2hpZGUtbWVudXMnKTtcclxuICAgICAgICBhZGRDbGFzcyhoZWFkZXIsICcuc2hvdy1tZW51cycpO1xyXG4gICAgICAgIHNob3dNZW51c0Rpdi5pbm5lckhUTUwgPSBgPGltZyBzcmM9JyR7aWNvbjF9JyBpZD0nc2hvdy1tZW51LWltZycgY2xhc3M9J25hdi1sb2dvLWltZyc+YDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFjdGl2YXRlTmF2IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9