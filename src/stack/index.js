const { StackUsingArray } = require('./StackArrayImpl');

const stackArr = new StackUsingArray();

stackArr.push('a');
stackArr.push('b');
stackArr.push('c');
stackArr.push('d');

stackArr.print();

stackArr.pop();
stackArr.print();

console.log('Top data', stackArr.getTopData());
console.log('Length', stackArr.getLength());
