/**
 * Kadenes alogorithm
 * 
 * A algo to determine the maximum sum within the subarrays in the given array. The array may contains positive, negative, zeros
 * 
 * NOTE (Intuition): Always drop the sum to 0 , if the previous sum of subarray is < 0. 
 */
const maxSubarraySum = arr => {
    if (!arr.length) return 0;

    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (currentSum + arr[i] < arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum += arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    // * listing the subarray.
    for (let i = start; i <= end; i++) console.log(arr[i]);

    return maxSum;
}

// * Not a refactord one
const maxSubarraySum_non_refactored = arr => {
    let currentSum = 0;
    let maxSum = -Infinity; // * this can be zero

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        if (currentSum < 0) {
            currentSum = 0;
        }

        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSubarraySum([7, 8, 2, 4])); // 21
// console.log(maxSubarraySum([-2, -3, -3, -1])); // 7