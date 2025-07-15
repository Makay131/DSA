class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    const oldTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }
  shift() {
    if(this.length === 0) return undefined;
    const oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if(index < 0 || index >= this.length) return null;
    let current, count;
    if(index <= this.length / 2) {
      count = 0;
      current = this.head;
      while(count !== index) {
        current = current.next;
        count++;
      }
    } else {
        count = this.length - 1;
        current = this.tail;
        while(count !== index) {
          current = current.prev;
          count--;
        }
    }
    return current;
  }
  set(index, val) {
    const foundNode = this.get(index);
    if(foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    
    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    
    this.length++;
    return true;
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return !!this.shift();
    if(index === this.length - 1) return !!this.pop();
    const foundNode = this.get(index);
    const beforeNode = foundNode.prev;
    const afterNode = foundNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
reverse(){
        let current = this.tail;
        for(let i = 0; i < this.length; i++) {
            const temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.next;
        }
        const oldTail = this.tail;
        this.tail = this.head;
        this.head = oldTail;
        return this;
    }
}

const list = new DoublyLinkedList();
