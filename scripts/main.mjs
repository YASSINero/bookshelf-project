import { LIBRARY, Book, appendNewBook, deleteLastBook } from "./library.mjs";


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

//=============----------------Display/Delete Section----------------=============

const displayBtns = document.querySelectorAll('.btn-wrapper > button');
const libCtn = document.querySelector('.lib-container');

displayBtns.item(1).addEventListener('click', () => {

    libCtn.insertAdjacentElement('afterbegin', Object.assign(
        document.createElement("div"),
        {
            id: 'bookinfo',
            innerHTML: `<p>Book Title: </p>
                        <p>Book Author: </p>
                        <p>Read? -> </p>
                        <button style=\"margin-right: 0; margin-left: 0;\">Delete</button>`
            
                        //${.read}  ${.author}  ${.title}
        }));

    if(LIBRARY.length > 0) {
        let book_cnt = 1;
        LIBRARY.forEach((book)=> {
            console.log(`Book N°${book_cnt}: ${book.title}`);
            book_cnt++
        });
    }
});

displayBtns.item(0).addEventListener('click', () => {

    if(LIBRARY.length > 0) {
        deleteLastBook();
    }
    else {
        console.log(`Library is empty\nerror code: ${LIBRARY.length}`);
    }

});
