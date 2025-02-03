import { createEl, accesElement, addHTML, addElement } from './dom.js';

export function activateFooter() {
  const body = accesElement('body', 1);

  const footer = createEl('footer', '#footer');
  addHTML(footer, `

    <div id='author'>
      <a href='https://w-ud.github.io/the-odin-project-tasks/projects/project-todo-list/todo-list/dist/index.html' target='_blank'>W-UD</a>
    </div>

    <div id='project-code'>This Project Code on <a href='https://github.com/W-UD/the-odin-project-tasks/tree/main/projects/project-todo-list/todo-list/' target='_blank'>here</a>.</div>

    <div id='study-review'>This my task on The Odin Project to understand how Webpack is used through my project. Still lacking on how clean i write it, but i now kind of get how it works.</div>

    <div id='resources-container'>
      <a id='resources' href='https://github.com/W-UD/the-odin-project-tasks/blob/main/projects/project-todo-list/todo-list/src/icon/icon-details.md' target='_blank'>Resources</a>
    </div> 

  `);

  addElement(footer, body);
}