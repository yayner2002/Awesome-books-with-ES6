export default class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.books = [];
  }

  renderBooks() {
    return `<div class="list-block"><p><q>${this.title}</q> By ${this.author} </p>
            <button class="remove-btn" id='${this.id}' type="button">Remove</button></div>
            `;
  }

  static appendBook(book) {
    let id = 5;
    if (Books.books.length >= 1) {
      id = Books.books[Books.books.length - 1].id + 5;
    }
    book.id = id;
    Books.books.push(book);
    localStorage.setItem('ourBooks', JSON.stringify(Books.books));
  }

  static removeBook(id) {
    Books.books = Books.books.filter((book) => book.id !== Number(id));
    localStorage.setItem('ourBooks', JSON.stringify(Books.books));
  }
}