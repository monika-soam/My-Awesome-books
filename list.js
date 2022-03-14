const newBook = document.getElementById('bookslist');
const timeShow = document.getElementsByClassName('date-time')[0];

function listBooks() {
  let books = [];
  books = localStorage.getItem('books');
  console.log(books)
  books = JSON.parse(books);
  newBook.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    newBook.innerHTML += `<tr>
      <td class="book-title">"${books[i].title}" by ${books[i].author}</td>
      <td class="button-remove"><button type="button" class="btn-remove" onclick="removeBook(${i})">remove</button></td>
    </tr>`
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


const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}


function dateTime() {

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let date = new Date();

  let dateString = monthNames[date.getMonth()] + " " + date.getDate() + "<sup>" + nth(date.getDate()) + "</sup>" + " " + date.getFullYear() + ", " + date.toLocaleTimeString();
  timeShow.innerHTML = dateString;
}




window.onload = () => {
  dateTime();
  listBooks();
};