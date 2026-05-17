class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // Adding the data
      this.tail = newNode;
    }

    this.length++;

    return this.length;
  }

  pop() {
    if (!this.head) return null;

    let currentHead = this.head;

    if (currentHead.next === null) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentHead;
    }

    let newTail;

    while (currentHead.next) {
      newTail = currentHead;
      currentHead = currentHead.next;
    }

    newTail.next = null;
    this.tail = newTail;
    this.length--;

    return currentHead;
  }

  // * Fast and slow pointer
  // * Works in both Singly and doubly linked list
  getMid() {
    let currentNode = this.head;

    // Initializing both fast and slow in the head
    let fast = currentNode;
    let slow = currentNode;

    while (fast !== null && fast.next !== null) {
      slow = slow.next; // moving 1 step
      fast = fast.next.next; // moving 2 steps
    }

    // The Slow pointer will hold the mid node
    return slow;
  }
}
