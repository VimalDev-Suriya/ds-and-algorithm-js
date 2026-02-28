/**
 * Upper bound in the given array.
 * To determine the lowest index of the given target in the array.
 * 
 * To find the imdex of the element arr[idx] > x [here we are determing the starting idex of greater element (target)]
 * 
 * Points to remember:
 * 1. Even if we did not find any numbers, then should retrun the last element in the array
 * 
 * @example
 * arr[] = [3, 5, 8, 15, 19]; x=8, // returns 3
 */

// O(log N)
const upperBound = (arr, target) => {
    if (!Array.isArray(arr) || !target || arr.length === 0) return -1;

    let up = arr.length - 1;
    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] > target) {
            up = mid;
            end = mid - 1;
        } else {
            start = mid + 1
        }
    }

    return up;
}

console.log(upperBound([2, 4, 6, 9, 9, 10, 11, 16], 9)); // 5
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 9)); // 4
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 19)); // 6
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 10)); // 5