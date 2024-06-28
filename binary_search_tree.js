class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //go to the left
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          //go to the right
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }

  // return true if found the node
  // return false if node not found
  search(value) {
    if (this.root === null) return false;

    var currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return true;

      if (value < currentNode.value) {
        // to the left
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        //to the right
        currentNode = currentNode.right;
      }
    }

    return false;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
