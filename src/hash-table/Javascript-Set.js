// * Set Data structure in Java script
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(3); // though adding the duplicate 3, we wont get the 3 in set object

console.log(mySet); // {1, 2, 3, 4}
console.log("length", mySet.size);

mySet.delete(3); // true
mySet.delete(1000); // false

console.log("Has set have 2", mySet.has(2));
console.log("Length of set, after deleting the value", mySet.size);

console.log("ENtries", mySet.entries()); // { [ 1, 1 ], [ 2, 2 ], [ 4, 4 ] }
console.log("Keys", mySet.keys()); // Both keys and values are same in Set
console.log("Values", mySet.values());

const arr = [1, 2, 3, 1, 2, 3];
const arraySet = new Set([...arr]); // set instance always expect the iteratables like, array, strings, objects etc. Not number, noolean

console.log(arraySet); // [1, 2, 3]

// I can spread the set object, so that we can convert the set into array.
console.log([...arraySet], [...mySet]); // [1, 2, 3], [1, 2, 3]

arraySet.clear(); // flushes out all the data present

console.log("flushed set", arraySet); // this will not deleted the instance, it will just clear the values

// * looping
mySet.forEach((data) => {
  console.log(data);
});

for (let [key, value] of mySet.entries()) {
  console.log(key, value);
}
