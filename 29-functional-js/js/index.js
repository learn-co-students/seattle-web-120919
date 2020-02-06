let score = 0;

function addScore(score) {
  console.log(this);
  return score + 1;
}

function getFive() {
  return 5;
}

let myLibrary = {
  add: addScore
};

let sarah = {
  age: 20,
  name: "Sarah",
  job: "coder"
};

function ageByOne(person) {
  // person.age++;
  // let newPerson = { age: person.age, name: person.name, job: person.job };
  // let newPerson = Object.assign({}, person)
  let newPerson = { ...person };
  newPerson.age++;
  return newPerson;
}

function promote(person) {
  let newPerson = { ...person };
  newPerson.job = `Senior ${newPerson.job}`;
  return newPerson;
}

function levelUp(person, ...actions) {
  let newPerson = { ...person };
  actions.forEach(action => {
    newPerson = action(newPerson);
  });
  return newPerson;
}

//closure
function sayWord() {
  return (greeting) => {
    console.log(`${greeting} ${this.name}`);
  };
}

speakToSarah = sayWord.bind(sarah)