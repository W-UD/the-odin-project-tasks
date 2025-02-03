"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["content"],{

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitialProjectContent: () => (/* binding */ InitialProjectContent),
/* harmony export */   activateH1Content: () => (/* binding */ activateH1Content),
/* harmony export */   activatePL_BtnCon: () => (/* binding */ activatePL_BtnCon),
/* harmony export */   activatePlButton: () => (/* binding */ activatePlButton),
/* harmony export */   delContent: () => (/* binding */ delContent),
/* harmony export */   switchContent: () => (/* binding */ switchContent)
/* harmony export */ });
/* harmony import */ var _icon_add_create_new_plus_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/add_create_new_plus_icon.svg */ "./src/icon/add_create_new_plus_icon.svg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-form */ "./src/todo-form.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");








// Today List h1
function activateH1Content() {
  const contentCon = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#content', 1);

  const titleContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createEl)('div', '#title-container');
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addElement)(titleContainer, contentCon)

  if (_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty('menus')) {
    const menus = _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getParse('menus');

    if (menus.length === 0) {
      const h1 = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createEl)('h1', '#projectTitle');
      h1.innerText = '';
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addElement)(h1, titleContainer);
    }

    if (menus.length !== 0) {
      const lastItem = menus[menus.length - 1];
      
      const h1 = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createEl)('h1', '#projectTitle');
      h1.innerText = lastItem;
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addElement)(h1, titleContainer);
    } 

  }
}

// Project and Todo Buttons
function activatePL_BtnCon() {
  const titleContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#title-container', 1);

  const plButtonCon = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createEl)('div', '#pl-button-con');
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addElement)(plButtonCon, titleContainer);
}

function activatePlButton() {
  const plButtonCon = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#pl-button-con', 1);

  // const PLArr = ['Add Todo'];
  const PLButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createEl)('div', '#addPL');
  PLButton.innerHTML = `<img src='${_icon_add_create_new_plus_icon_svg__WEBPACK_IMPORTED_MODULE_0__}' id='addpl-svg'>`;
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addElement)(PLButton, plButtonCon);

  addPLHandler();

}

// addPL2 Event Listener Handler
function addPLHandler() {
  const pl2_btn = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#addPL', 1);
  const dialog = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#mydialog', 1);

  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addElis)(pl2_btn, () => {
    const menus = _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getParse('menus');
    if (menus.length === 0) {
      return alert('You have no project active. Please add project before adding a TodoList.');
    }
    dialog.showModal();
    (0,_todo_form__WEBPACK_IMPORTED_MODULE_3__.selectOption)();
  });
  
}

// Activate Initiate Content
function InitialProjectContent() {
  const initialELContent = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getELCD)();
  const initialOPLContent = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getOPLCD)();
  
  const today = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#projectTitle', 1);
  const keyToday = today.innerText.toLowerCase() + 'Content';
  console.log(keyToday);

  if (_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty(keyToday)) {

    const initialContentData = _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getParse(keyToday);
    initialContentData.forEach(todo => {
      (0,_todo_form__WEBPACK_IMPORTED_MODULE_3__.postToDo)(todo);
    });
    
  } 
  else {
    if (!_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty('initialData')) {
      // intialELContent and initialOPLContent
      _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('english_learningContent', initialELContent);
      _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('odin_project_learningContent', initialOPLContent);

      // initialData for today
      const initialData = (0,_data__WEBPACK_IMPORTED_MODULE_2__.getTodayCD)();

      if (initialData.length !== 0) {
        (0,_todo_form__WEBPACK_IMPORTED_MODULE_3__.sendMulDataToLocalStorage)(initialData);
  
        const initialContentData = _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getParse(keyToday);
        console.log(initialContentData);
        
        if (initialContentData !== null) {
          initialContentData.forEach(todo => {
            (0,_todo_form__WEBPACK_IMPORTED_MODULE_3__.postToDo)(todo);
          });
        }
      }

      _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('initialData', true);
    }
    else {
      return;
    }
  }
}

// Switch Content
function switchContent(elClicked) {
  console.log(_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.notNull('menus'));

  if (_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.notNull('menus') === false) {
    const titleH1 = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#projectTitle', 1);
    const todoContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#todo-container', 1);

    titleH1.innerText = 'Add project by clicked the button Add Project';

    // ProjectContent
    const key = titleH1.innerText.toLowerCase() + 'Content';

    if (_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty(key)) {
      const contentData = _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getParse(key);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.emptyEl)(todoContainer);

      contentData.forEach((todo=> {
        (0,_todo_form__WEBPACK_IMPORTED_MODULE_3__.postToDo)(todo);
      }));
      (0,_layout__WEBPACK_IMPORTED_MODULE_4__.changeTodoConPad)();
    }
    else {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.emptyEl)(todoContainer);
      (0,_layout__WEBPACK_IMPORTED_MODULE_4__.changeTodoConPad)();
    }
  }

  if (_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.notNull('menus') === true) {
    const el = elClicked.target;

    const content = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#content', 1);
    const menu = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('.mr-0');
    const menuLastItem = menu[menu.length - 1];

    const titleH1 = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#projectTitle', 1);
    const todoContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#todo-container', 1)
    console.log(todoContainer);


    if (!el.classList.contains('mr-0')) {
      console.log(menuLastItem);
      titleH1.innerText = menuLastItem.innerText;
    } else {
      titleH1.innerText = el.innerText;
    }

    // ProjectContent
    const key = titleH1.innerText.toLowerCase() + 'Content';

    if (_local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty(key)) {
      const contentData = _local_storage__WEBPACK_IMPORTED_MODULE_5__.LS.getParse(key);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.emptyEl)(todoContainer);

      contentData.forEach((todo=> {
        (0,_todo_form__WEBPACK_IMPORTED_MODULE_3__.postToDo)(todo);
      }));

      (0,_layout__WEBPACK_IMPORTED_MODULE_4__.changeTodoConPad)();
    }
    else {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.emptyEl)(todoContainer);
      (0,_layout__WEBPACK_IMPORTED_MODULE_4__.changeTodoConPad)();
    }
  }

}

function delContent() {
  const todoContainer = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.accesElement)('#todo-container', 1);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.emptyEl)(todoContainer);
}




/***/ }),

/***/ "./src/icon/add_create_new_plus_icon.svg":
/*!***********************************************!*\
  !*** ./src/icon/add_create_new_plus_icon.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4c72fa6dbefff7db994.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["dom","data","todo-form","layout","local-storage"], () => (__webpack_exec__("./src/content.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFZO0FBQ3BDLEVBQUUsNkNBQU87QUFDVDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkU3ZnIGZyb20gJy4vaWNvbi9hZGRfY3JlYXRlX25ld19wbHVzX2ljb24uc3ZnJztcclxuXHJcbmltcG9ydCB7IGFjY2VzRWxlbWVudCwgY3JlYXRlRWwsIGNyZWF0ZU11bEVsLCBhZGRFbGVtZW50LCBhZGRNdWxFbGVtZW50LCBhZGRNdWxUZXh0LCBhZGRFbGlzLCBlbXB0eUVsIH0gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCB7IGdldFRvZGF5Q0QsIGdldEVMQ0QsIGdldE9QTENELCBtZW51c0RhdGEgfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCB7IHBvc3RUb0RvLCBzZW5kRGF0YVRvTG9jYWxTdG9yYWdlLCBzZWxlY3RPcHRpb24sIHNlbmRNdWxEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi90b2RvLWZvcm1cIjtcclxuaW1wb3J0IHsgY2hhbmdlVG9kb0NvblBhZH0gZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBMUyB9IGZyb20gXCIuL2xvY2FsLXN0b3JhZ2VcIjtcclxuXHJcbi8vIFRvZGF5IExpc3QgaDFcclxuZnVuY3Rpb24gYWN0aXZhdGVIMUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGVudENvbiA9IGFjY2VzRWxlbWVudCgnI2NvbnRlbnQnLCAxKTtcclxuXHJcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJyN0aXRsZS1jb250YWluZXInKTtcclxuICBhZGRFbGVtZW50KHRpdGxlQ29udGFpbmVyLCBjb250ZW50Q29uKVxyXG5cclxuICBpZiAoTFMuaGFzUHJvcGVydHkoJ21lbnVzJykpIHtcclxuICAgIGNvbnN0IG1lbnVzID0gTFMuZ2V0UGFyc2UoJ21lbnVzJyk7XHJcblxyXG4gICAgaWYgKG1lbnVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zdCBoMSA9IGNyZWF0ZUVsKCdoMScsICcjcHJvamVjdFRpdGxlJyk7XHJcbiAgICAgIGgxLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICBhZGRFbGVtZW50KGgxLCB0aXRsZUNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1lbnVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBjb25zdCBsYXN0SXRlbSA9IG1lbnVzW21lbnVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgaDEgPSBjcmVhdGVFbCgnaDEnLCAnI3Byb2plY3RUaXRsZScpO1xyXG4gICAgICBoMS5pbm5lclRleHQgPSBsYXN0SXRlbTtcclxuICAgICAgYWRkRWxlbWVudChoMSwgdGl0bGVDb250YWluZXIpO1xyXG4gICAgfSBcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyBQcm9qZWN0IGFuZCBUb2RvIEJ1dHRvbnNcclxuZnVuY3Rpb24gYWN0aXZhdGVQTF9CdG5Db24oKSB7XHJcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBhY2Nlc0VsZW1lbnQoJyN0aXRsZS1jb250YWluZXInLCAxKTtcclxuXHJcbiAgY29uc3QgcGxCdXR0b25Db24gPSBjcmVhdGVFbCgnZGl2JywgJyNwbC1idXR0b24tY29uJyk7XHJcbiAgYWRkRWxlbWVudChwbEJ1dHRvbkNvbiwgdGl0bGVDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZVBsQnV0dG9uKCkge1xyXG4gIGNvbnN0IHBsQnV0dG9uQ29uID0gYWNjZXNFbGVtZW50KCcjcGwtYnV0dG9uLWNvbicsIDEpO1xyXG5cclxuICAvLyBjb25zdCBQTEFyciA9IFsnQWRkIFRvZG8nXTtcclxuICBjb25zdCBQTEJ1dHRvbiA9IGNyZWF0ZUVsKCdkaXYnLCAnI2FkZFBMJyk7XHJcbiAgUExCdXR0b24uaW5uZXJIVE1MID0gYDxpbWcgc3JjPScke2FkZFN2Z30nIGlkPSdhZGRwbC1zdmcnPmA7XHJcbiAgYWRkRWxlbWVudChQTEJ1dHRvbiwgcGxCdXR0b25Db24pO1xyXG5cclxuICBhZGRQTEhhbmRsZXIoKTtcclxuXHJcbn1cclxuXHJcbi8vIGFkZFBMMiBFdmVudCBMaXN0ZW5lciBIYW5kbGVyXHJcbmZ1bmN0aW9uIGFkZFBMSGFuZGxlcigpIHtcclxuICBjb25zdCBwbDJfYnRuID0gYWNjZXNFbGVtZW50KCcjYWRkUEwnLCAxKTtcclxuICBjb25zdCBkaWFsb2cgPSBhY2Nlc0VsZW1lbnQoJyNteWRpYWxvZycsIDEpO1xyXG5cclxuICBhZGRFbGlzKHBsMl9idG4sICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVzID0gTFMuZ2V0UGFyc2UoJ21lbnVzJyk7XHJcbiAgICBpZiAobWVudXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgnWW91IGhhdmUgbm8gcHJvamVjdCBhY3RpdmUuIFBsZWFzZSBhZGQgcHJvamVjdCBiZWZvcmUgYWRkaW5nIGEgVG9kb0xpc3QuJyk7XHJcbiAgICB9XHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgICBzZWxlY3RPcHRpb24oKTtcclxuICB9KTtcclxuICBcclxufVxyXG5cclxuLy8gQWN0aXZhdGUgSW5pdGlhdGUgQ29udGVudFxyXG5mdW5jdGlvbiBJbml0aWFsUHJvamVjdENvbnRlbnQoKSB7XHJcbiAgY29uc3QgaW5pdGlhbEVMQ29udGVudCA9IGdldEVMQ0QoKTtcclxuICBjb25zdCBpbml0aWFsT1BMQ29udGVudCA9IGdldE9QTENEKCk7XHJcbiAgXHJcbiAgY29uc3QgdG9kYXkgPSBhY2Nlc0VsZW1lbnQoJyNwcm9qZWN0VGl0bGUnLCAxKTtcclxuICBjb25zdCBrZXlUb2RheSA9IHRvZGF5LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpICsgJ0NvbnRlbnQnO1xyXG4gIGNvbnNvbGUubG9nKGtleVRvZGF5KTtcclxuXHJcbiAgaWYgKExTLmhhc1Byb3BlcnR5KGtleVRvZGF5KSkge1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50RGF0YSA9IExTLmdldFBhcnNlKGtleVRvZGF5KTtcclxuICAgIGluaXRpYWxDb250ZW50RGF0YS5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICBwb3N0VG9Ebyh0b2RvKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfSBcclxuICBlbHNlIHtcclxuICAgIGlmICghTFMuaGFzUHJvcGVydHkoJ2luaXRpYWxEYXRhJykpIHtcclxuICAgICAgLy8gaW50aWFsRUxDb250ZW50IGFuZCBpbml0aWFsT1BMQ29udGVudFxyXG4gICAgICBMUy5nZXRJbnRvKCdlbmdsaXNoX2xlYXJuaW5nQ29udGVudCcsIGluaXRpYWxFTENvbnRlbnQpO1xyXG4gICAgICBMUy5nZXRJbnRvKCdvZGluX3Byb2plY3RfbGVhcm5pbmdDb250ZW50JywgaW5pdGlhbE9QTENvbnRlbnQpO1xyXG5cclxuICAgICAgLy8gaW5pdGlhbERhdGEgZm9yIHRvZGF5XHJcbiAgICAgIGNvbnN0IGluaXRpYWxEYXRhID0gZ2V0VG9kYXlDRCgpO1xyXG5cclxuICAgICAgaWYgKGluaXRpYWxEYXRhLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIHNlbmRNdWxEYXRhVG9Mb2NhbFN0b3JhZ2UoaW5pdGlhbERhdGEpO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IGluaXRpYWxDb250ZW50RGF0YSA9IExTLmdldFBhcnNlKGtleVRvZGF5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbml0aWFsQ29udGVudERhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpbml0aWFsQ29udGVudERhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgIGluaXRpYWxDb250ZW50RGF0YS5mb3JFYWNoKHRvZG8gPT4ge1xyXG4gICAgICAgICAgICBwb3N0VG9Ebyh0b2RvKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgTFMuZ2V0SW50bygnaW5pdGlhbERhdGEnLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTd2l0Y2ggQ29udGVudFxyXG5mdW5jdGlvbiBzd2l0Y2hDb250ZW50KGVsQ2xpY2tlZCkge1xyXG4gIGNvbnNvbGUubG9nKExTLm5vdE51bGwoJ21lbnVzJykpO1xyXG5cclxuICBpZiAoTFMubm90TnVsbCgnbWVudXMnKSA9PT0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHRpdGxlSDEgPSBhY2Nlc0VsZW1lbnQoJyNwcm9qZWN0VGl0bGUnLCAxKTtcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBhY2Nlc0VsZW1lbnQoJyN0b2RvLWNvbnRhaW5lcicsIDEpO1xyXG5cclxuICAgIHRpdGxlSDEuaW5uZXJUZXh0ID0gJ0FkZCBwcm9qZWN0IGJ5IGNsaWNrZWQgdGhlIGJ1dHRvbiBBZGQgUHJvamVjdCc7XHJcblxyXG4gICAgLy8gUHJvamVjdENvbnRlbnRcclxuICAgIGNvbnN0IGtleSA9IHRpdGxlSDEuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkgKyAnQ29udGVudCc7XHJcblxyXG4gICAgaWYgKExTLmhhc1Byb3BlcnR5KGtleSkpIHtcclxuICAgICAgY29uc3QgY29udGVudERhdGEgPSBMUy5nZXRQYXJzZShrZXkpO1xyXG4gICAgICBlbXB0eUVsKHRvZG9Db250YWluZXIpO1xyXG5cclxuICAgICAgY29udGVudERhdGEuZm9yRWFjaCgodG9kbz0+IHtcclxuICAgICAgICBwb3N0VG9Ebyh0b2RvKTtcclxuICAgICAgfSkpO1xyXG4gICAgICBjaGFuZ2VUb2RvQ29uUGFkKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgZW1wdHlFbCh0b2RvQ29udGFpbmVyKTtcclxuICAgICAgY2hhbmdlVG9kb0NvblBhZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKExTLm5vdE51bGwoJ21lbnVzJykgPT09IHRydWUpIHtcclxuICAgIGNvbnN0IGVsID0gZWxDbGlja2VkLnRhcmdldDtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gYWNjZXNFbGVtZW50KCcjY29udGVudCcsIDEpO1xyXG4gICAgY29uc3QgbWVudSA9IGFjY2VzRWxlbWVudCgnLm1yLTAnKTtcclxuICAgIGNvbnN0IG1lbnVMYXN0SXRlbSA9IG1lbnVbbWVudS5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUgxID0gYWNjZXNFbGVtZW50KCcjcHJvamVjdFRpdGxlJywgMSk7XHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gYWNjZXNFbGVtZW50KCcjdG9kby1jb250YWluZXInLCAxKVxyXG4gICAgY29uc29sZS5sb2codG9kb0NvbnRhaW5lcik7XHJcblxyXG5cclxuICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtci0wJykpIHtcclxuICAgICAgY29uc29sZS5sb2cobWVudUxhc3RJdGVtKTtcclxuICAgICAgdGl0bGVIMS5pbm5lclRleHQgPSBtZW51TGFzdEl0ZW0uaW5uZXJUZXh0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGl0bGVIMS5pbm5lclRleHQgPSBlbC5pbm5lclRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUHJvamVjdENvbnRlbnRcclxuICAgIGNvbnN0IGtleSA9IHRpdGxlSDEuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkgKyAnQ29udGVudCc7XHJcblxyXG4gICAgaWYgKExTLmhhc1Byb3BlcnR5KGtleSkpIHtcclxuICAgICAgY29uc3QgY29udGVudERhdGEgPSBMUy5nZXRQYXJzZShrZXkpO1xyXG4gICAgICBlbXB0eUVsKHRvZG9Db250YWluZXIpO1xyXG5cclxuICAgICAgY29udGVudERhdGEuZm9yRWFjaCgodG9kbz0+IHtcclxuICAgICAgICBwb3N0VG9Ebyh0b2RvKTtcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgY2hhbmdlVG9kb0NvblBhZCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGVtcHR5RWwodG9kb0NvbnRhaW5lcik7XHJcbiAgICAgIGNoYW5nZVRvZG9Db25QYWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxDb250ZW50KCkge1xyXG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBhY2Nlc0VsZW1lbnQoJyN0b2RvLWNvbnRhaW5lcicsIDEpO1xyXG4gIGVtcHR5RWwodG9kb0NvbnRhaW5lcik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge2FjdGl2YXRlSDFDb250ZW50LCBhY3RpdmF0ZVBMX0J0bkNvbiwgYWN0aXZhdGVQbEJ1dHRvbiwgc3dpdGNoQ29udGVudCwgSW5pdGlhbFByb2plY3RDb250ZW50LCBkZWxDb250ZW50IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9