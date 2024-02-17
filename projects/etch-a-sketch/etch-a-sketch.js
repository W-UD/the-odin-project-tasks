const addBoxesButton = document.querySelector('#add-boxes');
const gridContainer = document.querySelector('#grid-container');

let gridNumbers = 5;
const gridContainer_width = 600;
const gridContainer_height = 600;
let randomClicked = false;

addBoxesButton.addEventListener('click', () => {
  const userInput = parseInt(prompt('Enter number of boxes you want..'));
  if (userInput < 1 || userInput > 100) {
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

  const gridBoxes = document.querySelectorAll('#grid-container > div');
  gridBoxes.forEach((box) => {
    box.setAttribute('style', `
      width: ${gridContainer_width / gridNumbers}px; 
      height: 100%; 
      border: 1px solid gray; 
      flex: 1;
      display: flex;
      flex-direction: column;
    `);
    box.classList.add('box');
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

  const randomColorButton = document.querySelector('#to-randomize-color');
  randomColorButton.addEventListener('click', (e) => {
    if (randomClicked === false) {
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
      const clicked = randomColorButton.classList.remove('clicked');
      randomColorButton.textContent = 'Random Color: disabled'
      boxChild.forEach((child) => {
        child.removeEventListener('click', getRandomColor);
      });
      randomClicked = false;
    }
  });

  const makeDarkerButton = document.querySelector('#make-darker');
  makeDarkerButton.addEventListener('click', () =>{
    makeDarker(boxChild);
  });

}

function getRandomColor (e) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const targetColor = e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


function makeDarker(boxChild) {
  console.log('darker');
  let r = 251;
  let g = 16;
  let b = 55;

  if (r <= 0 && g <= 0 && b <= 0) {
    r = 251;
    g = 16;
    b = 55;
  }
  boxChild.forEach((child) => {
    console.log('darker')
     
    child.addEventListener('click', (e) => {
      e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      r = r - (Math.floor(r * 10 / 100));
      g = g - (Math.floor(r * 10 / 100));
      b = r - (Math.floor(r * 10 / 100));
    });
  });
}

activateGrid();

//randomize box color




