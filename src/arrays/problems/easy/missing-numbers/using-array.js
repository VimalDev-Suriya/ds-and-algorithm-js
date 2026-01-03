/**
 * Find the missing number in the N natural numbers
 * - Array is always sorted
 * - Arrays always starts from 1
 * - There wont be any duplicates in array
 * @param {Array} arr
 * @returns {Number}
 *
 * @example
 * findMissingNumber([1, 2, 3, 5, 6]); // 4
 * findMissingNumber([1, 3]); // 2
 * findMissingNumber([1, 2]); // null
 */
const findMissingNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  for (let i = 0; i < arr.length; i++) {
    const expected = i + 1;
    if (arr[i] !== expected) {
      return expected;
    }
  }

  return null;
};

const findMissingNumber_math = (arr) => {
  const n = arr[arr.length - 1]; // picking up the last element, since we know that this is n natural numbers
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, number) => acc + number, 0);

  console.log(expectedSum, actualSum);

  return expectedSum === actualSum ? null : expectedSum - actualSum;
};

// console.log(findMissingNumber([1, 2, 3, 5, 6])); // 4
// console.log(findMissingNumber([1, 3])); // 2
// console.log(findMissingNumber([1, 2, 3])); // null

console.log(findMissingNumber_math([1, 2, 3, 5, 6])); // 4
console.log(findMissingNumber_math([1, 3])); // 2
console.log(findMissingNumber_math([1, 2, 3])); // null
