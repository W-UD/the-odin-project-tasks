import addSvg from './icon/add_create_new_plus_icon.svg';

import { accesElement, createEl, createMulEl, addElement, addMulElement, addMulText, addElis, emptyEl } from "./dom";
import { getTodayCD, getELCD, getOPLCD, menusData } from "./data";
import { postToDo, sendDataToLocalStorage, selectOption, sendMulDataToLocalStorage } from "./todo-form";
import { LS } from "./local-storage";

// Today List h1
function activateH1Content() {
  const contentCon = accesElement('#content', 1);

  const titleContainer = createEl('div', '#title-container');
  addElement(titleContainer, contentCon)

  if (LS.hasProperty('menus')) {
    const menus = LS.getParse('menus');

    if (menus.length === 0) {
      const h1 = createEl('h1', '#projectTitle');
      h1.innerText = '';
      addElement(h1, titleContainer);
    }

    if (menus.length !== 0) {
      const lastItem = menus[menus.length - 1];
      
      const h1 = createEl('h1', '#projectTitle');
      h1.innerText = lastItem;
      addElement(h1, titleContainer);
    } 

  }
}

// Project and Todo Buttons
function activatePL_BtnCon() {
  const titleContainer = accesElement('#title-container', 1);

  const plButtonCon = createEl('div', '#pl-button-con');
  addElement(plButtonCon, titleContainer);
}

function activatePlButton() {
  const plButtonCon = accesElement('#pl-button-con', 1);

  // const PLArr = ['Add Todo'];
  const PLButton = createEl('div', '#addPL');
  PLButton.innerHTML = `<img src='${addSvg}' id='addpl-svg'>`;
  addElement(PLButton, plButtonCon);

  addPLHandler();

}

// addPL2 Event Listener Handler
function addPLHandler() {
  const pl2_btn = accesElement('#addPL', 1);
  const dialog = accesElement('#mydialog', 1);

  addElis(pl2_btn, () => {
    const menus = LS.getParse('menus');
    if (menus.length === 0) {
      return alert('You have no project active. Please add project before adding a TodoList.');
    }
    dialog.showModal();
    selectOption();
  });
  
}

// Activate Initiate Content
function InitialProjectContent() {
  const initialELContent = getELCD();
  const initialOPLContent = getOPLCD();
  
  const today = accesElement('#projectTitle', 1);
  const keyToday = today.innerText.toLowerCase() + 'Content';
  console.log(keyToday);

  if (LS.hasProperty(keyToday)) {

    const initialContentData = LS.getParse(keyToday);
    initialContentData.forEach(todo => {
      postToDo(todo);
    });
    
  } 
  else {
    if (!LS.hasProperty('initialData')) {
      // intialELContent and initialOPLContent
      LS.getInto('english_learningContent', initialELContent);
      LS.getInto('odin_project_learningContent', initialOPLContent);

      // initialData for today
      const initialData = getTodayCD();

      if (initialData.length !== 0) {
        sendMulDataToLocalStorage(initialData);
  
        const initialContentData = LS.getParse(keyToday);
        console.log(initialContentData);
        
        if (initialContentData !== null) {
          initialContentData.forEach(todo => {
            postToDo(todo);
          });
        }
      }

      LS.getInto('initialData', true);
    }
    else {
      return;
    }
  }
}

// Switch Content
function switchContent(elClicked) {
  console.log(LS.notNull('menus'));
  if (LS.notNull('menus') === false) {
    const titleH1 = accesElement('#projectTitle', 1);
    const todoContainer = accesElement('#todo-container', 1);

    titleH1.innerText = 'Add project by clicked the button Add Project';

    // ProjectContent
    const key = titleH1.innerText.toLowerCase() + 'Content';

    if (LS.hasProperty(key)) {
      const contentData = LS.getParse(key);
      emptyEl(todoContainer);

      contentData.forEach((todo=> {
        postToDo(todo);
      }));
    }
    else {
      emptyEl(todoContainer);
    }
  }

  if (LS.notNull('menus') === true) {
    const el = elClicked.target;

    const content = accesElement('#content', 1);
    const menu = accesElement('.mr-0');
    const menuLastItem = menu[menu.length - 1];

    const titleH1 = accesElement('#projectTitle', 1);
    const todoContainer = accesElement('#todo-container', 1)
    console.log(todoContainer);


    if (!el.classList.contains('mr-0')) {
      console.log(menuLastItem);
      titleH1.innerText = menuLastItem.innerText;
    } else {
      titleH1.innerText = el.innerText;
    }

    // ProjectContent
    const key = titleH1.innerText.toLowerCase() + 'Content';

    if (LS.hasProperty(key)) {
      const contentData = LS.getParse(key);
      emptyEl(todoContainer);

      contentData.forEach((todo=> {
        postToDo(todo);
      }));
    }
    else {
      emptyEl(todoContainer);
    }
  }

}

function delContent() {
  const todoContainer = accesElement('#todo-container', 1);
  emptyEl(todoContainer);
}


export {activateH1Content, activatePL_BtnCon, activatePlButton, switchContent, InitialProjectContent, delContent };