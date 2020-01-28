// HTTP => server => File.html => DOM => website

// https://developer.mozilla.org/en-US/docs/Web/Events

//object equivalency
// http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html

const menu = [
  "Smoked Salmon",
  "Grilled Peppers",
  "Steamed Asparagus",
  "Birthday Cake",
  "Cookies"
];

function makeNewFoodItem(newFoodName) {
  if (newFoodName != "") {
    let foodList = document.querySelector("ul");
    let newFoodItem = document.createElement("li");
    newFoodItem.textContent = newFoodName;
    addGreyClick(newFoodItem);
    foodList.appendChild(newFoodItem);
    document.querySelector(".form-warning").style.display = "none";
  } else {
    console.log("Your form is empty!");
    document.querySelector(".form-warning").style.display = "block";
    document.querySelector(".form-success").style.opacity = 0;
  }
}

function reportSuccess() {
  document.querySelector(".form-success").style.opacity = 1;
  setTimeout(function() {
    let clearMessage = setInterval(function() {
      document.querySelector(".form-success").style.opacity =
        document.querySelector(".form-success").style.opacity - 0.01;
      if (document.querySelector(".form-success").style.opacity == 0) {
        clearInterval(clearMessage);
      }
    }, 10);
  }, 1200);
}

function addGreyClick(DOMNode) {
  DOMNode.addEventListener("click", function() {
    DOMNode.style.color = "grey";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  let welcomeTitle = document.querySelector(".welcome h1");
  menu.forEach(function(food) {
    makeNewFoodItem(food);
  });

  // document.querySelector(".welcome").addEventListener("mouseenter", function() {
  //   welcomeTitle.style.color = "blue";
  // });
  // welcomeTitle.addEventListener("mouseenter", function() {
  //   welcomeTitle.style.color = "red";
  // });

  // document.querySelectorAll("li").forEach(function(node) {
  //   addGreyClick(node);
  // });

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    makeNewFoodItem(event.target.food.value);
    if (event.target.food.value != "") {
      reportSuccess();
    }
    event.target.reset();
  });
});
