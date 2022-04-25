/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import Books from './books.js';

const bookList = document.querySelector('.book-list');

export const displayBooks = () => {
  // eslint-disable-next-line max-len
  const renderBooks = Books.books.map((book) => new Books(book.title, book.author, book.id).renderBooks());
  bookList.innerHTML = renderBooks.join('');
  const removeButton = document.querySelectorAll('.remove-btn');
  removeButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.getAttribute('id');
      Books.removeBook(id);
      displayBooks();
    });
  });
};
