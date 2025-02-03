import { accesElement } from "./dom"


function changeTodoConPad() {
  const titleContainer = accesElement('#title-container', 1);
  const navContainer = accesElement('#nav-container', 1);
  const todoContainer = accesElement('#todo-container', 1);

  const todoContainerMargin = navContainer.offsetHeight + titleContainer.offsetHeight;

  todoContainer.style.paddingTop = `${todoContainerMargin}px`;
  console.log(todoContainerMargin);
}

export { changeTodoConPad };
