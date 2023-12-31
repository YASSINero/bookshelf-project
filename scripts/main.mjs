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

const displayBtn = document.querySelectorAll('.btn-wrapper > button');

displayBtn.item(1).addEventListener('click', () => {


    if(LIBRARY.length > 0) {
        let book_cnt = 1;
        LIBRARY.forEach((book)=> {
            console.log(`Book N°${book_cnt}: ${book.title}`);
            book_cnt++
        });
    }
});
