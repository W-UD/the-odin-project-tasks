"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["todo-form"],{

/***/ "./src/todo-form.js":
/*!**************************!*\
  !*** ./src/todo-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateBTN: () => (/* binding */ activateBTN),
/* harmony export */   activateForm: () => (/* binding */ activateForm),
/* harmony export */   activateInput: () => (/* binding */ activateInput),
/* harmony export */   activateInputCon: () => (/* binding */ activateInputCon),
/* harmony export */   activateTodoContainer: () => (/* binding */ activateTodoContainer),
/* harmony export */   activatedialog: () => (/* binding */ activatedialog),
/* harmony export */   getFormData: () => (/* binding */ getFormData),
/* harmony export */   postToDo: () => (/* binding */ postToDo),
/* harmony export */   selectOption: () => (/* binding */ selectOption),
/* harmony export */   sendDataToLocalStorage: () => (/* binding */ sendDataToLocalStorage),
/* harmony export */   sendMulDataToLocalStorage: () => (/* binding */ sendMulDataToLocalStorage),
/* harmony export */   updateFORM: () => (/* binding */ updateFORM)
/* harmony export */ });
/* harmony import */ var _icon_edit_pencil_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/edit-pencil.svg */ "./src/icon/edit-pencil.svg");
/* harmony import */ var _icon_xmark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/xmark.svg */ "./src/icon/xmark.svg");
/* harmony import */ var _icon_finish_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon/finish-svgrepo-com.svg */ "./src/icon/finish-svgrepo-com.svg");
/* harmony import */ var _icon_location_marker_path_road_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon/location_marker_path_road_icon.svg */ "./src/icon/location_marker_path_road_icon.svg");
/* harmony import */ var _icon_blue_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon/blue-circle-svgrepo-com.svg */ "./src/icon/blue-circle-svgrepo-com.svg");
/* harmony import */ var _icon_red_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/red-circle-svgrepo-com.svg */ "./src/icon/red-circle-svgrepo-com.svg");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");













// Data
const todoName = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist', 'project'];
const todoNameInput = ['title', 'dueDate', 'priority', 'checklist', 'project'];
const todoNameTextarea = ['description', 'notes'];

// Activate Todo Container
function activateTodoContainer() {
  const content = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#content', 1);
  
  if (checkTodoContainer()) {
    return (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#todo-container', 1);
  } 
  else {
    const todoContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.createEl)('div', '#todo-container');
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElement)(todoContainer, content);

    return todoContainer;
  }
  
}

// Check Todo Container
function checkTodoContainer() {
  const content = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#content', 1);
  const contentChildren = Array.from(content.children);
  
  return contentChildren.some(e => e.id === 'todo-container');
}

// Dialog
function activatedialog() {
  const content = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#content', 1);

  const dialog = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.createEl)('dialog', '#mydialog');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElement)(dialog, content);

  return dialog;
}

// Non Activate Dialog
function nonActivateDialog() {
  const dialog = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#mydialog', 1);
  dialog.close();
  updateFORM();
}

// Form
function activateForm() {
  const dialog = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#mydialog', 1);

  const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.createEl)('form', '#form-todo');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElement)(form, dialog);
  
  activateCloseBtn(form);

  return form;
}

// Activate Close Form Button
function activateCloseBtn(form) {
  const closeForm = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.createEl)('button', '#close-form-btn')
  ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElement)(closeForm, form);
  closeForm.innerText = 'x';

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElis)(closeForm, nonActivateDialog);
}

// Form Input Container
function activateInputCon() {
  const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#form-todo', 1);
  
  const mapDataTTag = (0,_data_js__WEBPACK_IMPORTED_MODULE_6__.mapMDToDiv)(todoName);
  const inputContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.createMulEl)(mapDataTTag, '.input-container');

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addMulElement)(inputContainer, form);

  return inputContainer;
}

// Input
function activateInput() {
  const inputContainer = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('.input-container'));

  // Elements for form
  inputContainer.forEach((e, i, arr) => {
    if (i === 1 || i === 4) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)(['label', 'textarea'], '.input-l', e);
    } 
    else if (i === 6) {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)(['label', 'select'], '.input-l', e);
    }
    else {
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)(['label', 'input'], '.input-l', e)
    }

  });
  
  // Label
  const label = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('label.input-l', 'all'));
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addMulText)(label, todoName);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(label, 'for', todoName, 'input-');

  // Input
  const input = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('input.input-l', 'all'));
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addMulId)(input, todoNameInput, 'input-')
  ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(input, 'name', todoNameInput);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(input, 'type', ['text', 'date', 'checkbox', 'checkbox']);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(input, 'value', ['', '', 'prioritized', 'finished']);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(input, 'required', [1, 1, '', '']);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addPlaceholder)(input, 'input here..');
  
  // Textarea
  const textarea = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('textarea.input-l'));
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addMulId)(textarea, todoNameTextarea, 'input-')
  ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(textarea, 'name', todoNameTextarea);

  // Select
  const selectOpt = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('select.input-l', 1);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(selectOpt, 'id', 'project', 'input-');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(selectOpt, 'name', 'project', '');

  // Options
  const options = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)((0,_data_js__WEBPACK_IMPORTED_MODULE_6__.mapMDToDiv)(_data_js__WEBPACK_IMPORTED_MODULE_6__.menusData, 'option'), '#option', selectOpt);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addAtr)(options, 'value', _data_js__WEBPACK_IMPORTED_MODULE_6__.menusData);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addMulText)(options, _data_js__WEBPACK_IMPORTED_MODULE_6__.menusData);
  
  return input;
}

// Selected Option
function selectOption() {
  const h1Title = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#projectTitle', 1);
  const select = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-project', 1);
  const options = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-project option', 'all'));
  
  options.forEach((el, i) => {
    if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.getInnerText)(el) === (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.getInnerText)(h1Title)) {
      select.selectedIndex = i;
    }
  });
}


// Button Submit
function activateBTN() {
  const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#form-todo', 1);
  
  const inputbtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.createEl)('button', '#input-btn');
  inputbtn.type = 'submit';
  inputbtn.innerText = 'submit';
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElement)(inputbtn, form);
  
  // EventListener
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElis)(inputbtn, submitFormHandler);
  
}

// Submit Form Handler
function submitFormHandler(e) {
  const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#form-todo', 1);
  e.preventDefault();
  const checkFormValidity = form.checkValidity();

  if (checkFormValidity) {
    const formData = getSendFormData();
    // console.log(formData);
  
    projectIsActive(formData) ? postToDo(formData) : null;
    nonActivateDialog();
  } else {
    return form.reportValidity();
  }
}


// Check Project Category Choice
function projectIsActive(fd) {
  const activeMenu = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('.mr0-active', 1);

 return activeMenu.innerText.toLowerCase() === fd.project.toLowerCase();
}

// Form Bundle: All function
function updateFORM() {
  resetForm();
  activateForm();
  activateInputCon();
  activateInput();
  activateBTN();
}

// Reset Form
function resetForm() {
  const dialog = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#mydialog', 1);
  dialog.innerHTML = '';
}

// Get Form Data
function getFormData() {
  const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#form-todo', 1);
  
  const fd = Object.fromEntries(new FormData(form));

  console.log(fd);
  console.log(fd.checklist);
  console.log(fd.priority);
  
  fd.checklist ? 
    fd.checklist = 'finished' :
    fd.checklist = 'not finished';

  fd.priority ? 
    fd.priority = 'prioritized' :
    fd.priority = 'not prioritized';
  
  
  return fd;
}

// Get and Send Form Data
function getSendFormData() {
  const getFd = getFormData()
  sendDataToLocalStorage(getFd);

  return getFd;
}

// Post Form Data
function postToDo(formData) {
  makeTodoListContent(formData)
}

// TodoList Content
function makeTodoListContent(formData) {
  const data = formData;
  console.log(formData);

  const datakeys = (0,_data_js__WEBPACK_IMPORTED_MODULE_6__.filterO)(Object.keys(data), data);
  const dataValues = (0,_data_js__WEBPACK_IMPORTED_MODULE_6__.filterA)(Object.values(data));
  
  const todoContainer = activateTodoContainer();

  const todos = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)('div', '.todo', todoContainer);
  
  // TodoList Content
  const tdInfo = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)((0,_data_js__WEBPACK_IMPORTED_MODULE_6__.mapMDToDiv)(datakeys), '.td-info', todos);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addMulEl_Cls)(tdInfo, datakeys, '.tdi-')
  ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addMulText)(tdInfo, dataValues);

  // tdi-priority and tdi-checklist
  const tdiInfoCheckbox =   tdInfo.filter((el) => {
    return el.classList.contains('tdi-priority') || el.classList.contains('tdi-checklist');
  });
  
  if (tdiInfoCheckbox[0].textContent === 'prioritized') {
    console.log(tdiInfoCheckbox[1].textContent);
    tdiInfoCheckbox[0].innerHTML = `<img id='icon-priority' src='${_icon_red_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__}'> <span id='priority-high'>High</span>`;
  } else {
    tdiInfoCheckbox[0].innerHTML = `<img id='icon-priority' src='${_icon_blue_circle_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_4__}'> <span id='priority-low'>Low</span>`;
  }

  if (tdiInfoCheckbox[1].textContent === 'finished') {
    tdiInfoCheckbox[1].innerHTML = `<img id='icon-progress' src='${_icon_finish_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__}'> <span>done</span>`;
  } else {
    tdiInfoCheckbox[1].innerHTML = `<img id='icon-progress' src='${_icon_location_marker_path_road_icon_svg__WEBPACK_IMPORTED_MODULE_3__}'> <span>in progress</span>`;
  }
    
  
  // TodoList Content Button
  const tdButtonContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)('div', '.td-button-container', todos);
  const tdButton = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addChild)(['div', 'div'], '.td-button', tdButtonContainer);

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addHTML)(tdButton[0], `<img src='${_icon_xmark_svg__WEBPACK_IMPORTED_MODULE_1__}' id='td-button-del'>`);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addHTML)(tdButton[1], `<img src='${_icon_edit_pencil_svg__WEBPACK_IMPORTED_MODULE_0__}' id='td-button-ed'>`);

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElis)(tdButton[0], (e) => {
    const h1Title = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#projectTitle', 1);
    const target = e.target;
    
    const todoParent = target.closest('.todo');
    const todoTitle = todoParent.querySelector('.tdi-title');

    const projectName = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.getInnerText)(h1Title) + 'Content';
    const project = _local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.getParse(projectName);

    const newProject = project.filter(fd => {
      console.log(fd.title === todoTitle.innerText);
      return fd.title !== todoTitle.innerText;
    });
    
    _local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.getInto((0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.getInnerText)(h1Title) + 'Content', newProject);
    console.log(newProject);
    
    if (newProject.length !== 0) {
      const todoContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#todo-container', 1);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.emptyEl)(todoContainer);

      newProject.forEach(td => {
        postToDo(td)
      });
    } else if (newProject.length === 0) {
      const todoContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#todo-container', 1);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.emptyEl)(todoContainer);
    }

  }, 'click');

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElis)(tdButton[1], (e) => {
    const h1Title = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#projectTitle', 1);
    const target = e.target;
    
    const todoContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#todo-container', 1);
    const todoParent = target.closest('.todo');
    const todoTitle = todoParent.querySelector('.tdi-title');

    const projectName = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.getInnerText)(h1Title) + 'Content';
    const project = _local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.getParse(projectName);
  
    const projectToEdit = project.filter(fd => {
      return fd.title === todoTitle.innerText;
    })[0];

    const dialog = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#mydialog', 1);
    const form = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#form-todo', 1);
    const inputTitle = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-title', 1);
    const inputDescription = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-description', 1);
    const inputDueDate = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-dueDate', 1);
    const inputPriority = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-priority', 1);
    const inputNotes = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-notes', 1);
    const inputChecklist = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-checklist', 1);
    const inputProject = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-project', 1);


    inputTitle.value = projectToEdit.title;

    !inputDescription.value === undefined ?
      inputDescription.value = projectToEdit.description : null;

    inputDueDate.value = projectToEdit.dueDate;

    projectToEdit.priority === 'prioritized' ? inputPriority.checked = true : null;

    inputNotes.value = projectToEdit.notes;
      
    projectToEdit.checklist === 'finished' ? inputChecklist.checked = true : null;

    inputProject.value = projectToEdit.project;
    console.log(projectToEdit);

    dialog.showModal();

    // Submit Form Edited
    const submitBtn = (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.accesElement)('#input-btn', 1);
    submitBtn.removeEventListener('click', submitFormHandler);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.addElis)(submitBtn, (e) => {
      e.preventDefault();
      const previousProjectIndex = project.findIndex(item => {
        return item.title === todoTitle.innerText;
      })
      
      const newEditedFormData = getFormData();
      if (newEditedFormData.project === h1Title.innerText) {

        project[previousProjectIndex] = newEditedFormData;
        _local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.getInto(projectName, project);

        (0,_dom_js__WEBPACK_IMPORTED_MODULE_7__.emptyEl)(todoContainer);
        project.forEach(td => {
          postToDo(td);
        });
      }

      dialog.close();
      updateFORM();
    });

  }, 'click')

}


// Send Form Data to Local Storage
function sendDataToLocalStorage(fd) {
  const key = fd.project.toLowerCase() + 'Content';
  
  if (_local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.hasProperty(key)) {
    changeDataInLS(key, fd);
  }
  else {
    const initialData = [];
    _local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.getInto(key, initialData);
    changeDataInLS(key, fd);
  }

}

// Send Mutltiple Form Data to LocalStorage
function sendMulDataToLocalStorage(arrData) {
  arrData.forEach(data => {
    sendDataToLocalStorage(data);
  });
}

// Change Data From LocalStorage
function changeDataInLS(dataName, newData) {
  const getInialData = _local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.getParse(dataName);
  console.log(getInialData);
  console.log(newData);
  
  getInialData.push(newData);
  // Object.defineProperty(getInialData, newData.title, {
  //   value: newData,
  //   writable: true,
  //   configurable: true,
  //   enumerable: true
  // });

  _local_storage_js__WEBPACK_IMPORTED_MODULE_8__.LS.getInto(dataName, getInialData);
}




/***/ }),

/***/ "./src/icon/blue-circle-svgrepo-com.svg":
/*!**********************************************!*\
  !*** ./src/icon/blue-circle-svgrepo-com.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "597b28650040f69f4157.svg";

/***/ }),

/***/ "./src/icon/edit-pencil.svg":
/*!**********************************!*\
  !*** ./src/icon/edit-pencil.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2c94d9cc85dc2fb488b7.svg";

/***/ }),

/***/ "./src/icon/finish-svgrepo-com.svg":
/*!*****************************************!*\
  !*** ./src/icon/finish-svgrepo-com.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fa34dac65a446ccd7931.svg";

/***/ }),

/***/ "./src/icon/location_marker_path_road_icon.svg":
/*!*****************************************************!*\
  !*** ./src/icon/location_marker_path_road_icon.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39e6b81c7e3ef7205dbc.svg";

/***/ }),

/***/ "./src/icon/red-circle-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/icon/red-circle-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "077d49bde9c82c775418.svg";

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
/******/ __webpack_require__.O(0, ["data","dom","local-storage"], () => (__webpack_exec__("./src/todo-form.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1mb3JtLm15ZmlsZS05YWEzZDhmYTJjY2ZjMGVhMjdjMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDTDtBQUNjO0FBQ2dCO0FBQ047QUFDQTtBQUNqRTtBQUNnRjtBQUNoRjtBQUMrUDtBQUMvUDtBQUN3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFZO0FBQzlCO0FBQ0E7QUFDQSxXQUFXLHFEQUFZO0FBQ3ZCO0FBQ0E7QUFDQSwwQkFBMEIsaURBQVE7QUFDbEMsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVk7QUFDOUI7QUFDQSxpQkFBaUIsaURBQVE7QUFDekIsRUFBRSxtREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQVk7QUFDN0I7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCLEVBQUUsbURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFRO0FBQzVCLEVBQUUsb0RBQVU7QUFDWjtBQUNBO0FBQ0EsRUFBRSxnREFBTztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxREFBWTtBQUMzQjtBQUNBLHNCQUFzQixvREFBVTtBQUNoQyx5QkFBeUIsb0RBQVc7QUFDcEM7QUFDQSxFQUFFLHNEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFEQUFZO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBUTtBQUNkO0FBQ0E7QUFDQSxN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBRTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxFQUFFLGlEQUFFO0FBQ0o7QUFDQTtBQUNpTiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGljb25FZGl0IGZyb20gJy4vaWNvbi9lZGl0LXBlbmNpbC5zdmcnO1xyXG5pbXBvcnQgaWNvblhtYXJrIGZyb20gJy4vaWNvbi94bWFyay5zdmcnO1xyXG5pbXBvcnQgZmluaXNoSWNvbiBmcm9tICcuL2ljb24vZmluaXNoLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBpblByb2dyZXNzSWNvbiBmcm9tICcuL2ljb24vbG9jYXRpb25fbWFya2VyX3BhdGhfcm9hZF9pY29uLnN2Zyc7XHJcbmltcG9ydCBsb3dQcmlvcml0eUljb24gZnJvbSAnLi9pY29uL2JsdWUtY2lyY2xlLXN2Z3JlcG8tY29tLnN2Zyc7XHJcbmltcG9ydCBoaWdoUHJpb3JpdHlJY29uIGZyb20gJy4vaWNvbi9yZWQtY2lyY2xlLXN2Z3JlcG8tY29tLnN2Zyc7XHJcblxyXG5pbXBvcnQgeyBuZXdQcm9qZWN0LCBtYXBNRFRvRGl2LCBtZW51c0RhdGEsIGZpbHRlckEsIGZpbHRlck8gfSBmcm9tIFwiLi9kYXRhLmpzXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVFbCwgY3JlYXRlTXVsRWwsIGFkZEVsZW1lbnQsYWRkTXVsRWxlbWVudCwgYWNjZXNFbGVtZW50LCBhZGRDaGlsZF9vZl9FbEFyciwgYWRkTXVsVGV4dCwgYWRkSFRNTCwgYWRkUGxhY2Vob2xkZXIsIGFkZE11bElkLCBhZGRBdHIsIHNoaWZ0QXJyUCwgYWRkQ2hpbGQsIGFkZEVsaXMsIGFkZE11bEVsX0NscywgYWRkRGF0YVNldCwgZ2V0SW5uZXJUZXh0LCBlbXB0eUVsLCBmaW5kUG9zaXRpb259IGZyb20gXCIuL2RvbS5qc1wiO1xyXG5cclxuaW1wb3J0IHsgTFMgfSBmcm9tIFwiLi9sb2NhbC1zdG9yYWdlLmpzXCI7XHJcblxyXG4vLyBEYXRhXHJcbmNvbnN0IHRvZG9OYW1lID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdkdWVEYXRlJywgJ3ByaW9yaXR5JywgJ25vdGVzJywgJ2NoZWNrbGlzdCcsICdwcm9qZWN0J107XHJcbmNvbnN0IHRvZG9OYW1lSW5wdXQgPSBbJ3RpdGxlJywgJ2R1ZURhdGUnLCAncHJpb3JpdHknLCAnY2hlY2tsaXN0JywgJ3Byb2plY3QnXTtcclxuY29uc3QgdG9kb05hbWVUZXh0YXJlYSA9IFsnZGVzY3JpcHRpb24nLCAnbm90ZXMnXTtcclxuXHJcbi8vIEFjdGl2YXRlIFRvZG8gQ29udGFpbmVyXHJcbmZ1bmN0aW9uIGFjdGl2YXRlVG9kb0NvbnRhaW5lcigpIHtcclxuICBjb25zdCBjb250ZW50ID0gYWNjZXNFbGVtZW50KCcjY29udGVudCcsIDEpO1xyXG4gIFxyXG4gIGlmIChjaGVja1RvZG9Db250YWluZXIoKSkge1xyXG4gICAgcmV0dXJuIGFjY2VzRWxlbWVudCgnI3RvZG8tY29udGFpbmVyJywgMSk7XHJcbiAgfSBcclxuICBlbHNlIHtcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJyN0b2RvLWNvbnRhaW5lcicpO1xyXG4gICAgYWRkRWxlbWVudCh0b2RvQ29udGFpbmVyLCBjb250ZW50KTtcclxuXHJcbiAgICByZXR1cm4gdG9kb0NvbnRhaW5lcjtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi8vIENoZWNrIFRvZG8gQ29udGFpbmVyXHJcbmZ1bmN0aW9uIGNoZWNrVG9kb0NvbnRhaW5lcigpIHtcclxuICBjb25zdCBjb250ZW50ID0gYWNjZXNFbGVtZW50KCcjY29udGVudCcsIDEpO1xyXG4gIGNvbnN0IGNvbnRlbnRDaGlsZHJlbiA9IEFycmF5LmZyb20oY29udGVudC5jaGlsZHJlbik7XHJcbiAgXHJcbiAgcmV0dXJuIGNvbnRlbnRDaGlsZHJlbi5zb21lKGUgPT4gZS5pZCA9PT0gJ3RvZG8tY29udGFpbmVyJyk7XHJcbn1cclxuXHJcbi8vIERpYWxvZ1xyXG5mdW5jdGlvbiBhY3RpdmF0ZWRpYWxvZygpIHtcclxuICBjb25zdCBjb250ZW50ID0gYWNjZXNFbGVtZW50KCcjY29udGVudCcsIDEpO1xyXG5cclxuICBjb25zdCBkaWFsb2cgPSBjcmVhdGVFbCgnZGlhbG9nJywgJyNteWRpYWxvZycpO1xyXG4gIGFkZEVsZW1lbnQoZGlhbG9nLCBjb250ZW50KTtcclxuXHJcbiAgcmV0dXJuIGRpYWxvZztcclxufVxyXG5cclxuLy8gTm9uIEFjdGl2YXRlIERpYWxvZ1xyXG5mdW5jdGlvbiBub25BY3RpdmF0ZURpYWxvZygpIHtcclxuICBjb25zdCBkaWFsb2cgPSBhY2Nlc0VsZW1lbnQoJyNteWRpYWxvZycsIDEpO1xyXG4gIGRpYWxvZy5jbG9zZSgpO1xyXG4gIHVwZGF0ZUZPUk0oKTtcclxufVxyXG5cclxuLy8gRm9ybVxyXG5mdW5jdGlvbiBhY3RpdmF0ZUZvcm0oKSB7XHJcbiAgY29uc3QgZGlhbG9nID0gYWNjZXNFbGVtZW50KCcjbXlkaWFsb2cnLCAxKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsKCdmb3JtJywgJyNmb3JtLXRvZG8nKTtcclxuICBhZGRFbGVtZW50KGZvcm0sIGRpYWxvZyk7XHJcbiAgXHJcbiAgYWN0aXZhdGVDbG9zZUJ0bihmb3JtKTtcclxuXHJcbiAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbi8vIEFjdGl2YXRlIENsb3NlIEZvcm0gQnV0dG9uXHJcbmZ1bmN0aW9uIGFjdGl2YXRlQ2xvc2VCdG4oZm9ybSkge1xyXG4gIGNvbnN0IGNsb3NlRm9ybSA9IGNyZWF0ZUVsKCdidXR0b24nLCAnI2Nsb3NlLWZvcm0tYnRuJylcclxuICBhZGRFbGVtZW50KGNsb3NlRm9ybSwgZm9ybSk7XHJcbiAgY2xvc2VGb3JtLmlubmVyVGV4dCA9ICd4JztcclxuXHJcbiAgYWRkRWxpcyhjbG9zZUZvcm0sIG5vbkFjdGl2YXRlRGlhbG9nKTtcclxufVxyXG5cclxuLy8gRm9ybSBJbnB1dCBDb250YWluZXJcclxuZnVuY3Rpb24gYWN0aXZhdGVJbnB1dENvbigpIHtcclxuICBjb25zdCBmb3JtID0gYWNjZXNFbGVtZW50KCcjZm9ybS10b2RvJywgMSk7XHJcbiAgXHJcbiAgY29uc3QgbWFwRGF0YVRUYWcgPSBtYXBNRFRvRGl2KHRvZG9OYW1lKTtcclxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZU11bEVsKG1hcERhdGFUVGFnLCAnLmlucHV0LWNvbnRhaW5lcicpO1xyXG5cclxuICBhZGRNdWxFbGVtZW50KGlucHV0Q29udGFpbmVyLCBmb3JtKTtcclxuXHJcbiAgcmV0dXJuIGlucHV0Q29udGFpbmVyO1xyXG59XHJcblxyXG4vLyBJbnB1dFxyXG5mdW5jdGlvbiBhY3RpdmF0ZUlucHV0KCkge1xyXG4gIGNvbnN0IGlucHV0Q29udGFpbmVyID0gQXJyYXkuZnJvbShhY2Nlc0VsZW1lbnQoJy5pbnB1dC1jb250YWluZXInKSk7XHJcblxyXG4gIC8vIEVsZW1lbnRzIGZvciBmb3JtXHJcbiAgaW5wdXRDb250YWluZXIuZm9yRWFjaCgoZSwgaSwgYXJyKSA9PiB7XHJcbiAgICBpZiAoaSA9PT0gMSB8fCBpID09PSA0KSB7XHJcbiAgICAgIGFkZENoaWxkKFsnbGFiZWwnLCAndGV4dGFyZWEnXSwgJy5pbnB1dC1sJywgZSk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZiAoaSA9PT0gNikge1xyXG4gICAgICBhZGRDaGlsZChbJ2xhYmVsJywgJ3NlbGVjdCddLCAnLmlucHV0LWwnLCBlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBhZGRDaGlsZChbJ2xhYmVsJywgJ2lucHV0J10sICcuaW5wdXQtbCcsIGUpXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIExhYmVsXHJcbiAgY29uc3QgbGFiZWwgPSBBcnJheS5mcm9tKGFjY2VzRWxlbWVudCgnbGFiZWwuaW5wdXQtbCcsICdhbGwnKSk7XHJcbiAgYWRkTXVsVGV4dChsYWJlbCwgdG9kb05hbWUpO1xyXG4gIGFkZEF0cihsYWJlbCwgJ2ZvcicsIHRvZG9OYW1lLCAnaW5wdXQtJyk7XHJcblxyXG4gIC8vIElucHV0XHJcbiAgY29uc3QgaW5wdXQgPSBBcnJheS5mcm9tKGFjY2VzRWxlbWVudCgnaW5wdXQuaW5wdXQtbCcsICdhbGwnKSk7XHJcbiAgYWRkTXVsSWQoaW5wdXQsIHRvZG9OYW1lSW5wdXQsICdpbnB1dC0nKVxyXG4gIGFkZEF0cihpbnB1dCwgJ25hbWUnLCB0b2RvTmFtZUlucHV0KTtcclxuICBhZGRBdHIoaW5wdXQsICd0eXBlJywgWyd0ZXh0JywgJ2RhdGUnLCAnY2hlY2tib3gnLCAnY2hlY2tib3gnXSk7XHJcbiAgYWRkQXRyKGlucHV0LCAndmFsdWUnLCBbJycsICcnLCAncHJpb3JpdGl6ZWQnLCAnZmluaXNoZWQnXSk7XHJcbiAgYWRkQXRyKGlucHV0LCAncmVxdWlyZWQnLCBbMSwgMSwgJycsICcnXSk7XHJcbiAgYWRkUGxhY2Vob2xkZXIoaW5wdXQsICdpbnB1dCBoZXJlLi4nKTtcclxuICBcclxuICAvLyBUZXh0YXJlYVxyXG4gIGNvbnN0IHRleHRhcmVhID0gQXJyYXkuZnJvbShhY2Nlc0VsZW1lbnQoJ3RleHRhcmVhLmlucHV0LWwnKSk7XHJcbiAgYWRkTXVsSWQodGV4dGFyZWEsIHRvZG9OYW1lVGV4dGFyZWEsICdpbnB1dC0nKVxyXG4gIGFkZEF0cih0ZXh0YXJlYSwgJ25hbWUnLCB0b2RvTmFtZVRleHRhcmVhKTtcclxuXHJcbiAgLy8gU2VsZWN0XHJcbiAgY29uc3Qgc2VsZWN0T3B0ID0gYWNjZXNFbGVtZW50KCdzZWxlY3QuaW5wdXQtbCcsIDEpO1xyXG4gIGFkZEF0cihzZWxlY3RPcHQsICdpZCcsICdwcm9qZWN0JywgJ2lucHV0LScpO1xyXG4gIGFkZEF0cihzZWxlY3RPcHQsICduYW1lJywgJ3Byb2plY3QnLCAnJyk7XHJcblxyXG4gIC8vIE9wdGlvbnNcclxuICBjb25zdCBvcHRpb25zID0gYWRkQ2hpbGQobWFwTURUb0RpdihtZW51c0RhdGEsICdvcHRpb24nKSwgJyNvcHRpb24nLCBzZWxlY3RPcHQpO1xyXG4gIGFkZEF0cihvcHRpb25zLCAndmFsdWUnLCBtZW51c0RhdGEpO1xyXG4gIGFkZE11bFRleHQob3B0aW9ucywgbWVudXNEYXRhKTtcclxuICBcclxuICByZXR1cm4gaW5wdXQ7XHJcbn1cclxuXHJcbi8vIFNlbGVjdGVkIE9wdGlvblxyXG5mdW5jdGlvbiBzZWxlY3RPcHRpb24oKSB7XHJcbiAgY29uc3QgaDFUaXRsZSA9IGFjY2VzRWxlbWVudCgnI3Byb2plY3RUaXRsZScsIDEpO1xyXG4gIGNvbnN0IHNlbGVjdCA9IGFjY2VzRWxlbWVudCgnI2lucHV0LXByb2plY3QnLCAxKTtcclxuICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbShhY2Nlc0VsZW1lbnQoJyNpbnB1dC1wcm9qZWN0IG9wdGlvbicsICdhbGwnKSk7XHJcbiAgXHJcbiAgb3B0aW9ucy5mb3JFYWNoKChlbCwgaSkgPT4ge1xyXG4gICAgaWYgKGdldElubmVyVGV4dChlbCkgPT09IGdldElubmVyVGV4dChoMVRpdGxlKSkge1xyXG4gICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBCdXR0b24gU3VibWl0XHJcbmZ1bmN0aW9uIGFjdGl2YXRlQlROKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBhY2Nlc0VsZW1lbnQoJyNmb3JtLXRvZG8nLCAxKTtcclxuICBcclxuICBjb25zdCBpbnB1dGJ0biA9IGNyZWF0ZUVsKCdidXR0b24nLCAnI2lucHV0LWJ0bicpO1xyXG4gIGlucHV0YnRuLnR5cGUgPSAnc3VibWl0JztcclxuICBpbnB1dGJ0bi5pbm5lclRleHQgPSAnc3VibWl0JztcclxuICBhZGRFbGVtZW50KGlucHV0YnRuLCBmb3JtKTtcclxuICBcclxuICAvLyBFdmVudExpc3RlbmVyXHJcbiAgYWRkRWxpcyhpbnB1dGJ0biwgc3VibWl0Rm9ybUhhbmRsZXIpO1xyXG4gIFxyXG59XHJcblxyXG4vLyBTdWJtaXQgRm9ybSBIYW5kbGVyXHJcbmZ1bmN0aW9uIHN1Ym1pdEZvcm1IYW5kbGVyKGUpIHtcclxuICBjb25zdCBmb3JtID0gYWNjZXNFbGVtZW50KCcjZm9ybS10b2RvJywgMSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGNoZWNrRm9ybVZhbGlkaXR5ID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XHJcblxyXG4gIGlmIChjaGVja0Zvcm1WYWxpZGl0eSkge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBnZXRTZW5kRm9ybURhdGEoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICBcclxuICAgIHByb2plY3RJc0FjdGl2ZShmb3JtRGF0YSkgPyBwb3N0VG9Ebyhmb3JtRGF0YSkgOiBudWxsO1xyXG4gICAgbm9uQWN0aXZhdGVEaWFsb2coKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBDaGVjayBQcm9qZWN0IENhdGVnb3J5IENob2ljZVxyXG5mdW5jdGlvbiBwcm9qZWN0SXNBY3RpdmUoZmQpIHtcclxuICBjb25zdCBhY3RpdmVNZW51ID0gYWNjZXNFbGVtZW50KCcubXIwLWFjdGl2ZScsIDEpO1xyXG5cclxuIHJldHVybiBhY3RpdmVNZW51LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpID09PSBmZC5wcm9qZWN0LnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbi8vIEZvcm0gQnVuZGxlOiBBbGwgZnVuY3Rpb25cclxuZnVuY3Rpb24gdXBkYXRlRk9STSgpIHtcclxuICByZXNldEZvcm0oKTtcclxuICBhY3RpdmF0ZUZvcm0oKTtcclxuICBhY3RpdmF0ZUlucHV0Q29uKCk7XHJcbiAgYWN0aXZhdGVJbnB1dCgpO1xyXG4gIGFjdGl2YXRlQlROKCk7XHJcbn1cclxuXHJcbi8vIFJlc2V0IEZvcm1cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGFjY2VzRWxlbWVudCgnI215ZGlhbG9nJywgMSk7XHJcbiAgZGlhbG9nLmlubmVySFRNTCA9ICcnO1xyXG59XHJcblxyXG4vLyBHZXQgRm9ybSBEYXRhXHJcbmZ1bmN0aW9uIGdldEZvcm1EYXRhKCkge1xyXG4gIGNvbnN0IGZvcm0gPSBhY2Nlc0VsZW1lbnQoJyNmb3JtLXRvZG8nLCAxKTtcclxuICBcclxuICBjb25zdCBmZCA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xyXG5cclxuICBjb25zb2xlLmxvZyhmZCk7XHJcbiAgY29uc29sZS5sb2coZmQuY2hlY2tsaXN0KTtcclxuICBjb25zb2xlLmxvZyhmZC5wcmlvcml0eSk7XHJcbiAgXHJcbiAgZmQuY2hlY2tsaXN0ID8gXHJcbiAgICBmZC5jaGVja2xpc3QgPSAnZmluaXNoZWQnIDpcclxuICAgIGZkLmNoZWNrbGlzdCA9ICdub3QgZmluaXNoZWQnO1xyXG5cclxuICBmZC5wcmlvcml0eSA/IFxyXG4gICAgZmQucHJpb3JpdHkgPSAncHJpb3JpdGl6ZWQnIDpcclxuICAgIGZkLnByaW9yaXR5ID0gJ25vdCBwcmlvcml0aXplZCc7XHJcbiAgXHJcbiAgXHJcbiAgcmV0dXJuIGZkO1xyXG59XHJcblxyXG4vLyBHZXQgYW5kIFNlbmQgRm9ybSBEYXRhXHJcbmZ1bmN0aW9uIGdldFNlbmRGb3JtRGF0YSgpIHtcclxuICBjb25zdCBnZXRGZCA9IGdldEZvcm1EYXRhKClcclxuICBzZW5kRGF0YVRvTG9jYWxTdG9yYWdlKGdldEZkKTtcclxuXHJcbiAgcmV0dXJuIGdldEZkO1xyXG59XHJcblxyXG4vLyBQb3N0IEZvcm0gRGF0YVxyXG5mdW5jdGlvbiBwb3N0VG9Ebyhmb3JtRGF0YSkge1xyXG4gIG1ha2VUb2RvTGlzdENvbnRlbnQoZm9ybURhdGEpXHJcbn1cclxuXHJcbi8vIFRvZG9MaXN0IENvbnRlbnRcclxuZnVuY3Rpb24gbWFrZVRvZG9MaXN0Q29udGVudChmb3JtRGF0YSkge1xyXG4gIGNvbnN0IGRhdGEgPSBmb3JtRGF0YTtcclxuICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XHJcblxyXG4gIGNvbnN0IGRhdGFrZXlzID0gZmlsdGVyTyhPYmplY3Qua2V5cyhkYXRhKSwgZGF0YSk7XHJcbiAgY29uc3QgZGF0YVZhbHVlcyA9IGZpbHRlckEoT2JqZWN0LnZhbHVlcyhkYXRhKSk7XHJcbiAgXHJcbiAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGFjdGl2YXRlVG9kb0NvbnRhaW5lcigpO1xyXG5cclxuICBjb25zdCB0b2RvcyA9IGFkZENoaWxkKCdkaXYnLCAnLnRvZG8nLCB0b2RvQ29udGFpbmVyKTtcclxuICBcclxuICAvLyBUb2RvTGlzdCBDb250ZW50XHJcbiAgY29uc3QgdGRJbmZvID0gYWRkQ2hpbGQobWFwTURUb0RpdihkYXRha2V5cyksICcudGQtaW5mbycsIHRvZG9zKTtcclxuICBhZGRNdWxFbF9DbHModGRJbmZvLCBkYXRha2V5cywgJy50ZGktJylcclxuICBhZGRNdWxUZXh0KHRkSW5mbywgZGF0YVZhbHVlcyk7XHJcblxyXG4gIC8vIHRkaS1wcmlvcml0eSBhbmQgdGRpLWNoZWNrbGlzdFxyXG4gIGNvbnN0IHRkaUluZm9DaGVja2JveCA9ICAgdGRJbmZvLmZpbHRlcigoZWwpID0+IHtcclxuICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3RkaS1wcmlvcml0eScpIHx8IGVsLmNsYXNzTGlzdC5jb250YWlucygndGRpLWNoZWNrbGlzdCcpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGlmICh0ZGlJbmZvQ2hlY2tib3hbMF0udGV4dENvbnRlbnQgPT09ICdwcmlvcml0aXplZCcpIHtcclxuICAgIGNvbnNvbGUubG9nKHRkaUluZm9DaGVja2JveFsxXS50ZXh0Q29udGVudCk7XHJcbiAgICB0ZGlJbmZvQ2hlY2tib3hbMF0uaW5uZXJIVE1MID0gYDxpbWcgaWQ9J2ljb24tcHJpb3JpdHknIHNyYz0nJHtoaWdoUHJpb3JpdHlJY29ufSc+IDxzcGFuIGlkPSdwcmlvcml0eS1oaWdoJz5IaWdoPC9zcGFuPmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRkaUluZm9DaGVja2JveFswXS5pbm5lckhUTUwgPSBgPGltZyBpZD0naWNvbi1wcmlvcml0eScgc3JjPScke2xvd1ByaW9yaXR5SWNvbn0nPiA8c3BhbiBpZD0ncHJpb3JpdHktbG93Jz5Mb3c8L3NwYW4+YDtcclxuICB9XHJcblxyXG4gIGlmICh0ZGlJbmZvQ2hlY2tib3hbMV0udGV4dENvbnRlbnQgPT09ICdmaW5pc2hlZCcpIHtcclxuICAgIHRkaUluZm9DaGVja2JveFsxXS5pbm5lckhUTUwgPSBgPGltZyBpZD0naWNvbi1wcm9ncmVzcycgc3JjPScke2ZpbmlzaEljb259Jz4gPHNwYW4+ZG9uZTwvc3Bhbj5gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZGlJbmZvQ2hlY2tib3hbMV0uaW5uZXJIVE1MID0gYDxpbWcgaWQ9J2ljb24tcHJvZ3Jlc3MnIHNyYz0nJHtpblByb2dyZXNzSWNvbn0nPiA8c3Bhbj5pbiBwcm9ncmVzczwvc3Bhbj5gO1xyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gIC8vIFRvZG9MaXN0IENvbnRlbnQgQnV0dG9uXHJcbiAgY29uc3QgdGRCdXR0b25Db250YWluZXIgPSBhZGRDaGlsZCgnZGl2JywgJy50ZC1idXR0b24tY29udGFpbmVyJywgdG9kb3MpO1xyXG4gIGNvbnN0IHRkQnV0dG9uID0gYWRkQ2hpbGQoWydkaXYnLCAnZGl2J10sICcudGQtYnV0dG9uJywgdGRCdXR0b25Db250YWluZXIpO1xyXG5cclxuICBhZGRIVE1MKHRkQnV0dG9uWzBdLCBgPGltZyBzcmM9JyR7aWNvblhtYXJrfScgaWQ9J3RkLWJ1dHRvbi1kZWwnPmApO1xyXG4gIGFkZEhUTUwodGRCdXR0b25bMV0sIGA8aW1nIHNyYz0nJHtpY29uRWRpdH0nIGlkPSd0ZC1idXR0b24tZWQnPmApO1xyXG5cclxuICBhZGRFbGlzKHRkQnV0dG9uWzBdLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgaDFUaXRsZSA9IGFjY2VzRWxlbWVudCgnI3Byb2plY3RUaXRsZScsIDEpO1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICBcclxuICAgIGNvbnN0IHRvZG9QYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnLnRvZG8nKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9QYXJlbnQucXVlcnlTZWxlY3RvcignLnRkaS10aXRsZScpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0SW5uZXJUZXh0KGgxVGl0bGUpICsgJ0NvbnRlbnQnO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IExTLmdldFBhcnNlKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdC5maWx0ZXIoZmQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhmZC50aXRsZSA9PT0gdG9kb1RpdGxlLmlubmVyVGV4dCk7XHJcbiAgICAgIHJldHVybiBmZC50aXRsZSAhPT0gdG9kb1RpdGxlLmlubmVyVGV4dDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBMUy5nZXRJbnRvKGdldElubmVyVGV4dChoMVRpdGxlKSArICdDb250ZW50JywgbmV3UHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcclxuICAgIFxyXG4gICAgaWYgKG5ld1Byb2plY3QubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBhY2Nlc0VsZW1lbnQoJyN0b2RvLWNvbnRhaW5lcicsIDEpO1xyXG4gICAgICBlbXB0eUVsKHRvZG9Db250YWluZXIpO1xyXG5cclxuICAgICAgbmV3UHJvamVjdC5mb3JFYWNoKHRkID0+IHtcclxuICAgICAgICBwb3N0VG9Ebyh0ZClcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1Byb2plY3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBhY2Nlc0VsZW1lbnQoJyN0b2RvLWNvbnRhaW5lcicsIDEpO1xyXG4gICAgICBlbXB0eUVsKHRvZG9Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICB9LCAnY2xpY2snKTtcclxuXHJcbiAgYWRkRWxpcyh0ZEJ1dHRvblsxXSwgKGUpID0+IHtcclxuICAgIGNvbnN0IGgxVGl0bGUgPSBhY2Nlc0VsZW1lbnQoJyNwcm9qZWN0VGl0bGUnLCAxKTtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gYWNjZXNFbGVtZW50KCcjdG9kby1jb250YWluZXInLCAxKTtcclxuICAgIGNvbnN0IHRvZG9QYXJlbnQgPSB0YXJnZXQuY2xvc2VzdCgnLnRvZG8nKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHRvZG9QYXJlbnQucXVlcnlTZWxlY3RvcignLnRkaS10aXRsZScpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0SW5uZXJUZXh0KGgxVGl0bGUpICsgJ0NvbnRlbnQnO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IExTLmdldFBhcnNlKHByb2plY3ROYW1lKTtcclxuICBcclxuICAgIGNvbnN0IHByb2plY3RUb0VkaXQgPSBwcm9qZWN0LmZpbHRlcihmZCA9PiB7XHJcbiAgICAgIHJldHVybiBmZC50aXRsZSA9PT0gdG9kb1RpdGxlLmlubmVyVGV4dDtcclxuICAgIH0pWzBdO1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZyA9IGFjY2VzRWxlbWVudCgnI215ZGlhbG9nJywgMSk7XHJcbiAgICBjb25zdCBmb3JtID0gYWNjZXNFbGVtZW50KCcjZm9ybS10b2RvJywgMSk7XHJcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gYWNjZXNFbGVtZW50KCcjaW5wdXQtdGl0bGUnLCAxKTtcclxuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBhY2Nlc0VsZW1lbnQoJyNpbnB1dC1kZXNjcmlwdGlvbicsIDEpO1xyXG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gYWNjZXNFbGVtZW50KCcjaW5wdXQtZHVlRGF0ZScsIDEpO1xyXG4gICAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGFjY2VzRWxlbWVudCgnI2lucHV0LXByaW9yaXR5JywgMSk7XHJcbiAgICBjb25zdCBpbnB1dE5vdGVzID0gYWNjZXNFbGVtZW50KCcjaW5wdXQtbm90ZXMnLCAxKTtcclxuICAgIGNvbnN0IGlucHV0Q2hlY2tsaXN0ID0gYWNjZXNFbGVtZW50KCcjaW5wdXQtY2hlY2tsaXN0JywgMSk7XHJcbiAgICBjb25zdCBpbnB1dFByb2plY3QgPSBhY2Nlc0VsZW1lbnQoJyNpbnB1dC1wcm9qZWN0JywgMSk7XHJcblxyXG5cclxuICAgIGlucHV0VGl0bGUudmFsdWUgPSBwcm9qZWN0VG9FZGl0LnRpdGxlO1xyXG5cclxuICAgICFpbnB1dERlc2NyaXB0aW9uLnZhbHVlID09PSB1bmRlZmluZWQgP1xyXG4gICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdFRvRWRpdC5kZXNjcmlwdGlvbiA6IG51bGw7XHJcblxyXG4gICAgaW5wdXREdWVEYXRlLnZhbHVlID0gcHJvamVjdFRvRWRpdC5kdWVEYXRlO1xyXG5cclxuICAgIHByb2plY3RUb0VkaXQucHJpb3JpdHkgPT09ICdwcmlvcml0aXplZCcgPyBpbnB1dFByaW9yaXR5LmNoZWNrZWQgPSB0cnVlIDogbnVsbDtcclxuXHJcbiAgICBpbnB1dE5vdGVzLnZhbHVlID0gcHJvamVjdFRvRWRpdC5ub3RlcztcclxuICAgICAgXHJcbiAgICBwcm9qZWN0VG9FZGl0LmNoZWNrbGlzdCA9PT0gJ2ZpbmlzaGVkJyA/IGlucHV0Q2hlY2tsaXN0LmNoZWNrZWQgPSB0cnVlIDogbnVsbDtcclxuXHJcbiAgICBpbnB1dFByb2plY3QudmFsdWUgPSBwcm9qZWN0VG9FZGl0LnByb2plY3Q7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0VG9FZGl0KTtcclxuXHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcblxyXG4gICAgLy8gU3VibWl0IEZvcm0gRWRpdGVkXHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBhY2Nlc0VsZW1lbnQoJyNpbnB1dC1idG4nLCAxKTtcclxuICAgIHN1Ym1pdEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEZvcm1IYW5kbGVyKTtcclxuICAgIGFkZEVsaXMoc3VibWl0QnRuLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdEluZGV4ID0gcHJvamVjdC5maW5kSW5kZXgoaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udGl0bGUgPT09IHRvZG9UaXRsZS5pbm5lclRleHQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBuZXdFZGl0ZWRGb3JtRGF0YSA9IGdldEZvcm1EYXRhKCk7XHJcbiAgICAgIGlmIChuZXdFZGl0ZWRGb3JtRGF0YS5wcm9qZWN0ID09PSBoMVRpdGxlLmlubmVyVGV4dCkge1xyXG5cclxuICAgICAgICBwcm9qZWN0W3ByZXZpb3VzUHJvamVjdEluZGV4XSA9IG5ld0VkaXRlZEZvcm1EYXRhO1xyXG4gICAgICAgIExTLmdldEludG8ocHJvamVjdE5hbWUsIHByb2plY3QpO1xyXG5cclxuICAgICAgICBlbXB0eUVsKHRvZG9Db250YWluZXIpO1xyXG4gICAgICAgIHByb2plY3QuZm9yRWFjaCh0ZCA9PiB7XHJcbiAgICAgICAgICBwb3N0VG9Ebyh0ZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICB1cGRhdGVGT1JNKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfSwgJ2NsaWNrJylcclxuXHJcbn1cclxuXHJcblxyXG4vLyBTZW5kIEZvcm0gRGF0YSB0byBMb2NhbCBTdG9yYWdlXHJcbmZ1bmN0aW9uIHNlbmREYXRhVG9Mb2NhbFN0b3JhZ2UoZmQpIHtcclxuICBjb25zdCBrZXkgPSBmZC5wcm9qZWN0LnRvTG93ZXJDYXNlKCkgKyAnQ29udGVudCc7XHJcbiAgXHJcbiAgaWYgKExTLmhhc1Byb3BlcnR5KGtleSkpIHtcclxuICAgIGNoYW5nZURhdGFJbkxTKGtleSwgZmQpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGNvbnN0IGluaXRpYWxEYXRhID0gW107XHJcbiAgICBMUy5nZXRJbnRvKGtleSwgaW5pdGlhbERhdGEpO1xyXG4gICAgY2hhbmdlRGF0YUluTFMoa2V5LCBmZCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gU2VuZCBNdXRsdGlwbGUgRm9ybSBEYXRhIHRvIExvY2FsU3RvcmFnZVxyXG5mdW5jdGlvbiBzZW5kTXVsRGF0YVRvTG9jYWxTdG9yYWdlKGFyckRhdGEpIHtcclxuICBhcnJEYXRhLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICBzZW5kRGF0YVRvTG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBDaGFuZ2UgRGF0YSBGcm9tIExvY2FsU3RvcmFnZVxyXG5mdW5jdGlvbiBjaGFuZ2VEYXRhSW5MUyhkYXRhTmFtZSwgbmV3RGF0YSkge1xyXG4gIGNvbnN0IGdldEluaWFsRGF0YSA9IExTLmdldFBhcnNlKGRhdGFOYW1lKTtcclxuICBjb25zb2xlLmxvZyhnZXRJbmlhbERhdGEpO1xyXG4gIGNvbnNvbGUubG9nKG5ld0RhdGEpO1xyXG4gIFxyXG4gIGdldEluaWFsRGF0YS5wdXNoKG5ld0RhdGEpO1xyXG4gIC8vIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnZXRJbmlhbERhdGEsIG5ld0RhdGEudGl0bGUsIHtcclxuICAvLyAgIHZhbHVlOiBuZXdEYXRhLFxyXG4gIC8vICAgd3JpdGFibGU6IHRydWUsXHJcbiAgLy8gICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgLy8gICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgLy8gfSk7XHJcblxyXG4gIExTLmdldEludG8oZGF0YU5hbWUsIGdldEluaWFsRGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFjdGl2YXRlZGlhbG9nLCBhY3RpdmF0ZUZvcm0sIGFjdGl2YXRlSW5wdXRDb24sIGFjdGl2YXRlSW5wdXQsIGFjdGl2YXRlQlROLCBnZXRGb3JtRGF0YSwgcG9zdFRvRG8sIHVwZGF0ZUZPUk0sIHNlbGVjdE9wdGlvbiwgc2VuZERhdGFUb0xvY2FsU3RvcmFnZSwgc2VuZE11bERhdGFUb0xvY2FsU3RvcmFnZSwgYWN0aXZhdGVUb2RvQ29udGFpbmVyIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==