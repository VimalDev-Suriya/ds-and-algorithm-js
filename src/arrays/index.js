const { MyCustomArray } = require('./array-ds-creation');
const maxSumSubarray = require('./algorithms/2-pointers(Sliding-window)/constant-window');
const reverse_array = require('./problems/easy/reverse-array');
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
} = require('./problems/easy/min-val-in-array');
const { mergeSort } = require('./algorithms/sorting/merge-sort/merge-sort-1');
const { maxValueinArray } = require('./problems/easy/max-val-in-array');
const {
  secondLargestElementInArr,
} = require('./problems/easy/second-largest-element');
const { rotateArray } = require('./problems/easy/rotate-array');
const { removeDuplicates } = require('./problems/easy/remove-duplicates');
const { moveAllZeros } = require('./problems/easy/move-all-zero');
const { unionOfSortedArray } = require('./problems/easy/union-of-sorted-array');
const {
  intersectionOfSortedArray,
} = require('./problems/easy/intersection-sorted-arr');
const { findMissingNumber } = require('./problems/easy/find-missing-num');
const {
  maximumConsecutiveOnes,
} = require('./problems/easy/maxium-consecutiveone');
const {
  sumeOfPositiveSubarray,
} = require('./problems/medium/possitve-k-subarray');

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
  'Quick Sort | Sorted Array in Ascending: [7, 4, 10, 9, 8, 3, 1] -> ',
  quick_sort_asc([7, 4, 10, 9, 8, 3, 1])
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
console.log(
  'Maximum value [15, 16, 3, 8, 5] is => ',
  maxValueinArray([15, 16, 3, 8, 5])
);
console.log(
  'Second largest value [7, 4, 10, 8, 3, 1] is => ',
  secondLargestElementInArr([7, 4, 10, 8, 3, 1])
);
console.log(
  'Second largest value [1, 1, 1, 1] is => ',
  secondLargestElementInArr([1, 1, 1, 1])
);
console.log(
  'Rotate the array [1, 2, 3, 4, 5, 6, 7], 3 times and the result is =>',
  rotateArray([1, 2, 3, 4, 5, 6, 7], 3)
);
console.log(
  'Remove the duplicates from sorted [1, 1, 2, 2, 3, 3] => ',
  removeDuplicates([1, 1, 2, 2, 3, 3])
);
console.log(
  'Move all the Zeros [1, 0, 2, 0, 3, 0, 0, 4, 0] => ',
  moveAllZeros([1, 0, 2, 0, 3, 0, 0, 4, 0])
);
console.log(
  'Union of 2 sorted arrays [1, 1, 3, 3, 6], [2, 5, 5, 8] => ',
  unionOfSortedArray([1, 1, 3, 3, 6], [2, 5, 5, 8])
);
console.log(
  'Intersection of 2 sorted array =>',
  intersectionOfSortedArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
);
console.log('Find the missing number =>', findMissingNumber([1, 2, 4, 5], 5));
console.log(
  'Maxium consecutive ones in athe array =>',
  maximumConsecutiveOnes([1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1])
);
console.log(
  'Maxium Subarray [1, 2, 3, 1, 1, 1, 1, 4, 2, 3] with K=3=>',
  sumeOfPositiveSubarray([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)
);
