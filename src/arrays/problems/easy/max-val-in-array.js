const sortArr = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  // * logic to sort element based on the pivot
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...sortArr(left), pivot, ...sortArr(right)];
};

// A Brute force alogorithm
// O(n^2) - which depend on the sorting algo
// const maxValueinArray = (arr = []) => {
//   // * sorting - using the quick sort (learning purpose)
//   const sortedArray = sortArr(arr);

//   return sortedArray[arr.length - 1];
// };

const maxValueinArray = (arr = []) => {
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }

  return maxValue;
};

module.exports = { maxValueinArray };
