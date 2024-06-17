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

  // take the index and return the node
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    var node = this.head;
    for (var i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  // change the value of a node based on the index
  // return false if the node not found
  // if the node is found, set the value and return true
  set(index, val) {
    var node = this.get(index);

    if (node === null) return false;

    node.val = val;

    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unShift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      var newNode = new Node(val);
      var prevNode = this.get(index - 1);
      var temp = prevNode.next;
      prevNode.next = newNode;
      newNode.next = temp;
      this.length++;
    }

    return true;
  }

  // return the removed node
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      var prevNode = this.get(index - 1);
      var removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
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

  reverse() {
    // switch head and tail
    var temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    var currentNode = this.tail.next;
    var prevNode = this.tail;
    var next;
    while (currentNode) {
      next = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = next;
    }
  }
}

var list = new SinglyLinkedList();
list.push(10);
// list.output();
// list.insert(0, 1);
// list.output();
// list.insert(2, 33);
// list.output();
// list.insert(1, 5);
list.output();
list.reverse();
list.output();
