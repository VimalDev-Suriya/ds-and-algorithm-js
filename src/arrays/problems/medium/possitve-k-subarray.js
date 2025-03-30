/**
 * Sum of Positive subarray
 * @param {*} arr
 * @param {*} k - Maximum sum of the subarray
 * @returns Maximum length of tthe the subarray which has the sum equal to K.
 *
 * @example
 * arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3] k=3
 * return 3 (which is the length of subarray) [1, 1, 1]. We dont want to count number of subarrays here. just the count
 */

// * Brute Force Solution
/**
 *
 * @param {*} arr
 * @param {*} k
 *
 * Brute force solution
 * 1. Create the subarrays
 * arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3], consider the example, the subarray wil be like.
 * [1], [1, 2], [1, 2, 3], [1, 2, 3, 1], [1, 2, 3, 1, 1], [1, 2, 3, 1, 1, 1], [1, 2, 3, 1, 1, 1, 1], [1, 2, 3, 1, 1, 1, 1, 4], [1, 2, 3, 1, 1, 1, 1, 4, 2], [1, 2, 3, 1, 1, 1, 1, 4, 2, 3]
 * [2], [2, 3], [2, 3, 1], [2, 3, 1, 1], [2, 3, 1, 1, 1], [2, 3, 1, 1, 1, 1], [2, 3, 1, 1, 1, 1, 4], [2, 3, 1, 1, 1, 1, 4, 2], [2, 3, 1, 1, 1, 1, 4, 2, 3]
 * ....
 * [3]
 *
 * 2. Add the items of the created subarray
 * 3. If the sum is equal to k then find the max of the previous sume
 *
 * If you see the pattern is taking the first element that is i and another pointer in same place named as j
 * both are in same place.
 * i=1 & j=1 | i=1 & j=2 | i=1 & j=3 - if you see here J is increasing, the array presnet within i -> j is the subarray
 */
// O(n) = O(n^3) => O(n^2)
// const sumeOfPositiveSubarray = (arr = [], D) => {
//   let sum;
//   let len = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       // * array to find the sum of the elements from i -> j
//       //   sum = 0;
//       //   for (let k = i; k <= j; k++) {
//       //     sum += arr[k];
//       //   }
//       //  Instead of having forloop for summing - I can add one element to anither element
//       sum += arr[j];

//       if (sum === D) {
//         // * j-i is the formula to find the length of the array.
//         // Eg if arr=[1, 2, 3].to find the length of array i=0; j=2 = 2-0+1 = 3
//         len = Math.max(len, j - i + 1);
//       }
//     }
//   }

//   return len;
// };

// * Better Solution
// const sumeOfPositiveSubarray = (arr = [], k) => {};

// * Optimal solution.
/**
 * Optimal solution using 2 pointer
 * @param {*} arr
 * @param {*} k - sum of the subarray
 * @returns {len} len - maxium length of the subarray which tends to sum of k
 *
 * Algorithm (View my notes for visual flow)
 *
 * 1. Using 2 pointers
 * 2. Initialize 2 pointer i and j at the same position (first element) 0. and considering the first element to be the sum.
 * 3. if the sum of elements in the subarray from i -> j is less than k, the increase the j
 * 4. If sum and k is equal the find the masLength & increase the j
 *      * update the maxlength of the subarray and update the sum by removing the last element.
 * 5. If the sum of the elements in the subarray from i -> j is greater than k, then stop incresing the j intead increase the i (underthehood i am truncating the array)
 *      * How to find the sum when increasing the i, simple sum -= arr[i] (last element)
 * 6. If the sum is less than k, then stop truncating the arry (i.e increasing the i)
 * 7. If the 'j' reaches the length of arr, then we can do the truncating (i.e increasing the i),untill "i" reaches out to arr.length
 *
 * Dry Run
 * [1, 2, 3, 1, 1, 1, 1, 4, 2, 3] k =3
 * i=0; j=0; sum=arr[0]=1; maxLen
 * i=0; j=0; | 1<3 true | j++=1; sum=1+2=3
 * i=0; j=1; | 3<3 false; 3==3 true | maxLength=1-0=1 ; j++=2; sum=3+3=6
 * i=0; j=2; | 6<3 false false; | sum=6-arr[2 - 0 + 1]
 */
const sumeOfPositiveSubarray = (arr = [], k) => {
  let i = 0;
  let j = 0;
  let sum = arr[0]; //* considering the first elemnt to be the sum initially
  let sumarrayLen = 0;
  let len = arr.length - 1;
  let subarrays = [];

  // * loop goes untill both pointer crosses the length of the array
  while (i <= len || j <= len) {
    if (sum < k) {
      j++;
    } else if (sum === k) {
      // **** I am doing this to get the list of subarrays which is +1 from the requirements
      const subarray = [];
      for (let k = i; k <= j; k++) {
        subarray.push(arr[k]);
      }
      subarrays.push(subarray);
      // ****

      // j-i+1 => tells the length of the subarray
      sumarrayLen = Math.max(j - i + 1, sumarrayLen);
      j++;
    } else {
      sum -= arr[i]; // removing the last element of the current subarray (i will be the first elementthat is technically a last, so taking i)
      i++;
      continue; // since we alreacy validated the sum, so we are continuing the loop instead of
    }

    // Since we calculated the sum at the top
    sum += arr[j];
  }

  console.log('subarrays', subarrays);
  return sumarrayLen;
};

module.exports = {
  sumeOfPositiveSubarray,
};
