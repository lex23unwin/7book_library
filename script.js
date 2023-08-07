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
  displayBook(newBook)
  clearInputField();
}

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
}

function displayBook(book)
{
  const bookContainer = document.createElement("div")
  bookContainer.classList.add("book-container")
  
  const nameDiv = document.createElement("div")
  nameDiv.classList.add("title")
  nameDiv.textContent = `${book.title}`
  bookContainer.appendChild(nameDiv)
  
  const authorDiv = document.createElement("div")
  authorDiv.classList.add("author")
  authorDiv.textContent = `${book.author}`
  bookContainer.appendChild(authorDiv)
  
  const pagesDiv = document.createElement("div")
  pagesDiv.classList.add("pages")
  pagesDiv.textContent = `${book.pages}`
  bookContainer.appendChild(pagesDiv)
  
  const isReadDiv = document.createElement("div")
  isReadDiv.classList.add("isRead")
  isReadDiv.textContent = `${book.isRead}`
  bookContainer.appendChild(isReadDiv)
  
  const removeButton = document.createElement("button")
  removeButton.classList.add("remove-btn")
  removeButton.textContent = "Remove"
  bookContainer.appendChild(removeButton)
  
  removeButton.addEventListener("click", () => {
    for (let i = 0; i < myLibrary.length; i++)
    {
      if (myLibrary[i].title === book.title)
      {
        myLibrary.splice(i, 1)
        booksContainer.removeChild(bookContainer)
        break;
      }
    }
  })
  booksContainer.appendChild(bookContainer)
}

function clearInputField()
{
  addBookForm.reset();
}