let editedNode = null;

function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit this Book";
  editButton.addEventListener("click", function() {
    editBook(book);
    editedNode = div;
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete This Book";
  deleteButton.addEventListener("click", function() {
    deleteBook(book, div);
  });

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(editButton);
  div.appendChild(deleteButton);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

// showBooks(books);

function getBooks() {
  fetch("http://localhost:3000/books")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      showBooks(data);
      // addBook(data)
    });
}

function postBook(book) {
  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(book)
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.id) {
        addBook(data);
      } else {
        console.log(data);
      }
    });
}

function deleteBook(book, card) {
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: "DELETE"
  }).then(res => {
    if (res.status === 200) {
      console.log("book deleted");
      card.remove();
    }
  });
}

function editBook(book) {
  const editForm = document.querySelector("#edit-form form");
  editForm.parentNode.style.display = "block";
  editForm.author.value = book.author;
  editForm.title.value = book.title;
  editForm.cover.value = book.img;
  editForm.bookId.value = book.id;
}

const updateBook = book => {
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(book)
  }).then(res => res.json()).then(
    data => {
      const newCard = makeBookCard(data);
      editedNode.parentNode.replaceChild(newCard, editedNode)
      document.querySelector("#edit-form").style.display = "none";
      editedNode = null
    }
  );
}

//arrow functions

const sayHi = () => console.log("hi");
sayHi();

const sayBye = word => console.log(word);
sayBye("bye");

//

document.addEventListener("DOMContentLoaded", function() {
  getBooks();
  document
    .querySelector("#edit-form form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      //define the edit action
      let editedBook = {
        author: event.target.author.value,
        title: event.target.title.value,
        img: event.target.cover.value,
        id: event.target.bookId.value
      };
      updateBook(editedBook);
    });
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let newBook = {
      author: event.target.author.value,
      title: event.target.title.value,
      img: event.target.cover.value
    };
    postBook(newBook);
  });
});
