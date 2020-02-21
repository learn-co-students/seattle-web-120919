{
  /* <script> */
}
class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

let a = new ListNode("A");
let b = new ListNode("B");
let c = new ListNode("C");
let d = new ListNode("D");
let e = new ListNode("E");

// create the nodes. No relations yet.

// now create the relations.
let front = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(front);
// the front is A. The rest of the nodes are linked in a line!
// =>
// ListNode {data: "A", next: ListNode}
// data: "A"
// next: ListNode
// data: "B"
// next: ListNode
// data: "C"
// next: ListNode
// data: "D"
// next: ListNode
// data: "E"
// next: null
