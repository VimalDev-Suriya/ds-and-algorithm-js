/**
 * Lower bound in the given array.
 * To determine the lowest index of the given target in the array.
 * 
 * To find the index of the element arr[idx] >= x [here we are determing the starting index (position) of greater element (target)]
 * 
 * Points to remember:
 * 1. Even if we did not find any numbers, then should retrun the last element in the array
 * 
 * @example
 * arr[] = [3, 5, 8, 15, 19]; x=8, // returns 2
 * arr[] = [3, 5, 8, 8, 15, 19]; x=8, // returns 2 [smallest possible index]
 * 
 * @usecases
 * If we want to insert the new element in teh sorted array, I can simpley use the lowerbound to determin the position of that element to be inserted
 * Based on taht index I can add the value
 */

// TC -> O(log N)
const findLowerBound = (arr, target) => {
    if (!Array.isArray(arr) || !target || arr.length === 0) return -1;

    // Initializing the lb to last element, to catch if there is no element found
    let lb = arr.length - 1;
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + (high - low) / 2)); // handling the overflor scenario - refer the function defeinition in brute-force solution

        // * here we are not find the element, instead we are determining the probablity of the max element
        if (arr[mid] >= target) {
            lb = mid; // * so here I am assigning the mid to lb, since this mid may be the solution. Not the exact
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return lb;
}

console.log(findLowerBound([3, 5, 8, 15, 19], 8)); // 2
console.log(findLowerBound([3, 5, 8, 8, 15, 19], 8)); // 2
console.log(findLowerBound([3, 5, 8, 15, 19], 19)); // 4
console.log(findLowerBound([3, 5, 8, 15, 19, 19], 19)); // 4 not 5
console.log(findLowerBound([3, 5, 8, 15, 19], 20)); // 4
console.log(findLowerBound([3, 5, 8, 15, 19], 15)); // 3