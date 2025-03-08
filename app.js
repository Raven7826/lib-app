

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    // do things here
    let title = document.querySelector("#title").value;
    let title = document.qetElementById("author").value;
    let title = document.qetElementById("pages").value;
    let title = document.qetElementById("read").checked;
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
  console.log("newBookForm");
 let newBookForm = document.querySelector("#new-book-form");
 newBookForm.style.display = "block";

})