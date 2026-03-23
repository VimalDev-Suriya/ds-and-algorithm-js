const getLongestSubstringWithoutRepeating = str => {
    if (typeof str !== "string" || !str) return null;

    let start = 0, end = 1;
    let result = { [str[0]]: 0 };
    let maxLen = 0;

    while (start < str.length && end < str.length) {
        if (!result[str[end]]) {
            result[str[end]] = end;
            maxLen = Math.max(maxLen, end - start + 1);
            end++;
        } else {
            start = result[str[end]] + 1; // starting from the previously encounterd character, +1 is moving to the next element
            result[str[end]] = end; // updating the hash with the current details bout the position of the element
            end++;
        }
    }

    console.log(result)
    return maxLen;
}

console.log(getLongestSubstringWithoutRepeating('cadbzabcd'));
console.log(getLongestSubstringWithoutRepeating('abcdefgh')); // 8
console.log(getLongestSubstringWithoutRepeating('ababcdef')); // 6
console.log(getLongestSubstringWithoutRepeating('aaaaaabdcccc')); // 4