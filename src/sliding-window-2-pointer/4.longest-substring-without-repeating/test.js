const getLongestSubString = str => {
    if (!str || typeof str !== "string") return null;

    if (str.length === 0) return 0;

    let start = 0;
    let end = 0;
    let strObj = {}
    let maxLen = -Infinity

    while (end < str.length) {
        if (str[end] in strObj) {

            if (strObj[str[end]] >= start) {
                start = strObj[str[end]] + 1;
            }

            strObj[str[end]] = end;
        } else {
            strObj[str[end]] = end;
        }

        maxLen = Math.max(maxLen, end - start + 1)
        end++;
    }

    return maxLen;
}

console.log(getLongestSubString('cadbzabcdefg'));
console.log(getLongestSubString('aaaaabcddddd'));
console.log(getLongestSubString('abcd'));
console.log(getLongestSubString('abcdabcdefabcdefghih'));
// "c a d b z a b c d e f  g"
// "0 1 2 3 4 5 6 7 8 9 10 11"
//         "s"
//               "e"
// {
//     c: 0/7,
//     a: 1/5,
//     d: 2,
//     b: 6,
//     z: 4,
// }

// maxLen = 6