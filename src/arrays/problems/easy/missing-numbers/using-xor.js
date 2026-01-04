/**
 * Find the missing number in the sorted array of N natural numbers
 * - Will not have any duplicates.
 * @param {Array} arr
 * @returns {Number | null} Returns number if the number is missing.
 *
 * @example
 * findMissingNumber([1, 2, 3, 5, 6]); // 4
 * findMissingNumber([1, 2, 3]); // null
 *
 * @complexity
 * Time Complexity - O(n) - looping of n elements
 * Space Complexity - O(1)
 */
const findMissingNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return;

  let xorNaturalNumbers = 0;
  let xorArray = 0;

  // * loop runs till the last element, since we know the array will always have n natural numbers
  // * This condition works, if there is no missing number e.g for the input [1, 2, 3]
  for (let i = 0; i < arr[arr.length - 1]; i++) {
    xorArray ^= arr[i];
    xorNaturalNumbers ^= i + 1; // xor of the n natural numbers
  }

  const missing = xorNaturalNumbers ^ xorArray;

  return missing === 0 ? null : missing;
};

console.log(findMissingNumber([1, 3])); // 2
console.log(findMissingNumber([1, 2, 3, 5, 6])); // 4
console.log(findMissingNumber([1, 2, 3])); // null
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8])); // null
