const { DoublyLinkedList } = require('./DoublyLinkedList');
const { LinkedList } = require('./LinkedList');
const { oddEvenNodes } = require('./problems/oddEvenNodes');
const { sumLL } = require('./problems/sum-2-ll');

function printll(ll) {
  let temp = ll;

  while (temp) {
    console.log(temp.data);

    temp = temp.next;
  }
}

const node = new LinkedList();

node.append(1);
node.append(2);
node.append(3);
node.append(4);

// console.log(JSON.stringify(node));

const oddEvenNodeHead = oddEvenNodes(node.head);

printll(oddEvenNodeHead);

// node.printLL();

// node.insertElementInKthPosition(10, 4);
// node.printLL();

// node.deleteNodeinKthPosition(1);
// node.printLL();

// * Doubly linked list
// const dllNode = new DoublyLinkedList();

// dllNode.insertElementInKthPosition('x', 10);
// dllNode.add(1);
// dllNode.add(2);
// dllNode.add(3);
// dllNode.add(4);
// dllNode.add(5);
// dllNode.print();

// // dllNode.insertElementInKthPosition(100, 1);
// dllNode.insertElementInKthPosition(200, 5);
// dllNode.print();

// dllNode.deleteNodeInKthPosition(5);
// dllNode.deleteNodeInKthPosition(1);
// dllNode.deleteNodeInKthPosition(120);
// dllNode.print();

// dllNode.reverseDLL();
// dllNode.print();

// const dllNode2 = new DoublyLinkedList();

// dllNode.insertElementInKthPosition('x', 10);
// dllNode2.add(6);
// dllNode2.add(7);
// dllNode2.add(8);

// dllNode2.print();

// const summedll = sumLL(dllNode.head, dllNode2.head);

// console.log('summ ll print');
// printll(summedll);
