// const jonSnow = {
//   name: "Jon Snow",
//   knows: "nothing",
//   king: "Of The North"
// }

// function Character(name, knows, king) {
//   this.name = name;
//   this.knows = knows;
//   this.king = king;
// }

// Character.prototype.sayHello = function() {
//   return `Hello, I am ${this.name}, I know ${this.knows}`
// }

class Character {
  constructor(name, knows, king) {
    this.name = name;
    this.knows = knows;
    this.king = king;
    Character.all.push(this);
  }

  static all = [];

  static getLastCharcter = () => {
    return Character.all[Character.all.length - 1];
  };

  getName = () => `${this.name}, King ${this.king}`;

  changeName = newName => {
    this.name = newName;
  };

  sayHello = () => {
    return `Hello, I am ${this.getName()}, I know ${this.knows}`;
  };

  fight = () => {
    return "Arrgrghgh!";
  };
}

class Peasant extends Character {
  constructor(name, knows) {
    super(name, knows, "nothing");
    Peasant.all.push(this)
  }
  
  static all = [];

  getName = () => {
    return this.name;
  };
}

const jonSnow = new Character("Jon Snow", "nothing", "of the North");
const cerseiL = new Character("C Lann", "plotting", "/Queen of the south");
const dany = new Character("Dany T", "dragons", "in  absentia");
const hodor = new Peasant("Hodor", "hodor");

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("name").textContent = jonSnow.name;
  document.getElementById("knows").textContent = jonSnow.knows;
  document.getElementById("king").textContent = jonSnow.king;

  Character.all.forEach(character => {
    let newCharacterNode = document.createElement("li");
    newCharacterNode.textContent = character.name;
    document.getElementById("characters").appendChild(newCharacterNode);
  });
});
