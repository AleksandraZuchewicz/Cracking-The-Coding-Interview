class Stack {
  constructor() {
    this.elements = [];
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  pop() {
    if (this.elements.length === 0) {
      throw new Error("Stack is empty, nothing to pop");
    }
    const element = this.elements[this.elements.length - 1];
    this.elements = this.elements.slice(0, this.elements.length - 1);
    return element;
  }
  push(element) {
    this.elements[this.elements.length] = element;
  }
}
let newStack = new Stack();
console.log(newStack.isEmpty());
try {
  newStack.pop();
} catch (e) {
  console.log("error was thrown!");
}
newStack.push(1);
console.log(newStack);
newStack.pop();
console.log(newStack);
