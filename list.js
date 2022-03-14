/* eslint-disable  */
const newBook = document.getElementById('bookslist');
const timeShow = document.getElementsByClassName('date-time')[0];

function listBooks() {
  let books = [];
  books = localStorage.getItem('books');

  books = JSON.parse(books);
  newBook.innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    newBook.innerHTML += `<tr>
      <td class="book-title">"${books[i].title}" by ${books[i].author}</td>
      <td class="button-remove"><button type="button" class="btn-remove" onclick="removeBook(${i})">remove</button></td>
    </tr>`;
  }
}

function removeBook(i) {
  let books = [];

  books = localStorage.getItem('books');
  books = JSON.parse(books);
  books.splice(i, 1);
  localStorage.setItem('books', JSON.stringify(books));
  listBooks();
}




window.onload = () => {

  listBooks();
};