
function add(one, two) {
  return one + two;
}
function substract(one, two) {
  return one - two;
}

function multiply(one, two) {
  return one * two;
}

function devide(one, two) {
  return one / two;
}

console.log(add(1, 2));
console.log(substract(1, 2));
console.log(multiply(1, 2));
console.log(devide(1, 2));

let firsNumber = 0;
let secondNumber = 0;
let operator = '';
let operationSign = 0;
let decimalEntered = false;

function operate(firsNumber, operator, secondNumber) {
  if (operator === '+') {
    return add(firsNumber, secondNumber);
  } else if (operator === '-') {
    return substract(firsNumber, secondNumber);
  } else if (operator === '*') {
    return multiply(firsNumber, secondNumber);
  } else if (operator === '/') {
    return devide(firsNumber, secondNumber);
  }
}

//console.log(operate(firsNumber, secondNumber, operator));

//Button Access
const numButton = document.querySelectorAll('.num-button');
const numButtonDisplay = document.querySelector('.num-button-display');

const equalButton = document.querySelector('#equal-button');
const operatorButton = document.querySelectorAll('.operator-button');
const clearButton = document.querySelector('#clear-button');

const floatButton = document.querySelector('#float-button');
const backspaceButton = document.querySelector('#backspace-button');


let displayValueB = '';

//Input Display
function displayButton(button) { 
  button.addEventListener('click', () => {
    if (displayValueB === '' || displayValueB === '0') {
      
      if (button.textContent === '+' || button.textContent === '/' || button.textContent === '*') {
        
        displayValueB = '';
        operationSign = 0;

      } else if (button.textContent === '.') {
        displayValueB = `${button.textContent}`;
        decimalEntered = true;

      } else {
        displayValueB = `${button.textContent}`;
        operationSign = 0;

      }

    } else if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {
      //working on
      if (operationSign === 0) {
        displayValueB +=  ` ${button.textContent} `;
        operationSign = 1;

      } else if (operationSign === 1) {
        equalButtonActivate(button);
        operationSign = 1;
      }

    } else  if (button.textContent === '.') {
      console.log('this is dot');
      let displayValueBArray = displayValueB.split(' ');
      if (decimalEntered) {

        if (displayValueBArray.length === 3) {

          if (displayValueBArray[2].includes('.')) {
            decimalEntered = true;
          } else {
            displayValueB += `${button.textContent}`;
            decimalEntered = true;
          }

        }
        //displayValueB += floatButton.textContent;
        numButtonDisplay.textContent = `${displayValueB}`;
        return;
      }

      if (!decimalEntered) {

        displayValueB += floatButton.textContent;
        numButtonDisplay.textContent = `${displayValueB}`;
        decimalEntered = true;
      }

    } else {
      displayValueB +=  `${button.textContent}`;
    }

    numButtonDisplay.textContent = displayValueB;
  });
}

//Display the button textContent when clicked
numButton.forEach((button) => displayButton(button));

operatorButton.forEach(button => displayButton(button));

clearButton.addEventListener('click', () => equalButtonActivate(clearButton));

equalButton.addEventListener('click', () => {
  return equalButtonActivate(equalButton);
});

floatButton.addEventListener('click', displayButton(floatButton) );

//BACKSPACE
backspaceButton.addEventListener('click', () => {
  let displayValueBArray = displayValueB.split(' ');
  if (displayValueBArray.length === 3) {

    if (displayValueBArray[2] === '') {
      displayValueBArray.splice(1, 2);
      displayValueB = displayValueBArray.join(' ');
      operationSign = 0;

    } else {
      displayValueB = displayValueBArray.join(' ');

      displayValueB = displayValueB.slice(0, displayValueB.length - 1);

      operationSign = 0;
      
    }

  } else {
    displayValueB = displayValueBArray.join(' ');

    displayValueB = displayValueB.slice(0, displayValueB.length - 1);

    operationSign = 0;
  }

  numButtonDisplay.textContent = displayValueB;
});

//Activate EqualButton function to also be used on another buttons of operation
function equalButtonActivate(button) {
  let arrayNum = [];
  let splitDisplayValueB = displayValueB.split(' ');

  console.log(splitDisplayValueB);
  console.log(Array.isArray(splitDisplayValueB));

  splitDisplayValueB.forEach((item) => {
    const number = Number(item);
    console.log(number);

    if (!isNaN(number)) {
      arrayNum.push(number);
    } else {
      arrayNum.push(item);
    }
    console.log(arrayNum);
  });

  //arrayNum = [];
  function getOperating() {
    if (button.textContent === '=') {
      numButtonDisplay.textContent = operate(arrayNum[0], arrayNum[1], arrayNum[2]);
      displayValueB = numButtonDisplay.textContent;
      
    } else if (button.textContent === 'clear') {
      numButtonDisplay.textContent = '';
      displayValueB = numButtonDisplay.textContent;
      decimalEntered = false;


    } else if (button.textContent === '*' || button.textContent === '/' || button.textContent === '-' | button.textContent === '+') {
      
      let displayValueBArray = displayValueB.split(' ');
      if (displayValueBArray[2] === '') {

        numButtonDisplay.textContent = displayValueBArray[0] + ' ' + button.textContent + ' ';
        displayValueB = numButtonDisplay.textContent;

      } else {
        numButtonDisplay.textContent = operate(arrayNum[0], arrayNum[1], arrayNum[2]) + ' ' + button.textContent + ' ';
        displayValueB = numButtonDisplay.textContent;
        
      }

    } else {
      numButtonDisplay.textContent = operate(arrayNum[0], arrayNum[1], arrayNum[2]) + ' ' + button.textContent + ' ';
      displayValueB = numButtonDisplay.textContent;

    }
  }
    
  if (arrayNum[1] === '+') {
    getOperating();
    
  } else if (arrayNum[1] === '/') {
    getOperating();
    
  } else if (arrayNum[1] === '*') {
    getOperating();
    
  } else if (arrayNum[1] === '-') {
    getOperating();
  }

  if (button.textContent === 'clear') {
    getOperating();
  }
  
  operationSign = 0;
  console.log(arrayNum)
  console.log(displayValueB.includes('.'));

  if (displayValueB.includes('.')) {
    decimalEntered = 1;
  }
  else {
    decimalEntered = 0;
  }
  //decimalEntered = false;
}

//---------------------------------------------------------
//Negatif number first is being working on