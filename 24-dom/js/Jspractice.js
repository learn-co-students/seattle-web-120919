let toys = ["teddy bear", "ball", "doll", "lego", "gamecube"];

toys.forEach(function(item) {
  console.log(item)
})

const sayHello = function(toy) {
  return "hello from " + toy
}
for (let i = 0; i < toys.length; i++) {
  console.log(sayHello(toys[i]))
}

let person = {
  name: "john",
  age: 12,
  height: "12'"
}

console.log(toys)
console.log(typeof(toys))