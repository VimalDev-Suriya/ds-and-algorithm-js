const {
  mergeSort,
} = require('../../algorithms/sorting/merge-sort/merge-sort-1');

/**
 * Need to retrun 2 numbers which results to the target when we sum them up
 * @param {arr[]} arr[]
 * @param {*} target
 *
 * @example
 * arr=[2, 6, 5, 8, 11] target = 14
 * 6 & 8 are the numbers.
 *
 * There are 2 possibilities. (only 2 variables)
 * 1. Either they will be present or they may not
 * 2. We need to return either if they exist or returning those values
 */

// * Brute force solutions
// Comparing one by one
// O(n^2) - nearly
// const sumOfTwoNumbers = (arr = [], target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }

//   return 'no value';
// };

// Optimal Solution using Hashmap
/**
 * Using Hash Map
 * @param {*} arr
 * @param {*} target
 *
 * We need to create the new hashmap.
 * In JS we dont have Hashmap - but we have map.
 * target = x + arr[i] => x = target - arr[i]
 */

// O(n)
// Space complexity - O(n) - O(n^2) (technically not possible if the collison happen which is the edge case)
// const sumOfTwoNumbers = (arr = [], target) => {
//   const hashmap = new Map();
//   let more;

//   for (let i = 0; i < arr.length; i++) {
//     more = target - arr[i];

//     if (hashmap.has(more)) {
//       let missingValueIdx = hashmap.get(more);
//       return [arr[missingValueIdx], arr[i]];
//     } else {
//       hashmap.set(arr[i], i);
//     }
//   }
// };

// Optimal solution using 2 pointer (Considering the arary should be sorted)
// * this wont work if we need to share the position of the elements.
// because we know that we need additional data for setting the sorted array.
// O(n)
const sumOfTwoNumbers = (arr = [], target) => {
  // Step 1: Sort the elements using any best
  const sortedArray = mergeSort(arr);
  console.log(sortedArray);

  let right = sortedArray.length - 1;
  let left = 0;

  while (left < right) {
    let sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      console.log(sum);
      return 'yes';
    }

    // If the sum is grater we are neglecting the last element(as we know it is sorted so last element will always be largeer)
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

module.exports = {
  sumOfTwoNumbers,
};
