"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["dom"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accesElement: () => (/* binding */ accesElement),
/* harmony export */   addAtr: () => (/* binding */ addAtr),
/* harmony export */   addChild: () => (/* binding */ addChild),
/* harmony export */   addChild_of_ElArr: () => (/* binding */ addChild_of_ElArr),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addCls_childNodes: () => (/* binding */ addCls_childNodes),
/* harmony export */   addDataSet: () => (/* binding */ addDataSet),
/* harmony export */   addElement: () => (/* binding */ addElement),
/* harmony export */   addElis: () => (/* binding */ addElis),
/* harmony export */   addHTML: () => (/* binding */ addHTML),
/* harmony export */   addId: () => (/* binding */ addId),
/* harmony export */   addMulEl_Cls: () => (/* binding */ addMulEl_Cls),
/* harmony export */   addMulElement: () => (/* binding */ addMulElement),
/* harmony export */   addMulId: () => (/* binding */ addMulId),
/* harmony export */   addMulText: () => (/* binding */ addMulText),
/* harmony export */   addPlaceholder: () => (/* binding */ addPlaceholder),
/* harmony export */   changeObjectData: () => (/* binding */ changeObjectData),
/* harmony export */   checkCI: () => (/* binding */ checkCI),
/* harmony export */   clsForm: () => (/* binding */ clsForm),
/* harmony export */   containCls: () => (/* binding */ containCls),
/* harmony export */   createEl: () => (/* binding */ createEl),
/* harmony export */   createMulEl: () => (/* binding */ createMulEl),
/* harmony export */   emptyEl: () => (/* binding */ emptyEl),
/* harmony export */   fChild: () => (/* binding */ fChild),
/* harmony export */   findPosition: () => (/* binding */ findPosition),
/* harmony export */   getChild: () => (/* binding */ getChild),
/* harmony export */   getInnerText: () => (/* binding */ getInnerText),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   shiftArrP: () => (/* binding */ shiftArrP),
/* harmony export */   showForm: () => (/* binding */ showForm),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");


// Accesing Element
const body = document.querySelector('body');

// Create new element
function createEl(element, identifier) {
  const el = document.createElement(element);
  switch (checkCI(identifier)) {
    case 'class':
      addClass(el, identifier);
      break;
    case 'id':
      addId(el, identifier);
      break;
  }
  return el;
}

// Create Multiple Element
function createMulEl(elArr, identifier) {
  let idSuffix = 1;
  const newElArr = [];
  elArr.forEach(el => {
    if (checkCI(identifier) === 'class') {
      const newEl = createEl(el, identifier);
      newElArr.push(newEl);
    }
    else if (checkCI(identifier) === 'id') {
      const newEl = createEl(el, identifier+idSuffix);
      idSuffix += 1;
      newElArr.push(newEl);
    }

  });

  idSuffix = 1;

  return newElArr;
}

// Add id 
function addId(el, id) {
  return el.id = id.slice(1);
}

// Add Multiple Id
function addMulId(elArr, idArr, prefix='') {
  elArr.forEach((el, i) => el.id = prefix + idArr[i]);
}

// Add Attribute
function addAtr(els, atrName, atrValue, prefix='') {
  if (Array.isArray(els) && Array.isArray(atrValue)) {
    els.forEach((e, i) => {
      if (atrValue[i] === 1) {
        e.setAttribute(atrName, '');
        return;
      }
      atrValue[i] === '' ? null :
        e.setAttribute(atrName, prefix + atrValue[i]);
    })
  }
  else if ((typeof els === 'object') && (typeof atrName === 'string') && (typeof atrValue === 'string')) {

    els.setAttribute(atrName, prefix + atrValue);
  }
  else if((typeof els === 'object') && (atrValue === 1)) {
    els.setAttribute(atrName, '');
  }

}

// Add DataSet
function addDataSet(elArr, atr, value) {
  if (Array.isArray(elArr) &&Array.isArray(atr) && Array.isArray(value)) {
    elArr.forEach((e, i) => {
      value[i] = value[i].split(' ').join('_');
      e.setAttribute(`data-${atr[i]}`, value[i].toLowerCase());
    })
  } 
  else if ( (typeof atr === 'string') && typeof (value === 'string') && (!Array.isArray(elArr)) ) {
    elArr.setAttribute(`data-${atr}`, value.toLowerCase());
  }
}

// Add class
function addClass(el, cls) {
  return el.classList.add(cls.slice(1));
}

// Add Class to Multiple Elements
function addMulEl_Cls(elArr, clsArr, prefix='') {
  return elArr.forEach( (e, i) => addClass(e, prefix + clsArr[i]));
}

// Remove Class
function removeClass(el, cls) {
  el.classList.remove(cls);
}

// Togggle Class
function toggleClass(el, cls) {
  el.classList.toggle(cls);
}

// Check Contain Class
function containCls(el, cls) {
  return el.classList.contains(cls);
}

// Class Id Check
function checkCI(identifier) {
  const charZeroIdr = identifier.charAt(0);
  if (charZeroIdr === '.') {
    return 'class'
  }
  else if (charZeroIdr === '#') {
    return 'id';
  }
}

// Add element into element
function addElement(element, into) {
  into.appendChild(element);
  return element;
}

// Add Multiple Elements
function addMulElement(elArr, into) {
  return elArr.forEach(el => addElement(el, into));
}

// Acces Element
function accesElement(elIdentifier, num='') {
  return num === 1 ? 
    document.querySelector(elIdentifier) :
    document.querySelectorAll(elIdentifier);
}

// Add Multiple Text
function addMulText(elArr, textArr) {
  const regex = /_/;
  elArr.forEach( (el, index) => {
    const newEl = el;

    Array.isArray(textArr) ?
      newEl.innerText = textArr[index] :
      newEl.innerText = textArr;
  });
}

// Get Inner Text
function getInnerText(elArr) {
  let text = [];
  if (Array.isArray(elArr)) {
    elArr.forEach(e => {
      text.push(e.innerText.toLowerCase());
    });

  }
  else {
    text = elArr.innerText.toLowerCase();
  }

  return text;
}

// /Add Placeholder
function addPlaceholder(elArr, ph) {
  if (Array.isArray(elArr) && Array.isArray(ph)) {

    elArr.forEach((el, i) => el.placeholder = ph[i]);
    
  } else if (Array.isArray(elArr)) {
    
    elArr.forEach((el) => el.placeholder = ph);

  } else {
    
    elArr.placeholder = ph;
  }

}

// Add child
function addChild(tag, identifier='', parent) {
  console.log(Array.isArray(tag));
  if (Array.isArray(tag)) {
    const els = createMulEl(tag, identifier);
    addMulElement(els, parent);

    return els;
  } 
  else if (typeof tag === 'string') {
    const el = createEl(tag, identifier)
    addElement(el, parent);

    return el;
  }

}

// Add child to each Element Array
function addChild_of_ElArr(elArr, elToAdd, identifier) {
  const menuRowArr = [];
  elArr.forEach(row => {
    const menuRow = addChild(elToAdd, identifier, row);
    
    menuRowArr.push(menuRow);
  });

  return menuRowArr;
}

// Add new class to each ChildNodes
function addCls_childNodes(parent, cls) {
  if (Array.isArray(parent)) {

    parent.forEach( (el) => {
      const newMR = getChild(el);
      newMR.forEach( (elC, elCI) => {
        addClass(elC, `${cls + elCI}`);
      });
      
      return newMR;
    });

  }
  else if (typeof parent === 'string') {
    const newMR = getChild(el);
    newMR.forEach( (elC, elCI) => {
      addClass(elC, `${cls + elCI}`);
    });

    return newMR;
  }
}

// Add HTML
function addHTML(el, htmlC='') {
  return el.innerHTML = `${htmlC}`;
}

// Remove childnodes
function emptyEl(el) {
  return el.innerHTML = '';
}

// Get All ChildNodes
function getChild(parent) {
  return Array.from(parent.childNodes);
}

// Find Child
function fChild(element, selector) {
  const el = Array.from(element.children);
  if (checkCI(selector) === 'class') {
    return el.find(child => child.classList.contains(selector.slice(1)) );
  }
  else if (checkCI(selector) === 'id') {
    return el.find(child => child.id === selector.slice(1) );
  }
}

// AddEvent Listner
function addElis(el, callback, event='click') {
  !Array.isArray(el) ?
    el.addEventListener(event, callback) 
    : el.forEach(item => item.addEventListener(event, callback));
}

// Show Dialog
function showForm() {
  const dialog = accesElement('#mydialog', 1)
  dialog.showModal();
}

// Close Dialog
function clsForm() {
  const dialog = accesElement('#mydialog', 1)
  dialog.close();
}

// Shif Array Item Position
function shiftArrP(arr, pArr, toPos) {
  const newArr = Array.from(arr);

  console.log(arr[pArr[1]])
  newArr.forEach((item, i) => {
    newArr[toPos[i]] = arr[pArr[i]];
    // newArr.push(arr[toPos[i]]);
  });

  console.log(newArr);
}

// Find Index Of Item In An Array
function findPosition(arr, item) {
  return arr.findIndex(el => el.toLowerCase() === getInnerText(item));
}

// Change Object Value
function changeObjectData(data, property, value) {
  if (Array.isArray(data)) {
    data.forEach(el => {
      el[property] = value;
    });
  } else if (typeof data === 'object') {
    data.hasOwnProperty(property) ? data[property] = value : null
  }

  // return newData;
  return data;
}

// ----------------------------------------------------






/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExTIH0gZnJvbSBcIi4vbG9jYWwtc3RvcmFnZVwiO1xyXG5cclxuLy8gQWNjZXNpbmcgRWxlbWVudFxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuLy8gQ3JlYXRlIG5ldyBlbGVtZW50XHJcbmZ1bmN0aW9uIGNyZWF0ZUVsKGVsZW1lbnQsIGlkZW50aWZpZXIpIHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XHJcbiAgc3dpdGNoIChjaGVja0NJKGlkZW50aWZpZXIpKSB7XHJcbiAgICBjYXNlICdjbGFzcyc6XHJcbiAgICAgIGFkZENsYXNzKGVsLCBpZGVudGlmaWVyKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdpZCc6XHJcbiAgICAgIGFkZElkKGVsLCBpZGVudGlmaWVyKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJldHVybiBlbDtcclxufVxyXG5cclxuLy8gQ3JlYXRlIE11bHRpcGxlIEVsZW1lbnRcclxuZnVuY3Rpb24gY3JlYXRlTXVsRWwoZWxBcnIsIGlkZW50aWZpZXIpIHtcclxuICBsZXQgaWRTdWZmaXggPSAxO1xyXG4gIGNvbnN0IG5ld0VsQXJyID0gW107XHJcbiAgZWxBcnIuZm9yRWFjaChlbCA9PiB7XHJcbiAgICBpZiAoY2hlY2tDSShpZGVudGlmaWVyKSA9PT0gJ2NsYXNzJykge1xyXG4gICAgICBjb25zdCBuZXdFbCA9IGNyZWF0ZUVsKGVsLCBpZGVudGlmaWVyKTtcclxuICAgICAgbmV3RWxBcnIucHVzaChuZXdFbCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjaGVja0NJKGlkZW50aWZpZXIpID09PSAnaWQnKSB7XHJcbiAgICAgIGNvbnN0IG5ld0VsID0gY3JlYXRlRWwoZWwsIGlkZW50aWZpZXIraWRTdWZmaXgpO1xyXG4gICAgICBpZFN1ZmZpeCArPSAxO1xyXG4gICAgICBuZXdFbEFyci5wdXNoKG5ld0VsKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGlkU3VmZml4ID0gMTtcclxuXHJcbiAgcmV0dXJuIG5ld0VsQXJyO1xyXG59XHJcblxyXG4vLyBBZGQgaWQgXHJcbmZ1bmN0aW9uIGFkZElkKGVsLCBpZCkge1xyXG4gIHJldHVybiBlbC5pZCA9IGlkLnNsaWNlKDEpO1xyXG59XHJcblxyXG4vLyBBZGQgTXVsdGlwbGUgSWRcclxuZnVuY3Rpb24gYWRkTXVsSWQoZWxBcnIsIGlkQXJyLCBwcmVmaXg9JycpIHtcclxuICBlbEFyci5mb3JFYWNoKChlbCwgaSkgPT4gZWwuaWQgPSBwcmVmaXggKyBpZEFycltpXSk7XHJcbn1cclxuXHJcbi8vIEFkZCBBdHRyaWJ1dGVcclxuZnVuY3Rpb24gYWRkQXRyKGVscywgYXRyTmFtZSwgYXRyVmFsdWUsIHByZWZpeD0nJykge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGVscykgJiYgQXJyYXkuaXNBcnJheShhdHJWYWx1ZSkpIHtcclxuICAgIGVscy5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgIGlmIChhdHJWYWx1ZVtpXSA9PT0gMSkge1xyXG4gICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ck5hbWUsICcnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXRyVmFsdWVbaV0gPT09ICcnID8gbnVsbCA6XHJcbiAgICAgICAgZS5zZXRBdHRyaWJ1dGUoYXRyTmFtZSwgcHJlZml4ICsgYXRyVmFsdWVbaV0pO1xyXG4gICAgfSlcclxuICB9XHJcbiAgZWxzZSBpZiAoKHR5cGVvZiBlbHMgPT09ICdvYmplY3QnKSAmJiAodHlwZW9mIGF0ck5hbWUgPT09ICdzdHJpbmcnKSAmJiAodHlwZW9mIGF0clZhbHVlID09PSAnc3RyaW5nJykpIHtcclxuXHJcbiAgICBlbHMuc2V0QXR0cmlidXRlKGF0ck5hbWUsIHByZWZpeCArIGF0clZhbHVlKTtcclxuICB9XHJcbiAgZWxzZSBpZigodHlwZW9mIGVscyA9PT0gJ29iamVjdCcpICYmIChhdHJWYWx1ZSA9PT0gMSkpIHtcclxuICAgIGVscy5zZXRBdHRyaWJ1dGUoYXRyTmFtZSwgJycpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIEFkZCBEYXRhU2V0XHJcbmZ1bmN0aW9uIGFkZERhdGFTZXQoZWxBcnIsIGF0ciwgdmFsdWUpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShlbEFycikgJiZBcnJheS5pc0FycmF5KGF0cikgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIGVsQXJyLmZvckVhY2goKGUsIGkpID0+IHtcclxuICAgICAgdmFsdWVbaV0gPSB2YWx1ZVtpXS5zcGxpdCgnICcpLmpvaW4oJ18nKTtcclxuICAgICAgZS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHJbaV19YCwgdmFsdWVbaV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICB9KVxyXG4gIH0gXHJcbiAgZWxzZSBpZiAoICh0eXBlb2YgYXRyID09PSAnc3RyaW5nJykgJiYgdHlwZW9mICh2YWx1ZSA9PT0gJ3N0cmluZycpICYmICghQXJyYXkuaXNBcnJheShlbEFycikpICkge1xyXG4gICAgZWxBcnIuc2V0QXR0cmlidXRlKGBkYXRhLSR7YXRyfWAsIHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIGNsYXNzXHJcbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbHMpIHtcclxuICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjbHMuc2xpY2UoMSkpO1xyXG59XHJcblxyXG4vLyBBZGQgQ2xhc3MgdG8gTXVsdGlwbGUgRWxlbWVudHNcclxuZnVuY3Rpb24gYWRkTXVsRWxfQ2xzKGVsQXJyLCBjbHNBcnIsIHByZWZpeD0nJykge1xyXG4gIHJldHVybiBlbEFyci5mb3JFYWNoKCAoZSwgaSkgPT4gYWRkQ2xhc3MoZSwgcHJlZml4ICsgY2xzQXJyW2ldKSk7XHJcbn1cclxuXHJcbi8vIFJlbW92ZSBDbGFzc1xyXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xzKSB7XHJcbiAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xyXG59XHJcblxyXG4vLyBUb2dnZ2xlIENsYXNzXHJcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBjbHMpIHtcclxuICBlbC5jbGFzc0xpc3QudG9nZ2xlKGNscyk7XHJcbn1cclxuXHJcbi8vIENoZWNrIENvbnRhaW4gQ2xhc3NcclxuZnVuY3Rpb24gY29udGFpbkNscyhlbCwgY2xzKSB7XHJcbiAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbHMpO1xyXG59XHJcblxyXG4vLyBDbGFzcyBJZCBDaGVja1xyXG5mdW5jdGlvbiBjaGVja0NJKGlkZW50aWZpZXIpIHtcclxuICBjb25zdCBjaGFyWmVyb0lkciA9IGlkZW50aWZpZXIuY2hhckF0KDApO1xyXG4gIGlmIChjaGFyWmVyb0lkciA9PT0gJy4nKSB7XHJcbiAgICByZXR1cm4gJ2NsYXNzJ1xyXG4gIH1cclxuICBlbHNlIGlmIChjaGFyWmVyb0lkciA9PT0gJyMnKSB7XHJcbiAgICByZXR1cm4gJ2lkJztcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBlbGVtZW50IGludG8gZWxlbWVudFxyXG5mdW5jdGlvbiBhZGRFbGVtZW50KGVsZW1lbnQsIGludG8pIHtcclxuICBpbnRvLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4vLyBBZGQgTXVsdGlwbGUgRWxlbWVudHNcclxuZnVuY3Rpb24gYWRkTXVsRWxlbWVudChlbEFyciwgaW50bykge1xyXG4gIHJldHVybiBlbEFyci5mb3JFYWNoKGVsID0+IGFkZEVsZW1lbnQoZWwsIGludG8pKTtcclxufVxyXG5cclxuLy8gQWNjZXMgRWxlbWVudFxyXG5mdW5jdGlvbiBhY2Nlc0VsZW1lbnQoZWxJZGVudGlmaWVyLCBudW09JycpIHtcclxuICByZXR1cm4gbnVtID09PSAxID8gXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsSWRlbnRpZmllcikgOlxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbElkZW50aWZpZXIpO1xyXG59XHJcblxyXG4vLyBBZGQgTXVsdGlwbGUgVGV4dFxyXG5mdW5jdGlvbiBhZGRNdWxUZXh0KGVsQXJyLCB0ZXh0QXJyKSB7XHJcbiAgY29uc3QgcmVnZXggPSAvXy87XHJcbiAgZWxBcnIuZm9yRWFjaCggKGVsLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbmV3RWwgPSBlbDtcclxuXHJcbiAgICBBcnJheS5pc0FycmF5KHRleHRBcnIpID9cclxuICAgICAgbmV3RWwuaW5uZXJUZXh0ID0gdGV4dEFycltpbmRleF0gOlxyXG4gICAgICBuZXdFbC5pbm5lclRleHQgPSB0ZXh0QXJyO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBHZXQgSW5uZXIgVGV4dFxyXG5mdW5jdGlvbiBnZXRJbm5lclRleHQoZWxBcnIpIHtcclxuICBsZXQgdGV4dCA9IFtdO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGVsQXJyKSkge1xyXG4gICAgZWxBcnIuZm9yRWFjaChlID0+IHtcclxuICAgICAgdGV4dC5wdXNoKGUuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHRleHQgPSBlbEFyci5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0ZXh0O1xyXG59XHJcblxyXG4vLyAvQWRkIFBsYWNlaG9sZGVyXHJcbmZ1bmN0aW9uIGFkZFBsYWNlaG9sZGVyKGVsQXJyLCBwaCkge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGVsQXJyKSAmJiBBcnJheS5pc0FycmF5KHBoKSkge1xyXG5cclxuICAgIGVsQXJyLmZvckVhY2goKGVsLCBpKSA9PiBlbC5wbGFjZWhvbGRlciA9IHBoW2ldKTtcclxuICAgIFxyXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShlbEFycikpIHtcclxuICAgIFxyXG4gICAgZWxBcnIuZm9yRWFjaCgoZWwpID0+IGVsLnBsYWNlaG9sZGVyID0gcGgpO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgICBlbEFyci5wbGFjZWhvbGRlciA9IHBoO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIEFkZCBjaGlsZFxyXG5mdW5jdGlvbiBhZGRDaGlsZCh0YWcsIGlkZW50aWZpZXI9JycsIHBhcmVudCkge1xyXG4gIGNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkodGFnKSk7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodGFnKSkge1xyXG4gICAgY29uc3QgZWxzID0gY3JlYXRlTXVsRWwodGFnLCBpZGVudGlmaWVyKTtcclxuICAgIGFkZE11bEVsZW1lbnQoZWxzLCBwYXJlbnQpO1xyXG5cclxuICAgIHJldHVybiBlbHM7XHJcbiAgfSBcclxuICBlbHNlIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xyXG4gICAgY29uc3QgZWwgPSBjcmVhdGVFbCh0YWcsIGlkZW50aWZpZXIpXHJcbiAgICBhZGRFbGVtZW50KGVsLCBwYXJlbnQpO1xyXG5cclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBBZGQgY2hpbGQgdG8gZWFjaCBFbGVtZW50IEFycmF5XHJcbmZ1bmN0aW9uIGFkZENoaWxkX29mX0VsQXJyKGVsQXJyLCBlbFRvQWRkLCBpZGVudGlmaWVyKSB7XHJcbiAgY29uc3QgbWVudVJvd0FyciA9IFtdO1xyXG4gIGVsQXJyLmZvckVhY2gocm93ID0+IHtcclxuICAgIGNvbnN0IG1lbnVSb3cgPSBhZGRDaGlsZChlbFRvQWRkLCBpZGVudGlmaWVyLCByb3cpO1xyXG4gICAgXHJcbiAgICBtZW51Um93QXJyLnB1c2gobWVudVJvdyk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZW51Um93QXJyO1xyXG59XHJcblxyXG4vLyBBZGQgbmV3IGNsYXNzIHRvIGVhY2ggQ2hpbGROb2Rlc1xyXG5mdW5jdGlvbiBhZGRDbHNfY2hpbGROb2RlcyhwYXJlbnQsIGNscykge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcclxuXHJcbiAgICBwYXJlbnQuZm9yRWFjaCggKGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld01SID0gZ2V0Q2hpbGQoZWwpO1xyXG4gICAgICBuZXdNUi5mb3JFYWNoKCAoZWxDLCBlbENJKSA9PiB7XHJcbiAgICAgICAgYWRkQ2xhc3MoZWxDLCBgJHtjbHMgKyBlbENJfWApO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBuZXdNUjtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgZWxzZSBpZiAodHlwZW9mIHBhcmVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnN0IG5ld01SID0gZ2V0Q2hpbGQoZWwpO1xyXG4gICAgbmV3TVIuZm9yRWFjaCggKGVsQywgZWxDSSkgPT4ge1xyXG4gICAgICBhZGRDbGFzcyhlbEMsIGAke2NscyArIGVsQ0l9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmV3TVI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgSFRNTFxyXG5mdW5jdGlvbiBhZGRIVE1MKGVsLCBodG1sQz0nJykge1xyXG4gIHJldHVybiBlbC5pbm5lckhUTUwgPSBgJHtodG1sQ31gO1xyXG59XHJcblxyXG4vLyBSZW1vdmUgY2hpbGRub2Rlc1xyXG5mdW5jdGlvbiBlbXB0eUVsKGVsKSB7XHJcbiAgcmV0dXJuIGVsLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG4vLyBHZXQgQWxsIENoaWxkTm9kZXNcclxuZnVuY3Rpb24gZ2V0Q2hpbGQocGFyZW50KSB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpO1xyXG59XHJcblxyXG4vLyBGaW5kIENoaWxkXHJcbmZ1bmN0aW9uIGZDaGlsZChlbGVtZW50LCBzZWxlY3Rvcikge1xyXG4gIGNvbnN0IGVsID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKTtcclxuICBpZiAoY2hlY2tDSShzZWxlY3RvcikgPT09ICdjbGFzcycpIHtcclxuICAgIHJldHVybiBlbC5maW5kKGNoaWxkID0+IGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhzZWxlY3Rvci5zbGljZSgxKSkgKTtcclxuICB9XHJcbiAgZWxzZSBpZiAoY2hlY2tDSShzZWxlY3RvcikgPT09ICdpZCcpIHtcclxuICAgIHJldHVybiBlbC5maW5kKGNoaWxkID0+IGNoaWxkLmlkID09PSBzZWxlY3Rvci5zbGljZSgxKSApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkRXZlbnQgTGlzdG5lclxyXG5mdW5jdGlvbiBhZGRFbGlzKGVsLCBjYWxsYmFjaywgZXZlbnQ9J2NsaWNrJykge1xyXG4gICFBcnJheS5pc0FycmF5KGVsKSA/XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaykgXHJcbiAgICA6IGVsLmZvckVhY2goaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKSk7XHJcbn1cclxuXHJcbi8vIFNob3cgRGlhbG9nXHJcbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGFjY2VzRWxlbWVudCgnI215ZGlhbG9nJywgMSlcclxuICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbn1cclxuXHJcbi8vIENsb3NlIERpYWxvZ1xyXG5mdW5jdGlvbiBjbHNGb3JtKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGFjY2VzRWxlbWVudCgnI215ZGlhbG9nJywgMSlcclxuICBkaWFsb2cuY2xvc2UoKTtcclxufVxyXG5cclxuLy8gU2hpZiBBcnJheSBJdGVtIFBvc2l0aW9uXHJcbmZ1bmN0aW9uIHNoaWZ0QXJyUChhcnIsIHBBcnIsIHRvUG9zKSB7XHJcbiAgY29uc3QgbmV3QXJyID0gQXJyYXkuZnJvbShhcnIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhhcnJbcEFyclsxXV0pXHJcbiAgbmV3QXJyLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgIG5ld0Fyclt0b1Bvc1tpXV0gPSBhcnJbcEFycltpXV07XHJcbiAgICAvLyBuZXdBcnIucHVzaChhcnJbdG9Qb3NbaV1dKTtcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2cobmV3QXJyKTtcclxufVxyXG5cclxuLy8gRmluZCBJbmRleCBPZiBJdGVtIEluIEFuIEFycmF5XHJcbmZ1bmN0aW9uIGZpbmRQb3NpdGlvbihhcnIsIGl0ZW0pIHtcclxuICByZXR1cm4gYXJyLmZpbmRJbmRleChlbCA9PiBlbC50b0xvd2VyQ2FzZSgpID09PSBnZXRJbm5lclRleHQoaXRlbSkpO1xyXG59XHJcblxyXG4vLyBDaGFuZ2UgT2JqZWN0IFZhbHVlXHJcbmZ1bmN0aW9uIGNoYW5nZU9iamVjdERhdGEoZGF0YSwgcHJvcGVydHksIHZhbHVlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgIGVsW3Byb3BlcnR5XSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgIGRhdGEuaGFzT3duUHJvcGVydHkocHJvcGVydHkpID8gZGF0YVtwcm9wZXJ0eV0gPSB2YWx1ZSA6IG51bGxcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBuZXdEYXRhO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2NyZWF0ZUVsLCBhZGRFbGVtZW50LCBhZGRNdWxFbGVtZW50LCBjb250YWluQ2xzLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIHRvZ2dsZUNsYXNzLCBhZGRJZCwgYWRkTXVsSWQsIGFkZEF0ciwgYWRkQ2hpbGRfb2ZfRWxBcnIsIGFjY2VzRWxlbWVudCwgY2hlY2tDSSwgY3JlYXRlTXVsRWwsIGFkZE11bFRleHQsIGFkZEhUTUwsIGdldElubmVyVGV4dCwgZW1wdHlFbCwgYWRkQ2hpbGQsIGZDaGlsZCwgYWRkQ2xzX2NoaWxkTm9kZXMsIGdldENoaWxkLCBhZGRFbGlzLCBhZGRQbGFjZWhvbGRlciwgc2hvd0Zvcm0sIGNsc0Zvcm0sIHNoaWZ0QXJyUCwgZmluZFBvc2l0aW9uLCBhZGRNdWxFbF9DbHMsIGFkZERhdGFTZXQsIGNoYW5nZU9iamVjdERhdGEgfTsiLCJjbGFzcyBMUyB7XHJcbiAgc3RhdGljIGdldEludG8oa2V5LCBkYXRhKSB7XHJcbiAgICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGRhdGFTdHJpbmcgPSB0aGlzLnN0cmluZ2lmeShkYXRhKTtcclxuICBcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0RnJvbShkYXRhKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3RyaW5naWZ5KGRhdGEpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBwYXJzZShkYXRhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBoYXNQcm9wZXJ0eShrZXkpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuaGFzT3duUHJvcGVydHkoa2V5KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQYXJzZShkYXRhKSB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gdGhpcy5nZXRGcm9tKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBhcnNlKGdldERhdGEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbFByb3BlcnR5KG5hbWUpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShuYW1lKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBub3ROdWxsKGtleSkge1xyXG4gICAgY29uc3QgZ2V0VmFsdWUgPSB0aGlzLmdldFBhcnNlKGtleSk7XHJcbiAgICBjb25zb2xlLmxvZyhnZXRWYWx1ZS5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGdldFZhbHVlLmxlbmd0aCAhPT0gMCA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjaGFuZ2VQcm9wZXJ0eU5hbWUoZGF0YU5hbWUsIG5ld05hbWUpIHtcclxuICAgIGNvbnN0IGdldFByb3BlcnR5ID0gdGhpcy5nZXRQYXJzZShkYXRhTmFtZSk7XHJcbiAgICB0aGlzLmdldEludG8obmV3TmFtZSwgZ2V0UHJvcGVydHkpO1xyXG4gICAgdGhpcy5kZWxQcm9wZXJ0eShkYXRhTmFtZSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgTFMgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=