// Find the defeinition in Optimal solution
const getMaxConsecutiveOne = (arr, k) => {
    if (!Array.isArray(arr) || k === undefined || k === null) return null;

    let maxLen = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        let zerosLen = 0;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] === 0) zerosLen++;

            if (zerosLen > k) break;

            maxLen = Math.max(maxLen, j - i + 1);
        }
    }

    return maxLen;
}

console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3))
console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 0))