const maxConsecutiveSum = (arr, k) => {
    if (!Array.isArray(arr) || !k) return 0;

    let sum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }

    maxSum = Math.max(sum, maxSum);

    for (let i = k; i < arr.length; i++) {
        sum = sum - arr[i - k] + arr[i];
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
}

console.log(maxConsecutiveSum([-1, 2, 3, 3, 4, 5, -1], 4))
console.log(maxConsecutiveSum([-1, 2, 3, 3, 4, 5, -1, 21], 4))