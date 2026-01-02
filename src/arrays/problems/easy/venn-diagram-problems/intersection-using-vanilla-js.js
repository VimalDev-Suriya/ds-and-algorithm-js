// * Works only in Sorted array
const intersection = (arr1 = [], arr2 = []) => {
  let i = 0,
    j = 0;
  const result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      // below have the duplicates in the intersection
      // result.push(arr1[i]); // [1, 2, 2, 3]

      if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]); // [1, 2, 3]
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};

console.log(intersection([1, 2, 3, 4], [1, 2, 3]));
console.log(intersection([1, 2, 3], [1, 2, 3]));
console.log(intersection([1, 1, 2, 2, 3], [1, 2, 3]));
console.log(intersection([1, 2, 3], [2, 4, 5, 6]));

console.log(intersection([2, 2, 4, 5, 6], [2, 2, 5, 6, 7, 8])); // 2, 5, 6 (removing the intersection)
