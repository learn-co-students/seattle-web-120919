// ArrayList - built from an array
// read O(1)
// write O(1)
// insert O(N)
// remove O(N)
// append O(1)
// prepend O(N)

class ArrayList {
  // creates a list using a fixed-size array
  // with the given capacity (or default 7)
  // (since we're in JavaScript the Array is not
  //  reaaly a fixed-size array, but we will treat
  //  it like it is. No splice/push/pop!!)
  constructor(capacity = 7) {
    // the array is initialized with the provided capacity,
    // but the array is empty without any elements in it so
    // it's current "size" is zero.
    this.data = new Array(capacity);
    // full ength of the array
    this.size = 0;

    // specifically nullify all the values to start
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = null;
    }
    console.log("ArrayList =", this);
  }

  // O(1) constant read/write methods
  // getters and setters
  get(index) {
    return this.data[index];
  }

  set(index, value) {
    this.data[index] = value;
  }

  // pop removes and returns last element of an array
  pop() {
    let result = this.data[this.size - 1];
    // size, not capacity
    this.data[this.size - 1] = null;
    // set the old index to null
    this.size--;
    // decrement the size
    return result;
  }

  // same as .push in JS/Ruby. Same as << in Ruby.
  // notice that this is O(1).
  // also notice that we have almost always been shoveling in Ruby. We could use `.unshift` to prepend rather than append. But we have not. This is better time complexity.
  append(value) {
    this.data[this.size] = value;
    this.size++;
    console.log("this.size=", this.size);
    console.log("ArrayList=", this.toStringWithNulls());
  }

  // notice that! I have to loop through the entire array and move everything over a space.
  prepend(value) {
    this.insertAtIndex(0, value);
    console.log("this.size=", this.size);
    console.log("ArrayList=", this.toStringWithNulls());
  }

  // a custom toString method that only prints
  // out values in the array we're actuaaly using.
  toString() {
    let result = "[";
    for (let i = 0; i < this.size; i++) {
      result += this.data[i] + ", ";
    }
    return result + "]";
  }

  // one that returns the nulls too.
  toStringWithNulls() {
    console.log(this.data);
    return this.data;
  }

  // returns the value at the index
  // and removes it from the list, shifting
  // all further elements from the back
  // to the front to fill the hole it left.

  // This is O(n).
  removeAtIndex(index) {
    let result = this.get(index);
    for (let i = index; i < this.size - 1; i++) {
      // start at the index. scoot each value one to the left
      this.data[i] = this.data[i + 1];
    }
    // make the last index null. Decrement the size.
    this.data[this.size - 1] = null;
    this.size--;

    return result;
  }

  // This is O(n).
  insertAtIndex(index, value) {
    // see if there is enough room
    this._checkCapacity();
    // loop back from the end until the index. Move everything up one.
    for (let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }
    // insert the value at the index. ++size
    this.data[index] = value;
    this.size++;
  }

  // what does _ underscore mean?
  _checkCapacity() {
    if (this.size === this.data.length) {
      this._grow();
    }
  }

  _grow() {
    console.log("growing from", this.size, "to", this.size * 2);
    let newArray = new Array(this.size * 2);
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.data[i];
    }
    this.data = newArray;
  }
}

let al = new ArrayList();
printIt();

al.append(1);
al.append(1);
al.append(1);
al.append(1);
al.append(1);
al.append(1);
al.append(1);
al.removeAtIndex(6);
console.log("144");
al.insertAtIndex(6, 1);
al.insertAtIndex(7, 1);

printIt();
al.pop();
printIt();

let count = 0;
while (count < 5) {
  al.append(Math.floor(Math.random() * 100));
  count++;
}

printIt();

function printIt() {
  console.log("without nulls=", al.toString());
  console.log("with nulls=", al.toStringWithNulls());
  console.log("===============");
}
