/**
 * Union of 2 sorted arrays.
 * @param {*} arr1
 * @param {*} arr2
 *
 * The union should not have any duplicates.
 * Merging of 2 sorted elements and using Set I am simply removing the duplicates
 */
const unionOfSortedArray = (arr1 = [], arr2 = []) => {
  let arr1_pt1 = 0;
  let arr1_length = arr1.length;
  let arr2_pt1 = 0;
  let arr2_length = arr2.length;
  const temp = [];

  // * O(n)
  while (arr1_pt1 < arr1_length && arr2_pt1 < arr2_length) {
    if (arr1[arr1_pt1] < arr2[arr2_pt1]) {
      // * remove the duplicates - by checking if the previous/last value is present in temp
      if (temp[temp.length - 1] !== arr1[arr1_pt1]) {
        temp.push(arr1[arr1_pt1]);
      }
      arr1_pt1++;
    } else {
      if (temp[temp.length - 1] !== arr2[arr2_pt1]) {
        temp.push(arr2[arr2_pt1]);
      }
      arr2_pt1++;
    }
  }

  const combinedArray = temp.concat(arr1.slice(arr1_pt1), arr2.slice(arr2_pt1));
  console.log('combinedArray', combinedArray);
  return combinedArray;

  // * O(n)
  //   return [...new Set(temp.concat(arr1.slice(arr1_pt1), arr2.slice(arr2_pt1)))];

  // * Writing my own 2 pointer logic to remove duplicates.
  //   [ 1, 1, 2, 3, 3, 5, 5, 6]
  //  O(n)
  //   let i = 0;
  //   for (let j = 1; j < combinedArray.length; j++) {
  //     if (combinedArray[i] !== combinedArray[j]) {
  //       i++;
  //       combinedArray[i] = combinedArray[j];
  //     }
  //   }

  //   //   O(n)
  //   return combinedArray.slice(0, i + 1);
};

module.exports = {
  unionOfSortedArray,
};
