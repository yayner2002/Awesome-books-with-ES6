/* eslint-disable import/no-unresolved */
import Books from './books.js';
import { displayBooks } from './displayBook.js';

export const titleEl = document.getElementById('titleEl');
export const authorEl = document.getElementById('authorEl');
export const form = document.getElementById('my-form');
export const getDataFromInputFields = () => {
  const title = titleEl.value.replace(/^[ ]+|[ ]+$/g, '');
  const author = authorEl.value.replace(/^[ ]+|[ ]+$/g, '');
  if (!title || !author) {
    return;
  }
  const BookNew = new Books(title, author);
  Books.appendBook(BookNew);
  displayBooks();
  titleEl.value = '';
  authorEl.value = '';
};
