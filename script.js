const mainEl = document.querySelector('main');

const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooks(...args) {
    while (args.length > 0) {
        library.push(new Book(...args));
        for (i = 0; i < 4; i++) {
            args.shift();
        }
    }
}

function displayBooks() {
    library.forEach(book => {
        let p = mainEl.appendChild(document.createElement('p'));
        p.textContent = `${book.title} ${book.author} ${book.pages} ${book.read}`;
    })
}

addBooks('Book1', 'J. Doe', 200, true, 'Book2', 'W. Knows', 244, false, 'Book3', 'Unkown', 42, true);

addBooks('Book4', 'Author', 333, false);
displayBooks();

addBooks('Book5', 'F. Yu', 86, true);