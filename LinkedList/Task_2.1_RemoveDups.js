// Class definitions
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  search(key) {
    let node = this.head;
    while (node != null && node.key != key) {
      node = node.next;
    }
    return node;
  }
  insert(node) {
    node.next = this.head;
    if (this.head != null) {
      this.head.prev = node;
    }
    this.head = node;
    node.prev = null;
  }
  delete(node) {
    if (node.prev != null) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next != null) {
      node.next.prev = node.prev;
    }
  }
}
class Node {
  constructor(key) {
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

// Set of unit tests for above code
function testSearchGivenEmptyList() {
  const list = prepareEmptyDoublyLinkedList();
  const foundNode = list.search(0);
  assert(foundNode === null);
}
function testSearchGivenListWithSingleElement() {
  const list = prepareDoublyLinkedListWithSingleElement();
  const foundNode = list.search(0);
  assert(foundNode.key === 0);
}
function testInsertGivenEmptyList() {
  const list = prepareEmptyDoublyLinkedList();
  const node = new Node(0);
  list.insert(node);
  assert(list.head === node);
}
function testInsertGivenListWithSingleElement() {
  const list = prepareDoublyLinkedListWithSingleElement();
  const prevHead = list.head;
  const node = new Node(1);
  list.insert(node);
  assert(list.head === node);
  assert(list.head.next === prevHead);
}
function testDeleteGivenEmptyList() {
  const list = prepareEmptyDoublyLinkedList();
  const node = new Node(1);
  list.delete(node);
  assert(list.head === null);
}
function testDeleteGivenListWithSingleElement() {
  const list = prepareDoublyLinkedListWithSingleElement();
  const node = list.search(0);
  list.delete(node);
  assert(list.head === null);
}
function prepareEmptyDoublyLinkedList() {
  return new DoublyLinkedList();
}
function prepareDoublyLinkedListWithSingleElement() {
  const newList = new DoublyLinkedList();
  newList.insert(new Node(0));
  return newList;
}
function assert(test) {
  if (!test) {
    throw new Error("Test failed.");
  }
}

// Run tests
testSearchGivenEmptyList();
testSearchGivenListWithSingleElement();
testInsertGivenEmptyList();
testInsertGivenListWithSingleElement();
testDeleteGivenEmptyList();
testDeleteGivenListWithSingleElement();

//Remove element for doubleLinkedList with dictionary

function removeDuplicates(linkedList) {
  keysDictionary = {};
  let node = linkedList.head;
  while (node != null) {
    if (keysDictionary[node.key] != undefined) {
      linkedList.delete(node);
    } else {
      keysDictionary[node.key] = true;
    }
    node = node.next;
  }
}
function testRemoveDuplicatesGivenListWithDuplicates() {
  const newList = new DoublyLinkedList();
  newList.insert(new Node(4));
  newList.insert(new Node(3));
  newList.insert(new Node(2));
  newList.insert(new Node(3));
  removeDuplicates(newList);
  const keys = [];
  const correctKeys = [3, 2, 4];
  let node = newList.head;
  while (node != null) {
    keys.push(node.key);
    node = node.next;
  }
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] != correctKeys[i] || correctKeys.length != keys.length) {
      throw new Error("Lists are not equal");
    }
  }
}
testRemoveDuplicatesGivenListWithDuplicates();
