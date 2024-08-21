// getting acces to elements
const book = document.querySelector('.book');
const addBook = document.querySelector('.add-book-button');


// ----------------
const myLibrary = [
  {
    title: 'The Improv Handbook: The Ultimate Guide to Improvising in Comedy, Theatre, and Beyond',
    year: '2008',
    author: 'Tom Salinsky, Deborah Frances-White',
    pages: '425',
    'current page': '100'
  },
  {
    title: 'The Upright Citizen Brigade Comedy Improvisation Manual',
    year: '2024',
    author: 'Matt Besser, Ian Robert, Matt Walsh',
    pages: '384',
    'current page': '125'
  },
];

// Loop Through Mylibrary
function item1(item, index, array) {
  // book.replaceChild(book.childNodes);
  let title = item.title;
  let year = item.year;
  let author = item.author;
  let pages = item.pages;
  let currentPage = item['current page'];

  // create list for the books
  const bookListDetail = document.createElement('div');
  bookListDetail.classList.add('book-list-detail');
  bookListDetail.id = `${index}`;
  bookListDetail.innerHTML = `
                  <ul>
                    <li>
                      <span>title:</span>
                      <span>${title}</span>
                    </li>
                    <li>
                      <span>author:</span>
                      <span>${author}</span>
                    </li>
                    <li>
                      <span>year:</span>
                      <span>${year}</span>
                    </li>
                    <li>
                      <span>pages:</span>
                      <span>${pages}</span>
                    </li>
                    <li>
                      <span>Current page:</span>
                      <span>${currentPage}</span>
                    </li>
                  </ul>
                `;

  // Book button container
  const bookButtonContainer = document.createElement('div');
  bookButtonContainer.classList.add('book-button-container');
  bookListDetail.appendChild(bookButtonContainer);

  //  delete button
  const bookButton = document.createElement('button');
  bookButton.classList.add('delete-book-item');
  bookButton.id = `num${index}`;
  bookButton.innerHTML= `<img
                    src="icon/delete_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="delete btn image"
  />`;

  // Button for marking the book that heve been read
  const bookButton2 = document.createElement('button');
  bookButton2.classList.add('read-book-item');
  bookButton2.innerText = 'mark as read';
  // edit button
  const bookButton3 = document.createElement('button');
  bookButton3.classList.add('edit-book-item');
  bookButton3.innerText = 'edit';


  // appending bookButton
  book.appendChild(bookListDetail);
  bookButtonContainer.appendChild(bookButton);
  bookButtonContainer.appendChild(bookButton2);
  bookButtonContainer.appendChild(bookButton3);

}
myLibrary.forEach(item1);

// Add book
addBook.addEventListener('click', () => {
  const dialogForm = document.querySelector('.dialog-form');
  dialogForm.showModal(); 
});

// submit buttom acces
const submit = document.querySelector('#submit');
const dialogForm = document.querySelector('.dialog-form');

// clicked submit
submit.addEventListener('click', (event) => {

  // getting access to input
  const titleForm = document.querySelector('#title');
  const authorForm = document.querySelector('#author');
  const yearForm = document.querySelector('#year');
  const pagesForm = document.querySelector('#pages');
  const currentPage = document.querySelector('#current-page');

  // check the value of titleForm, yearForm, pagesForm
  if (!titleForm.value || !yearForm.value || !pagesForm.value) {
    alert('please enter the required input');
    return;
  }
  

  // input value to object
  let newBook = {
    title: `${titleForm.value}`,
    author: `${authorForm.value}`,
    year: `${yearForm.value}`,
    pages: `${pagesForm.value}`,
    'current page': `${currentPage.value}`,
  }
  
  // Updating the myLibrary
  if (typeof editMyLibrary === 'number') {
    console.log('oke google');
    myLibrary[editMyLibrary] = newBook;
    
    console.log(myLibrary);
    editMyLibrary = 'off';
  } else {
    myLibrary.push(newBook);
    console.log(newBook);
  }


  // acces bookListDetail in submit then remove them
  const bookListDetail = document.querySelectorAll('.book-list-detail');
  bookListDetail.forEach(item => item.remove());
  
  myLibrary.forEach(item1);
  console.log(myLibrary);
  
  
  // delete and mark as read or not.
  deleteBook();
  markAsReadButton();
  editBookButton();

  // Reset form field
  const formField = document.querySelector('.form-field');
  formField.reset();
  
  event.preventDefault();
  dialogForm.close();
});

// delete book button eventListener
function deleteBook() {
  const deleteBookButton = document.querySelectorAll('.delete-book-item');
  deleteBookButton.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {

      // delete book item chosen after clicking button 'del'.
      e.currentTarget.parentNode.parentNode.remove();
      myLibrary.splice(e.currentTarget.parentNode.parentNode.id, 1);
      // myLibrary.forEach(item1);
      console.log(myLibrary)
    });
  });
}
deleteBook();

// mark as read button and its event
function markAsReadButton() {
  const unRead = document.querySelectorAll('.read-book-item');
  // dataseet for unread
  unRead.forEach((item, index, array) => {
    item.dataset.unRead = '☑ read';
  });

  unRead.forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
      if (!(e.target.innerText === '☑ read')) {
        e.target.innerText = e.target.dataset.unRead;
      } else {
        e.target.innerText = 'mark as read';
      }
    });
  });
}
markAsReadButton();
// dialog form validation onggoing working on


// Edit book button EventListener
let editMyLibrary = 'off';
function editBookButton() {
  const editButton = document.querySelectorAll('.edit-book-item');
  editButton.forEach((item, index, array) => {
    item.addEventListener('click', () => {
      const bookItem = myLibrary[index];
      console.log(myLibrary[index]);
  
      let title = document.querySelector('#title');
      let author = document.querySelector('#author');
      let year = document.querySelector('#year');
      let pages = document.querySelector('#pages');
      let currentPage = document.querySelector('#current-page');
  
      title.value = `${bookItem.title}`;
      author.value = `${bookItem.author}`;
      year.value = `${bookItem.year}`;
      pages.value = `${bookItem.pages}`;
      currentPage.value = `${bookItem['current page']}`;
      
      editMyLibrary = index;
      dialogForm.showModal();
    });
  });
}
editBookButton();
