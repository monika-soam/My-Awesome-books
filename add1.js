/* eslint-disable  */
import collection from './main1.js'

const addButton = document.getElementById('addbtn');
const title = document.getElementById('title');
const author = document.getElementById('author');
let booksFromCollection = new collection();

addButton.addEventListener('click', () => {

  booksFromCollection.addBook(title.value, author.value);
  window.location = "index.html";

});

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