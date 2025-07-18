class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      newNode.next = oldFirst;
    }
    return ++this.size;
  }
  pop() {
    if(!this.first) return null;
    const temp = this.first;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}