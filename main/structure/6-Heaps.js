//find children --> 2n+1 2n+2
//find parent --> (n-1)/2 and floor it

class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    
    while(index > 0) {
      let parentIndex = Math.floor((index - 1)/2);
      let parent = this.values[parentIndex];
      if(element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while(true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if(leftChild > element)  {
          swap = leftChildIndex;
        }
      }
      if(rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if(
          //if both children are larger --> we have to take the largest
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
          )  {
          swap = rightChildIndex;
        }
      }
      if(swap === null) break;
      //actually swapping now
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}