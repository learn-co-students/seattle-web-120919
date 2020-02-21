// LinkedList - build from "nodes"
// read at index O(N)
// write at index O(N)
// insert at index O(N)
// remove at index O(N)
// append O(1)
// prepend O(1)
class ListNode {
  constructor(data, next=null) {
    this.data = data  
    this.next = next
  }
}

let nodeA = new ListNode('a')
let node44 = new ListNode(44)
let node07 = new ListNode(7)
let node94 = new ListNode(94)
let node02 = new ListNode(2)

let front = nodeA
nodeA.next = node44
node44.next = node07
node07.next = node94
node94.next = node02

// access the first node's data
front.data

// access the second node's data
// start at the front, then go to the next
front.next.data

// access the data on the third node
front.next.next.data

let current = front
while (current !== null) {
  console.log(current.data)
  current = current.next
}






















class LinkedList {
  constructor() {
    this.root = null
    this.tail = null
  }

  size() {
    if (this.root === null) {
      return 0
    }

    let size = 0
    let current = this.root
    while (current !== null) {
      current = current.next
      size++
    }
    return size
  }

  prepend(value) {
    let node = new ListNode(value)
    node.next = this.root
    this.root = node
  }

  unshift() {
    let result = this.root.data
    this.root = this.root.next 
    return result
  }

  toString() {
  }

  // O(N) because it must start at the beginning
  // of the list and traverse the whole thing
  push(val) {
    let node = new ListNode(val) 
    this.tail.next = node
    this.tail = node
  }

  pop() {
  }

  get(index) {
    let count = 0
    let current = this.root
    while (current !== null) {
      current = current.next  
      if (count === index) {
        return current.data
      }
      count++
    } 
    return null
  }

  set(index, value) {
    let count = 0
    let current = this.root
    while (current !== null) {
      current = current.next  
      if (count === index) {
        current.data = value
      }
      count++
    } 
  }

  removeAtIndex(index) {
    if (index === 0) {
      this.root = this.root.next
      return
    }
    
    let count = 0
    let current = this.root
    while (count < index - 1) {
      current = current.next
      count++
    }
    current.next = current.next.next
  }

  insertAtIndex(index, value) {
  }
}

let ll = new LinkedList()
printIt()

ll.push(98)
ll.push(99)
printIt()

ll.pop()
printIt()

ll.push(45)
ll.push(46)
ll.push(47)
ll.push(48)
printIt()

ll.removeAtIndex(2)
printIt()

ll.insertAtIndex(0, 1)
ll.insertAtIndex(4, 44)
printIt()

let count = 0
while (count < 35) {
  ll.push(Math.random())
  count++
}

printIt()

function printIt() {
  console.log(ll.toString())
  console.log()
}
