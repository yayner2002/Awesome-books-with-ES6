import { displayDateTime } from './modules/time';
import {
  addLinkFunc, contactLinkFunc, listLinkFunc,
} from './modules/dataDisplayBlockOrHidden';
import Books from './modules/books';
import { booksFromLocalStorage } from './modules/localStorage';
import { displayBooks } from './modules/displayBook';
import { form, getDataFromInputFields } from './modules/addBook';

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