/**
 * Quick sort
 * @param {[]} arr
 * @returns {[]} "Sorted array"
 *
 * A Sort which uses the divide and conquer method, which creates the partision of arrays to subarray.
 * Here we use the recursive strategy for doing the partision.
 * We will consider any start, end, random, median as Pivot element.
 *
 * ALGORITM:
 * 1. Consider the start and end index of lower and upper bound
 * 2. Will increase the lower bound (lb) if the pivot is greater than or equal to the element (or will push the elements to left array)
 * 3. will decrease the upper bound (ub) if the pivot is lesser than the element (or will psuh the elements to right array).
 * 4. We wil do the above steps recursively
 * 5. This recusrion will execute till the array length is less than equal to 1.
 *
 * Time Complexity
 * worst case - O(n^2)
 * best case  O(nlog n)
 * space complexity - O(n)
 */
const quick_sort_asc = (arr = []) => {
  // * this will stop the recursive call
  if (arr.length <= 1) {
    return arr;
  }

  // * considering the last element as the pivot
  //   const pivot = arr[arr.length - 1];

  // * considering the first element as the pivot
  const pivot = arr[0];

  let left = [];
  let right = [];
  let middle = [pivot];

  // * Partision
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      middle.push(arr[i]);
    }
  }

  return [...quick_sort_asc(left), pivot, ...quick_sort_asc(right)];
};

module.exports = {
  quick_sort_asc,
};
