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

  //Breadth first search
  BFS() {
    var data = [];
    var queue = [];
    queue.push(this.root);

    // loop as long as there is anything in the queue
    var node = null;
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
