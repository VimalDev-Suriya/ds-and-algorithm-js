const { LinkedList } = require('./LinkedList');

const node = new LinkedList();

node.append(1);
node.append(2);
node.append(3);

console.log(JSON.stringify(node));

node.printLL();

node.insertElementInKthPosition(10, 4);
node.printLL();
