import { createEl, accesElement, addHTML, addElement } from './dom.js';

export function activateFooter() {
  const body = accesElement('body', 1);

  const footer = createEl('footer', '#footer');
  addHTML(footer, `

    <div id='author'>
      <a>W-UD</a>
    </div>

    <div id='project-code'>This Project Code on <a href='#'>here</a>.</div>

    <div id='study-review'>This my task on The Odin Project to understand how Webpack is used through my project. Still lacking on how clean i write it, but i now kind of get how it works.</div>

    <div id='resources-container'>
      <a id='resources' href='icon/icon-details.md'>Resources</a>
    </div> 

  `);

  addElement(footer, body);
}