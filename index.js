import { displayDateTime } from './modules/time.js';
import {
  addLinkFunc, contactLinkFunc, listLinkFunc,
} from './modules/dataDisplayBlockOrHidden.js';
import Books from './modules/books.js';
import { booksFromLocalStorage } from './modules/localStorage.js';
import { displayBooks } from './modules/displayBook.js';
import { form, getDataFromInputFields } from './modules/addBook.js';

window.addEventListener('load', () => setInterval(displayDateTime, 1000));
addLinkFunc(); contactLinkFunc(); listLinkFunc();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getDataFromInputFields();
});
if (booksFromLocalStorage) {
  Books.books = booksFromLocalStorage;
  displayBooks();
}