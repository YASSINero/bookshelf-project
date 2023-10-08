const LIBRARY = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function AppendBook(book) {
    const oldLen = book.length;
    const newLen = LIBRARY.push(book);
    
    if(newLen === (oldLen+1)) {
        return newLen;
    } else {
        return -1;
    }
}

//TODO: Implement modulesq