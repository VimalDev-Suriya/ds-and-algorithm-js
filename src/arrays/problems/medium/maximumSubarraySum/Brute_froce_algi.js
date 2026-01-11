/**
 * Maximum subarray with the Sum.
 * 
 * NOTE: Previosuly we discussed that the fn get the arr as well the sum they are expected.
 * But in here, we are not getting the sum k, we need to find the maximum one.
 * @param {Array} arr
 * @return {Number} sum
 */
const maxSubarraySum = (arr) => {
    let maxSum = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum
}

console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])) // 7, [4, -1, -2, 1, 5]