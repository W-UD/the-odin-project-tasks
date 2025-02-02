//  Import
import './styles.scss';
import { menusData, mapMDToDiv, inMD } from './data.js';

import { createEl, addElement, addMulElement, accesElement, createMulEl, addMulText, emptyEl, showForm, clsForm, addElis } from './dom.js';

import { activateNav } from './nav.js';

import { switchMenu, activateMenuRows, activateProjectTitle, activateMenuCon, activateMenu, initialSelectedMenu, activatemenuRow1Button, activateAPCon, APForm } from './menu.js';

import { activatedialog, activateForm, activateInputCon, activateInput, activateBTN , activateTodoContainer, postToDo,} from './todo-form.js';

import { activateH1Content, activatePL_BtnCon, activatePlButton, InitialProjectContent } from './content.js';

import { activateFooter } from './footer.js';

// Body
const body = document.querySelector('body');

// ---------------------------------------------------
// ---------------------------------------------------

// HEADER
// ======

// Header
const createHeader = createEl('header', '#header');
addElement(createHeader, body);

// Project Title
activateProjectTitle();

// Menu Container
activateMenuCon();

// Menu
activateMenu();

// Menu Rows
activateMenuRows();

// Initial Selected Menu 
initialSelectedMenu();


// Menu Row 1 buttons
activatemenuRow1Button();

// ---------------------------------------------------
// ---------------------------------------------------

// Add Project Container
activateAPCon();
APForm();

// ---------------------------------------------------
// ---------------------------------------------------

// Content

// Content
const createContent = createEl('div', '#content');
addElement(createContent, body);

// Activate Nav
activateNav();

// Today List h1
activateH1Content();

// Input
activatedialog();
activateForm();
activateInputCon();
activateInput();

// showForm();
activateBTN();

// Project and List
activatePL_BtnCon();

// Add Project and Todo Buttons
activatePlButton();

// Activate Todo Container
activateTodoContainer();

// Initial Project Content
InitialProjectContent();

// Activate Footer
activateFooter();