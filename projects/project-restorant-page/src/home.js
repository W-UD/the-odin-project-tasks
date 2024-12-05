const elementsArray = [
  {
    el: 'div',
    id: 'welcome',
    text: 'Welcome To My Restorant Page'
  },

  {
    el: 'p',
    id: 'description',
    text: 'This is a page for doing my Odin Learning Path.'
  },

  {
    el: 'p',
    id: undefined,
    text: 'See some menu below:'
  },

  {
    el: 'div',
    id: 'list-menu-img',
    text: '',
    child: ['div', 6, 'menu-img']
  }
]

// IMAGES FROM ASSET
function importAll(listIMG) {
  let images = {};

  listIMG.keys().map((item, index) => { 
    // console.log(item);
    // console.log(listIMG(item));

    images[item.replace('./', '').split('-')[0]] = listIMG(item); 
  });
  return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

console.log(images);
console.log(Object.keys(images));

// -------------------------------------------

// CONTENT CHILD
function activateContent(content) {

  elementsArray.forEach((item, index, array) => {
    const el = document.createElement(item.el);
    el.innerText = item.text;
    
    
    if (item.id !== undefined) {
      el.setAttribute('id', item.id);
    }
    
    if (item.hasOwnProperty('child')) {
      for (let i = 0; i < item.child[1]; i++) {
        const child = document.createElement(item.child[0]);
        child.classList.add(item.child[2]);
        el.appendChild(child);
      }
    }
    
    content.appendChild(el);
    
  });

  // List-menu images
  const listMenu = document.querySelectorAll('.menu-img');
  const listImgKeys = Object.keys(images);

  listMenu.forEach((item, i) => {
    // Get images keys

    // create list of imgs
    const menuImg = document.createElement('img');

    item.appendChild(menuImg)
    menuImg.src = images[listImgKeys[i]]
  });

}

// ----------------------------------------------

// Contact and Link
const footer = document.querySelector('footer');
const contactButton = document.getElementById('contact-button');
const linkButton = document.getElementById('link-button');

const footerArray = ['contact-link', 'link-button']
let contactLink = 'non-active';

// activate contact-link dialog
function activateContactLink() {

  if (contactLink === 'active') {
    footer.removeChild(document.getElementById('contact-link'));
    contactLink ='non-active'
    return;
  }
  const newElement =document.createElement('p');
  newElement.id = 'contact-link';
  newElement.innerHTML = `
    <div>Contact</div>
    <div>
    my github link: <a href=''>This is my github Link<a/>
    </div>
    <div class='close'><button'>x</button></div>
  `
  contactLink = 'active'
  footer.insertBefore(newElement, footer.childNodes[0]);

  // Close button for contact link modal
  if (contactLink === 'active') {
    // const close = document.getElementById('contact-link');
    const x = document.querySelector('.close');
    x.addEventListener('click', () => {
      footer.removeChild(newElement);

      contactLink = 'non-active';
    });
  
  }

}

contactButton.addEventListener('click', activateContactLink);

linkButton.addEventListener('click', activateContactLink);


export { activateContent };