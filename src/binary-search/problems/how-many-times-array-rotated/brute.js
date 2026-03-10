// * Determin on how many times the array was rotated (Sorted Array).
const findKTimes = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }

  return -1;
};

console.log(findKTimes([5, 1, 2, 3, 4])); // 1
console.log(findKTimes([4, 5, 1, 2, 3])); // 2
console.log(findKTimes([3, 4, 5, 1, 2])); // 3
console.log(findKTimes([2, 3, 4, 5, 1])); // 4
console.log(findKTimes([1, 2, 3, 4, 5])); // 0
