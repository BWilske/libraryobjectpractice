let myLibrary = [];

//book generator
class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  }

  returnInfo = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`;
  };
}

for (let i = 0; i <= 10; i++) {
  myLibrary[i] = new Book("The Hobbit", "JRR Tolkein", 815, false);
}

//takes in info from form to create new book ///order for data [title,author,pages,hasRead(bool)]
function addBookToLibrary(...data) {
  const newBook = new Book(...data);
  myLibrary.push(newBook);
}
//loops through books and displays
function displayBooks(library) {
  const libraryEl = document.getElementById("library-container");
  for (let i = 0; i < library.length; ++i) {
    const newBook = document.createElement("div");
    newBook.setAttribute("class", "book");

    let hasReadasText = boolTotext(library[i].hasRead);

    newBook.innerHTML = `
        <p>Title: ${library[i].title}</p>
        <p>Author: ${library[i].author}</p>
        <p>Pages: ${library[i].pages}</p>
        <p>${hasReadasText}</p>`;
    libraryEl.append(newBook);
  }
}
//converts a bool in array to the text for display on page
function boolTotext(hasRead) {
  if (hasRead === true) return "Read";
  else return "Not Read";
}

// modal
const Modal = {
  // display
  container: document.getElementById("bookEntryModal"),
  button: document.getElementById("modalBtn"),
  closeBtn: document.getElementsByClassName("closeBtn")[0],
  // grabbing data
  dataGrabber: document.getElementsByClassName("bookinfo"),
  enterBtn: document.getElementById("enterBtn"),

  addEvent: function () {
    //display
    Modal.button.addEventListener("click", Modal.open);
    Modal.closeBtn.addEventListener("click", Modal.close);
    window.addEventListener("click", Modal.clickOutside);
    // grabbing data
    Modal.enterBtn.addEventListener(
      "click",
      addBookToLibrary(Modal.dataGrabber)
    );
  },

  open: () => {
    Modal.container.style.display = "block";
  },

  close: () => {
    Modal.container.style.display = "none";
  },

  clickOutside: (e) => {
    if (e.target == Modal.container) {
      Modal.container.style.display = "none";
    }
  },
};

Modal.addEvent();
