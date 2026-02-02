/**
 * Next greater element - 1
 * Given an array, find the next greater element for each element in the array.
 * The next greater element for an element x is the first greater element on the right side of x in the array.
 * If no such element exists, output -1 for that position.
 * 
 * Example:
 * Input: [4, 5, 2, 10, 8]
 * Output: [5, 10, 10, -1, -1]
 * 
 */

// * Brute force solution
const nextGreaterElement = (arr) => {
    const n = arr.length;
    const result = new Array(n).fill(-1); // O(n)

    // O(n^2)
    for(let i=0; i< n; i++){
        for(let j= i+1; j<n; j++){
            if(arr[i] < arr[j]){
                result[i] = arr[j];
                break;
            }
        }
    }

    return result;
}

console.log(nextGreaterElement([4, 5, 2, 10, 8]))