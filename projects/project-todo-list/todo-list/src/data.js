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

export { menusData, mapMDToDiv, inMD, testing, newProject, filterA, filterO, updateMenusData, getTodayCD, delTodayCD, getELCD, delELCD, getOPLCD, delOPLCD };