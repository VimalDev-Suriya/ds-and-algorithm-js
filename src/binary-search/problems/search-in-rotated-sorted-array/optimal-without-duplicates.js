// *** WITHOUT DUPLICATES ONLY THIS SOLUTIONS WORKS
/**
 * Using Binary Search [without duplicates]
 * here we are going to find the element in the sorted arra [but its rotated].
 *
 * @intuition
 * Definely 1 half of the array should be sorted. So the flow of logic goes like
 *
 * 1. Always find whether the mid === target, if yes we can return
 *
 * If not. then,
 * 1. Identify the sorted half? left or right
 *      1. How to identify? low < mid and mid < high, if low !< mid [then its not sorted] and same for high
 * 2. If Sorted - Then validate if the target is between the sorted elements
 *      1. How ? consider we are validating the element between mid to high. i.e mid <= target <= high
 *      2. If it is not there then eliminate the corresponding half.
 *          1. If target is between low to mid, then we can eliminate the right half
 *          2. Else eliminate the left half
 */

const get_position_in_sorted_array = (arr, target) => {
  if (!Array.isArray(arr) || typeof target !== 'number') return null;

  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    // * Determining the sorted half. Why? because we are not sure if the elements are sorted, only of the elemsnt are sorted, then only we can eliminate the possible half, if not we can eliminate where we are deviating from binary serach principles
    // * Left half is sorted
    if (arr[start] <= arr[mid]) {
      if (arr[start] <= target && target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      //* right half is sorted
      // * Here I used if/else not multiple else, because I am 100% sure that if one half is not sorted, then another half is definetly sorted,
      // beause we are sure it is ROTATED SORTED array, so if we rotate a sorted array for n number of times, there will always have only one pivot point, which determins the sorted half

      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

console.log(get_position_in_sorted_array([5, 6, 1, 2, 3, 4], 6)); // 1
console.log(get_position_in_sorted_array([4, 5, 6, 1, 2, 3], 4)); // 0
console.log(get_position_in_sorted_array([4, 5, 6, 1, 2, 3], 2)); // 4
console.log(get_position_in_sorted_array([4, 5, 6, 1, 2, 3], 10)); // -1
