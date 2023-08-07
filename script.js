let myLibrary = [];
let addBookBtn = document.querySelector(".add-book-btn")
let addBookForm = document.querySelector(".add-book-form")
let closeOutX = document.querySelector(".close-out-x")
let submitBookBtn = document.querySelector("#submit-book-btn")
let removeBookBtns = document.querySelectorAll(".remove-btn")
let booksContainer = document.querySelector(".books-container")

let titleInput = document.querySelector("#title")
let authorInput = document.querySelector("#author")
let pagesInput=document.querySelector("#pages")
let isReadInput = document.querySelector(".radio-button")

addBookBtn.addEventListener("click", () => {
  addBookForm.style.display = "flex";
})

closeOutX.addEventListener("click", () => {
  addBookForm.style.display = "none";
})


addBookForm.addEventListener("submit", (e) => {
    e.preventDefault(); //so that way it doesn't try to send form info to non-existent server 
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let isRead = isReadInput.value;
    addBookToLibrary(title, author, pages, isRead);
  })
  
  function addBookToLibrary (title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    clearInputField();
  }
  
  function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
  
  
  function clearInputField()
  {
    addBookForm.reset();
  }