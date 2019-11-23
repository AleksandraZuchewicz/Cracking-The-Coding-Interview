//1. In-order traversal  - means to visit the left brach then the current node and finnaly the right brach
//2. Pre-order traversal - visit current node and then children(left than right)
//3. Post-order traversal - children(left, right) than current node
class BinaryTree {
  constructor() {
    this.root = null;
  }
}
class Node {
  constructor(data) {
    this.data = data;
    this.rightChild = null;
    this.leftChild = null;
  }
}
let table = [];
let tableInsert = function(data) {
  table.push(data);
};
//Ad.1
function inOrderTraversal(node, visitFunction) {
  if (node.leftChild != null) {
    inOrderTraversal(node.leftChild, visitFunction);
  }
  visitFunction(node.data);
  if (node.rightChild != null) {
    inOrderTraversal(node.rightChild, visitFunction);
  }
}

//Ad.2
function preOrderTraversal(node, visitFunction) {
  visitFunction(node.data);
  if (node.leftChild != null) {
    preOrderTraversal(node.leftChild, visitFunction);
  }
  if (node.rightChild != null) {
    preOrderTraversal(node.rightChild, visitFunction);
  }
}

//Ad.3
function postOrderTraversal(node, visitFunction) {
  if (node.leftChild != null) {
    postOrderTraversal(node.leftChild, visitFunction);
  }
  if (node.rightChild != null) {
    postOrderTraversal(node.rightChild, visitFunction);
  }
  visitFunction(node.data);
}

let newBinaryTree = new BinaryTree();
let newNode1 = new Node(8);
let newNode2 = new Node(4);
let newNode3 = new Node(10);
let newNode4 = new Node(2);
let newNode5 = new Node(6);
let newNode6 = new Node(9);
let newNode7 = new Node(30);
newNode1.leftChild = newNode2;
newNode1.rightChild = newNode3;
newNode2.leftChild = newNode4;
newNode2.rightChild = newNode5;
newNode3.leftChild = newNode6;
newNode3.rightChild = newNode7;
newBinaryTree.root = newNode1;

inOrderTraversal(newBinaryTree.root, tableInsert);
console.log(table);
table = [];
preOrderTraversal(newBinaryTree.root, tableInsert);
console.log(table);
table = [];
postOrderTraversal(newBinaryTree.root, tableInsert);
console.log(table);

//[ 2, 4, 6, 8, 9, 10, 30 ]
//[ 8, 4, 2, 6, 10, 9, 30 ]
//[ 2, 6, 4, 9, 30, 10, 8 ]
