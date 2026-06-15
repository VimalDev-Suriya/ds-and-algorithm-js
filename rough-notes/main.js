const upperBound = (arr, target) => {
  // * upperbound should always return the index, so if there are falsy values always retrun -1
  if (!Array.isArray(arr) || arr.length === 0) return -1;

  if (target === undefined || target === null) return -1;

  let left = 0;
  let right = arr.length - 1;
  let mid;
  let up = arr.length; // if we did not found the element it should return the index after the element

  while (left <= right) {
    mid = Math.floor((left - right) / 2 + right);

    if (arr[mid] > target) {
      up = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return up;
};

console.log(upperBound([2, 4, 6, 9, 9, 10, 11, 16], 9)); // 5
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 9)); // 4
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 19)); // 7
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 10)); // 5
