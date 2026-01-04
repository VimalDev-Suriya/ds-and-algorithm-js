// * This solution works only in Sorted array
const union = (arr1 = [], arr2 = []) => {
  let i = 0;
  let j = 0;

  const result = []; // SP-C = O(n + m)

  // O(n + m)
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
      i++;
    }

    if (arr1[i] >= arr2[j]) {
      if (result[result.length - 1] !== arr2[j]) result.push(arr2[j]);
      j++;
    }
  }

  // O(n); If there is a balance in arr1, then pushing t into result by validating it.
  for (let k = i; k < arr1.length; k++) {
    if (result[result.length - 1] !== arr1[k]) result.push(arr1[k]);
  }

  // O(m);
  for (let k = j; k < arr2.length; k++) {
    if (result[result.length - 1] !== arr2[k]) result.push(arr2[k]);
  }

  return result;
};

console.log(union([1, 2, 3, 4], [2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(union([1, 2, 3, 4], [1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(union([1, 2, 3, 4], [5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]
