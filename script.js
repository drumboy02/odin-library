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

addBooks('Book1', 'J. Doe', 200, true, 'Book2', 'W. Knows', 244, false, 'Book3', 'Unkown', 42, true);

// let mainEl = document.querySelector('main');
// mainEl.textContent = library[0].title;
console.log(library[2])