// /**
//  * Find the number that is present only once in the given array and other numbers are repeated twice.
//  * OPTIMAL SOLUTION
//  * @param {Array} arr
//  * @returns {Number}
//  *
//  * @example
//  * findSingleNonRepetativeNumber([1, 1, 2, 3, 3, 4, 4]); // 2
//  * findSingleNonRepetativeNumber([1, 2, 1, 3, 3, 4, 4]); // 2
//  * findSingleNonRepetativeNumber([1, 1, 3, 4, 3, 4, 5]); // 5
//  */
const findSingleNonRepetativeNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  let singleRepetativeNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    singleRepetativeNumber ^= arr[i];
  }

  return singleRepetativeNumber;
};

// * Also we can implement the frequency pattern

// const findSingleNonRepetativeNumber = (arr) => {
//   let count;
//   for (let i = 0; i < arr.length; i++) {
//     count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }

//     if (count === 1) return arr[i];
//   }

//   return null;
// };

console.log(findSingleNonRepetativeNumber([1, 1, 2, 3, 3, 4, 4]));
console.log(findSingleNonRepetativeNumber([1, 2, 1, 3, 3, 4, 4])); // 2
console.log(findSingleNonRepetativeNumber([1, 1, 3, 4, 3, 4, 5])); // 5
