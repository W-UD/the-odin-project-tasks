
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

console.log(operate(firsNumber, secondNumber, operator));

//Num Button access
const numButton = document.querySelectorAll('.num-button');
const numButtonDisplay = document.querySelector('.num-button-display');

const equalButton = document.querySelector('#equal-button');
const operatorButton = document.querySelectorAll('.operator-button');
const clearButton = document.querySelector('#clear-button');


let displayValueB = '';

function displayButton(button) { 
  button.addEventListener('click', () => {
    if (displayValueB === '' || displayValueB === '0') {
      
      if (button.textContent === '+' || button.textContent === '/' || button.textContent === '*') {
        
        displayValueB = '';
        operationSign = 0;

      } else {
        displayValueB = `${button.textContent}`;
        operationSign = 0;

      }

    } else if (button.textContent === '+' || button.textContent === '-' || button.textContent === '*' || button.textContent === '/') {

      if (operationSign === 0) {
        displayValueB +=  ` | ${button.textContent} | `;
        operationSign = 1;

      } else if (operationSign === 1) {
        equalButtonActivate(button);
        operationSign = 1;
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

//Equal Button
equalButton.addEventListener('click', () => {
  return equalButtonActivate(equalButton);
 // operationSign = 0;
  
//   let arrayNum = [];
//   let splitDisplayValueB = displayValueB.split(' | ');

//   console.log(splitDisplayValueB);
//   console.log(Array.isArray(splitDisplayValueB));

//   splitDisplayValueB.forEach((item) => {
//     const number = Number(item);
//     console.log(number);

//     if (!isNaN(number)) {
//       arrayNum.push(number);
//     } else {
//       arrayNum.push(item);
//     }
//     console.log(arrayNum);
//   });

//   //arrayNum = [];
//   function getOperating() {
//     numButtonDisplay.textContent = operate(arrayNum[0], arrayNum[1], arrayNum[2]);
//     displayValueB = '';
//   }
  
//   if (arrayNum[1] === '+') {
//     return getOperating();
    
//   } else if (arrayNum[1] === '/') {
//     return getOperating();
    
//   } else if (arrayNum[1] === '*') {
//     return getOperating();
    
//   } else if (arrayNum[1] === '-') {
//     return getOperating();
//   }
  
//   operationSign = 0;
});

//Activate EqualButton function to also be used on another buttons of operation
function equalButtonActivate(button) {
  let arrayNum = [];
  let splitDisplayValueB = displayValueB.split(' | ');

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
      numButtonDisplay.textContent = '0';
      displayValueB = numButtonDisplay.textContent;


    } else if (button.textContent === '*' || button.textContent === '/' || button.textContent === '-' | button.textContent === '+') {
      
      let displayValueBArray = displayValueB.split(' | ');
      if (displayValueBArray[2] === '') {

        numButtonDisplay.textContent = displayValueBArray[0] + ' | ' + button.textContent + ' | ';
        displayValueB = numButtonDisplay.textContent;

      } else {
        numButtonDisplay.textContent = operate(arrayNum[0], arrayNum[1], arrayNum[2]) + ' | ' + button.textContent + ' | ';
        displayValueB = numButtonDisplay.textContent;
        
      }

    } else {
      numButtonDisplay.textContent = operate(arrayNum[0], arrayNum[1], arrayNum[2]) + ' | ' + button.textContent + ' | ';
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
}