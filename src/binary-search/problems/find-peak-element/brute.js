//* Determining the peak element in the array.
// Peak Element arr[i-1] < arr[i] > arr[i+1]
// ******
// findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]) // 8,
// because the 8 is the only element that is greater than its previous and next element
// ******
// findPeakElement([1, 2, 3, 4, 5]) // 5
// Though we dont have any peak element, on that occasion we can assume there was a -Infinity at before first and after last, so 5 is greater than both 4 and -Infinity

// * IN REALTIME,we should always return only one peak element [though it have multiple peaks in it]

const findPeakElement = (arr) => {
  let peak = []; // only to track the multiple peak elements, we can remove it if we are good to return the first possible peak element
  for (let i = 0; i < arr.length; i++) {
    let prev = arr[i - 1] || -Infinity;
    let next = arr[i + 1] || -Infinity;

    if (prev < arr[i] && arr[i] > next) {
      peak.push(arr[i]);
    }
  }

  return peak;
};

console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1])); // 8
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 2
console.log(findPeakElement([5, 4, 3, 2, 1])); // 5
console.log(findPeakElement([1, 2, 3, 4, 5])); // 5
