let table = [];

class StackModulo {
  constructor(modulo) {
    this.modulo = modulo - 1;
    this.top;
  }
  isEmpty() {
    return table[this.modulo] === undefined;
  }
  pop() {
    if (table[this.modulo] === undefined) {
      throw new Error("Stack is empty, nothing to pop");
    }
    const element = table[this.top];
    table[this.top] = undefined;
    this.top -= 3;
    if (this.top < 0) {
      this.top = undefined;
    }
    return element;
  }
  push(element) {
    if (this.top === undefined) {
      this.top = this.modulo;
    } else {
      this.top += 3;
    }
    table[this.top] = element;
  }
}

let stack1 = new StackModulo(1);
let stack2 = new StackModulo(2);
let stack3 = new StackModulo(3);
stack1.push("a");
stack1.push("b");
stack1.push("c");
stack1.push("d");
stack1.pop();
stack2.push("e");
stack2.push("f");
stack2.push("g");
stack2.pop();
stack3.push("h");
stack3.push("i");
stack3.pop();
stack3.pop();
console.log(table);

//[ 'a',
// 'e',
// undefined,
// 'b',
// 'f',
// undefined,
// 'c',
// undefined,
// <1 empty item>,
// undefined ]
