class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (value < parentValue) break;

      this.values[parentIndex] = value;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }

  //remove
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return max;
  }

  bubbleDown() {
    var index = 0;
    var length = this.values.length;

    while (true) {
      var leftChildIndex = 2 * index + 1;
      var rightChildIndex = 2 * index + 2;
      var value = this.values[index];

      var valueLeftChild = this.values[leftChildIndex];
      var valueRightChild = this.values[rightChildIndex];

      if (
        leftChildIndex < length &&
        rightChildIndex < length &&
        valueLeftChild > value &&
        valueRightChild > value
      ) {
        if (valueLeftChild > valueRightChild) {
          //swap left
          this.values[index] = valueLeftChild;
          this.values[leftChildIndex] = value;
          index = leftChildIndex;
        } else {
          //swap right
          this.values[index] = this.values[rightChildIndex];
          this.values[rightChildIndex] = value;
          index = rightChildIndex;
        }
      } else if (leftChildIndex < length && valueLeftChild > value) {
        //swap left
        this.values[index] = valueLeftChild;
        this.values[leftChildIndex] = value;
        index = leftChildIndex;
      } else if (rightChildIndex < length && valueRightChild > value) {
        //swap right
        this.values[index] = this.values[rightChildIndex];
        this.values[rightChildIndex] = value;
        index = rightChildIndex;
      } else {
        // no swap
        break;
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap);

// [41, 39, 33, 18, 27, 12]
//  0    1   2   3   4   5

heap.insert(55);
console.log(heap);

// [55, 39, 41, 18, 27, 12, 33]
//  0    1   2   3   4   5   6

console.log(heap.extractMax());
console.log(heap);
//41, 39, 33, 18, 27, 12

console.log(heap.extractMax());
console.log(heap);
//39, 27, 33, 18, 12
