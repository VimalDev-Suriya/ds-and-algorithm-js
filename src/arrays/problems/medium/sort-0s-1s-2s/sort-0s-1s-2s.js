const {
  mergeSort,
} = require('../../../algorithms/sorting/merge-sort/merge-sort-1');

/**
 * Sort the given array with 0s, 1s, 2s. (considering the array has only 0, 1 & 2)
 * @param {[]} arr
 * @return {[]} arr
 *
 * @example
 * arr=[2,0,2,1,1,0]
 * Output -> [0,0,1,1,2,2]
 */

/**
 * Brute force solutions
 * @param {[]} arr
 * @return {[]} arr
 *
 * Using any sorting algorithm to sort elements.
 * Merge - O(nlogn) and Space O(n)
 */
// const sort0s1s2sInArray = (arr = []) => {
//   return mergeSort(arr);
// };

/**
 * Better Solution
 * @param {[]} arr
 *
 * Algorithm
 * 1. We know the array will have only 0s, 1s and 2s.
 * 2. Looping through the array, to find the number of 0s, 1s and 2s present in the array.
 * 3. Once we found the number of elements, is we add them in the given array, then we obvisouly get the array of 0, 1, & 2 in sorted way
 */
// O(2n) & SPC O(1)
// const sort0s1s2sInArray = (arr = []) => {
//   let count_0 = 0;
//   let count_1 = 0;
//   let count_2 = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count_0++;
//     }
//     if (arr[i] === 1) {
//       count_1++;
//     }
//     if (arr[i] === 2) {
//       count_2++;
//     }
//   }

//   console.log(count_0, count_1, count_2);
//   // *****
//   for (let i = 0; i < count_0; i++) {
//     arr[i] = 0;
//   }
//   for (let i = count_0; i < count_0 + count_1; i++) {
//     arr[i] = 1;
//   }
//   for (let i = count_0 + count_1; i < arr.length; i++) {
//     arr[i] = 2;
//   }
//   //****** These entire loops will run only for n times as we know count_0 + count_1 + count_2 = n

//   return arr;
// };

/**
 * Dutch National Flag Algoritms (3 pointer)
 * @param {*} arr
 *
 * Please doccheck my notes or https://www.youtube.com/watch?v=tp8JIuCXBaU for details of algo
 */
const sort0s1s2sInArray = (arr = []) => {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  // * loop goes through untill the sorted section crosses
  while (mid < high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      mid++;
      low++; // since new elemnt 0 added to sorted section, increasing the size of them
    }

    // * since 1 will be in the sorted position of hypothetical array
    if (arr[mid] === 1) {
      mid++;
    }

    // * simply swapping the element between mid & high and shrinking the high
    if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
};

module.exports = {
  sort0s1s2sInArray,
};
