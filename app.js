let myLibrary = []

let theHobbit = new Book("The Hobbit","JRR Tolkein", 815, true)

function Book(title, author, pages, hasRead ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}
Book.prototype.logInfo= function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`
}

// let theHobbit = new Book("The Hobbit","JRR Tolkein", 815, true)



function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

const modal = document.getElementById("bookEntryModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside)

