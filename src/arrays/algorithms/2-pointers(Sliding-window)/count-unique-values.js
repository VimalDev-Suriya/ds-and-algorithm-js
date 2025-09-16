/**
 * Gives the count of unique values in the given sorted array (applicable only for numbers)
 *
 * @description This function returns the unique count of numbers present inside the given array
 *
 * @example
 * countUniqueValue([1,1,1,2]) => {unique: 2 numbers:[1 , 2]}
 * countUniqueValue([1,2, 3]) => {unique: 3 numbers:[1 , 2, 3]}
 * countUniqueValue([1, 3, 3, 3, 3]) => {unique: 2 numbers:[1 , 3]}
 */
const countUniqueValue = (arr = []) => {
  // * handle the empty array or null values
  if (!arr.length) {
    return {};
  }

  if (arr.length === 1) {
    return {
      unique: 1,
      numbers: arr,
    };
  }

  //* Brute force
  //   const uniqueElements = [arr[0]];
  //   let uniqueCount = 1;

  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i - 1] !== arr[i]) {
  //       uniqueCount++;
  //       uniqueElements.push(arr[i]);
  //     }
  //   }

  //   return {
  //     unique: uniqueCount,
  //     numbers: uniqueElements,
  //   };

  // * 2 pointer technique
  let i = 0;
  let j = i + 1;
  let uniqueCount = 1;
  const uniqueElements = [arr[0]];

  while (i <= j && j < arr.length) {
    // if elements are unique
    if (arr[i] !== arr[j]) {
      // if we are good to use the new array/variable to store the vaues then we can follow the below one
      // i = j;
      // uniqueCount++;
      // uniqueElements.push(arr[i]);

      // if we should not use any additional variable
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      // if elements are same
      j++;
    }
  }

  return {
    unique: i + 1,
    numbers: arr.splice(0, i + 1),
  };
};

module.exports = countUniqueValue;
