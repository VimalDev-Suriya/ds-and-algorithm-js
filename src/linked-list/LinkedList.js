const { Node } = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data, null);

    if (this.head === null) {
      this.head = newNode;
    } else {
      // * need to find the last node of linkedlist and then we need to add them at the last

      // * creating the local copy
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  printLL() {
    let temp = this.head;

    console.log('Printing the Linked list data');
    while (temp !== null) {
      console.log(temp.data);

      temp = temp.next;
    }

    console.log(`Stringified LL ${JSON.stringify(this.head)}`);
  }

  insertElementInKthPosition(data, position) {
    // * If there is no LL
    if (this.head === null) {
      if (position === 1) {
        const newNode = new Node(data, null);

        this.head = newNode;
      } else {
        this.head = null;
      }
    }

    // * If there is LL
    if (position === 1) {
      const newNode = new Node(data, null);

      newNode.next = this.head;

      this.head = newNode;
    }

    let counter = 0;
    let temp = this.head;

    while (temp !== null) {
      counter++;

      if (counter === position - 1) {
        const newNode = new Node(data, null);

        newNode.next = temp.next;
        temp.next = newNode;
      }

      temp = temp.next;
    }
  }
}

module.exports = {
  LinkedList,
};
