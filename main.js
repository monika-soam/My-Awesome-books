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

const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

function dateTime() {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const date = new Date();

  const dateString = `${monthNames[date.getMonth()]} ${date.getDate()} + <sup>${nth(date.getDate())}</sup>` + ` ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
  timeShow.innerHTML = dateString;
}

window.onload = () => {
  dateTime();
};

addButton.addEventListener('click', addBook);