document.createElement('h1').innerText = 'About'; 

const about = document.createElement('div');

const aboutContent = document.createElement('p');

const aboutContent2 = document.createElement('div');
aboutContent2.id = 'about-content2'

aboutContent2.innerText = 'The images i used in this task are: '


const imagesArray = [
  {
    artist: '@eejermaine',
    profile: 'https://unsplash.com/@eejermaine',
    imgTitle: 'brown-chips-on-white-ceramic-bowl',
    linkImg: 'https://unsplash.com/photos/brown-chips-on-white-ceramic-bowl-HVjuen9ik-U'
  },

  {
    artist: '@clark_douglas',
    profile: 'https://unsplash.com/@clark_douglas',
    imgTitle: 'a-person-holding-a-tray-of-doughnuts-on-a-sidewall',
    linkImg: 'https://unsplash.com/photos/a-person-holding-a-tray-of-doughnuts-on-a-sidewalk-LmHK7VeCwZ4'
  },

  {
    artist: '@brucetml',
    profile: 'https://unsplash.com/@brucetml',
    imgTitle: 'cooked-food',
    linkImg: 'https://unsplash.com/photos/cooked-food-vRMyLOFkrRc'
  },

  {
    artist: '@ninjason',
    profile: 'https://unsplash.com/@ninjason',
    imgTitle: 'meta-balls-with-noodles-served-on-white-ceramic-bowl',
    linkImg: 'https://unsplash.com/photos/meta-balls-with-noodles-served-on-white-ceramic-bowl-AUAuEgUxg5Q'
  },

  {
    artist: '@emilianovittoriosi',
    profile: 'https://unsplash.com/@emilianovittoriosi',
    imgTitle: 'meat-balls-on-oval-white-plate',
    linkImg: 'https://unsplash.com/photos/meat-balls-on-oval-white-plate-OFismyezPnY'
  },

  {
    artist: '@shootdelicious',
    profile: 'https://unsplash.com/@shootdelicious',
    imgTitle: 'cooked-pasta-dish-on-round-brown-ceramic-plate',
    linkImg: 'https://unsplash.com/photos/cooked-pasta-dish-on-round-brown-ceramic-plate-IA1J0X-KX3Q'
  }
]

aboutContent.id = 'about-content';
aboutContent.innerHTML = `
  <div>
  This is a project task that i did in learning Web Development through The Odin Project curricuclum.
  </div>
`;

// List Image Element
const imgSources = document.createElement('ul');
imgSources.id = 'img-sources'

imagesArray.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `
      <a href='${item.linkImg}' class='link-sources' id='img-link'>${item.imgTitle.split('-').join(' ')}</a> by 
      <a href='${item.profile}' class='link-sources'>${item.artist}</a>
    </div>`;

  imgSources.appendChild(li);
})



function activateAboutContent(content) {
  content.append(aboutContent);
  content.append(aboutContent2);
  content.appendChild(imgSources);
}

export { activateAboutContent };
