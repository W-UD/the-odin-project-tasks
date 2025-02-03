import { addMulElement, createEl, addElement, accesElement, addElis, addClass, toggleClass, removeClass, containCls } from "./dom";
import iconMenu from './icon/menu.svg';
import iconXmark from './icon/xmark.svg';

function activateNav() {
    const content = accesElement('#content', 1);

    const navContainer = createEl('div', '#nav-container');
    addElement(navContainer, content);
  
    const showMenusDiv = createEl('div', '#show-menu-div');
    const homeLogo = createEl('div', '#home-logo-div');

    addMulElement([showMenusDiv, homeLogo], navContainer);

    homeLogo.innerHTML = `<div id=home-logo-text>Todo List Project</div>`;
  
    showMenusDiv.innerHTML = `<img src='${iconMenu}' id='show-menu-img' class='nav-logo-img'>`;
    
    addElis(showMenusDiv, () => {
      const header = accesElement('#header', 1);
      const checkClass_showMenus = containCls(header, 'show-menus');
      const checkClass_hideMenus = containCls(header, 'hide-menus');

      if (!checkClass_showMenus && !checkClass_hideMenus) {
        addClass(header, '.hide-menus');
        showMenusDiv.innerHTML = `<img src='${iconXmark}' id='show-menu-img' class='nav-logo-img'>`;
      }
      else if (checkClass_showMenus) {
        removeClass(header, 'show-menus');
        addClass(header, '.hide-menus');
        showMenusDiv.innerHTML = `<img src='${iconXmark}' id='show-menu-img' class='nav-logo-img'>`;

      } else if (checkClass_hideMenus) {
        removeClass(header, 'hide-menus');
        addClass(header, '.show-menus');
        showMenusDiv.innerHTML = `<img src='${iconMenu}' id='show-menu-img' class='nav-logo-img'>`;
      }
  
    });
}

export { activateNav };