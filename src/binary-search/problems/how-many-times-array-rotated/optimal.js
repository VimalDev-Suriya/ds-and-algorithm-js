// * Determine on how many times the array was rotated (Sorted Array).
// * The intution here is determine the Minimum in the array.
const findKTimes = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return null;

  let start = 0;
  let end = arr.length - 1;
  let mid;
  let min = Infinity;
  let minIdx;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    // Here I am reusing the same solution, which is used to determin the minimum in the array using binary serach
    if (arr[start] <= arr[mid]) {
      if (arr[start] < min) {
        min = arr[start];
        minIdx = start;
      }
      start = mid + 1;
    } else {
      if (arr[mid] < min) {
        min = arr[mid];
        minIdx = mid;
      }
      end = mid - 1;
    }
  }

  return minIdx;
};

console.log(findKTimes([1, 2, 3, 4, 5])); // 0
console.log(findKTimes([5, 1, 2, 3, 4])); // 1
console.log(findKTimes([4, 5, 1, 2, 3])); // 2
console.log(findKTimes([3, 4, 5, 1, 2])); // 3
console.log(findKTimes([2, 3, 4, 5, 1])); // 4
