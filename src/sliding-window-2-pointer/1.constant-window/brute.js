/**
 * Constant Window
 * 
 * Find the Maxium consecutive sum in the array for the K window
 * 
 * @example
 * maxConsecutiveSum([-1, 2, 3, 3, 4, 5, -1], 4); // 15
*/
const maxConsecutiveSum = (arr, k) => {
    if (!Array.isArray(arr) || !k) return 0;
    let maxSum = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < i + k && i + k <= arr.length; j++) {
            sum += arr[j];
        }
        maxSum = Math.max(sum, maxSum)
    }

    return maxSum;
}

console.log(maxConsecutiveSum([-1, 2, 3, 3, 4, 5, -1, 21], 4)); // 15