//* Determining the peak element in the array.
// Peak Element arr[i-1] < arr[i] > arr[i+1]
// ******
// findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]) // 8,
// because the 8 is the only element that is greater than its previous and next element
// ******
// findPeakElement([1, 2, 3, 4, 5]) // 5
// Though we dont have any peak element, on that occasion we can assume there was a -Infinity at before first and after last, so 5 is greater than both 4 and -Infinity

/**
 * Find the Peak Element in the array [WE WONT HAVE A DUPLICATE NUMBERS]
 * @param {[Number]} arr
 * @returns {Number} index of the peak element
 *
 * @intution (why we need to think - Binary search)
 * - Here we are sure the peak element can be somehow the pivot point. All teh elements before and after are somehow sorted
 * - And somehow we are planning for seraching the element
 * - If the O(n) solutin was not accepted, then proceed with O(log N) so we can think from Binary serach standpoint
 *
 * @diagram
 * Here there are 3 possible scenarios
 * 1. Mid can be before Peak
 * 2. Mid can be after peak
 * 3. Mid is equal to peak
 *
 * @Peak_Element_Logic
 * `arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]`
 *
 * @how_to_determine_the_peak_is_on_left_or_right_of_mid
 * Here we want to determine where are we in the slope. Are we in increasing path or decerasing path. For that we can perform, below 2 checks
 * 1. If the `arr[mid - 1] < arr[mid] < arr[mid + 1]`, then we are in increasing slope
 * 2. If the `arr[mid - 1] > arr[mid] > arr[mid + 1]`, then we are in decreasing slope
 *
 * As we already determining the epeak element above we are good in here.
 */
const findPeakElement = (arr) => {
  if (!Array.isArray(arr) || !arr.length) return null;

  if (arr.length === 1) return 0;

  // * Handling the first and last element. [We are considering that array will only have 1 peak element]
  if (arr[0] > arr[1]) return 0;
  if (arr[arr.length - 1] > arr[arr.length - 2]) return arr.length - 1;

  // Since we alreay handled the first and last element, so we are reducing the search space
  let start = 1;
  let end = arr.length - 2;
  let mid;

  while (start <= end) {
    mid = Math.floor(end + (start - end) / 2);

    // * Determine the Peak
    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;

    // This is the decreasing slope, so the peak should be in left of teh mid.
    // * so we are good to neglect the decreasing slope
    if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
      end = mid - 1;
    } else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
      // * Mid is in increasing scope
      start = mid + 1;
    } else {
      // * when mid is not in both increasing and decerasing slope
      // * This is especially for multiple peaks
      end = mid - 1;
    }
  }

  return -1;
};

console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1])); // 8
console.log(findPeakElement([5, 4, 3, 2, 1])); // 5
console.log(findPeakElement([1, 2, 3, 4, 5])); // 5

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 2
console.log(findPeakElement([1, 5, 1, 2, 3]));
