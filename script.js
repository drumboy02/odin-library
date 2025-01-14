const mainEl = document.querySelector('main');

const library = [];
const bookLen = Book.length;
const bookKeys = Object.keys(new Book());

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

function addBooks(...args) {
    // Create Book objects and add to library
    while (args.length > 0) {
        library.push(new Book(...args));
        for (i = 0; i < bookLen; i++) {
            args.shift();
        }
    }
}

function displayBooks() {
    // create a table and headers for each key in Book
    let tableEl = mainEl.appendChild(document.createElement('table'));
    bookKeys.forEach(key => {
        let tableHead = tableEl.appendChild(document.createElement('th'));
        tableHead.textContent = key;
    })    
    
    // loop through library arr and display each book
    library.forEach(book => {
        let tableRow = tableEl.appendChild(document.createElement('tr'));
        let tableData = tableRow.appendChild(document.createElement('td'));
        tableData.textContent = `${book.title} ${book.author} ${book.pages} ${book.read}`;
    })
}

addBooks('Book1', 'J. Doe', 200, true, 'Book2', 'W. Knows', 244, false, 'Book3', 'Unkown', 42, true);

addBooks('Book4', 'Author', 333, false);
displayBooks();

// addBooks('Book5', 'F. Yu', 86, true);