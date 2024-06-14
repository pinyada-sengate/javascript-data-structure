class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node at the end
  push(val) {
    var node = new Node(val);

    if (this.head === null && this.tail === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  // remove a node from the end
  // return the removed node
  pop() {
    if (this.head === null && this.tail === null) {
      return undefined;
    }

    // find the 2nd to last node
    var prevNode = this.head;
    for (var i = 1; i < this.length - 1; i++) {
      prevNode = prevNode.next;
    }

    //remove last node
    var lastNode = prevNode.next;
    prevNode.next = null;
    this.tail = prevNode;
    this.length--;

    // reset head and tail when no node in the list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return lastNode;
  }

  //remove and return the first node
  shift() {
    if (this.head === null && this.tail === null) {
      return undefined;
    }

    var firstNode = this.head;
    this.head = firstNode.next;

    this.length--;

    // reset tail when no node in the list
    if (this.length === 0) {
      this.tail = null;
    }

    return firstNode;
  }

  // add a new node to the begining of the linked list
  unShift(val) {
    var newNode = new Node(val);

    // empty linked list
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  output() {
    var str = "";
    var currentNode = this.head;
    for (var i = 0; i < this.length; i++) {
      str += ` ${currentNode.val}`;
      currentNode = currentNode.next;
    }

    console.log(str);
  }
}

var list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.output();
list.pop();
list.output();
list.pop();
list.pop();
list.output();
list.push(1);
list.push(2);
list.push(5);
list.output();
list.shift();
list.shift();
list.output();
list.shift();
list.output();
list.push(100);
list.push(120);
list.push(130);
list.output();
list.unShift(99);
list.unShift(88);
list.output();
list.shift();
list.output();
