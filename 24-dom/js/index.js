// HTTP => server => File.html => DOM => website

document.addEventListener("DOMContentLoaded", function() {
  let salmonElement = document.getElementById("salmon");
  //   console.dir(salmonElement);

  let welcomeDiv = document.querySelector(".welcome");
  // console.log(welcomeDiv)

  let test = document.querySelectorAll("div");
  // console.log(test[1])

  let listOne = document.querySelector("ul li");
  console.dir(listOne);

  // listOne.innerHTML = "<strong>Baked Salmon</strong>"

  //BOLD ALL LIST ITEMS
  function makeListBold() {
    let allListItems = document.querySelectorAll("li");
    allListItems.forEach(function(node) {
      node.innerHTML = `<strong>${node.textContent}</strong>`;
    });
  }

  makeListBold();

  //   console.log("DOM is READY");
});
