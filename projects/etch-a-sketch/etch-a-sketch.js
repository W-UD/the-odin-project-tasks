const descriptionButton = document.querySelector('#description-button');
const descriptions = document.querySelector('#descriptions');
const addBoxesButton = document.querySelector('#add-boxes');
const gridContainer = document.querySelector('#grid-container');
const randomColorButton = document.querySelector('#to-randomize-color');
const makeDarkerButton = document.querySelector('#make-darker');

descriptions.style.display = 'none'
let description = false;

let gridNumbers = 5;
const gridContainer_width = 600;
const gridContainer_height = 600;
let randomClicked = false;
let darkerClicked = false;

descriptionButton.addEventListener('click', () => {
  if (!description) {
    descriptionButton.textContent = "Descriptions: on";
    descriptionButton.classList.add('clicked');
    description = true;
    descriptions.style.display = '';
  }
  else if (description) {
    descriptionButton.textContent = "Descriptions: click to display";
    descriptionButton.classList.remove('clicked');
    description = false;
    descriptions.style.display = 'none';
  }
});

addBoxesButton.addEventListener('click', () => {
  const userInput = parseInt(prompt('Enter number of boxes you want..'));
  if (isNaN(userInput)) {
    alert('You entered not a number. Please try it again');
    return;
  }
  else if (userInput < 1 || userInput > 100) {
    alert('You entered a number that are not 1 to 100. please enter again');
    return;
  }
  else {
    gridNumbers = userInput;
  //gridContainer.innerHTML = '';
  //gridContainer.replaceChildren();
    }
    while(gridContainer.firstChild) {
      gridContainer.firstChild.remove();
  }
  activateGrid();
});


function activateGrid() {
  gridContainer.setAttribute('style', `
    max-width: ${gridContainer_width}px; 
    height: ${gridContainer_height}px; 
    backgroud-color: gray; 
    border: 1px solid gray; 
    box-sixing: border-box; 
    padding: 0;
    display: flex;
    margin: 0 auto;
  `);


  for (let grid = 1; grid <= gridNumbers; grid++) {
    const createdElement = document.createElement('div');
    gridContainer.appendChild(createdElement);
  }

  const gridContainerChild = document.querySelectorAll('#grid-container > div');

  gridContainerChild.forEach((gCChild) => {
    gCChild.setAttribute('style', `
      width: ${gridContainer_width / gridNumbers}px; 
      height: 100%; 
      border: 1px solid gray; 
      flex: 1;
      display: flex;
      flex-direction: column;
    `);
    gCChild.classList.add('box');
  });


  const boxes = document.querySelectorAll('.box');

  boxes.forEach((boxIn) => {
    for (let grid = 1; grid <= gridNumbers; grid++) {
      const createdElement = document.createElement('div');
      boxIn.appendChild(createdElement);
    }
  });

  const boxIn = document.querySelectorAll('.box > div');

  boxIn.forEach((box) => {
    box.setAttribute('style', `
      width: 100%; 
      height: 100%; 
      border: 1px solid gray; 
      flex: 1;
    `);
    box.setAttribute('class','box-child');
  });

  const boxChild = document.querySelectorAll('.box-child');

  boxChild.forEach((child) => {
    child.style.backgroundColor = 'pink';
    child.addEventListener('mouseover', () => {
      child.style.backgroundColor = 'blue';
      //why set attribute here didnt work
      //child.setAttribute('style', 'background-color: red');
    });
    
    child.addEventListener('mouseout', (e) => {
      
      if(e.target.style.backgroundColor === 'blue') {
        child.style.backgroundColor = 'pink';
        //child.setAttribute('style', 'background-color: blue');
      }
    });

  });

  randomColorButton.addEventListener('click', (e) => {
    if (randomClicked === false) {
      disableMakeDarker(boxChild);
      console.log(randomClicked);
      const clicked = randomColorButton.classList.add('clicked');
      randomColorButton.textContent = 'Random Color: on'
      
      randomClicked = true;
      console.log(randomClicked);

      boxChild.forEach((child) => {
        child.addEventListener('click', getRandomColor);
      });
    }

    else {
     disabledRandomColor(boxChild);
    }
  });

  makeDarkerButton.addEventListener('click', () =>{
    makeDarker(boxChild);
  });

}

//Random Color Function
function getRandomColor (e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const targetColor = e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function disabledRandomColor(boxChild) {
  const clicked = randomColorButton.classList.remove('clicked');
    randomColorButton.textContent = 'Random Color: disabled'
    boxChild.forEach((child) => {
      child.removeEventListener('click', getRandomColor);
    });
    randomClicked = false;
}

//Make Darker Function
function makeDarker(boxChild) {
  if (darkerClicked === false) {
    disabledRandomColor(boxChild);
    makeDarkerButton.textContent = "Make Darker: on";
    const clicked = makeDarkerButton.classList.add('clicked');
    darkerClicked = true;

    boxChild.forEach((child) => {
      console.log('darker')
  
      child.addEventListener('click', activateMakeDarker);
    });
  }
  else {
    disableMakeDarker(boxChild);
  }
  
}

let r = 251;
let g = 16;
let b = 55;
function activateMakeDarker(e) {
  if ((r < 30) && (g < 30) && (b < 30)) {
    r = 251;
    g = 16;
    b = 55;
    console.log('test');
  }
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  r = r - (Math.floor(r * 10 / 100));
  g = g - (Math.floor(g * 10 / 100));
  b = b - (Math.floor(b * 10 / 100));
  console.log(r, g, b);
}

function disableMakeDarker(boxChild) {
  makeDarkerButton.textContent = "Make Darker: disabled";
    boxChild.forEach((child) => {
      console.log('darker')
  
      child.removeEventListener('click', activateMakeDarker);
      makeDarkerButton.classList.remove('clicked');
    });
    darkerClicked = false;
}

activateGrid();

//randomize box color