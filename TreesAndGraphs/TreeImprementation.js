class Tree {
  constructor() {
    this.root = null;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

let newTree = new Tree();
newTree.root = new Node("a");
let newNode1 = new Node("b");
let newNode2 = new Node("c");

newTree.root.children = [newNode1, newNode2];
console.log(newTree);
