# Linked Lists

* Linked Lists are a data structure designed for efficient rearrangement.
* Arrays are rigid and inefficient at adding/removing elements in their middle.

![Linked List](assets/00-linked-list.png)

---

## Anatomy of a Linked List

* A Linked List is built out of two classes.
* A `ListNode` class that represents each piece of the list.
  * Each node has a `data` property containing the data
  * Each node has a `next` property referring to the next node in the list
* A `LinkedList` class that refers to the first `root` node and has
  useful methods like `.get(i)`, `.append(value)`, `.size()`, etc. attached.

```js
class ListNode extends List {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList extends List {
  constructor() {
    this.root = null    
  }
}
```

---

## Standard Traversal
We don't use indexes and for loops to traverse Linked Lists. Instead
we create an element that points to the first node and step on each
node one by one from there.

```js
let current = list.root
while (current) {
  console.log(current.data)
  current = current.next
}
```

Imagine crossing a river with your eyes closed feeling for and stepping
on stones one at a time until there are no more in front of you. When
there are no more stones you're at the end of the list!

---

## Bonus: .traverse()

**Example:** use functional programming to create a method that accepts
a callback function. Write the standard `while` loop that steps on each
node one by one and passes each value to the callback function.

```js
class LinkedList {
  traverse(cb) {
    let current = this.root
    while (current) {
      cb(current.data)
      current = current.next
    }
  }
}
```

---

## Big-O Asymptoptic Analysis
<style>
table{
    border-collapse: collapse;
    border-spacing: 0;
    border:2px solid black;
}

th{
    border:2px solid #000000;
    padding: .4em;
}

td{
    border:1px solid #000000;
    padding: .4em;
}
</style>

| Operation   | ArrayList | LinkedList |
|-------------|-----------|------------|
| read        |    O(1)   |    O(N)    |
| write       |    O(1)   |    O(N)    |
| insert      |    O(N)   |    O(1)\*  |
| remove      |    O(N)   |    O(1)\*  |
| append      |    O(1)   |    O(1)    |
| prepend     |    O(N)   |    O(1)    |

\* inserting and removing in a Linked List is a `O(1)` operation when you're
at the spot. It may take `O(N)` time to get to that spot.

---

## Interface vs Implementation
 
* An **interface** defines what something should do
* An **implementation** is how it's actually done

This `List` interface has no code implementing methods itself.

`ArrayList` or `LinkedList` classes will inherit this
interface class and actually implement each method themselves.

```js
class List {
  isEmpty() { }
  size() { }

  append(val) { } 
  prepend(val) { } 
  pop() { } 

  get(index) { } 
  set(index, value) { } 

  removeAtIndex(index) { } 
  insertAtIndex(index, value) { }
}
```

---

## Interface vs Implementation

Since `ArrayList` and `LinkedList` share the common `List` interface we can
write code using only `List` methods and know it works for both
implementations.

```js
let aa = new ArrayList()
let ll = new LinkedList()

const fill = (a) => { a.push(1); a.push(1); a.push(2); }
fill(aa); fill(ll);

containsDuplicates(aa);
containsDuplicates(ll);

function containsDuplicates(list) {
  const seen = {}
  for (let i = 0; i < list.size(); i++) {
    let item = list.get(i)
    if (seen[item]) {
      return true
    }
    seen[item] = true
  }
  return false
}
```
