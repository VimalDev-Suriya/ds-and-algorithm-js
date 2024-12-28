const { MyCustomArray } = require('./array-ds-creation');
const maxSumSubarray = require('./algorithms/2-pointers(Sliding-window)/constant-window');
const reverse_array = require('./reverse-array');
const { bubble_sort_asc } = require('./algorithms/sorting/bubble-sort');
const { insertion_sort_asc } = require('./algorithms/sorting/insertion-sort');
const { selection_sort_asc } = require('./algorithms/sorting/selection-sort');
const { quick_sort_asc } = require('./algorithms/sorting/quick-sort');
const {
  merge_sort_asc,
} = require('./algorithms/sorting/merge-sort/merge-sort');
const {
  minValueInArray_1,
  minValueInArray_2,
  minValueInArray_3,
} = require('./min-val-in-array');
const { mergeSort } = require('./algorithms/sorting/merge-sort/merge-sort-1');

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
// const maxSubArrayConstantWindow = maxSumSubarray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// console.log(
//   'Maximum sum for the subArray with Constant(K=3) window',
//   maxSubArrayConstantWindow
// );

console.log('Reversed Array: ', reverse_array([1, 2, 3, 4, 5, 6]));
console.log('Minimum value in Array: ', minValueInArray_1([15, 16, 3, 8, 5]));
console.log('Minimum value in Array: ', minValueInArray_2([15, 16, 2, 8, 5]));
console.log('Minimum value in Array: ', minValueInArray_3([15, 16, 2, 8, 5]));
console.log(
  'Bubble Sort | Sorted Array in Ascending: [15, 16, 6, 8, 5] -> ',
  bubble_sort_asc([15, 16, 6, 8, 5])
);
console.log(
  'Inseration Sort | Sorted Array in Ascending: [15, 16, 6, 8, 5] -> ',
  insertion_sort_asc([15, 16, 6, 8, 5])
);
console.log(
  'Selection Sort | Sorted Array in Ascending: [7, 4, 10, 8, 3, 1] -> ',
  selection_sort_asc([7, 4, 10, 8, 3, 1])
);
console.log(
  'Quick Sort | Sorted Array in Ascending: [7, 4, 10, 8, 3, 1] -> ',
  quick_sort_asc([7, 4, 10, 8, 3, 1])
);
console.log(
  'Merge Sort | Sorted Array in Ascending: [7, 4, 10, 8, 3, 1] -> ',
  merge_sort_asc([7, 4, 10, 8, 3, 1])
);
console.log(
  'Merge Sort | Sorted Array in Ascending: [15, 16, 6, 8, 5] -> ',
  merge_sort_asc([15, 16, 6, 8, 5])
);
console.log(
  'Merge Sort | Sorted Array in Ascending: [7, 4, 10, 8, 3, 1] -> ',
  mergeSort([7, 4, 10, 8, 3, 1])
);
