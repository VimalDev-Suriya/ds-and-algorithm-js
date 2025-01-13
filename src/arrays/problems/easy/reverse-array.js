/**
 * Brute Force
 * @param {*} arr
 * @returns reversed arrray
 *
 * Brute force algorithm
 * Space Complexity = O(n) - Creating a array with the same size of original array
 * Time Complexity = O(n) - iterating the array with the times.
 */
// const reverse_array = (arr = []) => {
//   if (!arr.length) {
//     return arr;
//   }

//   const temp = [];
//   const len = arr.length - 1;

//   for (let i = len; i >= 0; i--) {
//     temp[len - i] = arr[i];
//   }

//   return temp;
// };

/**
 * 2 Pointers
 * @param {*} arr
 * @returns reversed arrray
 *
 * Space Complexity = O(1) - No additioanl space except the varible
 * Time Complexity = O(n/2) ~= O(n) - iterating the array only with half times since we are swaping.
 */
const reverse_array = (arr = []) => {
  if (!arr.length) {
    return arr;
  }

  let pointer_2 = arr.length - 1;

  for (let pointer_1 = 0; pointer_1 < pointer_2; pointer_1++) {
    // Swap in ES6 JS (will be different based on languages)
    [arr[pointer_1], arr[pointer_2]] = [arr[pointer_2], arr[pointer_1]];
    pointer_2--;
  }

  return arr;
};

module.exports = reverse_array;
