const addBoxes = document.querySelector('#add-boxes');
const gridContainer  = document.querySelector('#grid-container');

let numberOfBoxes = 5;

//
addBoxes.addEventListener('click', () => {
  const input = parseInt(prompt('Enter a number'));
  numberOfBoxes = input;
  
  get_gridContainerChild();
});

 //make boxes in a grid
 for (let box = 0; box <= numberOfBoxes; box++) {
  const createChild = document.createElement('div');
  gridContainer.appendChild(createChild);
}

function get_gridContainerChild() {
  const gridContainerChild = document.querySelectorAll('#grid-container > div');
  console.log(numberOfBoxes);

  gridContainerChild.forEach((child) => {
    child.classList.add('grid-container-child');
  });
}
get_gridContainerChild();


