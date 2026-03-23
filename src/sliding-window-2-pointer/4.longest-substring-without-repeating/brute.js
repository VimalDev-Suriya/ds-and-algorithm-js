/**
 * Longest Substring without repeating Characters
 * 
 * @example
 * getLongestSubstringWithoutRepeating("cadbzabcd"); // 5 "cadbz" or "zabcd"
*/
// TC O(n^2) and SC - O(n)
const getLongestSubstringWithoutRepeating = (str) => {
    if (typeof str !== "string" || !str) return null;

    let maxLen = 0;
    let resultObj = {};
    let result;
    for (let i = 0; i < str.length; i++) {
        let len = 0;
        for (let j = i; j < str.length; j++) {
            if (!resultObj[str[j]]) {
                len++;
                resultObj[str[j]] = str[j]
            } else {
                break;
            }
        }

        if (len > maxLen) {
            maxLen = len;
            result = resultObj
        }
    }

    let strResult = "";

    for (let key in result) {
        strResult += key
    }

    return {
        maxLen, strResult
    }
}

console.log(getLongestSubstringWithoutRepeating("cadbzabcd")); // 5 "cadbz" or "zabcd"