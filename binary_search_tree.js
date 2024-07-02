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
  //10, 6, 15, 3, 8, 20
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

  //Depth First Search
  //10, 6, 3, 8, 15, 20
  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  //Defpth First Search
  //3, 8, 6, 20, 15, 10
  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  //3 6, 8, 10, 15, 20
  DFSInOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

//      10
//    6     15
//  3   8       20

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
