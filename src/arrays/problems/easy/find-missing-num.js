/**
 * Finding the Missig number
 * @param {*} arr[] - a array of first N natural numbers.
 *
 * Brute force algorithm.
 * Doing the linear search, if I found then that is not a missing number, if not then it is a missing
 * we can find that by keping the flag
 *
 * @example
 * arr = [1, 2, 4, 5]; n=5
 *
 */

// Brute force - O(n^n)
// Technically we wont navigte till the last, since we are breaking once we find the missing element
// const findMissingNumber = (arr, n) => {
//   let flag;
//   for (let i = 1; i <= n; i++) {
//     flag = 0;
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] === i) {
//         flag = 1;
//         break;
//       }
//     }

//     if (flag === 0) {
//       return i;
//     }
//   }
// };

// Better Solution
// Using the Hasing or New arra
// const findMissingNumber = (arr, n) => {
//   // * n+1 because the value of the arr will always starts from 1, not 0 so when we are setting the flag for has array, will will get additional element
//   const hashArray = new Array(n + 1).fill(0);

//   for (let i = 0; i < arr.length; i++) {
//     hashArray[arr[i]] = 1;
//   }

//   for (let j = 1; j < arr.length; j++) {
//     if (hashArray[j] === 0) {
//       return j;
//     }h
//   }
// };

// Optimal solution using formula - O(n)
// if the n numbers is huge like 10^10 - it will be huge to get sum
// const findMissingNumber = (arr, n) => {
//   // sum of n natural numbers
//   let sum = 0;
//   const sumOfNnumbers = Math.floor((n * (n + 1)) / 2);

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sumOfNnumbers - sum;
// };

// using XOR methods in Javascript
// 1 ^ 1 = 0 (whenever we xor of same numbers then it is 0)
// 1 ^ 0 = 1 (whenever we xor any number with 0 it will always be the number)
// In this missing numbers.
// when we xor or n number to arr of numbers
// xor of n number = 1 ^ 2 ^ 3 ^ 4 ^ 5
// xor of arr el = 1 ^ 2 ^ 4 ^ 5
// (1 ^ 2 ^ 3 ^ 4 ^ 5) ^ (1 ^ 2 ^ 4 ^ 5) = 3
const findMissingNumber = (arr, n) => {
  let xor1 = 0;
  let xor2 = 0;

  // we can combine this looop into next loop
  //   for (let i = 1; i <= n; i++) {
  //     xor1 ^= i;
  //   }

  for (let i = 0; i < n; i++) {
    xor2 ^= arr[i];
    xor1 ^= i + 1; // sice loop starts from 0 to n-1; so adding +1 to it
  }

  return xor1 ^ xor2;
};

module.exports = {
  findMissingNumber,
};
