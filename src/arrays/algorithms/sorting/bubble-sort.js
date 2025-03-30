/**
 * Bubble Sort
 * @param {[]} arr
 * @returns {[]} "Sorted array"
 *
 * The easiet algorithm used to sort the array, which swap the element based on the condition (either largest or smallest)
 * for each set of passes.
 *
 * It has the series of passes which will be done for arr.length - 1 (pass). For passes we use "i"
 * To loop each item and swapping in array we use "j"
 *
 * *Each pass will bubble the largest element(while doing ascending order) to the last position of array*
 *
 * Time complexity (Worst case) - {O(n^2)}
 * Space complexity - {O(1)}
 *
 * Optimisation in Bubble sort
 * 1. Limiting the swapping
 * 2. Limiting the passes (use the flag) - if we are not providing this, we will be simply executing the unnessacry passes.
 *
 * @example
 * input array => [15, 16, 6, 8, 5];
 * At the end of
 * pass 1 => [15, 6, 8, 5, 16]; Here the 16 is the largest element.
 * pass 2 => [6, 8, 5, 15, 16]; Here the 15 is the Second largest element.
 * Final pass will have the final soted array
 * 
 * PSEUDO CODE
 * 
 * BubbleSort(arr):
    n = length of arr
    for i = 0 to n-1:
        swapped = false
        for j = 0 to n-i-2:
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])
                swapped = true
        if not swapped:
            break  // Array is already sorted, exit early
 */

const bubble_sort_asc = (arr = []) => {
  const arr_length = arr.length;
  const pass = arr_length - 1;
  let flag = 0;

  for (let i = 0; i < pass; i++) {
    flag = 0;
    // * the j is limited to i & arr_length because we know sorted elements is directly proportional to passes,
    // which means for each passes the corresponding elemnt will be sorted eg for 1st passs the last element willbe sorted, for 2nd pass the last 2 element will be sorted
    for (let j = 0; j < arr_length - i; j++) {
      // * below condition determins whether the code is ascending or decending.
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = 1;
      }
    }

    // * This breaks the unnessacery passes
    if (flag === 0) {
      break;
    }
  }

  return arr;
};

module.exports = {
  bubble_sort_asc,
};
