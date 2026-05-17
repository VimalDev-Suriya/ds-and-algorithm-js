class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 1. Add a node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // If list is empty, head and tail are the same node
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Complete the circle
    } else {
      // Tail currently points to head. Update it to point to the new node.
      this.tail.next = newNode;
      // The new node becomes the new tail
      this.tail = newNode;
      // Complete the circle by pointing the new tail back to head
      this.tail.next = this.head;
    }
  }

  // 2. Print the list elements
  display() {
    if (!this.head) {
      console.log('List is empty');
      return;
    }

    let current = this.head;
    let result = '';

    // Because it's circular, a standard 'while(current)' loop will cause an infinite loop.
    // We use a do-while loop to ensure we visit the head, then loop until we hit head again.
    do {
      result += current.data + ' -> ';
      current = current.next;
    } while (current !== this.head);

    console.log(result + '(Back to Head: ' + this.head.data + ')');
  }

  // 3. Delete a node by its value
  delete(value) {
    if (!this.head) return;

    let current = this.head;
    let prev = this.tail; // Start prev at tail because tail connects to head

    do {
      if (current.data === value) {
        // Case 1: If there's only one node in the list
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
          return;
        }

        // Case 2: If we are deleting the head node
        if (current === this.head) {
          this.head = this.head.next;
          this.tail.next = this.head; // Redo the circle
        }
        // Case 3: If we are deleting the tail node
        else if (current === this.tail) {
          this.tail = prev;
          this.tail.next = this.head; // Redo the circle
        }
        // Case 4: Deleting a node in the middle
        else {
          prev.next = current.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }
}

const cll = new CircularSinglyLinkedList();
cll.append(1);
cll.append(2);
console.log(cll);
cll.display();

const isCircularLinkedList = (head) => {
  let currentNode = head;

  let fast = head;
  let slow = head;
  let isCircular = false;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) {
      isCircular = true;
      break;
    }
  }

  console.log(head, isCircular);

  return isCircular;
};

isCircularLinkedList(cll.head);
