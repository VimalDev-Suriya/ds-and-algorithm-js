/**
 * Stack follows the `LAST IN FIRST OUT`.
 * Used the Array DS to built the Stack
 * @example
 * initial []
 * push(a)
 * result -> [a]
 * push(b)
 * result -> [a, b]
 * push(c)
 * result -> [a, b, c]
 * pop()
 * result -> [a, b]
 * top()
 * result -> "b"
 */
class StackUsingArray {
  constructor() {
    // the pointer that always points the newly added element (~the length of the array)
    this.top = 0;

    // * Using the Array as the base DS to constuct the Stack
    this.stk = [];
  }

  // O(1)
  push(data) {
    this.top++;

    this.stk[this.top - 1] = data;
    // (OR)
    // this.stk[this.stk.length - 1] = data; // I am not using this as the length & top is same.
  }

  // O(1)
  pop() {
    this.top--;

    // * If we need to remove the specific last or First index we can alter the length of the array
    this.stk.length = this.top;
  }

  getTopData() {
    return this.stk[this.top - 1];
  }

  getLength() {
    return this.top;
  }

  print() {
    console.log('Stack', this.stk);
  }
}

module.exports = {
  StackUsingArray,
};
