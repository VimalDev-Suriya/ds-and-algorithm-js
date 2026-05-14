/**
 * Selection Sort
 * @param {[]} arr
 * @returns {[]}
 *
 * A Algorithm which is some how combination of bubble (passes) and insertion (sorted & unsorted array) sort.
 *
 * ALGORITHM:
 * 1. Here we will consider the entire given array as the unsorted array, So loop ("i") starts from 0 and ends with pass = length - 1 or < n
 * 2. First element position is consider as the minimum value.
 * 3. Another inner loop to determin the minimum value, which starte from "j" = i+1, because we start from next element of the "i".
 * 4. if min value was changed, then swap the current min (min) to older min (a[i])
 *
 * Time Complexity - O(n^2) - 2 O(n-1)* O(n) loops will be exuted for n times under worst case.
 * Space complexity - O(1) - only having one variable to store the min - so always constant
 */
const selection_sort_asc = (arr = []) => {
  const len = arr.length;
  const pass = len - 1;
  let min;

  for (let i = 0; i < pass; i++) {
    // Assining the initial value to min
    min = i;

    // Determining the position of min number in unsorted array
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // * Determining whther the min was changed or not, if yes then swap
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
};

module.exports = {
  selection_sort_asc,
};
