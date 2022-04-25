/* eslint-disable import/prefer-default-export */
export const booksFromLocalStorage = JSON.parse(
  localStorage.getItem('ourBooks'),
);
