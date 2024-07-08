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
      let parentValue = this.valuesp[parentIndex];

      if (value < parentValue) break;

      this.values[parentIndex] = value;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }
}

// [41, 39, 33, 18, 27, 12]
//  0    1   2   3   4   5
