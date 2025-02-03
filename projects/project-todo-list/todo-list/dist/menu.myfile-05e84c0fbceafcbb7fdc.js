"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APForm: () => (/* binding */ APForm),
/* harmony export */   activateAPCon: () => (/* binding */ activateAPCon),
/* harmony export */   activateMenu: () => (/* binding */ activateMenu),
/* harmony export */   activateMenuCon: () => (/* binding */ activateMenuCon),
/* harmony export */   activateMenuRows: () => (/* binding */ activateMenuRows),
/* harmony export */   activateProjectTitle: () => (/* binding */ activateProjectTitle),
/* harmony export */   activatemenuRow1Button: () => (/* binding */ activatemenuRow1Button),
/* harmony export */   getActiveMenu: () => (/* binding */ getActiveMenu),
/* harmony export */   initialSelectedMenu: () => (/* binding */ initialSelectedMenu),
/* harmony export */   selectMenu: () => (/* binding */ selectMenu),
/* harmony export */   switchMenu: () => (/* binding */ switchMenu),
/* harmony export */   unselectMenu: () => (/* binding */ unselectMenu)
/* harmony export */ });
/* harmony import */ var _icon_edit_pencil_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon/edit-pencil.svg */ "./src/icon/edit-pencil.svg");
/* harmony import */ var _icon_xmark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon/xmark.svg */ "./src/icon/xmark.svg");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content.js */ "./src/content.js");
/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-storage.js */ "./src/local-storage.js");
/* harmony import */ var _todo_form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-form.js */ "./src/todo-form.js");










// Menu Selection

// Check active menu
function getActiveMenu() {
  const activeMenu = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('.mr0-active', 1);

  return activeMenu;
}

// Initial Selected Menu
function initialSelectedMenu() {
  if (_data_js__WEBPACK_IMPORTED_MODULE_3__.menusData.length !== 0) {
    const lastItem = _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData[_data_js__WEBPACK_IMPORTED_MODULE_3__.menusData.length - 1].toLowerCase();

    const selectedMenu = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)(`#mr0-${lastItem}`, 1);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(selectedMenu, '.mr0-active');
    selectedMenu.style.backgroundColor = '#abad35';
  }
}

// Select Menu
function selectMenu(elArr, elC='') {
  const activeMenu = getActiveMenu();
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.removeClass)(activeMenu, 'mr0-active');

  const els = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)(elArr);
  const elTargetMenu = elC.classList.contains('mr-0');
  console.log(elTargetMenu);
  
  if (!elTargetMenu) {
    const lastItem = els[els.length - 1];
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(lastItem, '.mr0-active');
    
    return lastItem.style.backgroundColor = '#abad35';
  } 
  else if (elTargetMenu) {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addClass)(elC, '.mr0-active');
    return elC.style.backgroundColor = '#abad35';
  }
}

// Unselect Menu
function unselectMenu(elArr) {
  const els = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)(elArr);
  els.forEach(menu => menu.style.backgroundColor = '#3189a0');

}

// Switch Menu 
function switchMenu(e) {
  unselectMenu('.mr-0');
  selectMenu('.mr-0', e.target);
}

// Switch Menu and Content
function switchMenuAndContent(e) {
  switchMenu(e);
  (0,_content_js__WEBPACK_IMPORTED_MODULE_4__.switchContent)(e);
}


// --------------------------------------------------

// Activate Show Menus Button
function activateProjectTitle() {
  const header = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#header', 1);

  const projectTitle = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('div', '#project-title');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElement)(projectTitle, header);
  projectTitle.innerText = 'Project';
}

// Menus Container
function activateMenuCon() {
  const header = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#header', 1);

  const createHeaderMenusC = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('div', '#menus-container');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElement)(createHeaderMenusC, header);
}

// Menus
function activateMenu() {
  const menusContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#menus-container', 1)

  if (_local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty('menus')) {
    const menus = _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.parse(_local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getFrom('menus'));
    (0,_data_js__WEBPACK_IMPORTED_MODULE_3__.updateMenusData)(menus);
  
    const createHeaderMenus = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createMulEl)((0,_data_js__WEBPACK_IMPORTED_MODULE_3__.mapMDToDiv)(_data_js__WEBPACK_IMPORTED_MODULE_3__.menusData), '.menu');
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulElement)(createHeaderMenus, menusContainer);
  }
  else {
    const createHeaderMenus = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createMulEl)((0,_data_js__WEBPACK_IMPORTED_MODULE_3__.mapMDToDiv)(_data_js__WEBPACK_IMPORTED_MODULE_3__.menusData), '.menu');
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulElement)(createHeaderMenus, menusContainer);
    _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('menus', _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData);
    
  }

}

// Menu Rows
function activateMenuRows() {
  const menus = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('.menu', 'all'));
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addChild_of_ElArr)(menus, ['div', 'div'], '.menu-row');
  
  // Menu Row: mr-0 and mr-1
  // Add new class to each ChildNodes
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addCls_childNodes)(menus, '.mr-');
  
  // Access menuRow0
  const menuRow0 = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('.mr-0'));
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addDataSet)(menuRow0, _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData, _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulText)(menuRow0, _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData);

  // Add id to menuRow0
  const menuRow0Text = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.getInnerText)(menuRow0)
  ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulId)(menuRow0, menuRow0Text, 'mr0-');

  // Add EventListener to Menu Row0
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElis)(menuRow0, switchMenuAndContent);
}

// Menu Row 1 buttons
function activatemenuRow1Button() {
  // Acces MenuRow1
  const menuRow1 = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('.mr-1'));
  const mr1_img = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addChild_of_ElArr)(menuRow1, ['img', 'img'], '.mr-1-button');
  console.log(mr1_img);
  
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addCls_childNodes)(menuRow1, '.mr-1-button-ed-');
  
  // Add attributes to mr-1-button
  mr1_img.forEach((els) => {
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addAtr)(els,'src', [_icon_edit_pencil_svg__WEBPACK_IMPORTED_MODULE_0__, _icon_xmark_svg__WEBPACK_IMPORTED_MODULE_1__], '');
  });

  // Add Event Listner to edit and del button on Menus
  const delMenuName = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('.mr-1-button-ed-1', 'all'));
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElis)(delMenuName, (e) => {
    const target = e.target;
    const project = target.closest('.menu');
    const titleH1 = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#projectTitle', 1);

    console.log(
      Array.from(project.children).find(e => e.classList.contains('mr-0'))
    );

    const projectName = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.fChild)(project, '.mr-0');
    const keyProject = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.getInnerText)(projectName);

    if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.getInnerText)(titleH1) === keyProject) {
      
      // Update MenusData
      const newMenu = _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData.filter(item => item.toLowerCase() !== keyProject);
      (0,_data_js__WEBPACK_IMPORTED_MODULE_3__.updateMenusData)(newMenu);
      _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('menus', newMenu);
  
      // Delete Project
      const keyContent = keyProject + 'Content';
      _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty(keyContent) ? _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.delProperty(keyContent) : null;
      
      (0,_data_js__WEBPACK_IMPORTED_MODULE_3__.delTodayCD)();
      project.remove();
      (0,_content_js__WEBPACK_IMPORTED_MODULE_4__.delContent)();

      // Initialize Menu and Content
      initialSelectedMenu();
      (0,_todo_form_js__WEBPACK_IMPORTED_MODULE_6__.updateFORM)();
      (0,_content_js__WEBPACK_IMPORTED_MODULE_4__.switchContent)(e);
      
    } else {

      // Update menusData
      const newMenu = _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData.filter(item => item.toLowerCase() !== keyProject);
      (0,_data_js__WEBPACK_IMPORTED_MODULE_3__.updateMenusData)(newMenu);
      _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('menus', newMenu);
  
      // Delete Project
      const keyContent = keyProject + 'Content';
      _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty(keyContent) ? _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.delProperty(keyContent) : null;
      project.remove();
    }

  });

  // Add Event Listener on menu button: edit
  const editMenuName = Array.from((0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('.mr-1-button-ed-0', 'all'));
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElis)(editMenuName, (e) => {
    const target = e.target;
    const project = target.closest('.menu');

    const renameForm = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('div', '.rename-form');
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElement)(renameForm, project);

    const renameInput = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createMulEl)(['button', 'input', 'button'], '.rn-form');
    console.log(renameInput[1]);

    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulId)(Array.from(renameInput), ['del-rename-form', 'rn-project-name', 'change-project-name'], '');
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulText)([renameInput[0], renameInput[2]], ['x', 'Change']);
    
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElis)(renameInput[0], (e) => {
      renameForm.remove();
    });


    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElis)(renameInput[2], (e) => {
      console.log(renameInput[1].value);
      const projectEl = project.querySelector('.mr-0');
      const previousName = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.getInnerText)(projectEl) + 'Content';
      const newName = renameInput[1].value;
      const titleH1 = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#projectTitle', 1);

      const menus = _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getParse('menus');
      const newNameTarget = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.findPosition)(menus, projectEl);
      console.log(previousName);


      if (!_local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty(newName + 'Content')) {
        if (newName !== null && newName !== '') {
          console.log(previousName);
          let fdProject;

          if (_local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.hasProperty(previousName)) {
            _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.changePropertyName(previousName,  newName.toLowerCase() + 'Content');
            fdProject = _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getParse(newName.toLowerCase() + 'Content');

            const fdProjectChanged = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.changeObjectData)(fdProject, 'project', newName.toLowerCase());
            _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getInto(newName.toLowerCase() + 'Content', fdProjectChanged);
          } 
          
        }
      }
      
      menus[newNameTarget] = newName;
      _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('menus', menus);
      (0,_data_js__WEBPACK_IMPORTED_MODULE_3__.updateMenusData)(menus);
      (0,_todo_form_js__WEBPACK_IMPORTED_MODULE_6__.updateFORM)();
      projectEl.innerText = newName;

      titleH1.innerText = newName;

      renameForm.remove();
    });
    
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulElement)(renameInput, renameForm);

    // console.log(renameInput[1]);
    // console.log(renameInput[0]);
  });
}

// ---------------------

// Add Project  Container
function activateAPCon() {
  const header = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#header', 1)
  const createAPContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('div', '#ap-container');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElement)(createAPContainer, header);
}

// Form AP
function APForm() {
  const APContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#ap-container', 1)

  const createFormAP = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('form', '#ap-form');
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addElement)(createFormAP, APContainer);

  // Input in Add Project
  const createInputFAP = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('input', '#input-ap');
  createInputFAP.type = 'text';
  createInputFAP.name = 'inputFormAP';
  createInputFAP.placeholder = 'Enter a Project Name!';
  
  // Button in Add Project
  const createButtonIFAP = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.createEl)('button', '#button-iap');
  createButtonIFAP.type = 'submit';
  createButtonIFAP.textContent = 'Add Project';
  
  // createButtonIFAP: add Event Listener
  createButtonIFAP.addEventListener('click', (e) => {
    e.preventDefault();
  
    const input = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#input-ap', 1);
    const menusContainer = (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.accesElement)('#menus-container', 1);
    
    if (input.value !== '') {
      if (!(0,_data_js__WEBPACK_IMPORTED_MODULE_3__.inMD)(input.value, _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData)) {
  
        _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData.push(input.value);
        console.log(_data_js__WEBPACK_IMPORTED_MODULE_3__.menusData);
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.emptyEl)(menusContainer);
        _local_storage_js__WEBPACK_IMPORTED_MODULE_5__.LS.getInto('menus', _data_js__WEBPACK_IMPORTED_MODULE_3__.menusData);
        
        activateMenu();
        (0,_todo_form_js__WEBPACK_IMPORTED_MODULE_6__.updateFORM)();
  
        // Menu Rows: Content in each menu
        activateMenuRows();
        initialSelectedMenu();
  
        // Menu Row 1 buttons
        activatemenuRow1Button();
        
        // ---------------------------------------------
      };
      
      switchMenuAndContent(e);
    };
    
  });
  
  // Add Input and Label to Form
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.addMulElement)([createInputFAP, createButtonIFAP], createFormAP);
}





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["data","dom","content","local-storage","todo-form","layout"], () => (__webpack_exec__("./src/menu.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5teWZpbGUtMDVlODRjMGZiY2VhZmNiYjdmZGMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNMO0FBQ3pDO0FBQ21UO0FBQ25UO0FBQzhGO0FBQ2Q7QUFDeEM7QUFDSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0NBQVM7QUFDZixxQkFBcUIsK0NBQVMsQ0FBQywrQ0FBUztBQUN4QztBQUNBLHlCQUF5QixxREFBWSxTQUFTLFNBQVM7QUFDdkQsSUFBSSxpREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBVztBQUNiO0FBQ0EsY0FBYyxxREFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscURBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQVk7QUFDN0I7QUFDQSx1QkFBdUIsaURBQVE7QUFDL0IsRUFBRSxtREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQVk7QUFDN0I7QUFDQSw2QkFBNkIsaURBQVE7QUFDckMsRUFBRSxtREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHFEQUFZO0FBQ3JDO0FBQ0EsTUFBTSxpREFBRTtBQUNSLGtCQUFrQixpREFBRSxPQUFPLGlEQUFFO0FBQzdCLElBQUkseURBQWU7QUFDbkI7QUFDQSw4QkFB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QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFZO0FBQ2xDO0FBQ0EsdUJBQXVCLGlEQUFRO0FBQy9CLEVBQUUsbURBQVU7QUFDWjtBQUNBO0FBQ0EseUJBQXlCLGlEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQVk7QUFDOUIsMkJBQTJCLHFEQUFZO0FBQ3ZDO0FBQ0E7QUFDQSxXQUFXLDhDQUFJLGNBQWMsK0NBQVM7QUFDdEM7QUFDQSxRQUFRLCtDQUFTO0FBQ2pCLG9CQUFvQiwrQ0FBUztBQUM3QixRQUFRLGdEQUFPO0FBQ2YsUUFBUSxpREFBRSxrQkFBa0IsK0NBQVM7QUFDckM7QUFDQTtBQUNBLFFBQVEseURBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxzREFBYTtBQUNmO0FBQ0E7QUFDQTtBQUN5TSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpY29uRWRpdCBmcm9tICcuL2ljb24vZWRpdC1wZW5jaWwuc3ZnJztcclxuaW1wb3J0IGljb25YbWFyayBmcm9tICcuL2ljb24veG1hcmsuc3ZnJztcclxuXHJcbmltcG9ydCB7IGFjY2VzRWxlbWVudCwgYWRkQ2hpbGRfb2ZfRWxBcnIsIGFkZENsc19jaGlsZE5vZGVzLCBhZGRNdWxUZXh0LCBnZXRJbm5lclRleHQsIGFkZEVsaXMsIGdldENoaWxkLCBmQ2hpbGQsIGNyZWF0ZUVsLCBjcmVhdGVNdWxFbCwgYWRkRWxlbWVudCwgYWRkTXVsRWxlbWVudCwgZW1wdHlFbCwgYWRkTXVsRWxfQ2xzLCBhZGREYXRhU2V0LCBmaW5kUG9zaXRpb24sIGFkZElkLCBhZGRNdWxJZCwgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzLCBhZGRBdHIsIGNoYW5nZU9iamVjdERhdGEsIHNoaWZ0QXJyUCB9IGZyb20gJy4vZG9tLmpzJztcclxuXHJcbmltcG9ydCB7IG1lbnVzRGF0YSwgaW5NRCwgbWFwTURUb0RpdiwgdXBkYXRlTWVudXNEYXRhLCBkZWxUb2RheUNELCBkZWxFTENEIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHsgc3dpdGNoQ29udGVudCwgZGVsQ29udGVudCwgSW5pdGlhbFByb2plY3RDb250ZW50IH0gZnJvbSAnLi9jb250ZW50LmpzJztcclxuaW1wb3J0IHsgTFMgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UuanMnO1xyXG5pbXBvcnQgeyB1cGRhdGVGT1JNIH0gZnJvbSAnLi90b2RvLWZvcm0uanMnO1xyXG5cclxuLy8gTWVudSBTZWxlY3Rpb25cclxuXHJcbi8vIENoZWNrIGFjdGl2ZSBtZW51XHJcbmZ1bmN0aW9uIGdldEFjdGl2ZU1lbnUoKSB7XHJcbiAgY29uc3QgYWN0aXZlTWVudSA9IGFjY2VzRWxlbWVudCgnLm1yMC1hY3RpdmUnLCAxKTtcclxuXHJcbiAgcmV0dXJuIGFjdGl2ZU1lbnU7XHJcbn1cclxuXHJcbi8vIEluaXRpYWwgU2VsZWN0ZWQgTWVudVxyXG5mdW5jdGlvbiBpbml0aWFsU2VsZWN0ZWRNZW51KCkge1xyXG4gIGlmIChtZW51c0RhdGEubGVuZ3RoICE9PSAwKSB7XHJcbiAgICBjb25zdCBsYXN0SXRlbSA9IG1lbnVzRGF0YVttZW51c0RhdGEubGVuZ3RoIC0gMV0udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZE1lbnUgPSBhY2Nlc0VsZW1lbnQoYCNtcjAtJHtsYXN0SXRlbX1gLCAxKTtcclxuICAgIGFkZENsYXNzKHNlbGVjdGVkTWVudSwgJy5tcjAtYWN0aXZlJyk7XHJcbiAgICBzZWxlY3RlZE1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNhYmFkMzUnO1xyXG4gIH1cclxufVxyXG5cclxuLy8gU2VsZWN0IE1lbnVcclxuZnVuY3Rpb24gc2VsZWN0TWVudShlbEFyciwgZWxDPScnKSB7XHJcbiAgY29uc3QgYWN0aXZlTWVudSA9IGdldEFjdGl2ZU1lbnUoKTtcclxuICByZW1vdmVDbGFzcyhhY3RpdmVNZW51LCAnbXIwLWFjdGl2ZScpO1xyXG5cclxuICBjb25zdCBlbHMgPSBhY2Nlc0VsZW1lbnQoZWxBcnIpO1xyXG4gIGNvbnN0IGVsVGFyZ2V0TWVudSA9IGVsQy5jbGFzc0xpc3QuY29udGFpbnMoJ21yLTAnKTtcclxuICBjb25zb2xlLmxvZyhlbFRhcmdldE1lbnUpO1xyXG4gIFxyXG4gIGlmICghZWxUYXJnZXRNZW51KSB7XHJcbiAgICBjb25zdCBsYXN0SXRlbSA9IGVsc1tlbHMubGVuZ3RoIC0gMV07XHJcbiAgICBhZGRDbGFzcyhsYXN0SXRlbSwgJy5tcjAtYWN0aXZlJyk7XHJcbiAgICBcclxuICAgIHJldHVybiBsYXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2FiYWQzNSc7XHJcbiAgfSBcclxuICBlbHNlIGlmIChlbFRhcmdldE1lbnUpIHtcclxuICAgIGFkZENsYXNzKGVsQywgJy5tcjAtYWN0aXZlJyk7XHJcbiAgICByZXR1cm4gZWxDLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYWJhZDM1JztcclxuICB9XHJcbn1cclxuXHJcbi8vIFVuc2VsZWN0IE1lbnVcclxuZnVuY3Rpb24gdW5zZWxlY3RNZW51KGVsQXJyKSB7XHJcbiAgY29uc3QgZWxzID0gYWNjZXNFbGVtZW50KGVsQXJyKTtcclxuICBlbHMuZm9yRWFjaChtZW51ID0+IG1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzMTg5YTAnKTtcclxuXHJcbn1cclxuXHJcbi8vIFN3aXRjaCBNZW51IFxyXG5mdW5jdGlvbiBzd2l0Y2hNZW51KGUpIHtcclxuICB1bnNlbGVjdE1lbnUoJy5tci0wJyk7XHJcbiAgc2VsZWN0TWVudSgnLm1yLTAnLCBlLnRhcmdldCk7XHJcbn1cclxuXHJcbi8vIFN3aXRjaCBNZW51IGFuZCBDb250ZW50XHJcbmZ1bmN0aW9uIHN3aXRjaE1lbnVBbmRDb250ZW50KGUpIHtcclxuICBzd2l0Y2hNZW51KGUpO1xyXG4gIHN3aXRjaENvbnRlbnQoZSk7XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQWN0aXZhdGUgU2hvdyBNZW51cyBCdXR0b25cclxuZnVuY3Rpb24gYWN0aXZhdGVQcm9qZWN0VGl0bGUoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gYWNjZXNFbGVtZW50KCcjaGVhZGVyJywgMSk7XHJcblxyXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsKCdkaXYnLCAnI3Byb2plY3QtdGl0bGUnKTtcclxuICBhZGRFbGVtZW50KHByb2plY3RUaXRsZSwgaGVhZGVyKTtcclxuICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJ1Byb2plY3QnO1xyXG59XHJcblxyXG4vLyBNZW51cyBDb250YWluZXJcclxuZnVuY3Rpb24gYWN0aXZhdGVNZW51Q29uKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGFjY2VzRWxlbWVudCgnI2hlYWRlcicsIDEpO1xyXG5cclxuICBjb25zdCBjcmVhdGVIZWFkZXJNZW51c0MgPSBjcmVhdGVFbCgnZGl2JywgJyNtZW51cy1jb250YWluZXInKTtcclxuICBhZGRFbGVtZW50KGNyZWF0ZUhlYWRlck1lbnVzQywgaGVhZGVyKTtcclxufVxyXG5cclxuLy8gTWVudXNcclxuZnVuY3Rpb24gYWN0aXZhdGVNZW51KCkge1xyXG4gIGNvbnN0IG1lbnVzQ29udGFpbmVyID0gYWNjZXNFbGVtZW50KCcjbWVudXMtY29udGFpbmVyJywgMSlcclxuXHJcbiAgaWYgKExTLmhhc1Byb3BlcnR5KCdtZW51cycpKSB7XHJcbiAgICBjb25zdCBtZW51cyA9IExTLnBhcnNlKExTLmdldEZyb20oJ21lbnVzJykpO1xyXG4gICAgdXBkYXRlTWVudXNEYXRhKG1lbnVzKTtcclxuICBcclxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlck1lbnVzID0gY3JlYXRlTXVsRWwobWFwTURUb0RpdihtZW51c0RhdGEpLCAnLm1lbnUnKTtcclxuICAgIGFkZE11bEVsZW1lbnQoY3JlYXRlSGVhZGVyTWVudXMsIG1lbnVzQ29udGFpbmVyKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zdCBjcmVhdGVIZWFkZXJNZW51cyA9IGNyZWF0ZU11bEVsKG1hcE1EVG9EaXYobWVudXNEYXRhKSwgJy5tZW51Jyk7XHJcbiAgICBhZGRNdWxFbGVtZW50KGNyZWF0ZUhlYWRlck1lbnVzLCBtZW51c0NvbnRhaW5lcik7XHJcbiAgICBMUy5nZXRJbnRvKCdtZW51cycsIG1lbnVzRGF0YSk7XHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBNZW51IFJvd3NcclxuZnVuY3Rpb24gYWN0aXZhdGVNZW51Um93cygpIHtcclxuICBjb25zdCBtZW51cyA9IEFycmF5LmZyb20oYWNjZXNFbGVtZW50KCcubWVudScsICdhbGwnKSk7XHJcbiAgYWRkQ2hpbGRfb2ZfRWxBcnIobWVudXMsIFsnZGl2JywgJ2RpdiddLCAnLm1lbnUtcm93Jyk7XHJcbiAgXHJcbiAgLy8gTWVudSBSb3c6IG1yLTAgYW5kIG1yLTFcclxuICAvLyBBZGQgbmV3IGNsYXNzIHRvIGVhY2ggQ2hpbGROb2Rlc1xyXG4gIGFkZENsc19jaGlsZE5vZGVzKG1lbnVzLCAnLm1yLScpO1xyXG4gIFxyXG4gIC8vIEFjY2VzcyBtZW51Um93MFxyXG4gIGNvbnN0IG1lbnVSb3cwID0gQXJyYXkuZnJvbShhY2Nlc0VsZW1lbnQoJy5tci0wJykpO1xyXG4gIGFkZERhdGFTZXQobWVudVJvdzAsIG1lbnVzRGF0YSwgbWVudXNEYXRhKTtcclxuICBhZGRNdWxUZXh0KG1lbnVSb3cwLCBtZW51c0RhdGEpO1xyXG5cclxuICAvLyBBZGQgaWQgdG8gbWVudVJvdzBcclxuICBjb25zdCBtZW51Um93MFRleHQgPSBnZXRJbm5lclRleHQobWVudVJvdzApXHJcbiAgYWRkTXVsSWQobWVudVJvdzAsIG1lbnVSb3cwVGV4dCwgJ21yMC0nKTtcclxuXHJcbiAgLy8gQWRkIEV2ZW50TGlzdGVuZXIgdG8gTWVudSBSb3cwXHJcbiAgYWRkRWxpcyhtZW51Um93MCwgc3dpdGNoTWVudUFuZENvbnRlbnQpO1xyXG59XHJcblxyXG4vLyBNZW51IFJvdyAxIGJ1dHRvbnNcclxuZnVuY3Rpb24gYWN0aXZhdGVtZW51Um93MUJ1dHRvbigpIHtcclxuICAvLyBBY2NlcyBNZW51Um93MVxyXG4gIGNvbnN0IG1lbnVSb3cxID0gQXJyYXkuZnJvbShhY2Nlc0VsZW1lbnQoJy5tci0xJykpO1xyXG4gIGNvbnN0IG1yMV9pbWcgPSBhZGRDaGlsZF9vZl9FbEFycihtZW51Um93MSwgWydpbWcnLCAnaW1nJ10sICcubXItMS1idXR0b24nKTtcclxuICBjb25zb2xlLmxvZyhtcjFfaW1nKTtcclxuICBcclxuICBhZGRDbHNfY2hpbGROb2RlcyhtZW51Um93MSwgJy5tci0xLWJ1dHRvbi1lZC0nKTtcclxuICBcclxuICAvLyBBZGQgYXR0cmlidXRlcyB0byBtci0xLWJ1dHRvblxyXG4gIG1yMV9pbWcuZm9yRWFjaCgoZWxzKSA9PiB7XHJcbiAgICBhZGRBdHIoZWxzLCdzcmMnLCBbaWNvbkVkaXQsIGljb25YbWFya10sICcnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQWRkIEV2ZW50IExpc3RuZXIgdG8gZWRpdCBhbmQgZGVsIGJ1dHRvbiBvbiBNZW51c1xyXG4gIGNvbnN0IGRlbE1lbnVOYW1lID0gQXJyYXkuZnJvbShhY2Nlc0VsZW1lbnQoJy5tci0xLWJ1dHRvbi1lZC0xJywgJ2FsbCcpKTtcclxuICBhZGRFbGlzKGRlbE1lbnVOYW1lLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5tZW51Jyk7XHJcbiAgICBjb25zdCB0aXRsZUgxID0gYWNjZXNFbGVtZW50KCcjcHJvamVjdFRpdGxlJywgMSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXHJcbiAgICAgIEFycmF5LmZyb20ocHJvamVjdC5jaGlsZHJlbikuZmluZChlID0+IGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtci0wJykpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZkNoaWxkKHByb2plY3QsICcubXItMCcpO1xyXG4gICAgY29uc3Qga2V5UHJvamVjdCA9IGdldElubmVyVGV4dChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgaWYgKGdldElubmVyVGV4dCh0aXRsZUgxKSA9PT0ga2V5UHJvamVjdCkge1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIE1lbnVzRGF0YVxyXG4gICAgICBjb25zdCBuZXdNZW51ID0gbWVudXNEYXRhLmZpbHRlcihpdGVtID0+IGl0ZW0udG9Mb3dlckNhc2UoKSAhPT0ga2V5UHJvamVjdCk7XHJcbiAgICAgIHVwZGF0ZU1lbnVzRGF0YShuZXdNZW51KTtcclxuICAgICAgTFMuZ2V0SW50bygnbWVudXMnLCBuZXdNZW51KTtcclxuICBcclxuICAgICAgLy8gRGVsZXRlIFByb2plY3RcclxuICAgICAgY29uc3Qga2V5Q29udGVudCA9IGtleVByb2plY3QgKyAnQ29udGVudCc7XHJcbiAgICAgIExTLmhhc1Byb3BlcnR5KGtleUNvbnRlbnQpID8gTFMuZGVsUHJvcGVydHkoa2V5Q29udGVudCkgOiBudWxsO1xyXG4gICAgICBcclxuICAgICAgZGVsVG9kYXlDRCgpO1xyXG4gICAgICBwcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgICBkZWxDb250ZW50KCk7XHJcblxyXG4gICAgICAvLyBJbml0aWFsaXplIE1lbnUgYW5kIENvbnRlbnRcclxuICAgICAgaW5pdGlhbFNlbGVjdGVkTWVudSgpO1xyXG4gICAgICB1cGRhdGVGT1JNKCk7XHJcbiAgICAgIHN3aXRjaENvbnRlbnQoZSk7XHJcbiAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBtZW51c0RhdGFcclxuICAgICAgY29uc3QgbmV3TWVudSA9IG1lbnVzRGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkgIT09IGtleVByb2plY3QpO1xyXG4gICAgICB1cGRhdGVNZW51c0RhdGEobmV3TWVudSk7XHJcbiAgICAgIExTLmdldEludG8oJ21lbnVzJywgbmV3TWVudSk7XHJcbiAgXHJcbiAgICAgIC8vIERlbGV0ZSBQcm9qZWN0XHJcbiAgICAgIGNvbnN0IGtleUNvbnRlbnQgPSBrZXlQcm9qZWN0ICsgJ0NvbnRlbnQnO1xyXG4gICAgICBMUy5oYXNQcm9wZXJ0eShrZXlDb250ZW50KSA/IExTLmRlbFByb3BlcnR5KGtleUNvbnRlbnQpIDogbnVsbDtcclxuICAgICAgcHJvamVjdC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIC8vIEFkZCBFdmVudCBMaXN0ZW5lciBvbiBtZW51IGJ1dHRvbjogZWRpdFxyXG4gIGNvbnN0IGVkaXRNZW51TmFtZSA9IEFycmF5LmZyb20oYWNjZXNFbGVtZW50KCcubXItMS1idXR0b24tZWQtMCcsICdhbGwnKSk7XHJcbiAgYWRkRWxpcyhlZGl0TWVudU5hbWUsIChlKSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0YXJnZXQuY2xvc2VzdCgnLm1lbnUnKTtcclxuXHJcbiAgICBjb25zdCByZW5hbWVGb3JtID0gY3JlYXRlRWwoJ2RpdicsICcucmVuYW1lLWZvcm0nKTtcclxuICAgIGFkZEVsZW1lbnQocmVuYW1lRm9ybSwgcHJvamVjdCk7XHJcblxyXG4gICAgY29uc3QgcmVuYW1lSW5wdXQgPSBjcmVhdGVNdWxFbChbJ2J1dHRvbicsICdpbnB1dCcsICdidXR0b24nXSwgJy5ybi1mb3JtJyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZW5hbWVJbnB1dFsxXSk7XHJcblxyXG4gICAgYWRkTXVsSWQoQXJyYXkuZnJvbShyZW5hbWVJbnB1dCksIFsnZGVsLXJlbmFtZS1mb3JtJywgJ3JuLXByb2plY3QtbmFtZScsICdjaGFuZ2UtcHJvamVjdC1uYW1lJ10sICcnKTtcclxuICAgIGFkZE11bFRleHQoW3JlbmFtZUlucHV0WzBdLCByZW5hbWVJbnB1dFsyXV0sIFsneCcsICdDaGFuZ2UnXSk7XHJcbiAgICBcclxuICAgIGFkZEVsaXMocmVuYW1lSW5wdXRbMF0sIChlKSA9PiB7XHJcbiAgICAgIHJlbmFtZUZvcm0ucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgYWRkRWxpcyhyZW5hbWVJbnB1dFsyXSwgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVuYW1lSW5wdXRbMV0udmFsdWUpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0RWwgPSBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3IoJy5tci0wJyk7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzTmFtZSA9IGdldElubmVyVGV4dChwcm9qZWN0RWwpICsgJ0NvbnRlbnQnO1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gcmVuYW1lSW5wdXRbMV0udmFsdWU7XHJcbiAgICAgIGNvbnN0IHRpdGxlSDEgPSBhY2Nlc0VsZW1lbnQoJyNwcm9qZWN0VGl0bGUnLCAxKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lbnVzID0gTFMuZ2V0UGFyc2UoJ21lbnVzJyk7XHJcbiAgICAgIGNvbnN0IG5ld05hbWVUYXJnZXQgPSBmaW5kUG9zaXRpb24obWVudXMsIHByb2plY3RFbCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHByZXZpb3VzTmFtZSk7XHJcblxyXG5cclxuICAgICAgaWYgKCFMUy5oYXNQcm9wZXJ0eShuZXdOYW1lICsgJ0NvbnRlbnQnKSkge1xyXG4gICAgICAgIGlmIChuZXdOYW1lICE9PSBudWxsICYmIG5ld05hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhwcmV2aW91c05hbWUpO1xyXG4gICAgICAgICAgbGV0IGZkUHJvamVjdDtcclxuXHJcbiAgICAgICAgICBpZiAoTFMuaGFzUHJvcGVydHkocHJldmlvdXNOYW1lKSkge1xyXG4gICAgICAgICAgICBMUy5jaGFuZ2VQcm9wZXJ0eU5hbWUocHJldmlvdXNOYW1lLCAgbmV3TmFtZS50b0xvd2VyQ2FzZSgpICsgJ0NvbnRlbnQnKTtcclxuICAgICAgICAgICAgZmRQcm9qZWN0ID0gTFMuZ2V0UGFyc2UobmV3TmFtZS50b0xvd2VyQ2FzZSgpICsgJ0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZkUHJvamVjdENoYW5nZWQgPSBjaGFuZ2VPYmplY3REYXRhKGZkUHJvamVjdCwgJ3Byb2plY3QnLCBuZXdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICBMUy5nZXRJbnRvKG5ld05hbWUudG9Mb3dlckNhc2UoKSArICdDb250ZW50JywgZmRQcm9qZWN0Q2hhbmdlZCk7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBtZW51c1tuZXdOYW1lVGFyZ2V0XSA9IG5ld05hbWU7XHJcbiAgICAgIExTLmdldEludG8oJ21lbnVzJywgbWVudXMpO1xyXG4gICAgICB1cGRhdGVNZW51c0RhdGEobWVudXMpO1xyXG4gICAgICB1cGRhdGVGT1JNKCk7XHJcbiAgICAgIHByb2plY3RFbC5pbm5lclRleHQgPSBuZXdOYW1lO1xyXG5cclxuICAgICAgdGl0bGVIMS5pbm5lclRleHQgPSBuZXdOYW1lO1xyXG5cclxuICAgICAgcmVuYW1lRm9ybS5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRNdWxFbGVtZW50KHJlbmFtZUlucHV0LCByZW5hbWVGb3JtKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZW5hbWVJbnB1dFsxXSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZW5hbWVJbnB1dFswXSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8gQWRkIFByb2plY3QgIENvbnRhaW5lclxyXG5mdW5jdGlvbiBhY3RpdmF0ZUFQQ29uKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGFjY2VzRWxlbWVudCgnI2hlYWRlcicsIDEpXHJcbiAgY29uc3QgY3JlYXRlQVBDb250YWluZXIgPSBjcmVhdGVFbCgnZGl2JywgJyNhcC1jb250YWluZXInKTtcclxuICBhZGRFbGVtZW50KGNyZWF0ZUFQQ29udGFpbmVyLCBoZWFkZXIpO1xyXG59XHJcblxyXG4vLyBGb3JtIEFQXHJcbmZ1bmN0aW9uIEFQRm9ybSgpIHtcclxuICBjb25zdCBBUENvbnRhaW5lciA9IGFjY2VzRWxlbWVudCgnI2FwLWNvbnRhaW5lcicsIDEpXHJcblxyXG4gIGNvbnN0IGNyZWF0ZUZvcm1BUCA9IGNyZWF0ZUVsKCdmb3JtJywgJyNhcC1mb3JtJyk7XHJcbiAgYWRkRWxlbWVudChjcmVhdGVGb3JtQVAsIEFQQ29udGFpbmVyKTtcclxuXHJcbiAgLy8gSW5wdXQgaW4gQWRkIFByb2plY3RcclxuICBjb25zdCBjcmVhdGVJbnB1dEZBUCA9IGNyZWF0ZUVsKCdpbnB1dCcsICcjaW5wdXQtYXAnKTtcclxuICBjcmVhdGVJbnB1dEZBUC50eXBlID0gJ3RleHQnO1xyXG4gIGNyZWF0ZUlucHV0RkFQLm5hbWUgPSAnaW5wdXRGb3JtQVAnO1xyXG4gIGNyZWF0ZUlucHV0RkFQLnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgUHJvamVjdCBOYW1lISc7XHJcbiAgXHJcbiAgLy8gQnV0dG9uIGluIEFkZCBQcm9qZWN0XHJcbiAgY29uc3QgY3JlYXRlQnV0dG9uSUZBUCA9IGNyZWF0ZUVsKCdidXR0b24nLCAnI2J1dHRvbi1pYXAnKTtcclxuICBjcmVhdGVCdXR0b25JRkFQLnR5cGUgPSAnc3VibWl0JztcclxuICBjcmVhdGVCdXR0b25JRkFQLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcclxuICBcclxuICAvLyBjcmVhdGVCdXR0b25JRkFQOiBhZGQgRXZlbnQgTGlzdGVuZXJcclxuICBjcmVhdGVCdXR0b25JRkFQLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICBcclxuICAgIGNvbnN0IGlucHV0ID0gYWNjZXNFbGVtZW50KCcjaW5wdXQtYXAnLCAxKTtcclxuICAgIGNvbnN0IG1lbnVzQ29udGFpbmVyID0gYWNjZXNFbGVtZW50KCcjbWVudXMtY29udGFpbmVyJywgMSk7XHJcbiAgICBcclxuICAgIGlmIChpbnB1dC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgaWYgKCFpbk1EKGlucHV0LnZhbHVlLCBtZW51c0RhdGEpKSB7XHJcbiAgXHJcbiAgICAgICAgbWVudXNEYXRhLnB1c2goaW5wdXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lbnVzRGF0YSk7XHJcbiAgICAgICAgZW1wdHlFbChtZW51c0NvbnRhaW5lcik7XHJcbiAgICAgICAgTFMuZ2V0SW50bygnbWVudXMnLCBtZW51c0RhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFjdGl2YXRlTWVudSgpO1xyXG4gICAgICAgIHVwZGF0ZUZPUk0oKTtcclxuICBcclxuICAgICAgICAvLyBNZW51IFJvd3M6IENvbnRlbnQgaW4gZWFjaCBtZW51XHJcbiAgICAgICAgYWN0aXZhdGVNZW51Um93cygpO1xyXG4gICAgICAgIGluaXRpYWxTZWxlY3RlZE1lbnUoKTtcclxuICBcclxuICAgICAgICAvLyBNZW51IFJvdyAxIGJ1dHRvbnNcclxuICAgICAgICBhY3RpdmF0ZW1lbnVSb3cxQnV0dG9uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBzd2l0Y2hNZW51QW5kQ29udGVudChlKTtcclxuICAgIH07XHJcbiAgICBcclxuICB9KTtcclxuICBcclxuICAvLyBBZGQgSW5wdXQgYW5kIExhYmVsIHRvIEZvcm1cclxuICBhZGRNdWxFbGVtZW50KFtjcmVhdGVJbnB1dEZBUCwgY3JlYXRlQnV0dG9uSUZBUF0sIGNyZWF0ZUZvcm1BUCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBzZWxlY3RNZW51LCB1bnNlbGVjdE1lbnUsIHN3aXRjaE1lbnUsIGdldEFjdGl2ZU1lbnUsIGFjdGl2YXRlUHJvamVjdFRpdGxlLCBhY3RpdmF0ZU1lbnVDb24sIGFjdGl2YXRlTWVudSwgYWN0aXZhdGVNZW51Um93cywgaW5pdGlhbFNlbGVjdGVkTWVudSwgYWN0aXZhdGVtZW51Um93MUJ1dHRvbiwgYWN0aXZhdGVBUENvbiwgQVBGb3JtIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9