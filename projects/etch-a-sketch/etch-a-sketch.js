const addBoxes = document.querySelector('#add-boxes');
const gridContainer  = document.querySelector('#grid-container');

const randomColorButtoon = document.querySelector('#to-randomize-color');

let randomColorInfo = 'off';
let numberOfBoxes = 5;

//Add Number of Boxes
addBoxes.addEventListener('click', () => {
  const input = parseInt(prompt('Enter a number'));
  numberOfBoxes = input;
  const grandChild =  document.querySelectorAll('.grid-container-child > div');
  activateRandomColor(grandChild);
  
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
  grandChild.forEach((grandChild) => {
    grandChild.classList.add('grand-child');
  })
  console.log(gridContainerChild);

  //random color
  activateRandomColor(grandChild);

}

get_gridContainerChild();

////////////////////////////////////////////////
//Random Color
//Activate Random Color
function activateRandomColor(grandChild) {
  randomColorButtoon.addEventListener('click', () => {
  
    if (randomColorInfo === 'off') {
      randomColorButtoon.textContent = 'Random Color: On';
      randomColorButtoon.style.cssText = 'color: white; background: rgb(59, 59, 226);';
      randomColorInfo = 'on';

      grandChild.forEach((gcChild) => {
        gcChild.addEventListener('click', GrandChildRM);
      });
    }
    else if (randomColorInfo === 'on') {
      randomColorButtoon.textContent = 'Random Color: disabled';
      randomColorButtoon.style.cssText = 'color: black; background: white;';
      randomColorInfo = 'off';
      grandChild.forEach((gcChild) => {
        gcChild.removeEventListener('click', GrandChildRM);
      });
    }
  });
}

//GrandChild EventListenr Function
function GrandChildRM(e) {
  e.target.style.backgroundColor = 'blue';
}