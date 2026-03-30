const getLongestSubstringWithoutRepeating = str => {
    if (typeof str !== "string" || !str) return null;

    let start = 0, end = 0;
    let result = {};
    let maxLen = 0;

    while (end < str.length) {
        // * I can't simply validate of the existance of the characters, because we are validating the maxium continuus string
        if (result[str[end]]) {
            // Here i am validating the whether encountered character are within the range of start & end. If it was then i can move the start pointsre 1 step forward and update the result.
            if (result[str[end]] >= start) {
                start = result[str[end]] + 1;
            }
        }

        maxLen = Math.max(end - start + 1, maxLen);
        result[str[end]] = end;
        end++;
    }

    console.log(result);
    return maxLen;
}

console.log(getLongestSubstringWithoutRepeating('cadbzabcd')); // 5
console.log(getLongestSubstringWithoutRepeating('cadbzabcdfgh')); // 8 <- though we have duplicate we should still consider that because thsoe are the different set
console.log(getLongestSubstringWithoutRepeating('abcdefgh')); // 8
console.log(getLongestSubstringWithoutRepeating('ababcdef')); // 6
console.log(getLongestSubstringWithoutRepeating('aaaaaabdcccc')); // 4