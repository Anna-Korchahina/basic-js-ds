const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    if (this.stack.length > 0) {
      const lastElem = this.stack[this.stack.length - 1];
      this.stack.pop();
      return lastElem;
    } else {
      return undefined;
    }
  }

  peek() {
    if (this.stack.length > 0) {
      const lastElem = this.stack[this.stack.length - 1];
      return lastElem;
    } else {
      return undefined;
    }
  }
}

module.exports = {
  Stack
};
