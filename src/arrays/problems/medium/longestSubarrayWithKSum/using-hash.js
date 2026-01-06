/**
 * Returns the length of the longest subarray with sum K (Using Hash map)
 * NOTE: THIS WILL WORK FOR ALL SET OF DATA (-ve,+ve,0).
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

  const prefixMap = new Map();
  let prefixSum = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    if (prefixSum === k) {
      maxLength = Math.max(maxLength, i + 1); // * i + 1 is due to zero based indexing
    }

    const rem = prefixSum - k;

    if (prefixMap.has(rem)) {
      const idx = i - prefixMap.get(rem);
      maxLength = Math.max(maxLength, idx);
    }

    if (!prefixMap.has(rem)) {
      prefixMap.set(prefixSum, i);
    }
  }

  return maxLength;
};

console.log(longestSubarrayWithKSum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)); // length = 3
console.log(longestSubarrayWithKSum([3, 4, 2, 3, 2, 4, 2], 12)); // length = 4
console.log(longestSubarrayWithKSum([0, 0, 0, 3, 0, 0], 3)); // length = 6
