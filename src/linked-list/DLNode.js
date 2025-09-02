class DLNode {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }

  // * JS does not support multi constructor
  //   constructor(data) {
  //     this.data = data;
  //     this.next = null;
  //     this.prev = null;
  //   }
}

module.exports = {
  DLNode,
};
