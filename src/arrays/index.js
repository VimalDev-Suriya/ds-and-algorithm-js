const { MyCustomArray } = require('./array-ds-creation');
const maxSumSubarray = require('./algorithms/2-pointers(Sliding-window)/constant-window');

/*
    A Custom creation of Array DS using the JS Objects.
    * uncomment the below code to execute the below

    const arr = new MyCustomArray();
    arr.push('a');
    arr.push('b');
    arr.push('c');
    console.log('Array Data', arr);
    console.log('Get first element from array is: ', arr.get(0));
    console.log('Array Data', arr);
    console.log('Popping out the last element from array: ', arr.pop());
    console.log('Shifting the element in array: ', arr.shift('d'));
    console.log('Array Data', arr);
    console.log('Un Shifting the element in array: ', arr.unshift());
    console.log('Array Data', arr);
    arr.push('c');
    arr.push('d');
    console.log('Pushed Data into array', arr);
    console.log('Deleted the data in position 1', arr.delete(1));
    console.log('Final array', arr);
*/

/**
 * Maximum Subarrray
 */
const maxSubArrayConstantWindow = maxSumSubarray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(
  'Maximum sum for the subArray with Constant(K=3) window',
  maxSubArrayConstantWindow
);
