/**
 * Find the Unique element in the Sorted Array.
 *
 * @intuition
 * Why we need a Binary serach -> Because we are finding unique a element in SORTED ARRAY.
 * - Binary serach is mainly of eliminating the right half.
 *
 * @question1
 * How we can determine the single element?
 * - We can validate if the previous and next element of the current element should not be equal. Because we know the elemsnt are sorted, so we are sure all teh duplicates will be in order
 *
 * @question2
 * How can we justify he elimination or on which criteria we can eliminate the half?
 * Take the array [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6], consider you are in the position of element 4. If you see,
 * - the elements in the left half of the 4, We can see the elements are paired with index 0, 1[even, odd] 2,3[even,odd] 4,5[even,odd]
 * - the elements in the right half of the 4, We can see the elements are paired with index 7, 8[odd, even] 9,10[odd, even].
 *
 * - So above considerations confirms that if we sense [even, odd] combination of elements, then the target elemnt is in right half or else if [odd, even] combinations then target element is in left half
 * - If mid is in odd index and the next element [even position] has the same element OR if mid in even index and the previous element is equal then the target element is in right, so we can eliminate the left half
 * - If above condition is false, then target is in left half and we can elimiate the right half
 *
 *
 * @edgecases
 * - SInce we are handling previous and next element, we should handle them gracefully in first & last index elemnst, because first element will not have previous and last will not have next.So we should handle them wisely. In order to minimize the logic in binary serach logic, we can reduce the search space, by validating and excluding these 2 start & end indices
 * @example
 * console.log(findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6])); // 4
 * console.log(findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 5, 5])); // 4
 * console.log(findSingleUniqueElement([1, 2, 2, 3, 3, 4, 4, 5, 5])); // 1
 * console.log(findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 4, 5])); // 5
 */

const findSingleUniqueElement = (arr) => {
  if (!Array.isArray(arr)) return null;

  // * Edge cases
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[arr.length - 1] !== arr[arr.length - 2]) return arr[arr.length - 1];

  let start = 1;
  let end = arr.length - 2;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    // * Determining the Unique element
    if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) return arr[mid];

    if (
      (mid % 2 === 1 && arr[mid] === arr[mid - 1]) ||
      (mid % 2 === 0 && arr[mid] === arr[mid + 1])
    ) {
      // * the targeted element is in right half, so eliminate the left half
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

// [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6])); // 4
console.log(findSingleUniqueElement([1, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6])); // 2
console.log(findSingleUniqueElement([1, 2, 2, 3, 3, 4, 4, 5, 5])); // 1
console.log(findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 4, 5])); // 5
