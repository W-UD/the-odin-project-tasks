"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["data"],{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delELCD: () => (/* binding */ delELCD),
/* harmony export */   delOPLCD: () => (/* binding */ delOPLCD),
/* harmony export */   delTodayCD: () => (/* binding */ delTodayCD),
/* harmony export */   filterA: () => (/* binding */ filterA),
/* harmony export */   filterO: () => (/* binding */ filterO),
/* harmony export */   getELCD: () => (/* binding */ getELCD),
/* harmony export */   getOPLCD: () => (/* binding */ getOPLCD),
/* harmony export */   getTodayCD: () => (/* binding */ getTodayCD),
/* harmony export */   inMD: () => (/* binding */ inMD),
/* harmony export */   mapMDToDiv: () => (/* binding */ mapMDToDiv),
/* harmony export */   menusData: () => (/* binding */ menusData),
/* harmony export */   newProject: () => (/* binding */ newProject),
/* harmony export */   testing: () => (/* binding */ testing),
/* harmony export */   updateMenusData: () => (/* binding */ updateMenusData)
/* harmony export */ });
class Project {
  constructor(title = '', description = '', dueDate = '', priority = '', notes = '', checklist='', project='') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project;
  }

}
  
const testing = console.log(new Project());

// -----------------------------------

// Menus Data

const menusData = [
  'English Learning', 
  'Odin Project Learning', 
  'Today',
];

// Map Menus Data to 'div'
function mapMDToDiv(md, elToMap='div') {
  const newMD = md;

  return newMD.map((data) => {
    return data = elToMap;
  });

}

// Check if Input already in menus data
function inMD(input, md) {
  return md.includes(input);
}

// New Project
function newProject(arr) {

  return new Project(...arr);
}

// Check Array Item
function filterA(arr) {
 return arr.filter((item, i) => {
  return item !== '' && item !== null;
 })
}

// Filter Object 
function filterO(arrO, obj) {
  const arr = [];
  arrO.forEach(item => {
    console.log(obj[item]);
    if (typeof obj[item] !== 'undefined'  && obj[item] !== '') {
      arr.push(item);
    }

  });
  console.log(arr);
  return arr;
}

// MenusData Update
function updateMenusData(menuUpdated) {
  menusData.length = 0;
  return menusData.splice(0, 0, ...menuUpdated);
}

// --------------------------------

// Content Data
const initialDueDate = new Date();
const initialDate = initialDueDate.getDate();
const initialMonth = initialDueDate.getMonth() + 1;
const initialYear = initialDueDate.getFullYear();

// Initial Today Content
const initialTodayContent = newProject(['Morning Rotine 1', 'What i will do in the morning.', `${initialYear}-${initialMonth}-${initialDate}`, 'prioritized', 'Waking up, Brushing off teeth, Meditating, Cleaning bed, Take a bath.', true, 'Today' ]);

const initialTodayContent2 = newProject(['Morning Routine 2', 'Hello...', `${initialYear}-${initialMonth}-${initialDate + 1}`, 'prioritized', 'Waking up, Brushing off teeth, Meditating, Cleaning bed, Take a bath.', true, 'Today' ]);

const initialTodayContent3 = newProject(['Morning Routine 3', 'Hello...', `${initialYear}-${initialMonth}-${initialDate + 2}`, 'prioritized', 'Waking up, Brushing off teeth, Meditating, Cleaning bed, Take a bath.', true, 'Today' ]);

const initialTodayContent4 = newProject(['Morning Routine 4', 'Hello...', `${initialYear}-${initialMonth}-${initialDate + 3}`, 'prioritized', 'Waking up, Brushing off teeth, Meditating, Cleaning bed, Take a bath.', true, 'Today' ]);

const todayContentData = [
  initialTodayContent, initialTodayContent2, initialTodayContent3, initialTodayContent4
];

function getTodayCD() {
  return todayContentData;
}

function delTodayCD() {
  todayContentData.length = 0;
  console.log(todayContentData);
}

// Initial English Learning Content
const initialELContent = newProject(['English Day 1', 'Day 1 on my journey in learning English.', `${initialYear}-${initialMonth}-${initialDate}`, 'prioritized', 'Pronouns, Preposition, Adverb.', true, 'English_Learning' ]);

const initialELContent2 = newProject(['English Day 2', 'This my day 2 learning English.', `${initialYear}-${initialMonth}-${initialDate + 1}`, 'prioritized', 'Expressions, Simple Conversation, Simple Tense.', true, 'English_Learning' ]);

const initialELContent3 = newProject(['English Day 3', 'My day 3 learning Englisih.', `${initialYear}-${initialMonth}-${initialDate + 2}`, 'prioritized', 'Simple Past, Simple Story, Daily Expressions.', true, 'English_Learning' ]);

const initialELContent4 = newProject(['English Day 4', 'My day 4 learning English.', `${initialYear}-${initialMonth}-${initialDate + 3}`, 'prioritized', 'Simple Future, Simple Dialog, Basic Phrasal Verb.', true, 'English_Learning']);

const ELContentData = [
  initialELContent, initialELContent2, initialELContent3, initialELContent4
];

function getELCD() {
  return ELContentData;
}

function delELCD() {
  ELContentData.length = 0;
  console.log(ELContentData);
}

// Initial Odin Project Learning Content
const initialOPLContent = newProject(['Month 1: HTML', 'Learning HTML for basic document writing for website.', `${initialYear}-${initialMonth}-${initialDate}`, 'prioritized', 'HTML basic: tags, attribute, class, id, etc..', true, 'Odin_Project_Learning' ]);

const initialOPLContent2 = newProject(['Month 2: CSS', 'CSS for styling the HTML document.', `${initialYear}-${initialMonth}-${initialDate + 1}`, 'prioritized', 'CSS basic: selector, properties, etc..', true, 'Odin_Project_Learning' ]);

const initialOPLContent3 = newProject(['Month 3: JavaScript', 'JavaScript for manipulating DOM and another logic and functionality of the web.', `${initialYear}-${initialMonth}-${initialDate + 2}`, 'prioritized', 'Basic JavaScript: variable, number, string, object, array, function, etc..', true, 'odin_project_learning' ]);

const initialOPLContent4 = newProject(['Month 4: React', 'React for framework and easy way to develop web.', `${initialYear}-${initialMonth}-${initialDate + 3}`, 'prioritized', 'React Basic', true, 'Odin_Project_Learning' ]);

const OPLContentData = [
  initialOPLContent, initialOPLContent2, initialOPLContent3, initialOPLContent4
];

function getOPLCD() {
  return OPLContentData;
}

function delOPLCD() {
  OPLContentData.length = 0;
  console.log(OPLContentData);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5teWZpbGUtOTU5Yjc5NWVkNjFlNzBiMzNlMTguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlHQUFpRyxZQUFZLEdBQUcsYUFBYSxHQUFHLFlBQVk7QUFDNUk7QUFDQSw2RUFBNkUsWUFBWSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0I7QUFDNUg7QUFDQSw2RUFBNkUsWUFBWSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0I7QUFDNUg7QUFDQSw2RUFBNkUsWUFBWSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0I7QUFDNUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQXFHLFlBQVksR0FBRyxhQUFhLEdBQUcsWUFBWTtBQUNoSjtBQUNBLDZGQUE2RixZQUFZLEdBQUcsYUFBYSxHQUFHLGdCQUFnQjtBQUM1STtBQUNBLHlGQUF5RixZQUFZLEdBQUcsYUFBYSxHQUFHLGdCQUFnQjtBQUN4STtBQUNBLHdGQUF3RixZQUFZLEdBQUcsYUFBYSxHQUFHLGdCQUFnQjtBQUN2STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSEFBbUgsWUFBWSxHQUFHLGFBQWEsR0FBRyxZQUFZO0FBQzlKO0FBQ0EsZ0dBQWdHLFlBQVksR0FBRyxhQUFhLEdBQUcsZ0JBQWdCO0FBQy9JO0FBQ0Esb0pBQW9KLFlBQVksR0FBRyxhQUFhLEdBQUcsZ0JBQWdCO0FBQ25NO0FBQ0EsZ0hBQWdILFlBQVksR0FBRyxhQUFhLEdBQUcsZ0JBQWdCO0FBQy9KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSA9ICcnLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVEYXRlID0gJycsIHByaW9yaXR5ID0gJycsIG5vdGVzID0gJycsIGNoZWNrbGlzdD0nJywgcHJvamVjdD0nJykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMubm90ZXMgPSBub3RlcztcclxuICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICB9XHJcblxyXG59XHJcbiAgXHJcbmNvbnN0IHRlc3RpbmcgPSBjb25zb2xlLmxvZyhuZXcgUHJvamVjdCgpKTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBNZW51cyBEYXRhXHJcblxyXG5jb25zdCBtZW51c0RhdGEgPSBbXHJcbiAgJ0VuZ2xpc2ggTGVhcm5pbmcnLCBcclxuICAnT2RpbiBQcm9qZWN0IExlYXJuaW5nJywgXHJcbiAgJ1RvZGF5JyxcclxuXTtcclxuXHJcbi8vIE1hcCBNZW51cyBEYXRhIHRvICdkaXYnXHJcbmZ1bmN0aW9uIG1hcE1EVG9EaXYobWQsIGVsVG9NYXA9J2RpdicpIHtcclxuICBjb25zdCBuZXdNRCA9IG1kO1xyXG5cclxuICByZXR1cm4gbmV3TUQubWFwKChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0YSA9IGVsVG9NYXA7XHJcbiAgfSk7XHJcblxyXG59XHJcblxyXG4vLyBDaGVjayBpZiBJbnB1dCBhbHJlYWR5IGluIG1lbnVzIGRhdGFcclxuZnVuY3Rpb24gaW5NRChpbnB1dCwgbWQpIHtcclxuICByZXR1cm4gbWQuaW5jbHVkZXMoaW5wdXQpO1xyXG59XHJcblxyXG4vLyBOZXcgUHJvamVjdFxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0KGFycikge1xyXG5cclxuICByZXR1cm4gbmV3IFByb2plY3QoLi4uYXJyKTtcclxufVxyXG5cclxuLy8gQ2hlY2sgQXJyYXkgSXRlbVxyXG5mdW5jdGlvbiBmaWx0ZXJBKGFycikge1xyXG4gcmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuICByZXR1cm4gaXRlbSAhPT0gJycgJiYgaXRlbSAhPT0gbnVsbDtcclxuIH0pXHJcbn1cclxuXHJcbi8vIEZpbHRlciBPYmplY3QgXHJcbmZ1bmN0aW9uIGZpbHRlck8oYXJyTywgb2JqKSB7XHJcbiAgY29uc3QgYXJyID0gW107XHJcbiAgYXJyTy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgY29uc29sZS5sb2cob2JqW2l0ZW1dKTtcclxuICAgIGlmICh0eXBlb2Ygb2JqW2l0ZW1dICE9PSAndW5kZWZpbmVkJyAgJiYgb2JqW2l0ZW1dICE9PSAnJykge1xyXG4gICAgICBhcnIucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coYXJyKTtcclxuICByZXR1cm4gYXJyO1xyXG59XHJcblxyXG4vLyBNZW51c0RhdGEgVXBkYXRlXHJcbmZ1bmN0aW9uIHVwZGF0ZU1lbnVzRGF0YShtZW51VXBkYXRlZCkge1xyXG4gIG1lbnVzRGF0YS5sZW5ndGggPSAwO1xyXG4gIHJldHVybiBtZW51c0RhdGEuc3BsaWNlKDAsIDAsIC4uLm1lbnVVcGRhdGVkKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIENvbnRlbnQgRGF0YVxyXG5jb25zdCBpbml0aWFsRHVlRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IGluaXRpYWxEYXRlID0gaW5pdGlhbER1ZURhdGUuZ2V0RGF0ZSgpO1xyXG5jb25zdCBpbml0aWFsTW9udGggPSBpbml0aWFsRHVlRGF0ZS5nZXRNb250aCgpICsgMTtcclxuY29uc3QgaW5pdGlhbFllYXIgPSBpbml0aWFsRHVlRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuLy8gSW5pdGlhbCBUb2RheSBDb250ZW50XHJcbmNvbnN0IGluaXRpYWxUb2RheUNvbnRlbnQgPSBuZXdQcm9qZWN0KFsnTW9ybmluZyBSb3RpbmUgMScsICdXaGF0IGkgd2lsbCBkbyBpbiB0aGUgbW9ybmluZy4nLCBgJHtpbml0aWFsWWVhcn0tJHtpbml0aWFsTW9udGh9LSR7aW5pdGlhbERhdGV9YCwgJ3ByaW9yaXRpemVkJywgJ1dha2luZyB1cCwgQnJ1c2hpbmcgb2ZmIHRlZXRoLCBNZWRpdGF0aW5nLCBDbGVhbmluZyBiZWQsIFRha2UgYSBiYXRoLicsIHRydWUsICdUb2RheScgXSk7XHJcblxyXG5jb25zdCBpbml0aWFsVG9kYXlDb250ZW50MiA9IG5ld1Byb2plY3QoWydNb3JuaW5nIFJvdXRpbmUgMicsICdIZWxsby4uLicsIGAke2luaXRpYWxZZWFyfS0ke2luaXRpYWxNb250aH0tJHtpbml0aWFsRGF0ZSArIDF9YCwgJ3ByaW9yaXRpemVkJywgJ1dha2luZyB1cCwgQnJ1c2hpbmcgb2ZmIHRlZXRoLCBNZWRpdGF0aW5nLCBDbGVhbmluZyBiZWQsIFRha2UgYSBiYXRoLicsIHRydWUsICdUb2RheScgXSk7XHJcblxyXG5jb25zdCBpbml0aWFsVG9kYXlDb250ZW50MyA9IG5ld1Byb2plY3QoWydNb3JuaW5nIFJvdXRpbmUgMycsICdIZWxsby4uLicsIGAke2luaXRpYWxZZWFyfS0ke2luaXRpYWxNb250aH0tJHtpbml0aWFsRGF0ZSArIDJ9YCwgJ3ByaW9yaXRpemVkJywgJ1dha2luZyB1cCwgQnJ1c2hpbmcgb2ZmIHRlZXRoLCBNZWRpdGF0aW5nLCBDbGVhbmluZyBiZWQsIFRha2UgYSBiYXRoLicsIHRydWUsICdUb2RheScgXSk7XHJcblxyXG5jb25zdCBpbml0aWFsVG9kYXlDb250ZW50NCA9IG5ld1Byb2plY3QoWydNb3JuaW5nIFJvdXRpbmUgNCcsICdIZWxsby4uLicsIGAke2luaXRpYWxZZWFyfS0ke2luaXRpYWxNb250aH0tJHtpbml0aWFsRGF0ZSArIDN9YCwgJ3ByaW9yaXRpemVkJywgJ1dha2luZyB1cCwgQnJ1c2hpbmcgb2ZmIHRlZXRoLCBNZWRpdGF0aW5nLCBDbGVhbmluZyBiZWQsIFRha2UgYSBiYXRoLicsIHRydWUsICdUb2RheScgXSk7XHJcblxyXG5jb25zdCB0b2RheUNvbnRlbnREYXRhID0gW1xyXG4gIGluaXRpYWxUb2RheUNvbnRlbnQsIGluaXRpYWxUb2RheUNvbnRlbnQyLCBpbml0aWFsVG9kYXlDb250ZW50MywgaW5pdGlhbFRvZGF5Q29udGVudDRcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldFRvZGF5Q0QoKSB7XHJcbiAgcmV0dXJuIHRvZGF5Q29udGVudERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbFRvZGF5Q0QoKSB7XHJcbiAgdG9kYXlDb250ZW50RGF0YS5sZW5ndGggPSAwO1xyXG4gIGNvbnNvbGUubG9nKHRvZGF5Q29udGVudERhdGEpO1xyXG59XHJcblxyXG4vLyBJbml0aWFsIEVuZ2xpc2ggTGVhcm5pbmcgQ29udGVudFxyXG5jb25zdCBpbml0aWFsRUxDb250ZW50ID0gbmV3UHJvamVjdChbJ0VuZ2xpc2ggRGF5IDEnLCAnRGF5IDEgb24gbXkgam91cm5leSBpbiBsZWFybmluZyBFbmdsaXNoLicsIGAke2luaXRpYWxZZWFyfS0ke2luaXRpYWxNb250aH0tJHtpbml0aWFsRGF0ZX1gLCAncHJpb3JpdGl6ZWQnLCAnUHJvbm91bnMsIFByZXBvc2l0aW9uLCBBZHZlcmIuJywgdHJ1ZSwgJ0VuZ2xpc2hfTGVhcm5pbmcnIF0pO1xyXG5cclxuY29uc3QgaW5pdGlhbEVMQ29udGVudDIgPSBuZXdQcm9qZWN0KFsnRW5nbGlzaCBEYXkgMicsICdUaGlzIG15IGRheSAyIGxlYXJuaW5nIEVuZ2xpc2guJywgYCR7aW5pdGlhbFllYXJ9LSR7aW5pdGlhbE1vbnRofS0ke2luaXRpYWxEYXRlICsgMX1gLCAncHJpb3JpdGl6ZWQnLCAnRXhwcmVzc2lvbnMsIFNpbXBsZSBDb252ZXJzYXRpb24sIFNpbXBsZSBUZW5zZS4nLCB0cnVlLCAnRW5nbGlzaF9MZWFybmluZycgXSk7XHJcblxyXG5jb25zdCBpbml0aWFsRUxDb250ZW50MyA9IG5ld1Byb2plY3QoWydFbmdsaXNoIERheSAzJywgJ015IGRheSAzIGxlYXJuaW5nIEVuZ2xpc2loLicsIGAke2luaXRpYWxZZWFyfS0ke2luaXRpYWxNb250aH0tJHtpbml0aWFsRGF0ZSArIDJ9YCwgJ3ByaW9yaXRpemVkJywgJ1NpbXBsZSBQYXN0LCBTaW1wbGUgU3RvcnksIERhaWx5IEV4cHJlc3Npb25zLicsIHRydWUsICdFbmdsaXNoX0xlYXJuaW5nJyBdKTtcclxuXHJcbmNvbnN0IGluaXRpYWxFTENvbnRlbnQ0ID0gbmV3UHJvamVjdChbJ0VuZ2xpc2ggRGF5IDQnLCAnTXkgZGF5IDQgbGVhcm5pbmcgRW5nbGlzaC4nLCBgJHtpbml0aWFsWWVhcn0tJHtpbml0aWFsTW9udGh9LSR7aW5pdGlhbERhdGUgKyAzfWAsICdwcmlvcml0aXplZCcsICdTaW1wbGUgRnV0dXJlLCBTaW1wbGUgRGlhbG9nLCBCYXNpYyBQaHJhc2FsIFZlcmIuJywgdHJ1ZSwgJ0VuZ2xpc2hfTGVhcm5pbmcnXSk7XHJcblxyXG5jb25zdCBFTENvbnRlbnREYXRhID0gW1xyXG4gIGluaXRpYWxFTENvbnRlbnQsIGluaXRpYWxFTENvbnRlbnQyLCBpbml0aWFsRUxDb250ZW50MywgaW5pdGlhbEVMQ29udGVudDRcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGdldEVMQ0QoKSB7XHJcbiAgcmV0dXJuIEVMQ29udGVudERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbEVMQ0QoKSB7XHJcbiAgRUxDb250ZW50RGF0YS5sZW5ndGggPSAwO1xyXG4gIGNvbnNvbGUubG9nKEVMQ29udGVudERhdGEpO1xyXG59XHJcblxyXG4vLyBJbml0aWFsIE9kaW4gUHJvamVjdCBMZWFybmluZyBDb250ZW50XHJcbmNvbnN0IGluaXRpYWxPUExDb250ZW50ID0gbmV3UHJvamVjdChbJ01vbnRoIDE6IEhUTUwnLCAnTGVhcm5pbmcgSFRNTCBmb3IgYmFzaWMgZG9jdW1lbnQgd3JpdGluZyBmb3Igd2Vic2l0ZS4nLCBgJHtpbml0aWFsWWVhcn0tJHtpbml0aWFsTW9udGh9LSR7aW5pdGlhbERhdGV9YCwgJ3ByaW9yaXRpemVkJywgJ0hUTUwgYmFzaWM6IHRhZ3MsIGF0dHJpYnV0ZSwgY2xhc3MsIGlkLCBldGMuLicsIHRydWUsICdPZGluX1Byb2plY3RfTGVhcm5pbmcnIF0pO1xyXG5cclxuY29uc3QgaW5pdGlhbE9QTENvbnRlbnQyID0gbmV3UHJvamVjdChbJ01vbnRoIDI6IENTUycsICdDU1MgZm9yIHN0eWxpbmcgdGhlIEhUTUwgZG9jdW1lbnQuJywgYCR7aW5pdGlhbFllYXJ9LSR7aW5pdGlhbE1vbnRofS0ke2luaXRpYWxEYXRlICsgMX1gLCAncHJpb3JpdGl6ZWQnLCAnQ1NTIGJhc2ljOiBzZWxlY3RvciwgcHJvcGVydGllcywgZXRjLi4nLCB0cnVlLCAnT2Rpbl9Qcm9qZWN0X0xlYXJuaW5nJyBdKTtcclxuXHJcbmNvbnN0IGluaXRpYWxPUExDb250ZW50MyA9IG5ld1Byb2plY3QoWydNb250aCAzOiBKYXZhU2NyaXB0JywgJ0phdmFTY3JpcHQgZm9yIG1hbmlwdWxhdGluZyBET00gYW5kIGFub3RoZXIgbG9naWMgYW5kIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHdlYi4nLCBgJHtpbml0aWFsWWVhcn0tJHtpbml0aWFsTW9udGh9LSR7aW5pdGlhbERhdGUgKyAyfWAsICdwcmlvcml0aXplZCcsICdCYXNpYyBKYXZhU2NyaXB0OiB2YXJpYWJsZSwgbnVtYmVyLCBzdHJpbmcsIG9iamVjdCwgYXJyYXksIGZ1bmN0aW9uLCBldGMuLicsIHRydWUsICdvZGluX3Byb2plY3RfbGVhcm5pbmcnIF0pO1xyXG5cclxuY29uc3QgaW5pdGlhbE9QTENvbnRlbnQ0ID0gbmV3UHJvamVjdChbJ01vbnRoIDQ6IFJlYWN0JywgJ1JlYWN0IGZvciBmcmFtZXdvcmsgYW5kIGVhc3kgd2F5IHRvIGRldmVsb3Agd2ViLicsIGAke2luaXRpYWxZZWFyfS0ke2luaXRpYWxNb250aH0tJHtpbml0aWFsRGF0ZSArIDN9YCwgJ3ByaW9yaXRpemVkJywgJ1JlYWN0IEJhc2ljJywgdHJ1ZSwgJ09kaW5fUHJvamVjdF9MZWFybmluZycgXSk7XHJcblxyXG5jb25zdCBPUExDb250ZW50RGF0YSA9IFtcclxuICBpbml0aWFsT1BMQ29udGVudCwgaW5pdGlhbE9QTENvbnRlbnQyLCBpbml0aWFsT1BMQ29udGVudDMsIGluaXRpYWxPUExDb250ZW50NFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gZ2V0T1BMQ0QoKSB7XHJcbiAgcmV0dXJuIE9QTENvbnRlbnREYXRhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxPUExDRCgpIHtcclxuICBPUExDb250ZW50RGF0YS5sZW5ndGggPSAwO1xyXG4gIGNvbnNvbGUubG9nKE9QTENvbnRlbnREYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbWVudXNEYXRhLCBtYXBNRFRvRGl2LCBpbk1ELCB0ZXN0aW5nLCBuZXdQcm9qZWN0LCBmaWx0ZXJBLCBmaWx0ZXJPLCB1cGRhdGVNZW51c0RhdGEsIGdldFRvZGF5Q0QsIGRlbFRvZGF5Q0QsIGdldEVMQ0QsIGRlbEVMQ0QsIGdldE9QTENELCBkZWxPUExDRCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==