"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["nav"],{

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

/***/ }),

/***/ "./src/icon/xmark.svg":
/*!****************************!*\
  !*** ./src/icon/xmark.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a17097917f36c190e55e.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/nav.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMUyB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcclxuXHJcbi8vIEFjY2VzaW5nIEVsZW1lbnRcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHJcbi8vIENyZWF0ZSBuZXcgZWxlbWVudFxyXG5mdW5jdGlvbiBjcmVhdGVFbChlbGVtZW50LCBpZGVudGlmaWVyKSB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gIHN3aXRjaCAoY2hlY2tDSShpZGVudGlmaWVyKSkge1xyXG4gICAgY2FzZSAnY2xhc3MnOlxyXG4gICAgICBhZGRDbGFzcyhlbCwgaWRlbnRpZmllcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnaWQnOlxyXG4gICAgICBhZGRJZChlbCwgaWRlbnRpZmllcik7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXR1cm4gZWw7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBNdWx0aXBsZSBFbGVtZW50XHJcbmZ1bmN0aW9uIGNyZWF0ZU11bEVsKGVsQXJyLCBpZGVudGlmaWVyKSB7XHJcbiAgbGV0IGlkU3VmZml4ID0gMTtcclxuICBjb25zdCBuZXdFbEFyciA9IFtdO1xyXG4gIGVsQXJyLmZvckVhY2goZWwgPT4ge1xyXG4gICAgaWYgKGNoZWNrQ0koaWRlbnRpZmllcikgPT09ICdjbGFzcycpIHtcclxuICAgICAgY29uc3QgbmV3RWwgPSBjcmVhdGVFbChlbCwgaWRlbnRpZmllcik7XHJcbiAgICAgIG5ld0VsQXJyLnB1c2gobmV3RWwpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2hlY2tDSShpZGVudGlmaWVyKSA9PT0gJ2lkJykge1xyXG4gICAgICBjb25zdCBuZXdFbCA9IGNyZWF0ZUVsKGVsLCBpZGVudGlmaWVyK2lkU3VmZml4KTtcclxuICAgICAgaWRTdWZmaXggKz0gMTtcclxuICAgICAgbmV3RWxBcnIucHVzaChuZXdFbCk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICBpZFN1ZmZpeCA9IDE7XHJcblxyXG4gIHJldHVybiBuZXdFbEFycjtcclxufVxyXG5cclxuLy8gQWRkIGlkIFxyXG5mdW5jdGlvbiBhZGRJZChlbCwgaWQpIHtcclxuICByZXR1cm4gZWwuaWQgPSBpZC5zbGljZSgxKTtcclxufVxyXG5cclxuLy8gQWRkIE11bHRpcGxlIElkXHJcbmZ1bmN0aW9uIGFkZE11bElkKGVsQXJyLCBpZEFyciwgcHJlZml4PScnKSB7XHJcbiAgZWxBcnIuZm9yRWFjaCgoZWwsIGkpID0+IGVsLmlkID0gcHJlZml4ICsgaWRBcnJbaV0pO1xyXG59XHJcblxyXG4vLyBBZGQgQXR0cmlidXRlXHJcbmZ1bmN0aW9uIGFkZEF0cihlbHMsIGF0ck5hbWUsIGF0clZhbHVlLCBwcmVmaXg9JycpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShlbHMpICYmIEFycmF5LmlzQXJyYXkoYXRyVmFsdWUpKSB7XHJcbiAgICBlbHMuZm9yRWFjaCgoZSwgaSkgPT4ge1xyXG4gICAgICBpZiAoYXRyVmFsdWVbaV0gPT09IDEpIHtcclxuICAgICAgICBlLnNldEF0dHJpYnV0ZShhdHJOYW1lLCAnJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGF0clZhbHVlW2ldID09PSAnJyA/IG51bGwgOlxyXG4gICAgICAgIGUuc2V0QXR0cmlidXRlKGF0ck5hbWUsIHByZWZpeCArIGF0clZhbHVlW2ldKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIGVsc2UgaWYgKCh0eXBlb2YgZWxzID09PSAnb2JqZWN0JykgJiYgKHR5cGVvZiBhdHJOYW1lID09PSAnc3RyaW5nJykgJiYgKHR5cGVvZiBhdHJWYWx1ZSA9PT0gJ3N0cmluZycpKSB7XHJcblxyXG4gICAgZWxzLnNldEF0dHJpYnV0ZShhdHJOYW1lLCBwcmVmaXggKyBhdHJWYWx1ZSk7XHJcbiAgfVxyXG4gIGVsc2UgaWYoKHR5cGVvZiBlbHMgPT09ICdvYmplY3QnKSAmJiAoYXRyVmFsdWUgPT09IDEpKSB7XHJcbiAgICBlbHMuc2V0QXR0cmlidXRlKGF0ck5hbWUsICcnKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBBZGQgRGF0YVNldFxyXG5mdW5jdGlvbiBhZGREYXRhU2V0KGVsQXJyLCBhdHIsIHZhbHVlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZWxBcnIpICYmQXJyYXkuaXNBcnJheShhdHIpICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICBlbEFyci5mb3JFYWNoKChlLCBpKSA9PiB7XHJcbiAgICAgIHZhbHVlW2ldID0gdmFsdWVbaV0uc3BsaXQoJyAnKS5qb2luKCdfJyk7XHJcbiAgICAgIGUuc2V0QXR0cmlidXRlKGBkYXRhLSR7YXRyW2ldfWAsIHZhbHVlW2ldLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgfSlcclxuICB9IFxyXG4gIGVsc2UgaWYgKCAodHlwZW9mIGF0ciA9PT0gJ3N0cmluZycpICYmIHR5cGVvZiAodmFsdWUgPT09ICdzdHJpbmcnKSAmJiAoIUFycmF5LmlzQXJyYXkoZWxBcnIpKSApIHtcclxuICAgIGVsQXJyLnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0cn1gLCB2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZCBjbGFzc1xyXG5mdW5jdGlvbiBhZGRDbGFzcyhlbCwgY2xzKSB7XHJcbiAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoY2xzLnNsaWNlKDEpKTtcclxufVxyXG5cclxuLy8gQWRkIENsYXNzIHRvIE11bHRpcGxlIEVsZW1lbnRzXHJcbmZ1bmN0aW9uIGFkZE11bEVsX0NscyhlbEFyciwgY2xzQXJyLCBwcmVmaXg9JycpIHtcclxuICByZXR1cm4gZWxBcnIuZm9yRWFjaCggKGUsIGkpID0+IGFkZENsYXNzKGUsIHByZWZpeCArIGNsc0FycltpXSkpO1xyXG59XHJcblxyXG4vLyBSZW1vdmUgQ2xhc3NcclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWwsIGNscykge1xyXG4gIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxufVxyXG5cclxuLy8gVG9nZ2dsZSBDbGFzc1xyXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbCwgY2xzKSB7XHJcbiAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjbHMpO1xyXG59XHJcblxyXG4vLyBDaGVjayBDb250YWluIENsYXNzXHJcbmZ1bmN0aW9uIGNvbnRhaW5DbHMoZWwsIGNscykge1xyXG4gIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKTtcclxufVxyXG5cclxuLy8gQ2xhc3MgSWQgQ2hlY2tcclxuZnVuY3Rpb24gY2hlY2tDSShpZGVudGlmaWVyKSB7XHJcbiAgY29uc3QgY2hhclplcm9JZHIgPSBpZGVudGlmaWVyLmNoYXJBdCgwKTtcclxuICBpZiAoY2hhclplcm9JZHIgPT09ICcuJykge1xyXG4gICAgcmV0dXJuICdjbGFzcydcclxuICB9XHJcbiAgZWxzZSBpZiAoY2hhclplcm9JZHIgPT09ICcjJykge1xyXG4gICAgcmV0dXJuICdpZCc7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgZWxlbWVudCBpbnRvIGVsZW1lbnRcclxuZnVuY3Rpb24gYWRkRWxlbWVudChlbGVtZW50LCBpbnRvKSB7XHJcbiAgaW50by5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLy8gQWRkIE11bHRpcGxlIEVsZW1lbnRzXHJcbmZ1bmN0aW9uIGFkZE11bEVsZW1lbnQoZWxBcnIsIGludG8pIHtcclxuICByZXR1cm4gZWxBcnIuZm9yRWFjaChlbCA9PiBhZGRFbGVtZW50KGVsLCBpbnRvKSk7XHJcbn1cclxuXHJcbi8vIEFjY2VzIEVsZW1lbnRcclxuZnVuY3Rpb24gYWNjZXNFbGVtZW50KGVsSWRlbnRpZmllciwgbnVtPScnKSB7XHJcbiAgcmV0dXJuIG51bSA9PT0gMSA/IFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbElkZW50aWZpZXIpIDpcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxJZGVudGlmaWVyKTtcclxufVxyXG5cclxuLy8gQWRkIE11bHRpcGxlIFRleHRcclxuZnVuY3Rpb24gYWRkTXVsVGV4dChlbEFyciwgdGV4dEFycikge1xyXG4gIGNvbnN0IHJlZ2V4ID0gL18vO1xyXG4gIGVsQXJyLmZvckVhY2goIChlbCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5ld0VsID0gZWw7XHJcblxyXG4gICAgQXJyYXkuaXNBcnJheSh0ZXh0QXJyKSA/XHJcbiAgICAgIG5ld0VsLmlubmVyVGV4dCA9IHRleHRBcnJbaW5kZXhdIDpcclxuICAgICAgbmV3RWwuaW5uZXJUZXh0ID0gdGV4dEFycjtcclxuICB9KTtcclxufVxyXG5cclxuLy8gR2V0IElubmVyIFRleHRcclxuZnVuY3Rpb24gZ2V0SW5uZXJUZXh0KGVsQXJyKSB7XHJcbiAgbGV0IHRleHQgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShlbEFycikpIHtcclxuICAgIGVsQXJyLmZvckVhY2goZSA9PiB7XHJcbiAgICAgIHRleHQucHVzaChlLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB0ZXh0ID0gZWxBcnIuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGV4dDtcclxufVxyXG5cclxuLy8gL0FkZCBQbGFjZWhvbGRlclxyXG5mdW5jdGlvbiBhZGRQbGFjZWhvbGRlcihlbEFyciwgcGgpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShlbEFycikgJiYgQXJyYXkuaXNBcnJheShwaCkpIHtcclxuXHJcbiAgICBlbEFyci5mb3JFYWNoKChlbCwgaSkgPT4gZWwucGxhY2Vob2xkZXIgPSBwaFtpXSk7XHJcbiAgICBcclxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZWxBcnIpKSB7XHJcbiAgICBcclxuICAgIGVsQXJyLmZvckVhY2goKGVsKSA9PiBlbC5wbGFjZWhvbGRlciA9IHBoKTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgZWxBcnIucGxhY2Vob2xkZXIgPSBwaDtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBBZGQgY2hpbGRcclxuZnVuY3Rpb24gYWRkQ2hpbGQodGFnLCBpZGVudGlmaWVyPScnLCBwYXJlbnQpIHtcclxuICBjb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRhZykpO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHRhZykpIHtcclxuICAgIGNvbnN0IGVscyA9IGNyZWF0ZU11bEVsKHRhZywgaWRlbnRpZmllcik7XHJcbiAgICBhZGRNdWxFbGVtZW50KGVscywgcGFyZW50KTtcclxuXHJcbiAgICByZXR1cm4gZWxzO1xyXG4gIH0gXHJcbiAgZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnN0IGVsID0gY3JlYXRlRWwodGFnLCBpZGVudGlmaWVyKVxyXG4gICAgYWRkRWxlbWVudChlbCwgcGFyZW50KTtcclxuXHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gQWRkIGNoaWxkIHRvIGVhY2ggRWxlbWVudCBBcnJheVxyXG5mdW5jdGlvbiBhZGRDaGlsZF9vZl9FbEFycihlbEFyciwgZWxUb0FkZCwgaWRlbnRpZmllcikge1xyXG4gIGNvbnN0IG1lbnVSb3dBcnIgPSBbXTtcclxuICBlbEFyci5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICBjb25zdCBtZW51Um93ID0gYWRkQ2hpbGQoZWxUb0FkZCwgaWRlbnRpZmllciwgcm93KTtcclxuICAgIFxyXG4gICAgbWVudVJvd0Fyci5wdXNoKG1lbnVSb3cpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbWVudVJvd0FycjtcclxufVxyXG5cclxuLy8gQWRkIG5ldyBjbGFzcyB0byBlYWNoIENoaWxkTm9kZXNcclxuZnVuY3Rpb24gYWRkQ2xzX2NoaWxkTm9kZXMocGFyZW50LCBjbHMpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XHJcblxyXG4gICAgcGFyZW50LmZvckVhY2goIChlbCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdNUiA9IGdldENoaWxkKGVsKTtcclxuICAgICAgbmV3TVIuZm9yRWFjaCggKGVsQywgZWxDSSkgPT4ge1xyXG4gICAgICAgIGFkZENsYXNzKGVsQywgYCR7Y2xzICsgZWxDSX1gKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gbmV3TVI7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG4gIGVsc2UgaWYgKHR5cGVvZiBwYXJlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zdCBuZXdNUiA9IGdldENoaWxkKGVsKTtcclxuICAgIG5ld01SLmZvckVhY2goIChlbEMsIGVsQ0kpID0+IHtcclxuICAgICAgYWRkQ2xhc3MoZWxDLCBgJHtjbHMgKyBlbENJfWApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld01SO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWRkIEhUTUxcclxuZnVuY3Rpb24gYWRkSFRNTChlbCwgaHRtbEM9JycpIHtcclxuICByZXR1cm4gZWwuaW5uZXJIVE1MID0gYCR7aHRtbEN9YDtcclxufVxyXG5cclxuLy8gUmVtb3ZlIGNoaWxkbm9kZXNcclxuZnVuY3Rpb24gZW1wdHlFbChlbCkge1xyXG4gIHJldHVybiBlbC5pbm5lckhUTUwgPSAnJztcclxufVxyXG5cclxuLy8gR2V0IEFsbCBDaGlsZE5vZGVzXHJcbmZ1bmN0aW9uIGdldENoaWxkKHBhcmVudCkge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKTtcclxufVxyXG5cclxuLy8gRmluZCBDaGlsZFxyXG5mdW5jdGlvbiBmQ2hpbGQoZWxlbWVudCwgc2VsZWN0b3IpIHtcclxuICBjb25zdCBlbCA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbik7XHJcbiAgaWYgKGNoZWNrQ0koc2VsZWN0b3IpID09PSAnY2xhc3MnKSB7XHJcbiAgICByZXR1cm4gZWwuZmluZChjaGlsZCA9PiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoc2VsZWN0b3Iuc2xpY2UoMSkpICk7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGNoZWNrQ0koc2VsZWN0b3IpID09PSAnaWQnKSB7XHJcbiAgICByZXR1cm4gZWwuZmluZChjaGlsZCA9PiBjaGlsZC5pZCA9PT0gc2VsZWN0b3Iuc2xpY2UoMSkgKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFkZEV2ZW50IExpc3RuZXJcclxuZnVuY3Rpb24gYWRkRWxpcyhlbCwgY2FsbGJhY2ssIGV2ZW50PSdjbGljaycpIHtcclxuICAhQXJyYXkuaXNBcnJheShlbCkgP1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spIFxyXG4gICAgOiBlbC5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaykpO1xyXG59XHJcblxyXG4vLyBTaG93IERpYWxvZ1xyXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcclxuICBjb25zdCBkaWFsb2cgPSBhY2Nlc0VsZW1lbnQoJyNteWRpYWxvZycsIDEpXHJcbiAgZGlhbG9nLnNob3dNb2RhbCgpO1xyXG59XHJcblxyXG4vLyBDbG9zZSBEaWFsb2dcclxuZnVuY3Rpb24gY2xzRm9ybSgpIHtcclxuICBjb25zdCBkaWFsb2cgPSBhY2Nlc0VsZW1lbnQoJyNteWRpYWxvZycsIDEpXHJcbiAgZGlhbG9nLmNsb3NlKCk7XHJcbn1cclxuXHJcbi8vIFNoaWYgQXJyYXkgSXRlbSBQb3NpdGlvblxyXG5mdW5jdGlvbiBzaGlmdEFyclAoYXJyLCBwQXJyLCB0b1Bvcykge1xyXG4gIGNvbnN0IG5ld0FyciA9IEFycmF5LmZyb20oYXJyKTtcclxuXHJcbiAgY29uc29sZS5sb2coYXJyW3BBcnJbMV1dKVxyXG4gIG5ld0Fyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBuZXdBcnJbdG9Qb3NbaV1dID0gYXJyW3BBcnJbaV1dO1xyXG4gICAgLy8gbmV3QXJyLnB1c2goYXJyW3RvUG9zW2ldXSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKG5ld0Fycik7XHJcbn1cclxuXHJcbi8vIEZpbmQgSW5kZXggT2YgSXRlbSBJbiBBbiBBcnJheVxyXG5mdW5jdGlvbiBmaW5kUG9zaXRpb24oYXJyLCBpdGVtKSB7XHJcbiAgcmV0dXJuIGFyci5maW5kSW5kZXgoZWwgPT4gZWwudG9Mb3dlckNhc2UoKSA9PT0gZ2V0SW5uZXJUZXh0KGl0ZW0pKTtcclxufVxyXG5cclxuLy8gQ2hhbmdlIE9iamVjdCBWYWx1ZVxyXG5mdW5jdGlvbiBjaGFuZ2VPYmplY3REYXRhKGRhdGEsIHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICBlbFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICBkYXRhLmhhc093blByb3BlcnR5KHByb3BlcnR5KSA/IGRhdGFbcHJvcGVydHldID0gdmFsdWUgOiBudWxsXHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gbmV3RGF0YTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHtjcmVhdGVFbCwgYWRkRWxlbWVudCwgYWRkTXVsRWxlbWVudCwgY29udGFpbkNscywgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCB0b2dnbGVDbGFzcywgYWRkSWQsIGFkZE11bElkLCBhZGRBdHIsIGFkZENoaWxkX29mX0VsQXJyLCBhY2Nlc0VsZW1lbnQsIGNoZWNrQ0ksIGNyZWF0ZU11bEVsLCBhZGRNdWxUZXh0LCBhZGRIVE1MLCBnZXRJbm5lclRleHQsIGVtcHR5RWwsIGFkZENoaWxkLCBmQ2hpbGQsIGFkZENsc19jaGlsZE5vZGVzLCBnZXRDaGlsZCwgYWRkRWxpcywgYWRkUGxhY2Vob2xkZXIsIHNob3dGb3JtLCBjbHNGb3JtLCBzaGlmdEFyclAsIGZpbmRQb3NpdGlvbiwgYWRkTXVsRWxfQ2xzLCBhZGREYXRhU2V0LCBjaGFuZ2VPYmplY3REYXRhIH07IiwiY2xhc3MgTFMge1xyXG4gIHN0YXRpYyBnZXRJbnRvKGtleSwgZGF0YSkge1xyXG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBkYXRhU3RyaW5nID0gdGhpcy5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgXHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGFTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEZyb20oZGF0YSkge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN0cmluZ2lmeShkYXRhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcGFyc2UoZGF0YSkge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFzUHJvcGVydHkoa2V5KSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmhhc093blByb3BlcnR5KGtleSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0UGFyc2UoZGF0YSkge1xyXG4gICAgY29uc3QgZ2V0RGF0YSA9IHRoaXMuZ2V0RnJvbShkYXRhKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZShnZXREYXRhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxQcm9wZXJ0eShuYW1lKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obmFtZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbm90TnVsbChrZXkpIHtcclxuICAgIGNvbnN0IGdldFZhbHVlID0gdGhpcy5nZXRQYXJzZShrZXkpO1xyXG4gICAgY29uc29sZS5sb2coZ2V0VmFsdWUubGVuZ3RoKTtcclxuICAgIHJldHVybiBnZXRWYWx1ZS5sZW5ndGggIT09IDAgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2hhbmdlUHJvcGVydHlOYW1lKGRhdGFOYW1lLCBuZXdOYW1lKSB7XHJcbiAgICBjb25zdCBnZXRQcm9wZXJ0eSA9IHRoaXMuZ2V0UGFyc2UoZGF0YU5hbWUpO1xyXG4gICAgdGhpcy5nZXRJbnRvKG5ld05hbWUsIGdldFByb3BlcnR5KTtcclxuICAgIHRoaXMuZGVsUHJvcGVydHkoZGF0YU5hbWUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IExTIH07IiwiaW1wb3J0IHsgYWRkTXVsRWxlbWVudCwgY3JlYXRlRWwsIGFkZEVsZW1lbnQsIGFjY2VzRWxlbWVudCwgYWRkRWxpcywgYWRkQ2xhc3MsIHRvZ2dsZUNsYXNzLCByZW1vdmVDbGFzcywgY29udGFpbkNscyB9IGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgaWNvbjEgZnJvbSAnLi9pY29uL21lbnUuc3ZnJztcclxuaW1wb3J0IGljb24yIGZyb20gJy4vaWNvbi94bWFyay5zdmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnLi9pY29uL25vdGVzLW11bHRpcGxlLXN2Z3JlcG8tY29tLnN2Zyc7XHJcblxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVOYXYoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYWNjZXNFbGVtZW50KCcjY29udGVudCcsIDEpO1xyXG5cclxuICAgIGNvbnN0IG5hdkNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnLCAnI25hdi1jb250YWluZXInKTtcclxuICAgIGFkZEVsZW1lbnQobmF2Q29udGFpbmVyLCBjb250ZW50KTtcclxuICBcclxuICAgIGNvbnN0IHNob3dNZW51c0RpdiA9IGNyZWF0ZUVsKCdkaXYnLCAnI3Nob3ctbWVudS1kaXYnKTtcclxuICAgIGNvbnN0IGhvbWVMb2dvID0gY3JlYXRlRWwoJ2RpdicsICcjaG9tZS1sb2dvLWRpdicpO1xyXG5cclxuICAgIGFkZE11bEVsZW1lbnQoW3Nob3dNZW51c0RpdiwgaG9tZUxvZ29dLCBuYXZDb250YWluZXIpO1xyXG5cclxuICAgIGhvbWVMb2dvLmlubmVySFRNTCA9IGA8ZGl2IGlkPWhvbWUtbG9nby10ZXh0PlRvZG8gTGlzdCBQcm9qZWN0PC9kaXY+YDtcclxuICBcclxuICAgIHNob3dNZW51c0Rpdi5pbm5lckhUTUwgPSBgPGltZyBzcmM9JyR7aWNvbjF9JyBpZD0nc2hvdy1tZW51LWltZycgY2xhc3M9J25hdi1sb2dvLWltZyc+YDtcclxuICAgIFxyXG4gICAgYWRkRWxpcyhzaG93TWVudXNEaXYsICgpID0+IHtcclxuICAgICAgY29uc3QgaGVhZGVyID0gYWNjZXNFbGVtZW50KCcjaGVhZGVyJywgMSk7XHJcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3Nfc2hvd01lbnVzID0gY29udGFpbkNscyhoZWFkZXIsICdzaG93LW1lbnVzJyk7XHJcbiAgICAgIGNvbnN0IGNoZWNrQ2xhc3NfaGlkZU1lbnVzID0gY29udGFpbkNscyhoZWFkZXIsICdoaWRlLW1lbnVzJyk7XHJcblxyXG4gICAgICBpZiAoIWNoZWNrQ2xhc3Nfc2hvd01lbnVzICYmICFjaGVja0NsYXNzX2hpZGVNZW51cykge1xyXG4gICAgICAgIGFkZENsYXNzKGhlYWRlciwgJy5oaWRlLW1lbnVzJyk7XHJcbiAgICAgICAgc2hvd01lbnVzRGl2LmlubmVySFRNTCA9IGA8aW1nIHNyYz0nJHtpY29uMn0nIGlkPSdzaG93LW1lbnUtaW1nJyBjbGFzcz0nbmF2LWxvZ28taW1nJz5gO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGNoZWNrQ2xhc3Nfc2hvd01lbnVzKSB7XHJcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaGVhZGVyLCAnc2hvdy1tZW51cycpO1xyXG4gICAgICAgIGFkZENsYXNzKGhlYWRlciwgJy5oaWRlLW1lbnVzJyk7XHJcbiAgICAgICAgc2hvd01lbnVzRGl2LmlubmVySFRNTCA9IGA8aW1nIHNyYz0nJHtpY29uMn0nIGlkPSdzaG93LW1lbnUtaW1nJyBjbGFzcz0nbmF2LWxvZ28taW1nJz5gO1xyXG5cclxuICAgICAgfSBlbHNlIGlmIChjaGVja0NsYXNzX2hpZGVNZW51cykge1xyXG4gICAgICAgIHJlbW92ZUNsYXNzKGhlYWRlciwgJ2hpZGUtbWVudXMnKTtcclxuICAgICAgICBhZGRDbGFzcyhoZWFkZXIsICcuc2hvdy1tZW51cycpO1xyXG4gICAgICAgIHNob3dNZW51c0Rpdi5pbm5lckhUTUwgPSBgPGltZyBzcmM9JyR7aWNvbjF9JyBpZD0nc2hvdy1tZW51LWltZycgY2xhc3M9J25hdi1sb2dvLWltZyc+YDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFjdGl2YXRlTmF2IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9