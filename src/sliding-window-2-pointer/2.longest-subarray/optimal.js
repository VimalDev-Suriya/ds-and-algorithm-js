// 2 pointer
const longestSubarray = (arr, k) => {
    if (!Array.isArray(arr) || !k) return null;

    let start = 0;
    let end = 1;
    let len = arr.length;
    let sum = arr[start];
    let maxLength = 0;

    let i, j, finalResult

    while (start < len && end < len) {
        sum += arr[end];

        if (sum > k) {
            sum -= arr[start];
            start++;
        }

        if (end - start + 1 >= maxLength && sum <= k) {
            maxLength = end - start + 1;
            i = start;
            j = end
            finalResult = sum;
        }

        end++;
    }

    return {
        i, j, finalResult
    }
}

console.log(longestSubarray([2, 5, 1, 7, 10], 14))
console.log(longestSubarray([2, 5, -1, 1, 7, 10], 14))
console.log(longestSubarray([2, 5, -1, 1, 7, 10], 23))
console.log(longestSubarray([2, 5, -1, 1, 7, 10], 5))
// [2, 5, 1, 7, 10]
// [0, 1, 2, 3, 4]