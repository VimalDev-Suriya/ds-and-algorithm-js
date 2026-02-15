/**
 * Lower bound in the given array.
 * To determine the lowest index of the given target in the array.
 * 
 * To find the index of the element arr[idx] >= target
 * 
 * Points to remember:
 * 1. Even if we did not find any numbers, then should retrun the last element in the array
 * 
 * @example
 * arr[] = [3, 5, 8, 15, 19]; x=8, // returns 2
 * arr[] = [3, 5, 8, 8, 15, 19]; x=8, // returns 2 [smallest possible index]
 */
const findLowerBound = (arr, target) => {
    if (!Array.isArray(arr) || !target || arr.length === 0) return -1;

    // Initializing the lb to last element, to catch if there is no element found
    let lb = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= target) {
            lb = i;
            break
        }
    }

    return lb;
}

console.log(findLowerBound([3, 5, 8, 15, 19], 8)); // 2
console.log(findLowerBound([3, 5, 8, 8, 15, 19], 8)); // 2
console.log(findLowerBound([3, 5, 8, 15, 19], 19)); // 4
console.log(findLowerBound([3, 5, 8, 15, 19], 20)); // 4
console.log(findLowerBound([3, 5, 8, 15, 19], 15)); // 3