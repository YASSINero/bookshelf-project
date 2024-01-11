export let LIBRARY = [];

export function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


export function appendNewBook(book) {
    const oldLen = LIBRARY.length;
    if(!LIBRARY.some((item) => item.title === book.title)) {
        var newLen = LIBRARY.push(book);
        
        if(newLen === (oldLen+1)) {
            return newLen;
        } else {
            return -1;
        }
    }
    return -1;
}

export function deleteLastBook() {

    return LIBRARY.pop();

}

//TODO: Implement modules