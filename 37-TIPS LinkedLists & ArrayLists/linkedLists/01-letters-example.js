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

let root = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// start: root -> A -> B -> C -> D -> E
let zero1 = new ListNode(0);
zero1.next = root;
console.log("root=", root);
console.log("zero1=", zero1);
// end: root -> 0 -> A -> B -> C -> D -> E

// start: root -> A -> B -> C -> D -> E
//   end: root -> A -> 0 -> B -> C -> D -> E

let zero2 = new ListNode(0);
zero2.next = root.next.next;
// root.next = zero2;

console.log("root=", root);
// console.log("zero2=", zero2);
