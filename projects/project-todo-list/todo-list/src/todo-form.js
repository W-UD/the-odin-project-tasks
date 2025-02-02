import iconEdit from './icon/edit-pencil.svg';
import iconXmark from './icon/xmark.svg';
import finishIcon from './icon/finish-svgrepo-com.svg';
import inProgressIcon from './icon/location_marker_path_road_icon.svg';
import lowPriorityIcon from './icon/blue-circle-svgrepo-com.svg';
import highPriorityIcon from './icon/red-circle-svgrepo-com.svg';

import { newProject, mapMDToDiv, menusData, filterA, filterO } from "./data.js";

import { createEl, createMulEl, addElement,addMulElement, accesElement, addChild_of_ElArr, addMulText, addHTML, addPlaceholder, addMulId, addAtr, shiftArrP, addChild, addElis, addMulEl_Cls, addDataSet, getInnerText, emptyEl, findPosition} from "./dom.js";

import { LS } from "./local-storage.js";

// Data
const todoName = ['title', 'description', 'dueDate', 'priority', 'notes', 'checklist', 'project'];
const todoNameInput = ['title', 'dueDate', 'priority', 'checklist', 'project'];
const todoNameTextarea = ['description', 'notes'];

// Activate Todo Container
function activateTodoContainer() {
  const content = accesElement('#content', 1);
  
  if (checkTodoContainer()) {
    return accesElement('#todo-container', 1);
  } 
  else {
    const todoContainer = createEl('div', '#todo-container');
    addElement(todoContainer, content);

    return todoContainer;
  }
  
}

// Check Todo Container
function checkTodoContainer() {
  const content = accesElement('#content', 1);
  const contentChildren = Array.from(content.children);
  
  return contentChildren.some(e => e.id === 'todo-container');
}

// Dialog
function activatedialog() {
  const content = accesElement('#content', 1);

  const dialog = createEl('dialog', '#mydialog');
  addElement(dialog, content);

  return dialog;
}

// Non Activate Dialog
function nonActivateDialog() {
  const dialog = accesElement('#mydialog', 1);
  dialog.close();
  updateFORM();
}

// Form
function activateForm() {
  const dialog = accesElement('#mydialog', 1);

  const form = createEl('form', '#form-todo');
  addElement(form, dialog);
  
  activateCloseBtn(form);

  return form;
}

// Activate Close Form Button
function activateCloseBtn(form) {
  const closeForm = createEl('button', '#close-form-btn')
  addElement(closeForm, form);
  closeForm.innerText = 'x';

  addElis(closeForm, nonActivateDialog);
}

// Form Input Container
function activateInputCon() {
  const form = accesElement('#form-todo', 1);
  
  const mapDataTTag = mapMDToDiv(todoName);
  const inputContainer = createMulEl(mapDataTTag, '.input-container');

  addMulElement(inputContainer, form);

  return inputContainer;
}

// Input
function activateInput() {
  const inputContainer = Array.from(accesElement('.input-container'));

  // Elements for form
  inputContainer.forEach((e, i, arr) => {
    if (i === 1 || i === 4) {
      addChild(['label', 'textarea'], '.input-l', e);
    } 
    else if (i === 6) {
      addChild(['label', 'select'], '.input-l', e);
    }
    else {
      addChild(['label', 'input'], '.input-l', e)
    }

  });
  
  // Label
  const label = Array.from(accesElement('label.input-l', 'all'));
  addMulText(label, todoName);
  addAtr(label, 'for', todoName, 'input-');

  // Input
  const input = Array.from(accesElement('input.input-l', 'all'));
  addMulId(input, todoNameInput, 'input-')
  addAtr(input, 'name', todoNameInput);
  addAtr(input, 'type', ['text', 'date', 'checkbox', 'checkbox']);
  addAtr(input, 'value', ['', '', 'prioritized', 'finished']);
  addAtr(input, 'required', [1, 1, '', '']);
  addPlaceholder(input, 'input here..');
  
  // Textarea
  const textarea = Array.from(accesElement('textarea.input-l'));
  addMulId(textarea, todoNameTextarea, 'input-')
  addAtr(textarea, 'name', todoNameTextarea);

  // Select
  const selectOpt = accesElement('select.input-l', 1);
  addAtr(selectOpt, 'id', 'project', 'input-');
  addAtr(selectOpt, 'name', 'project', '');

  // Options
  const options = addChild(mapMDToDiv(menusData, 'option'), '#option', selectOpt);
  addAtr(options, 'value', menusData);
  addMulText(options, menusData);
  
  return input;
}

// Selected Option
function selectOption() {
  const h1Title = accesElement('#projectTitle', 1);
  const select = accesElement('#input-project', 1);
  const options = Array.from(accesElement('#input-project option', 'all'));
  
  options.forEach((el, i) => {
    if (getInnerText(el) === getInnerText(h1Title)) {
      select.selectedIndex = i;
    }
  });
}


// Button Submit
function activateBTN() {
  const form = accesElement('#form-todo', 1);
  
  const inputbtn = createEl('button', '#input-btn');
  inputbtn.type = 'submit';
  inputbtn.innerText = 'submit';
  addElement(inputbtn, form);
  
  // EventListener
  addElis(inputbtn, submitFormHandler);
  
}

// Submit Form Handler
function submitFormHandler(e) {
  const form = accesElement('#form-todo', 1);
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
  const activeMenu = accesElement('.mr0-active', 1);

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
  const dialog = accesElement('#mydialog', 1);
  dialog.innerHTML = '';
}

// Get Form Data
function getFormData() {
  const form = accesElement('#form-todo', 1);
  
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

  const datakeys = filterO(Object.keys(data), data);
  const dataValues = filterA(Object.values(data));
  
  const todoContainer = activateTodoContainer();

  const todos = addChild('div', '.todo', todoContainer);
  
  // TodoList Content
  const tdInfo = addChild(mapMDToDiv(datakeys), '.td-info', todos);
  addMulEl_Cls(tdInfo, datakeys, '.tdi-')
  addMulText(tdInfo, dataValues);

  // tdi-priority and tdi-checklist
  const tdiInfoCheckbox =   tdInfo.filter((el) => {
    return el.classList.contains('tdi-priority') || el.classList.contains('tdi-checklist');
  });
  
  if (tdiInfoCheckbox[0].textContent === 'prioritized') {
    console.log(tdiInfoCheckbox[1].textContent);
    tdiInfoCheckbox[0].innerHTML = `<img id='icon-priority' src='${highPriorityIcon}'> <span id='priority-high'>High</span>`;
  } else {
    tdiInfoCheckbox[0].innerHTML = `<img id='icon-priority' src='${lowPriorityIcon}'> <span id='priority-low'>Low</span>`;
  }

  if (tdiInfoCheckbox[1].textContent === 'finished') {
    tdiInfoCheckbox[1].innerHTML = `<img id='icon-progress' src='${finishIcon}'> <span>done</span>`;
  } else {
    tdiInfoCheckbox[1].innerHTML = `<img id='icon-progress' src='${inProgressIcon}'> <span>in progress</span>`;
  }
    
  
  // TodoList Content Button
  const tdButtonContainer = addChild('div', '.td-button-container', todos);
  const tdButton = addChild(['div', 'div'], '.td-button', tdButtonContainer);

  addHTML(tdButton[0], `<img src='${iconXmark}' id='td-button-del'>`);
  addHTML(tdButton[1], `<img src='${iconEdit}' id='td-button-ed'>`);

  addElis(tdButton[0], (e) => {
    const h1Title = accesElement('#projectTitle', 1);
    const target = e.target;
    
    const todoParent = target.closest('.todo');
    const todoTitle = todoParent.querySelector('.tdi-title');

    const projectName = getInnerText(h1Title) + 'Content';
    const project = LS.getParse(projectName);

    const newProject = project.filter(fd => {
      console.log(fd.title === todoTitle.innerText);
      return fd.title !== todoTitle.innerText;
    });
    
    LS.getInto(getInnerText(h1Title) + 'Content', newProject);
    console.log(newProject);
    
    if (newProject.length !== 0) {
      const todoContainer = accesElement('#todo-container', 1);
      emptyEl(todoContainer);

      newProject.forEach(td => {
        postToDo(td)
      });
    } else if (newProject.length === 0) {
      const todoContainer = accesElement('#todo-container', 1);
      emptyEl(todoContainer);
    }

  }, 'click');

  addElis(tdButton[1], (e) => {
    const h1Title = accesElement('#projectTitle', 1);
    const target = e.target;
    
    const todoContainer = accesElement('#todo-container', 1);
    const todoParent = target.closest('.todo');
    const todoTitle = todoParent.querySelector('.tdi-title');

    const projectName = getInnerText(h1Title) + 'Content';
    const project = LS.getParse(projectName);
  
    const projectToEdit = project.filter(fd => {
      return fd.title === todoTitle.innerText;
    })[0];

    const dialog = accesElement('#mydialog', 1);
    const form = accesElement('#form-todo', 1);
    const inputTitle = accesElement('#input-title', 1);
    const inputDescription = accesElement('#input-description', 1);
    const inputDueDate = accesElement('#input-dueDate', 1);
    const inputPriority = accesElement('#input-priority', 1);
    const inputNotes = accesElement('#input-notes', 1);
    const inputChecklist = accesElement('#input-checklist', 1);
    const inputProject = accesElement('#input-project', 1);


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
    const submitBtn = accesElement('#input-btn', 1);
    submitBtn.removeEventListener('click', submitFormHandler);
    addElis(submitBtn, (e) => {
      e.preventDefault();
      const previousProjectIndex = project.findIndex(item => {
        return item.title === todoTitle.innerText;
      })
      
      const newEditedFormData = getFormData();
      if (newEditedFormData.project === h1Title.innerText) {

        project[previousProjectIndex] = newEditedFormData;
        LS.getInto(projectName, project);

        emptyEl(todoContainer);
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
  
  if (LS.hasProperty(key)) {
    changeDataInLS(key, fd);
  }
  else {
    const initialData = [];
    LS.getInto(key, initialData);
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
  const getInialData = LS.getParse(dataName);
  console.log(getInialData);
  console.log(newData);
  
  getInialData.push(newData);
  // Object.defineProperty(getInialData, newData.title, {
  //   value: newData,
  //   writable: true,
  //   configurable: true,
  //   enumerable: true
  // });

  LS.getInto(dataName, getInialData);
}

export { activatedialog, activateForm, activateInputCon, activateInput, activateBTN, getFormData, postToDo, updateFORM, selectOption, sendDataToLocalStorage, sendMulDataToLocalStorage, activateTodoContainer };
