const mainEl = document.querySelector('main');
const newBook = document.querySelector('#new-book-btn');
const dialog = document.querySelector('dialog');
const userInput = document.querySelector('#user-input');
const submitBtn = document.querySelector('#submit-btn');
const closeBtn = document.querySelector('#close-btn');

const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

newBook.addEventListener('click', () => {
    dialog.showModal();
})

submitBtn.addEventListener('click', () => {
    if (!userInput.value) return;
    let params = userInput.value.split(',');

    // if library is empty render table
    // else remove table and rerender
    if (!library[0]) {
        addBooks(...params);
        createTable();
        displayBooks();
    } else {
        mainEl.removeChild(document.querySelector('table'));
        createTable();
        addBooks(...params);
        displayBooks();
    }

    userInput.value = '';
    dialog.close();
})

closeBtn.addEventListener('click', () => {
    dialog.close();
})

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

function createTable() {
    const bookKeys = Object.keys(new Book());

    // create a table and headers for each key in Book
    let tableEl = mainEl.appendChild(document.createElement('table'));
    let thead = tableEl.appendChild(document.createElement('thead'));
    let headerRow = thead.appendChild(document.createElement('tr'));

    // create header row with book obj keys
    bookKeys.forEach(key => {
        let tableHead = headerRow.appendChild(document.createElement('th'));
        tableHead.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    })    
}

function displayBooks() {
    const bookKeys = Object.keys(new Book());
    let tableEl = document.querySelector('table');
    let tbody = tableEl.appendChild(document.createElement('tbody'));
    
    // loop through library arr, create tr for each book
    library.forEach((book, libIndex) => {
        let tableRow = tbody.appendChild(document.createElement('tr'));

        // loop through book obj keys, create td cell for each value
        bookKeys.forEach(val => {
            let tableData = tableRow.appendChild(document.createElement('td'));
            tableData.textContent = book[val];
        })

        // set data attribute for step 5
        tableRow.setAttribute('data-book', `book-${libIndex + 1}`);
        library[libIndex]['data-book'] = `book-${libIndex + 1}`; 

        let data = tableRow.dataset.book;
        addButtons(tableRow, data, libIndex);
    })
}

function addButtons(row, dataAttr, libIndex) {
    let bookNum = dataAttr;
    
    // create buttons and variables to select 
    let tdBtn1 = row.appendChild(document.createElement('td'));
    let tdBtn2 = row.appendChild(document.createElement('td'));
    let removeBtn = tdBtn1.appendChild(document.createElement('button'));
    let markReadBtn = tdBtn2.appendChild(document.createElement('button'));
    
    removeBtn.textContent = 'remove';
    markReadBtn.textContent = 'read';

    // add functionality to buttons
    removeBtn.addEventListener('click', () => {
        // remove row from table
        console.log(`remove ${bookNum}`);
        document.querySelector('tbody').removeChild(row);
        
        // remove book from library
        library.splice(libIndex, 1);
        console.log(library);

        // remove header if table is empty
    })

    markReadBtn.addEventListener('click', () => {
        console.log(`markRead ${bookNum}`);
        if (row.children[3].textContent === "true") {
            row.children[3].textContent = false;
        } else {
            row.children[3].textContent = true;
        }
    })
}