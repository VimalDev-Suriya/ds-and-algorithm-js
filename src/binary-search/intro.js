/**
 * Binary Search
 * Helps to find the element in the *Sorted Array*.
 * 
 * Terminologies:
 * start, end, mid
 * Initialy: start = 0 & end = n-1 [n is length of the array]
 * All the elements between start & end is called search space.
 * Mid = Math.floor((end + start ) / 2);
 * 
 * Flow
 * Untill you find the element we need to to split the array which reduces our serach space.
 * IF target < mid, THEN
 * end = mid - 1;
 * ELSE
 * start = mid + 1 
 * The Coresponding target element will be positioned in Mid
 * If the start > end, means there is no serach space, under this its for sure there is no element persent.
 * 
 * Time Complexity:
 * (log N), because we are not iterating over the entire array
 * As we progress we are reducing the serach space to n/2 each iterations
 * for O(log n)
 * 
 * Overflow cases.
 * Consider the array which has the length MAX_INT, on this occasion, if the target element is the last last element, we will be resulted in the scenario like below
 * mid = (start + end) /2; where both start & end are MAX_INT, which cannot be stored in mid.
 * So either we can make sure to assign the mid as big_int/long etc or
 * mid = start + (end - start)/2; this formula is ~= (2low + end - start)/2 ~= (start + end)/2;
 * so we will be reduing the end - start which will not result n overflow.
 */

const binarySearch = (arr, target) => {
    if (!Array.isArray(arr) || !target) return -1;

    if (arr.length === 0) return 0;

    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((end + start) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

const binarySearch_recursive = (arr, target) => {
    if (!Array.isArray(arr) || !target || !arr.length) return -1;

    let start = 0
    let end = arr.length - 1;

    const serach = (arr, start, end, target) => {
        if (start > end) return -1;

        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        return serach(arr, start, end, target);
    };

    return serach(arr, start, end, target)
}

console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 9))
