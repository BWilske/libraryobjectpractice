let myLibrary = []

//book generator
function Book(title, author, pages, hasRead ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}
Book.prototype.returnInfo= function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`
}

myLibrary[0] = new Book("The Hobbit","JRR Tolkein", 815, true)
myLibrary[1] = new Book("The Hobbit","JRR Tolkein", 815, true)
myLibrary[2] = new Book("The Hobbit","JRR Tolkein", 815, true)
myLibrary[3] = new Book("The Hobbit","JRR Tolkein", 815, true)
myLibrary[4] = new Book("The Hobbit","JRR Tolkein", 815, true)

//takes in info from form to create new book
function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
}
//loops through books and displays
function displayBooks(library) {
    let libraryEl = document.getElementById("library-container")
    for(let i=0; i < library.length; ++i) {
        
        let newBook = document.createElement("div")
        newBook.setAttribute("class", "book")
        newBook.innerHTML = `
        <p>${myLibrary[i].title}</p>
        <p>${myLibrary[i].author}</p>
        <p>${myLibrary[i].pages}</p>
        <p>${myLibrary[i].hasRead}</p>`
        libraryEl.append(newBook)
        

        
    }
}

// modal
const Modal = {

    container:document.getElementById("bookEntryModal"),
    button:document.getElementById("modalBtn"),
    closeBtn:document.getElementsByClassName("closeBtn")[0],

    addEvent: function() {
        Modal.button.addEventListener("click", Modal.open);
        Modal.closeBtn.addEventListener("click", Modal.close);
        window.addEventListener("click", Modal.clickOutside);
        // console.log("added events")
    },

    open: () => {
        console.log("test")
       Modal.container.style.display = "block";
        
        
    },
    
    close: () => {
        Modal.container.style.display = "none";
    },

    clickOutside: (e) =>{
        if(e.target == Modal.container){
            Modal.container.style.display = "none";
        }
    }

    

    

}


Modal.addEvent()