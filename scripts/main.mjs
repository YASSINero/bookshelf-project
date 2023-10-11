import { LIBRARY, Book, appendNewBook, deleteBook } from "./library.mjs";


const form = document.getElementById('book_form');
const inputs = form.getElementsByTagName('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const addedBook = new Book(
        inputs.namedItem('inTitle').value,
        inputs.namedItem('inAuthor').value,
        inputs.namedItem('inPages').value,
        (Array.from(inputs).find(
            (input) => (input.name === 'read' && input.checked)
            )?.value
        ));

    const codeApp = appendNewBook(addedBook);


    if(codeApp === -1)
    {
        console.log('Book already exists');
    }
    else 
    {
        LIBRARY.forEach((book)=> {
            console.log(`Book Added: ${book.title}`);
        });
    }
        
});
