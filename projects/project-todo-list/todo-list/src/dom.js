import { LS } from "./local-storage";

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




export {createEl, addElement, addMulElement, containCls, addClass, removeClass, toggleClass, addId, addMulId, addAtr, addChild_of_ElArr, accesElement, checkCI, createMulEl, addMulText, addHTML, getInnerText, emptyEl, addChild, fChild, addCls_childNodes, getChild, addElis, addPlaceholder, showForm, clsForm, shiftArrP, findPosition, addMulEl_Cls, addDataSet, changeObjectData };