/* eslint-disable import/prefer-default-export */
const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contactLink = document.querySelector('.contact-link');
const listBooksContainer = document.querySelector('.list-of-books');
const addBookContainer = document.querySelector('.add-book-container');
const contactConstainer = document.querySelector('.contact-info-container');
export const addLinkFunc = () => {
  addLink.addEventListener('click', () => {
    listBooksContainer.classList.add('hidden');
    contactConstainer.classList.add('hidden');
    addBookContainer.classList.remove('hidden');
  });
};

export const contactLinkFunc = () => {
  contactLink.addEventListener('click', () => {
    contactConstainer.classList.remove('hidden');
    listBooksContainer.classList.add('hidden');
    addBookContainer.classList.add('hidden');
  });
};

export const listLinkFunc = () => {
  listLink.addEventListener('click', () => {
    listBooksContainer.classList.remove('hidden');
    contactConstainer.classList.add('hidden');
    addBookContainer.classList.add('hidden');
  });
};