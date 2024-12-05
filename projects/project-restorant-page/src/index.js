import { activateContent } from "./home";
import { activateMenu } from "./menu";
import { activateAboutContent } from "./about";
import "./styles.css";

// ------------------------------------------

// NAV
const nav = document.getElementById('nav');

Array.from(nav.children).forEach(button => {
  button.id = button.innerText.toLowerCase();
  button.classList.add('nav-buttons');
});

// button
const buttons = document.querySelectorAll('.nav-buttons');

const content = document.getElementById('content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'menu') {
      content.innerHTML = '';
      return activateMenu(content);
    }
    else if (button.id === 'home') {
      content.innerHTML = '';
      return activateContent(content);
    }
    
    else if (button.id === 'about') {
      content.innerHTML = '';
      return activateAboutContent(content);
    }

  })
});

// Initial Content
activateContent(content);
