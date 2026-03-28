/**
 * ArmsStrong Number
 * 
 * A number is the Armstrong number if its individual digits can be multiplied with the count of the entire digit and sum of those individuls result in the same number as given, then the number is Armstrong
 * 
 * @example
 * isArmstringNumber(153); // true
 * isArmstringNumber(1634); // true
 * isArmstringNumber(123); // false
 * 
 * @description
 * 153; where the count of the digits is 3, so
 * 1^3 + 5^3 + 3^3 = 153, which is equal to the original number
 */

const pow = (base, power) => {
    if (base === 0) return 0;

    if (power === 0) return 1;

    if (power < 0) {
        base = 1 / base;
        power = -power;
    }

    let result = 1;

    while (power > 0) {
        if (power % 2 === 1) {
            result *= base;
            power -= 1;
        }

        base *= base;
        power = Math.floor(power / 2);
    }

    return result;
}

// TC = O(log10N) + (O(log10 N) * O(log2 N))
// TC = (O(log10 N) * O(log2 N))
const isArmstringNumber = (n) => {
    if (!n || typeof n !== "number") return n;

    let result = 0;
    let count = 0;
    let dp = n;

    // * Determining the count
    while (dp > 0) {
        count++;
        dp = Math.floor(dp / 10);
    }

    // istead of looping to find the count i can perform
    // let count = n.toString().length ; // 4

    // * n will be 0 here so resetting
    dp = n

    while (dp > 0) {
        let reminder = dp % 10;
        result += Math.pow(reminder, count);
        // result += pow(reminder, count);
        dp = Math.floor(dp / 10);
    }

    return result === n;
}

console.log(isArmstringNumber(153))
console.log(isArmstringNumber(1634))
console.log(isArmstringNumber(123))
console.log(isArmstringNumber(370))