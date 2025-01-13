// Using the set data structure
// * O(n) - can be used even for unsorted array.
// const removeDuplicates = (arr = []) => [...new Set(arr)];

/**
 *
 * @param {*} arr
 *
 * Using 2 pointer
 * Eg: [1, 1, 2, 2, 3, 3]
 * i=0; j=1; | arr[i] (1) !== arr[j] (1) false |                      | [1, 1, 2, 2, 3, 3]
 * i=0; j=2  | arr[i] (1) !== arr[j] (2) true  | i++; arr[i] = arr[j] | [1, 2, 2, 2, 3, 3]
 * i=1; j=3  | arr[i] (1) !== arr[j] (2) false |                      | [1, 2, 2, 2, 3, 3]
 * i=1; j=4  | arr[i] (1) !== arr[j] (2) true  | i++; arr[i] = arr[j] | [1, 2, 3, 2, 3, 3]
 * i=2
 *
 */

// * This algorithm works only for SORTED ARRAY.
const removeDuplicates = (arr = []) => {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return arr.slice(0, i + 1);
};

module.exports = {
  removeDuplicates,
};
