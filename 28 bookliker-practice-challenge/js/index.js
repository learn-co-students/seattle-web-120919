document.addEventListener("DOMContentLoaded", function() {
  getBooks();
});

const userName = { id: 1, username: "pouros" };

function getBooks() {
  fetch("http://localhost:3000/books")
    .then(res => res.json())
    // .then(res => {
    //   console.log(res);
    //   return res;
    // })
    .then(books => renderBooks(books))
    .catch(err => console.log(err));
}

function renderBooks(books) {
  // console.log(books);
  books.forEach(book => {
    renderBook(book);
  });
}

function renderBook(book) {
  const unorderedList = document.getElementById("list");

  const li = document.createElement("li");
  li.innerHTML = book.title;
  li.addEventListener("click", () => showBookDetail(book));

  unorderedList.appendChild(li);
}

function showBookDetail(book) {
  const showPanel = document.getElementById("show-panel");
  showPanel.innerHTML = "";

  const thumbnail = document.createElement("img");
  thumbnail.src = book.img_url;

  const description = document.createElement("p");
  description.textContent = book.description;

  const usersList = document.createElement("ul");

  book.users.forEach(user => {
    const userLi = document.createElement("li");
    userLi.textContent = user.username;
    usersList.appendChild(userLi);
  });

  const button = document.createElement("button");
  button.textContent = "Like this book";
  button.addEventListener("click", () => likeBookPatch(book));

  showPanel.appendChild(thumbnail);
  showPanel.appendChild(description);
  showPanel.appendChild(usersList);
  showPanel.appendChild(button);
}

function likeBookPatch(book) {
  book.users.push(userName);
  console.log(book.users);
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ users: book.users })
  })
    .then(res => res.json())
    .then(updatedBook => showBookDetail(updatedBook))
    .catch(err => console.log(err));
}
