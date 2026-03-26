const getMaxConsecutiveOne = (arr, k) => {
    if (!Array.isArray(arr)) return null;

    let start = 0; end = 0;
    let zeros = 0;
    let maxLength = -Infinity;

    // O(n)
    while (end < arr.length) {
        if (arr[end] === 0) zeros++;

        if (zeros > k) {
            if (arr[start] === 0) zeros--;
            start++;
        }

        if (zeros <= k) maxLength = Math.max(maxLength, end - start + 1);
        end++
    }

    return maxLength;
}

console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3))
console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 0))