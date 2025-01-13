/**
 *
 * @param {*} arrLength
 * @param {*} d A times on which the array should be rotated
 * @returns actual rotating times
 *
 * Eg: If the d = 20 and the length of the array is 5, then we can say 20%5 is 0; we dont want to rotate the array
 * if the d = 19 and the length of the array is 5, then we can say 19%5 is 4, we can rotate the array just 4 times.
 */
const getRotatingTimes = (arrLength, d) => {
  if (d >= arrLength) {
    return d % arrLength;
  }

  return d;
};

/**
 *
 * @param {*} arr
 * @param {*} d - A times on which the array should be rotated
 *
 * Brute Force
 * [1, 2, 3, 4, 5], d=3 Expected output = [4, 5, 1, 2, 3]
 *
 * Step 1:
 * Creating the temp array, which holds the first d elements that need to be rotated.
 *
 * Step 2:
 * Left shifting the array d times.
 * DRY RUN: (considering the example of small array)
 * d=3; i=3 | arr[3-3] => arr[0] = arr[3] | moving the element in 3rd to 0th position
 * d=3; i=4 | arr[4-3] => arr[1] = arr[4] | moving the element in 4th to 1st position
 *
 * Step 3:
 * Adding the elements in the temp to half rotated array
 * DRY RUN: (considering the example of large array)
 * length = 7
 * d=3; i=7-3 = 4 | arr[4] = temp[4-3-1] => temp[0] | moving the element from 0th position of temp to 3th position arr
 * d=3; i=5       | arr[3] = temp[5-3-1] => temp[1] | moving the element from 1st position of temp to 4th position arr
 * d=3; i=6       | arr[4] = temp[6-3-1] => temp[2] | moving the element from 2nd position of temp to 5th position arr
 *
 * Time Complexity
 * O(d) + O(n-d) + O(d) => O(n+d) ~= O(n)
 * Space compleixty
 * O(d)
 */
// const rotateArray = (arr = [], d) => {
//   const rotatingTimes = getRotatingTimes(arr.length, d);

//   if (!rotatingTimes) {
//     return arr;
//   }

//   // * Creating the temp array, which holds the fisrt d elements that need to be rotated.
//   const temp = [];
//   const arrLength = arr.length;

//   // * Time complexity is O(d)
//   for (let i = 0; i < rotatingTimes; i++) {
//     temp.push(arr[i]);
//   }

//   // * Left shifting the array d times.
//   // The elements will be rotated - but still holds the old data
//   for (let i = rotatingTimes; i < arrLength; i++) {
//     arr[i - rotatingTimes] = arr[i];
//   }

//   // * Adding the elements in the temp to half rotated array
//   // as we know that we should start inserting the element from the d-1
//   for (let i = arrLength - rotatingTimes; i < arrLength; i++) {
//     arr[i] = temp[i - rotatingTimes - 1];
//   }

//   return arr;
// };

/**
 *
 * @param {*} arr
 * @param {*} d
 * @returns
 *
 * Optimal solution. (all logic happens only in in place array, no extra space)
 * Step 1
 * Spliting the array into 2 halfs based on the d, eg if d=3 split the main array into two in which ine array has 0 to d(exclude) and d to n
 *
 * Step 2:
 * Reversing the 2 arrays.
 *
 * Step 3
 * Merging the 2 arrays.
 */
// const rotateArray = (arr = [], d) => {
//   const rotatingTimes = getRotatingTimes(arr.length, d);

//   if (!rotatingTimes) {
//     return arr;
//   }

//   // * O(2n)
//   const leftArray = arr.slice(0, rotatingTimes);
//   const righArray = arr.slice(rotatingTimes);

//   let lpt2 = leftArray.length - 1;
//   let rpt2 = righArray.length - 1;

//   // * rotate left array
//   for (let lpt1 = 0; lpt1 < lpt2; lpt1++) {
//     [leftArray[lpt1], leftArray[lpt2]] = [leftArray[lpt2], leftArray[lpt1]];
//     lpt2--;
//   }

//   // * rotate right array
//   for (let rpt1 = 0; rpt1 < rpt2; rpt1++) {
//     [righArray[rpt1], righArray[rpt2]] = [righArray[rpt2], righArray[rpt1]];
//     rpt2--;
//   }

//   return [...leftArray, ...righArray].reverse();
// };

const rotateArray = (arr = [], d) => {
  const rotatingTimes = getRotatingTimes(arr.length, d);

  if (!rotatingTimes) {
    return arr;
  }

  //   let lpt2 = rotatingTimes - 1;
  //   let rpt2 = arr.length - 1;

  //   // * rotate left array
  //   for (let lpt1 = 0; lpt1 < lpt2; lpt1++) {
  //     [arr[lpt1], arr[lpt2]] = [arr[lpt2], arr[lpt1]];
  //     lpt2--;
  //   }

  //   // * rotate right array
  //   for (let rpt1 = rotatingTimes; rpt1 < rpt2; rpt1++) {
  //     [arr[rpt1], arr[rpt2]] = [arr[rpt2], arr[rpt1]];
  //     rpt2--;
  //   }

  // * Left subarray
  let lpt1 = 0;
  let rpt1 = rotatingTimes - 1;

  // * right subarray
  let lpt2 = rotatingTimes;
  let rpt2 = arr.length - 1;

  // * reversing 2 set of subarrays within the single array
  // O(n)
  while (rpt1 > lpt1 || rpt2 > lpt2) {
    if (rpt1 > lpt1) {
      [arr[lpt1], arr[rpt1]] = [arr[rpt1], arr[lpt1]];
      lpt1++;
      rpt1--;
    }

    if (rpt2 > lpt2) {
      [arr[lpt2], arr[rpt2]] = [arr[rpt2], arr[lpt2]];
      lpt2++;
      rpt2--;
    }
  }

  // O(n)
  return arr.reverse();
};

module.exports = {
  rotateArray,
};
