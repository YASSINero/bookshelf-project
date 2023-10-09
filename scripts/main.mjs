import { LIBRARY, Book, appendBook, deleteBook } from "./library.mjs";


const form = document.getElementById('book_form');
const inputs = form.getElementsByTagName('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const codeApp = appendBook(new Book(
        inputs.namedItem('inTitle').value,
        inputs.namedItem('inAuthor').value,
        inputs.namedItem('inPages').value,
        inputs.namedItem('read').value
        ));

    if(codeApp === -1) {
        alert('Book already exists');
    }
    else {
        console.log
        (`Warning: Book already exists: ${LIBRARY.pop().read}`);
    }
        
});
