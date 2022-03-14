/* eslint-disable  */
const title = document.getElementById('title');
const author = document.getElementById('author');
const addButton = document.getElementById('addbtn');
const timeShow = document.getElementsByClassName('date-time')[0];

function addBook() {
  const book = {
    title: title.value,
    author: author.value,
  };
  let books = localStorage.getItem('books');
  if (books == null) {
    books = [];
  } else {
    books = JSON.parse(books);
  }

  books.push(book);
  books = JSON.stringify(books);
  localStorage.setItem('books', books);

  title.value = '';
  author.value = '';
}




addButton.addEventListener('click', addBook);