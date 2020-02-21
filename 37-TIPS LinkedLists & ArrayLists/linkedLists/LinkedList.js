class ListNode extends List {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }
}
// LinkedList
// read O(N)
// write O(N)
// insert O(1) (assuming you're at the spot)
// remove O(1) (assuming you're at the spot)
// append O(N)
// prepend O(1)
export default class LinkedList extends List {
  constructor() {
    this.root = null    
    this.size = 0
  }

  isEmpty() {
    return this.root === null
  }

  size() {
    return this.size
  }

  toString() { } 
  realToString() { } 

  append(val) {
    // move to the end of the list, but stop before you step off the list
    let current = this.root
    while (current.next !== null) {
      current = current.next
    }

    // make a new node and have the last node point to the new one
    let node = new ListNode(val)
    current.next = node
  } 

  prepend(val) {
    let node = new ListNode(val)
    node.next = this.root
    this.root = node
  } 

  pop() { } 

  get(index) {
    let current = this.root
    let counter = 0
    while (current && count < index) {
      current = current.next
      counter++
    }

    return current.data
  } 

  set(index, value) { } 

  removeAtIndex(index) { } 
  insertAtIndex(index, value) { }
}