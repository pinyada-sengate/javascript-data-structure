//min binary heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const data = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (data.priority >= parent.priority) break;

      this.values[parentIndex] = data;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
  }

  bubbleDown() {
    var index = 0;
    var length = this.values.length;

    while (true) {
      var leftChildIndex = 2 * index + 1;
      var rightChildIndex = 2 * index + 2;
      var data = this.values[index];

      var leftChild = this.values[leftChildIndex];
      var rightChild = this.values[rightChildIndex];

      if (
        leftChildIndex < length &&
        rightChildIndex < length &&
        leftChild.priority < data.priority &&
        rightChild.priority < data.priority
      ) {
        if (leftChild.priority < rightChild.priority) {
          //swap left
          this.values[index] = leftChild;
          this.values[leftChildIndex] = data;
          index = leftChildIndex;
        } else {
          //swap right
          this.values[index] = this.values[rightChildIndex];
          this.values[rightChildIndex] = data;
          index = rightChildIndex;
        }
      } else if (
        leftChildIndex < length &&
        leftChild.priority < data.priority
      ) {
        //swap left
        this.values[index] = leftChild;
        this.values[leftChildIndex] = data;
        index = leftChildIndex;
      } else if (
        rightChildIndex < length &&
        rightChild.priority < data.priority
      ) {
        //swap right
        this.values[index] = this.values[rightChildIndex];
        this.values[rightChildIndex] = data;
        index = rightChildIndex;
      } else {
        // no swap
        break;
      }
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

const task = new PriorityQueue();
task.enqueue("fix minor bug", 5);
task.enqueue("Boss Meeting", 1);
task.enqueue("implement dog feature", 4);
task.enqueue("Daily meeting", 2);
task.enqueue("implement cat feature", 3);
console.log(task);
console.log(task.dequeue());
console.log(task.dequeue());
console.log(task.dequeue());
console.log(task.dequeue());
console.log(task.dequeue());
