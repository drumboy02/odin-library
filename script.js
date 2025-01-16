const mainEl = document.querySelector('main');
const newBook = document.querySelector('#new-book-btn');
const dialog = document.querySelector('dialog');
const userInput = document.querySelector('#user-input');
const submitBtn = document.querySelector('#submit-btn');
const closeBtn = document.querySelector('#close-btn');

const library = [];

newBook.addEventListener('click', () => {
    dialog.showModal();
})

submitBtn.addEventListener('click', () => {
    // if library is empty
    if (!library[0]) {
        addBooks(...userInput.value.split(','));
        displayBooks();
    }
    dialog.close();
})

closeBtn.addEventListener('click', () => {
    dialog.close();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

function addBooks(...args) {
    const bookLen = Book.length;

    // Create Book objects and add to library
    while (args.length > 0) {
        library.push(new Book(...args));
        for (i = 0; i < bookLen; i++) {
            args.shift();
        }
    }
}

function displayBooks() {
    const bookKeys = Object.keys(new Book());

    // create a table and headers for each key in Book
    let tableEl = mainEl.appendChild(document.createElement('table'));
    let headerRow = tableEl.appendChild(document.createElement('tr'));
    bookKeys.forEach(key => {
        let tableHead = headerRow.appendChild(document.createElement('th'));
        tableHead.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    })    
    
    // loop through library arr, create tr for each book
    library.forEach((book, idx) => {
        let tableRow = tableEl.appendChild(document.createElement('tr'));
        // set data attribute for step 5
        tableRow.setAttribute('data-book', `book-${idx + 1}`);

        // loop through book obj keys, create td cell for each value
        bookKeys.forEach(val => {
            let tableData = tableRow.appendChild(document.createElement('td'));
            tableData.textContent = book[val];
        })
    })
}



// addBooks('Book1', 'J. Doe', 200, true, 'Book2', 'W. Knows', 244, false, 'Book3', 'Unkown', 42, true);

// addBooks('Book4', 'Author', 333, false);
// addBooks('Book6', 'Author6', 423, true);
// displayBooks();

// addBooks('Book5', 'F. Yu', 86, true);
// console.log(library[library.length - 1]);
