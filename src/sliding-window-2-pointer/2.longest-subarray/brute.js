/**
 * Longest Subarray with the condition where sum <= k
 * 
 * @example
 * longestSubarray([2, 5, 1, 7, 10], 14); // [5, 1, 7] and the sum is 13
 * 
 * 
 * 
 * We need to determine, subarray which is the longest one (length), when it sum it should not exceed the condition
 * [2], [2, 5], [2, 5, 1] is the subarray which is less that 14
 * [2, 5, 1, 7] is the sub-array greater than k
 * [5, 1, 7] is 13, which is 13 <= 14 -> this might be the answer
 * [1], [1, 7], [7], [10] - all are less
 * [5, 1, 7, 10], [1, 7, 10], [7, 10] all are greater than the sum
 */
const longestSubarray = (arr, k) => {
    if (!Array.isArray(arr) || k === null) return -1;

    let sum = 0;
    let result = 0;
    let end, start;
    let maxSubArrayLength = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];

            if (sum > k) {
                break;
            } else {
                result = sum;
                end = j;
            }
        }

        if (result <= k && end - i + 1 >= maxSubArrayLength) {
            maxSubArrayLength = end - i + 1;
            start = i;
        }
    }

    return {
        start,
        end,
    }
}

console.log(longestSubarray([2, 5, 1, 7, 10], 14))

// [2, 5, 1, 7, 10]
// [0, 1, 2, 3, 4]

//  how you will determine the length of the array from index 2 to 5
// 5 - 2 + 1 = 4