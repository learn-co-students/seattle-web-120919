const RANDOM_QUESTION_URL = "http://jservice.io/api/random";

//YOUR CODE HERE

function displayQuestion(question) {
  let questionCard = document.getElementById("question");
  questionCard.querySelector(".card-title").textContent =
    question[0].category.title;
  questionCard.querySelector(".card-text").textContent = question[0].question;

  let answerCard = document.getElementById("answer");
  answerCard.querySelector(".card-text").innerHTML = question[0].answer;
}

function toggleAnswer() {
  let answerCard = document.querySelector("#answer");
  console.log(answerCard.style.display);
  if (answerCard.style.display != "none") {
    answerCard.style.display = "none";
  } else {
    answerCard.style.display = "block";
  }
}

function getQuestion() {
  fetch(RANDOM_QUESTION_URL)
    .then(function(res) {
      return res.json();
    })
    .then(function(question) {
      console.log(question);
      displayQuestion(question);
    });
}

function hideAnswer() {
  document.getElementById("answer").style.display = "none";
}
function showAnswer() {
  document.getElementById("answer").style.display = "block";
}

function addAnswerForm() {
  let form = document.createElement("form");
  let label = document.createElement("label");
  let input = document.createElement("input");
  let button = document.createElement("button");
  label.textContent = "Your answer";
  input.name = "answer";
  button.textContent = "Submit";
  button.type = "submit";
  form.className = "card container";
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);
  //add the form to the page
  document.querySelector(".main").appendChild(form);

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // console.log(event.target.answer.value);
        checkAnswer(event.target.answer.value);
        event.target.answer.value = "";
    })
}

function checkAnswer(input) {
    if (document.querySelector("#answer").querySelector(".card-text").textContent.includes(input)) {
        alert ("You're right!!")
    } else {
        alert("Wrong")
    }
    showAnswer();
}

document.addEventListener("DOMContentLoaded", function() {
  hideAnswer();
  addAnswerForm();
  getQuestion();
  document
    .getElementById("answer-button")
    .addEventListener("click", function() {
      toggleAnswer();
    });
  document.getElementById("next-button").addEventListener("click", function() {
    hideAnswer();
    getQuestion();
  });
});
