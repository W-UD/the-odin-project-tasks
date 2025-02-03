"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["local-storage"],{

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LS: () => (/* binding */ LS)
/* harmony export */ });
class LS {
  static getInto(key, data) {
    if (typeof data !== 'string') {
      const dataString = this.stringify(data);
  
      return localStorage.setItem(key, dataString);
    }
    else {
      return localStorage.setItem(key, data);
    }
  }

  static getFrom(data) {
    return localStorage.getItem(data);
  }

  static stringify(data) {
    return JSON.stringify(data);
  }

  static parse(data) {
    return JSON.parse(data);
  }

  static hasProperty(key) {
    return localStorage.hasOwnProperty(key);
  }

  static getParse(data) {
    const getData = this.getFrom(data);

    return this.parse(getData);
  }

  static delProperty(name) {
    return localStorage.removeItem(name);
  }

  static notNull(key) {
    const getValue = this.getParse(key);
    console.log(getValue.length);
    return getValue.length !== 0 ? true : false;
  }

  static changePropertyName(dataName, newName) {
    const getProperty = this.getParse(dataName);
    this.getInto(newName, getProperty);
    this.delProperty(dataName);
  }

}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/local-storage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS5teWZpbGUtZjYzN2Q5ZTQ5NWJhYzllNGY5MDIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTFMge1xyXG4gIHN0YXRpYyBnZXRJbnRvKGtleSwgZGF0YSkge1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBkYXRhU3RyaW5nID0gdGhpcy5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgXHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGFTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEZyb20oZGF0YSkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0cmluZ2lmeShkYXRhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFzUHJvcGVydHkoa2V5KSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGtleSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UGFyc2UoZGF0YSkge1xyXG4gICAgY29uc3QgZ2V0RGF0YSA9IHRoaXMuZ2V0RnJvbShkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZShnZXREYXRhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxQcm9wZXJ0eShuYW1lKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbm90TnVsbChrZXkpIHtcclxuICAgIGNvbnN0IGdldFZhbHVlID0gdGhpcy5nZXRQYXJzZShrZXkpO1xyXG4gICAgY29uc29sZS5sb2coZ2V0VmFsdWUubGVuZ3RoKTtcclxuICAgIHJldHVybiBnZXRWYWx1ZS5sZW5ndGggIT09IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hhbmdlUHJvcGVydHlOYW1lKGRhdGFOYW1lLCBuZXdOYW1lKSB7XHJcbiAgICBjb25zdCBnZXRQcm9wZXJ0eSA9IHRoaXMuZ2V0UGFyc2UoZGF0YU5hbWUpO1xyXG4gICAgdGhpcy5nZXRJbnRvKG5ld05hbWUsIGdldFByb3BlcnR5KTtcclxuICAgIHRoaXMuZGVsUHJvcGVydHkoZGF0YU5hbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IExTIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9