const { DLNode } = require('./DLNode');

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new DLNode(data, null, null);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;

    while (temp.next !== null) {
      temp = temp.next;
    }

    newNode.prev = temp;
    temp.next = newNode;
  }

  print() {
    let temp = this.head;

    console.log('Doubly linked list data');
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  getLength() {
    let temp = this.head;
    let count = 0;

    while (temp !== null) {
      count++;
      temp = temp.next;
    }

    return count;
  }

  insertElementInKthPosition(data, k) {
    if (this.head === null) {
      console.log(
        'There is no head , so ignoring the K and creating the new node & setting that as new head'
      );

      const newNode = new DLNode(data, null, null);
      this.head = newNode;
      return;
    }

    let temp = this.head;
    let dllLength = 0;
    let isElementFound = false;

    while (temp !== null) {
      dllLength++;

      if (dllLength === k - 1) {
        isElementFound = true;
        break;
      }
      temp = temp.next;
    }

    if (isElementFound) {
      const newNode = new DLNode(data, null, null);

      newNode.next = temp.next;
      newNode.prev = temp;
      temp.next = newNode;

      return;
    }

    console.error('The entered element is out of bound');
  }

  deleteNodeInKthPosition(k) {
    if (this.head === null) {
      console.log('there is no head, so we cannnot delete');
      return;
    }

    if (k === 1) {
      let temp = this.head;

      this.head = temp.next;
      temp.prev = null;
      return;
    }

    let temp = this.head;
    let len = 0;
    let isEleFound = false;

    while (temp !== null) {
      len++;

      if (len === k - 1) {
        isEleFound = true;
        break;
      }

      temp = temp.next;
    }

    if (isEleFound) {
      temp.next = temp.next.next;
      temp.next.prev = temp;
      return;
    }

    console.log('Entered node is not found');
  }

  /**
    * Two ways to reverse the DLL
    1. Iterating over all the data in DLL, and pushing the each data into Stack (yet to learn). Then setting the element in DLL by again iterating over them, by popping out the data from stack. TC -> O(2n) & SC -> O(n) (because of stack)
    2. Swapping the next to prev & prev to next for the each node. TC -> O(n) & SP O(1).

    Eg: 1 -> 2 -> 3 -> 4
    Output 4 -> 3 -> 2 -> 1
   */

  // Using next
  // reverseDLL() {
  //   // * Solution 2
  //   let temp = this.head;
  //   let current;
  //   let newHead;

  //   while (temp !== null) {
  //     // SWAPPING THE POSITIONS

  //     // * Storing the next node as current
  //     current = temp.next;
  //     temp.next = temp.prev;
  //     temp.prev = current;

  //     // * When temp becomes null, then the previous elment will be the head
  //     // * so storing the temp in new variable, to assign them back a head
  //     newHead = temp;
  //     temp = temp.prev;
  //   }

  //   this.head = newHead;
  // }

  // * Using prev
  reverseDLL() {
    let current = this.head;
    let prevNode;

    while (current !== null) {
      // Swapping logic
      prevNode = current.prev;
      current.prev = current.next;
      current.next = prevNode;

      // Loop determinator
      current = current.prev;
    }

    // The prev node holds the second node of DLL, so assining the prev of PREV node
    this.head = prevNode.prev;
  }
}

module.exports = {
  DoublyLinkedList,
};
