/**
 * Binary Search
 * Helps to determine the element in the Sorted Array.
 * 
 * Terminologies:
 * low, high, mid
 * Initialy: low = 0 & high = n-1 [n is length of the array]
 * All the elements between low & high is called search space.
 * Mid = Math.floor((high + low ) / 2);
 * 
 * Flow
 * Untill you find the element we need to to split the array which reduces our serach space.
 * IF target < mid, THEN
 * high = mid - 1;
 * ELSE
 * low = mid + 1 
 * The Coresponding target element will be positioned in Mid
 * If the low > high, means there is no serach space, under this its for sure there is no element persent.
 * 
 * Time Complexity:
 * (log N), because we are not iterating over the entire array
 * As we progress we are reducing the serach space to n/2 each ietrations
 * for O(log n)
 * 
 * Overflow cases.
 * Consider the array which has the length MAX_INT, on this occasion, if the target element is the last last element, we will be resulted in the scenario like below
 * mid = (low + high) /2; where both low & high are MAX_INT, which cannot be stored in mid.
 * So either we can make sure to assign the mid as big_int/long etc or
 * mid = low + (high - low)/2; this formula is ~= (2low + high - low)/2 ~= (low + high)/2;
 * so we will be reduing the high - low which will not result n overflow.
 */

const binarySearch = (arr, target) => {
    if (!Array.isArray(arr) || !target || !arr.length) return -1;

    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((high + low) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const binarySearch_recursive = (arr, target) => {
    if (!Array.isArray(arr) || !target || !arr.length) return -1;

    let low = 0
    let high = arr.length - 1;

    const serach = (arr, low, high, target) => {
        if (low > high) return -1;

        mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        return serach(arr, low, high, target);
    };

    return serach(arr, low, high, target)
}

console.log(binarySearch([3, 4, 6, 7, 9, 12, 16, 17], 9))