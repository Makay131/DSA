class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while(true) {
      if(value === current.value) return undefined;
      if(value < current.value) {
        if(current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if(value > current.value) {
        if(current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
find(value) {
    if(this.root === null) return false;
    let current = this.root;
    while(current) {
      if(value < current.value) current = current.left;
      else if(value > current.value) current = current.right;
      else return true;
    }
    return false;
  }
  //TRAVERSING
  breadthFirstSearch() {
    let node = this.root;
    const result = [];
    const queue = [];
    queue.push(node);
    
    while(queue.length) {
      node = queue.shift();
      result.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return result;
  }
  depthFirstSearchPreOrder() {
    const result = [];
    function traverse(node) {
      result.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
  DFSPostOrder() {
    const result = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
  DFSInOrder() {
    const result = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }
}

const tree = new BinarySearchTree();

//RECURSIVE INSERT
/*
insert(value, current = this.root) {
  const newNode = new Node(value);

  if (!this.root) {
    this.root = newNode;
    return this;
  }

  if (value === current.value) return undefined;

  if (value < current.value) {
    if (!current.left) {
      current.left = newNode;
      return this;
    }
    return this.insert(value, current.left);
  } else {
    if (!current.right) {
      current.right = newNode;
      return this;
    }
    return this.insert(value, current.right);
  }
}
*/

/*
BREADTH VS DEPTH

if the tree is wider than its depth, we have to store a lot of stuff in our queue array so that is space complexity gg!!!
but if everything occurs on the right.right.right --> 1 thing in the queue always so depth search sucks there.
but not so much of a real scenario

DFS-InOrder is good for ordering result, cuz at the end it gives you an ordered result
DFS-PreOrder is good for exporting/copying the same list. otherwise you would be asking who was the root etc.

*/