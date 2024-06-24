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

  // remove the first node and return its value
  shift() {
    if (this.head === null && this.tail === null) {
      return undefined;
    }

    var head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      var newHead = head.next;
      newHead.prev = null;
      this.head = newHead;
      head.next = null;
    }

    this.length--;
    return head;
  }

  // return the list
  unshift(val) {
    var newNode = new Node(val);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // return node once it found
  // return null if not found
  get(index) {
    var half = this.length / 2;
    if (index < half) {
      return this.getFromHead(index);
    } else {
      return this.getFromTail(index);
    }
  }

  getFromHead(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var currentNode = this.head;
    var currentIndex = 0;
    while (currentNode) {
      if (index === currentIndex) {
        return currentNode;
      }
      currentNode.next;
      currentIndex++;
    }
  }

  getFromTail(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var currentNode = this.tail;
    var currentIndex = this.length - 1;
    while (currentNode) {
      if (index === currentIndex) {
        return currentNode;
      }
      currentNode.prev;
      currentIndex--;
    }
  }

  // replace the value of node
  // return true when find the node and update success
  // return false when node is not found
  set(index, val) {
    var node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    } else {
      return false;
    }
  }

  //add a node in certain position
  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    } else {
      var prevNode = this.get(index - 1);
      if (prevNode) {
        var newNode = new Node(val);
        var temp = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = temp;
        temp.prev = newNode;

        this.length++;
      }
      return false;
    }
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
list.push(3);
list.push(5);
list.push(7);
list.output();
list.shift();
list.output();
list.outputReverse();
list.shift();
list.shift();
list.output();
list.shift();
list.output();
list.unshift(10);
list.output();
list.unshift(20);
list.output();
console.log(list.get(-1));
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.set(1, 25));
list.output();
console.log(list.set(2, 50));
list.output();
