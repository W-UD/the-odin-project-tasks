const gridContainer = document.querySelector('#grid-container');
const gridNumbers = 5;
const gridContainer_width = 600;
const gridContainer_height = 600;

gridContainer.setAttribute('style', 
  `max-width: ${gridContainer_width}px; 
  height: ${gridContainer_height}px; 
  backgroud-color: gray; 
  border: 1px solid black; 
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
  box.setAttribute('style', 
  `width: ${gridContainer_width / gridNumbers}px; 
  height: 100%; 
  border: 1px solid black; 
  flex: 1;
  display: flex;
  flex-direction: column;
  `);
  box.classList.add('box');
});


const box = document.querySelectorAll('.box');

box.forEach((boxIn) => {
  for (let grid = 1; grid <= gridNumbers; grid++) {
    const createdElement = document.createElement('div');
    boxIn.appendChild(createdElement);
  }
});

const boxIn = document.querySelectorAll('.box > div');

boxIn.forEach((box) => {
  box.setAttribute('style', 
  `width: 100%; 
  height: 100%; 
  border: 1px solid black; 
  flex: 1;
  `);
});
