// * Find the Single Unique element in the sorted array.
// * It is sure that the given array will have only 1 single element and all other apprears twice.
// findSingleElement([1, 1, 2, 2, 3, 3, 4, 5, 5,]); // 4

// * O(n)
const findSingleUniqueElement = (arr) => {
  // * SInce its the sorted array, we can iterate over the array and compare the previous and next element.
  // if previous or next element are same, we can ignore them, if not that is the unique element
  let i = 0;
  let unique;
  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      i = i + 2; // Since I am sure that elements appear exactly twice, So skipping the corresponding element
      continue;
    }

    unique = arr[i];
    i += 1;
  }

  return unique;
};

console.log(findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 5, 5])); // 4
console.log(findSingleUniqueElement([1, 2, 2, 3, 3, 4, 4, 5, 5])); // 1
console.log(findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 4, 5])); // 5

// * Using XOR
const findSingleUniqueElement_1 = (arr) => {
  let unique = arr[0];

  for (let i = 1; i < arr.length; i++) {
    unique ^= arr[i];
  }

  return unique;
};

console.log(findSingleUniqueElement_1([1, 1, 2, 2, 3, 3, 4, 5, 5])); // 4
console.log(findSingleUniqueElement_1([1, 2, 2, 3, 3, 4, 4, 5, 5])); // 1
console.log(findSingleUniqueElement_1([1, 1, 2, 2, 3, 3, 4, 4, 5])); // 5
