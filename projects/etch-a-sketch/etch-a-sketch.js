const addBoxes = document.querySelector('#add-boxes');
const gridContainer  = document.querySelector('#grid-container');

const randomColorButton = document.querySelector('#to-randomize-color');
const makeDarkerButton = document.querySelector('#make-darker');

let randomColorInfo = 'off';
let makeDarkerInfo = 'off';
let numberOfBoxes = 5;

//Add Number of Boxes
addBoxes.addEventListener('click', () => {
  const input = parseInt(prompt('Enter a number'));
  numberOfBoxes = input;
  const grandChild =  document.querySelectorAll('.grid-container-child > div');

  if (randomColorInfo === 'on') {
    randomColorOff(grandChild);
    activateRandomColor(grandChild);
    activateMakeDarker(grandChild);
  }
  else if (makeDarkerInfo === 'on') {
    makeDarkerOff(grandChild);
    activateMakeDarker(grandChild);
    activateMakeDarker(grandChild);
  }
  else {
    activateRandomColor(grandChild);
    activateMakeDarker(grandChild);
  }
  
  while(gridContainer.firstChild) {
    gridContainer.firstChild.remove();
  }
  get_gridContainerChild();
});


function get_gridContainerChild() {
   //make boxes in a grid
  for (let box = 0; box < numberOfBoxes; box++) {
    const createChild = document.createElement('div');
    gridContainer.appendChild(createChild);
  }

  const gridContainerChild = document.querySelectorAll('#grid-container > div');
  console.log(numberOfBoxes);

  gridContainerChild.forEach((child) => {
    child.classList.add('grid-container-child');
  });

  //make box in great container child
  for (let box = 0; box < numberOfBoxes; box++) {
    console.log(gridContainerChild);
    gridContainerChild.forEach((child) => {
      const createChild = document.createElement('div');
      child.appendChild(createChild);
    });
  }

  //GrandChild
  const grandChild = document.querySelectorAll('.grid-container-child > div');
  grandChild.forEach((child) => {
    child.classList.add('grand-child');
  })
  console.log(gridContainerChild);

  //Random Color
  activateRandomColor(grandChild);

  //Make Darker
  activateMakeDarker(grandChild);

}

get_gridContainerChild();

//Random Color
//Random color EventListenr Function
function grandChildRM(e) {
  //Set Up Random Color
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//Activate Random Color
function activateRandomColor(grandChild) {
  randomColorButton.addEventListener('click', () => {
    if (randomColorInfo === 'off') {
      if (makeDarkerInfo === 'on') {
        makeDarkerOff(grandChild);
      }
      randomColorButton.textContent = 'Random Color: On';
      randomColorButton.style.cssText = 'color: white; background: rgb(59, 59, 226);';
      randomColorInfo = 'on';

      grandChild.forEach((child) => {
        child.addEventListener('click', grandChildRM);
      });
    }
    else if (randomColorInfo === 'on') {
      randomColorOff(grandChild);
    }
  });
}


//RandomColor Toggle off
function randomColorOff(grandChild) {
  randomColorButton.textContent = 'Random Color: disabled';
  randomColorButton.style.cssText = 'color: black; background: white;';

  randomColorInfo = 'off';

  grandChild.forEach((gcChild) => {
    gcChild.removeEventListener('click', grandChildRM);
  }); 
}

//-----------//
//Make Darker
//Activate Make Darker
function activateMakeDarker(grandChild) {
  makeDarkerButton.addEventListener('click', () => {
    if (makeDarkerInfo === 'off') {
      if (randomColorInfo === 'on') {
        randomColorOff(grandChild);
      }
      makeDarkerButton.textContent = 'Make Darker: On';
      makeDarkerButton.style.cssText = 'color: white; background: rgb(59, 59, 226);';
      makeDarkerInfo = 'on';

      grandChild.forEach((gcChild) => {
        gcChild.addEventListener('click', grandChildMD);
      });
    }
    else if (makeDarkerInfo === 'on') {
      makeDarkerOff(grandChild);
    }
  });
}

//Grandchild : Make Darker color setting
let r = 210;
let g = 101;
let b = 119;
function grandChildMD(e) {
  
  e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  r = r - ( r * 10 / 100);
  g = g - ( g * 10 / 100);
  b = b - ( b * 10 / 100);

  if ((r < 30) && (g < 30) && (b < 30)) {
    r = 210;
    g = 101;
    b = 119;
  }
}

//Make Darker toggle off
function makeDarkerOff(grandChild) {
  makeDarkerButton.textContent = 'Make Darker: disabled';
  makeDarkerButton.style.cssText = 'color: black; background: white;';

  makeDarkerInfo = 'off';

  grandChild.forEach((child) => {
    child.removeEventListener('click', grandChildMD);
  }); 
}