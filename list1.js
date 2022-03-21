/* eslint-disable  */
import collection from "./main1.js";

const displayList = document.getElementById('bookslist');


let listBooksFromCollections = new collection();

function listMyBooks() {
  let list = listBooksFromCollections.bookList();
  displayList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    displayList.innerHTML += `<tr>
    <td class="book-title">"${list[i].title}" by ${list[i].author}</td>
    <td class="button-remove"><button type="button" class="btn-remove">remove</button></td>
  </tr>`;
  }

  const removeButtons = document.getElementsByClassName("btn-remove");
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => {
      listBooksFromCollections.removeBook(i);
      listMyBooks();
    })
  }
}

function getNumberSuffix(num) {
  if (num >= 11 && num <= 20) return '<sup>th</sup>';

  const lastDigit = num.toString().slice(-1);

  switch (lastDigit) {
    case '1':
      return '<sup>st</sup>';
    case '2':
      return '<sup>nd</sup>';
    case '3':
      return '<sup>rd</sup>';
    default:
      return '<sup>th</sup>';
  }
}
window.onload = () => {
  listMyBooks();




  function dateTime() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const date = new Date();

    const dateString = `${monthNames[date.getMonth()]} ${date.getDate()} ${getNumberSuffix(date.getDate())} ${date.getFullYear()}, ${date.toLocaleTimeString()}`;
    document.getElementsByClassName('date-time')[0].innerHTML = dateString;
  }
  setInterval(dateTime, 1000);

}