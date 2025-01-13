/**
 * Brute force method
 * @param {*} arr
 * [1, 0, 2, 0, 3, 0, 0, 4, 0]
 *
 * Step 1 : Creating the temp arra to store all the non-zero element
 * Step 2 : Update the original array from temp
 * Step 3 : add the zeros to the remaining places.
 *
 * Time Complexity = O(2n)
 * Space complexity = O(n) - size of the non-zero elements on worst case
 */
// const moveAllZeros = (arr = []) => {
//   const temp = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       temp.push(arr[i]);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = temp[i] || 0;
//   }

//   return arr;
// };

/**
 * Two pointers
 * @param {*} arr
 *
 * [1, 0, 2, 0, 3, 0, 0, 4, 0]
 * [1, 0, 0, 0, 2] => [1, 2, 0, 0, 0]
 * To find the first non zero
 * j = 1
 *
 * Passes
 * i=2; j=1; | arr[2] !== 0 true;  [1, 2, 0, 0, 3, 0, 0, 4, 0] | j=2; i=3
 * i=3; j=2  | arr[3] !== 0 false; no change                   | j=2; i=4
 * i=4; j=2  | arr[4] !== 0 true;  [1, 2, 3, 0, 0, 0, 0, 4, 0] | j=3; i=5
 * i=5; j=3  | arr[5] !== 0 false;  no change                  | j=3; i=6
 * i=6; j=3  | arr[6] !== 0 false;  no change                  | j=3; i=7
 * i=7; j=3  | arr[7] !== 0 true;  [1, 2, 3, 4, 0, 0, 0, 0, 0] | j=4; i=8
 * Loop breaks since 8<8
 */
const moveAllZeros = (arr = []) => {
  // * The pointer that points the position of the zero, so that the non zero element can be swapped here.
  let j = -1;

  // * To find the first zero element. O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  // * O(n)
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
};

module.exports = {
  moveAllZeros,
};
