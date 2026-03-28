/**
 * Password Securty - min number of flip required to make the passwrod string secured
 * 
 * @example
 * getMinFlips([1, 1, 1, 0, 0, 1, 1, 0, 0, 0]); // 3
 * getMinFlips([1, 0, 1, 0, 1, 0]); // 3
 * 
 * @notes
 * Here the length of the array is always EVEN.
 * Array consist of only 0's and 1's
 * The flip can be 0 <-> 1
 * Each sub-string should be even length and should either include 0's or 1's
 * 
 * @description
 * We need to split the array to 2 non-overlapping sub-strings 
 * Here we should provide the min flip either 0 <-> 1. for example [1, 1, 1, "0 -> 1", "0 -> 1", 1, 1, "0 -> 1", 0, 0]
 * So here i had done 3 flips. If you see in depth the the substring of 0's length is 2 and substring of 1's length is 8. The substring length should also be even. 
 * 
 * @intuition
 * SPliting the array into pair of numbers. So each pair can either be 0 or 1 
*/
const getMinFlips = (arr) => {
    let flips = 0;
    for (let i = 0; i < arr.length; i = i + 2) {
        if (arr[i] !== arr[i + 1]) {
            flips++;
        }
    }

    return flips
}


console.log(getMinFlips([1, 1, 1, 0, 0, 1, 1, 0, 0, 0])); // 3
console.log(getMinFlips([1, 0, 1, 0, 1, 0])); // 3