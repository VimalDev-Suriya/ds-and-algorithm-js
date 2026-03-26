/**
 * Maximum consecutive ones [Part 3]
 * 
 * Here the arrays with only 1/0's will be provided along with the K, Where K is integer which gives us how many 0's we can flip, so that we can calculate maximum consecutive ones in the given array.
 * 
 * @example
 * getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
 * 
 * @description (about the problem)
 * getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);
 * [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> Index for the given arrau
 * 
 * Here we have k = 2 , I can flip 2 zero's at any position to 1.
 * Currently (without flipping)
 * maxLength is 4. as i could see 4 0's are consecutive in indexes [6, 7, 8, 9].
 * Lets flip 2 zeros in index [4, 5]
 * So the array becomes [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], now the maxLen of 1's is 6. That is the max we can do.
 * 
 * @intuition
 * Can we re-frame the question as we need to determine the maximum consecutive elements with atmost k zeros. As we are sure about the below points
 * 1. Array will either have 1/0, so we can simply count for 0's if it exceed the k, then we can break the loop / increase the start pointer etc
 */
const getMaxConsecutiveOne = (arr, k) => {
    if (!Array.isArray(arr) || k === undefined || k === null) return null;

    let start = 0, end = 0;
    let zerosLen = 0;
    let maxLen = -Infinity;

    // O(n + n) = O(2n)
    while (end < arr.length) {
        if (arr[end] === 0) zerosLen++;

        while (zerosLen > k) {
            if (arr[start] === 0) zerosLen--;

            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
        end++;
    }

    return maxLen;
}

console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))
console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3))
console.log(getMaxConsecutiveOne([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 0))