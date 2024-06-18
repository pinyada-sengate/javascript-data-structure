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
