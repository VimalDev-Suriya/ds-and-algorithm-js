/**
 * Returns the length of the longest subarray with sum K (2 pointer)
 * NOTE: THIS WILL WORK ONLY FOR THE ARRAY THAT HAS ONLY +ve & 0's elements, For -ve we should be using hash map.
 * @param {Array} arr a array
 * @param {Number} k a sum of the subarray
 * @return {Number} Length of the longest subarray with sum K
 *
 * @example
 * longestSubarrayWithKSum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3); // 3
 *
 * @complexities
 * TC - O(n)
 * SP: O(1)
 */
const longestSubarrayWithKSum = (arr = [], k) => {
  if (!Array.isArray(arr) || arr.length === 0) return 0;

  let left = 0;
  let maxLength = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    // * This will work
    // if (sum > k) {
    //   sum -= arr[left];
    //   left++;
    // }

    // * this looks like O(n^2), but its not, Since untill sum is less it will execute
    while (sum > k && left <= right) {
      sum -= arr[left];
      left++;
    }

    if (sum === k) {
      maxLength = Math.max(right - left + 1, maxLength); // * Added 1 here, since the array starts with 0, but we should return the length
    }
  }

  return maxLength;
};

console.log(longestSubarrayWithKSum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)); // length = 3
console.log(longestSubarrayWithKSum([3, 4, 2, 3, 2, 4, 2], 12)); // length = 4
console.log(longestSubarrayWithKSum([0, 0, 0, 3, 0, 0], 3)); // length = 6
console.log(longestSubarrayWithKSum([0, 0, 0, 3, 0, 0], 0)); // length = 3
