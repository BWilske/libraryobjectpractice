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


let Modal = {

    container:document.getElementById("bookEntryModal"),
    button:document.getElementById("modalBtn"),
    closeBtn:document.getElementsByClassName("closeBtn")[0],

    addEvent: function() {
        Modal.button.addEventListener("click", Modal.open);
        Modal.closeBtn.addEventListener("click", Modal.close);
        window.addEventListener("click", Modal.clickOutside);
        console.log("added events")
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