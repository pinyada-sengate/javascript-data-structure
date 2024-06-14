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

  output() {
    var currentNode = this.head;
    for (var i = 0; i < this.length; i++) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
}

var list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.output();
