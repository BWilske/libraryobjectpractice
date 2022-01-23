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

function addBookToLibrary() {
    const newBook = book
}

