// Linked list w/ recursion implementation originally by John Franti

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// ADD A NODE TO A LINKED LIST
//accept the node to which the new node will be attached, and the
//new node itself
appendNode = (head, newNode) => {
  newNode.next = head.next; //attach old tail to new newNode
  head.next = newNode; //attach newNode to head
};

//DISCOVER THE LENGTH OF A LINKED LIST
//accept a head, and assume a lower limit of 1, as the head must exist
getListLength = (head, length = 1) => {
  if (head.next === null) {
    console.log(
      "i've returned a value & will now pop off functions as they resolve"
    );
    //if there is no 'next' value, we are at the end, let's return that length
    return length;
  } else {
    //if there IS a 'next' value, recursively start again, passing
    //'next' into the function, and
    //increasing the length to account for the found "next"
    console.log("i'm pushing an unresolved function on the stack");
    //   console.log(length)
    //   console.log(head.next.data)
    return getListLength(head.next, length + 1);
  }
};

//FIND A NODE IN A LINKED LIST BY DATA
//pass in node and search parameter
search = (head, query) => {
  if (head.data == query) {
    //if parameter found, return the node
    return head;
  } else if (head.next != null) {
    //if next is another node, run the search again on that node
    return search(head.next, query); //this is a recursive call on the list,
    //excluding the current node
  } else {
    return null; //in the case that the list does not contain the needed
    //node, handle that case.
  }
};

//create nodes using the class
let n1 = new Node("Monday");
let n2 = new Node("Tuesday");
let n3 = new Node("Wednesday");
let n4 = new Node("Thursday");
let n5 = new Node("FRIDAY");

// add several nodes together
appendNode(n1, n2);
appendNode(n2, n3);
appendNode(n3, n4);
appendNode(n4, n5);

// add literal node to the list
// appendNode(n4, { data: "FRIDAY", next: null });

// console.log("HEAD: ", JSON.parse(JSON.stringify(n1))); //view head, parse to prevent update
// console.log("LIST LENGTH: ", getListLength(n1)); //read length
console.log("FOUND NODE BY QUERY: ", search(n1, "FRIDAY")); //find by query
