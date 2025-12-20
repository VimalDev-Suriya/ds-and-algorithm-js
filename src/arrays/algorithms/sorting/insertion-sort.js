/**
 * Inseration Sort
 * @param {[]} arr
 * @returns {[]} "Sorted array"
 *
 * Another sorting algorithm, which sort the elements and insert the element in appropiate position.
 * It consist of 2 set of arrays
 * 1. Sorted Array (moves towars left) ("j")
 * 2. Unsorted array (moves towards right) ("i")
 *
 * ALGORITHM:
 * Always consider the _first_ element as the sorted one. So unsorted loop always start from 1 index.
 * Consider the temp variable for the a[i] -> First element of the unsorted array.
 * Compare(either ascending or decending) the temp variable value to each elements in the sorted array till the j>=0.
 * if above condition satisfied then move the last element of sorted array(a[j]) to one step right into unsorted array(a[j+1]).
 * if not then assign the value of the temp to a[j+1].
 *
 * sorted array elements - decreases by one
 * unsorted array elements - increases by one
 *
 * Space complexity - O(1) - though we are going to use temp, it will alyes be 1 varaibles
 * Time Complexity - O(n^2) - considering the worst case scenario.
 */
// [15, 16, 6, 8, 5]
const insertion_sort_asc = (arr = []) => {
  let temp;
  const len = arr.length;

  // * Since we are considring the first elemnt as sorted - so loop starts from 1 to n-1
  for (let i = 1; i < len; i++) {
    temp = arr[i];
    let j = i - 1; // * sorted array index.

    // * to loop the sorted array
    while (j >= 0 && temp < arr[j]) {
      // * Shifting the element to 1 step right
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }

  return arr;
};

module.exports = {
  insertion_sort_asc,
};
