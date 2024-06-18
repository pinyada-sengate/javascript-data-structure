class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // return doubly lisked list
  push(val) {
    var newNode = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      var prev = this.tail;
      this.tail = newNode;
      prev.next = newNode;
      newNode.prev = prev;
    }
    this.length++;
    return this;
  }

  // return undefined if no node in the list
  // remove the last node and return that node
  pop() {
    if (this.head === null && this.tail === null) {
      return undefined;
    }

    var tail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      tail.next = null;
      var prev = tail.prev;
      prev.next = null;
      this.tail = prev;
    }

    this.length--;
    return tail;
  }

  output() {
    var str = "";
    var currentNode = this.head;
    for (var i = 0; i < this.length; i++) {
      str += `${currentNode.val} `;
      currentNode = currentNode.next;
    }
    console.log(str);
  }

  outputReverse() {
    var str = "";
    var currentNode = this.tail;
    for (var i = this.length - 1; i >= 0; i--) {
      str += `${currentNode.val} `;
      currentNode = currentNode.prev;
    }
    console.log(str);
  }
}

var list = new DoublyLinkedList();
list.push(1);
list.output();
list.push(3);
list.push(5);
list.push(7);
list.output();
list.outputReverse();
list.pop();
list.output();
list.outputReverse();
console.log(list.pop());
list.pop();
console.log(list.pop());
list.output();
list.outputReverse();
