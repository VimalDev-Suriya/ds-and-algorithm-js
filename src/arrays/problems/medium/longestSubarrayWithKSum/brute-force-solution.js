/**
 * Returns the length of the longest subarray with sum K.
 * @param {Array} arr a array
 * @param {Number} k a sum of the subarray
 * @return {Number} Length of the longest subarray with sum K
 *
 * @example
 * longestSubarrayWithKSum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3); // 3
 *
 * @complexities
 * TC - O(n^2)
 * SP: O(1)
 */
const longestSubarrayWithKSum = (arr = [], k) => {
  let sum = 0;
  let counter = 0;
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i]; // adding the first element
    counter = 1; // re-initiating counter for every subarray

    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      counter++;

      if (sum === k) {
        max = Math.max(counter, max);
      }

      if (sum > k) break; // to prevent unwanted looping
    }
  }

  return max;
};

console.log(longestSubarrayWithKSum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)); // length = 3
console.log(longestSubarrayWithKSum([3, 4, 2, 3, 2, 4, 2], 12)); // length = 4
console.log(longestSubarrayWithKSum([0, 0, 0, 3, 0, 0], 3)); // length = 4
