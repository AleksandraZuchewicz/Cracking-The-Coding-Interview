class Queue {
  constructor() {
    this.queue = [];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  push(element) {
    this.queue[this.queue.length] = element;
  }
  pop() {
    if (this.queue.length === 0) {
      throw new Error("Queue is empty, nothing to pop");
    }
    const element = this.queue[0];
    this.queue = this.queue.slice(1, this.queue.length);
    return element;
  }
  peek() {
    return this.queue[this.queue.length - 1];
  }
}

let newQueue = new Queue();
console.log(newQueue.isEmpty());
try {
  newQueue.pop();
} catch (e) {
  console.log("error was thrown!");
}
newQueue.push(1);
console.log(newQueue);
newQueue.pop();
console.log(newQueue);
