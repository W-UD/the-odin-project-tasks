import iconEdit from './icon/edit-pencil.svg';
import iconXmark from './icon/xmark.svg';

import { accesElement, addChild_of_ElArr, addCls_childNodes, addMulText, getInnerText, addElis, getChild, fChild, createEl, createMulEl, addElement, addMulElement, emptyEl, addMulEl_Cls, addDataSet, findPosition, addId, addMulId, addClass, removeClass, addAtr, changeObjectData, shiftArrP } from './dom.js';

import { menusData, inMD, mapMDToDiv, updateMenusData, delTodayCD, delELCD } from './data.js';
import { switchContent, delContent, InitialProjectContent } from './content.js';
import { LS } from './local-storage.js';
import { updateFORM } from './todo-form.js';

// Menu Selection

// Check active menu
function getActiveMenu() {
  const activeMenu = accesElement('.mr0-active', 1);

  return activeMenu;
}

// Initial Selected Menu
function initialSelectedMenu() {
  if (menusData.length !== 0) {
    const lastItem = menusData[menusData.length - 1].toLowerCase();

    const selectedMenu = accesElement(`#mr0-${lastItem}`, 1);
    addClass(selectedMenu, '.mr0-active');
    selectedMenu.style.backgroundColor = '#abad35';
  }
}

// Select Menu
function selectMenu(elArr, elC='') {
  const activeMenu = getActiveMenu();
  removeClass(activeMenu, 'mr0-active');

  const els = accesElement(elArr);
  const elTargetMenu = elC.classList.contains('mr-0');
  console.log(elTargetMenu);
  
  if (!elTargetMenu) {
    const lastItem = els[els.length - 1];
    addClass(lastItem, '.mr0-active');
    
    return lastItem.style.backgroundColor = '#abad35';
  } 
  else if (elTargetMenu) {
    addClass(elC, '.mr0-active');
    return elC.style.backgroundColor = '#abad35';
  }
}

// Unselect Menu
function unselectMenu(elArr) {
  const els = accesElement(elArr);
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
  switchContent(e);
}


// --------------------------------------------------

// Activate Show Menus Button
function activateProjectTitle() {
  const header = accesElement('#header', 1);

  const projectTitle = createEl('div', '#project-title');
  addElement(projectTitle, header);
  projectTitle.innerText = 'Project';
}

// Menus Container
function activateMenuCon() {
  const header = accesElement('#header', 1);

  const createHeaderMenusC = createEl('div', '#menus-container');
  addElement(createHeaderMenusC, header);
}

// Menus
function activateMenu() {
  const menusContainer = accesElement('#menus-container', 1)

  if (LS.hasProperty('menus')) {
    const menus = LS.parse(LS.getFrom('menus'));
    updateMenusData(menus);
  
    const createHeaderMenus = createMulEl(mapMDToDiv(menusData), '.menu');
    addMulElement(createHeaderMenus, menusContainer);
  }
  else {
    const createHeaderMenus = createMulEl(mapMDToDiv(menusData), '.menu');
    addMulElement(createHeaderMenus, menusContainer);
    LS.getInto('menus', menusData);
    
  }

}

// Menu Rows
function activateMenuRows() {
  const menus = Array.from(accesElement('.menu', 'all'));
  addChild_of_ElArr(menus, ['div', 'div'], '.menu-row');
  
  // Menu Row: mr-0 and mr-1
  // Add new class to each ChildNodes
  addCls_childNodes(menus, '.mr-');
  
  // Access menuRow0
  const menuRow0 = Array.from(accesElement('.mr-0'));
  addDataSet(menuRow0, menusData, menusData);
  addMulText(menuRow0, menusData);

  // Add id to menuRow0
  const menuRow0Text = getInnerText(menuRow0)
  addMulId(menuRow0, menuRow0Text, 'mr0-');

  // Add EventListener to Menu Row0
  addElis(menuRow0, switchMenuAndContent);
}

// Menu Row 1 buttons
function activatemenuRow1Button() {
  // Acces MenuRow1
  const menuRow1 = Array.from(accesElement('.mr-1'));
  const mr1_img = addChild_of_ElArr(menuRow1, ['img', 'img'], '.mr-1-button');
  console.log(mr1_img);
  
  addCls_childNodes(menuRow1, '.mr-1-button-ed-');
  
  // Add attributes to mr-1-button
  mr1_img.forEach((els) => {
    addAtr(els,'src', [iconEdit, iconXmark], '');
  });

  // Add Event Listner to edit and del button on Menus
  const delMenuName = Array.from(accesElement('.mr-1-button-ed-1', 'all'));
  addElis(delMenuName, (e) => {
    const target = e.target;
    const project = target.closest('.menu');
    const titleH1 = accesElement('#projectTitle', 1);

    console.log(
      Array.from(project.children).find(e => e.classList.contains('mr-0'))
    );

    const projectName = fChild(project, '.mr-0');
    const keyProject = getInnerText(projectName);

    if (getInnerText(titleH1) === keyProject) {
      
      // Update MenusData
      const newMenu = menusData.filter(item => item.toLowerCase() !== keyProject);
      updateMenusData(newMenu);
      LS.getInto('menus', newMenu);
  
      // Delete Project
      const keyContent = keyProject + 'Content';
      LS.hasProperty(keyContent) ? LS.delProperty(keyContent) : null;
      
      delTodayCD();
      project.remove();
      delContent();

      // Initialize Menu and Content
      initialSelectedMenu();
      updateFORM();
      switchContent(e);
      
    } else {

      // Update menusData
      const newMenu = menusData.filter(item => item.toLowerCase() !== keyProject);
      updateMenusData(newMenu);
      LS.getInto('menus', newMenu);
  
      // Delete Project
      const keyContent = keyProject + 'Content';
      LS.hasProperty(keyContent) ? LS.delProperty(keyContent) : null;
      project.remove();
    }

  });

  // Add Event Listener on menu button: edit
  const editMenuName = Array.from(accesElement('.mr-1-button-ed-0', 'all'));
  addElis(editMenuName, (e) => {
    const target = e.target;
    const project = target.closest('.menu');

    const renameForm = createEl('div', '.rename-form');
    addElement(renameForm, project);

    const renameInput = createMulEl(['button', 'input', 'button'], '.rn-form');
    console.log(renameInput[1]);

    addMulId(Array.from(renameInput), ['del-rename-form', 'rn-project-name', 'change-project-name'], '');
    addMulText([renameInput[0], renameInput[2]], ['x', 'Change']);
    
    addElis(renameInput[0], (e) => {
      renameForm.remove();
    });


    addElis(renameInput[2], (e) => {
      console.log(renameInput[1].value);
      const projectEl = project.querySelector('.mr-0');
      const previousName = getInnerText(projectEl) + 'Content';
      const newName = renameInput[1].value;
      const titleH1 = accesElement('#projectTitle', 1);

      const menus = LS.getParse('menus');
      const newNameTarget = findPosition(menus, projectEl);
      console.log(previousName);


      if (!LS.hasProperty(newName + 'Content')) {
        if (newName !== null && newName !== '') {
          console.log(previousName);
          let fdProject;

          if (LS.hasProperty(previousName)) {
            LS.changePropertyName(previousName,  newName.toLowerCase() + 'Content');
            fdProject = LS.getParse(newName.toLowerCase() + 'Content');

            const fdProjectChanged = changeObjectData(fdProject, 'project', newName.toLowerCase());
            LS.getInto(newName.toLowerCase() + 'Content', fdProjectChanged);
          } 
          
        }
      }
      
      menus[newNameTarget] = newName;
      LS.getInto('menus', menus);
      updateMenusData(menus);
      updateFORM();
      projectEl.innerText = newName;

      titleH1.innerText = newName;

      renameForm.remove();
    });
    
    addMulElement(renameInput, renameForm);

    // console.log(renameInput[1]);
    // console.log(renameInput[0]);
  });
}

// ---------------------

// Add Project  Container
function activateAPCon() {
  const header = accesElement('#header', 1)
  const createAPContainer = createEl('div', '#ap-container');
  addElement(createAPContainer, header);
}

// Form AP
function APForm() {
  const APContainer = accesElement('#ap-container', 1)

  const createFormAP = createEl('form', '#ap-form');
  addElement(createFormAP, APContainer);

  // Input in Add Project
  const createInputFAP = createEl('input', '#input-ap');
  createInputFAP.type = 'text';
  createInputFAP.name = 'inputFormAP';
  createInputFAP.placeholder = 'Enter a Project Name!';
  
  // Button in Add Project
  const createButtonIFAP = createEl('button', '#button-iap');
  createButtonIFAP.type = 'submit';
  createButtonIFAP.textContent = 'Add Project';
  
  // createButtonIFAP: add Event Listener
  createButtonIFAP.addEventListener('click', (e) => {
    e.preventDefault();
  
    const input = accesElement('#input-ap', 1);
    const menusContainer = accesElement('#menus-container', 1);
    
    if (input.value !== '') {
      if (!inMD(input.value, menusData)) {
  
        menusData.push(input.value);
        console.log(menusData);
        emptyEl(menusContainer);
        LS.getInto('menus', menusData);
        
        activateMenu();
        updateFORM();
  
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
  addMulElement([createInputFAP, createButtonIFAP], createFormAP);
}


export { selectMenu, unselectMenu, switchMenu, getActiveMenu, activateProjectTitle, activateMenuCon, activateMenu, activateMenuRows, initialSelectedMenu, activatemenuRow1Button, activateAPCon, APForm }
