/**
 * Floor
 *
 * As the name suggest, finding the nearest smallest element for the given target
 * @example
 * floor([10, 20, 30, 40, 50], 25); // 20
 * floor([10, 20, 30, 40, 50], 37); // 30
 * floor([10, 20, 30, 40, 50], 30); // 30
 * floor([10, 20, 30, 40, 50], 50); // 50
 *
 * @intuition
 * arr[mid] <= target
 * - If element exist, return the element itself
 * - if the element not present return the largest element <= target
 */

const floor = (arr, target) => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  let start = 0;
  let end = arr.length - 1;
  let position = -1; // Initializing with -1, as there are chances that we may result in not finding the floor value
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] <= target) {
      position = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return position === -1 ? null : arr[position];
};

console.log(floor([10, 20, 30, 40, 50], 25));
console.log(floor([10, 20, 30, 40, 50], 37));
console.log(floor([10, 20, 30, 40, 50], 30));
console.log(floor([10, 20, 30, 40, 50], 50));
console.log(floor([10, 20, 30, 40, 50], 5));
