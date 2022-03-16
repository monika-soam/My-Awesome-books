/* eslint-disable  */
class book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class collection {
  constructor() {
    this.books = [];
    this.books = localStorage.getItem('books');
    if (this.books == null) {
      this.books = [];
    } else {
      this.books = JSON.parse(this.books);
    }
  }

  addBook(title, author) {
    let newBook = new book(title, author);
    this.books.push(newBook);
    this.persistBook();

  }

  removeBook(i) {
    this.books.splice(i, 1);
    this.persistBook();

  }

  bookList() {
    return this.books;

  }
  persistBook() {
    localStorage.setItem('books', JSON.stringify(this.books));

  }


}

export default collection;