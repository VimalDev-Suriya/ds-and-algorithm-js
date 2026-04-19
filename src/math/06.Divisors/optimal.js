/**
 * Retrun All Divisors for the number N
 * @param {Number} n 
 * @returns {0 | Array[Number]}
 * 
 * @intution
 * 
 * in Previous solution the loop will run N times.
 * i * N/i => 1 * 36/1   => 36
 * i * N/i => 2 * 36/2   => 18
 * i * N/i => 3 * 36/3   => 12
 * i * N/i => 4 * 36/4   => 9
 * ____________________________________
 * i * N/i => 6 * 36/6   => 6
 * ____________________________________
 * i * N/i => 9 * 36/9   => 4
 * i * N/i => 12 * 36/12 => 3
 * i * N/i => 18 * 36/18 => 2
 * i * N/i => 36 * 36/36 => 1
 * 
 * So If we see the above 
 */
const getAllDivisors = (n) => {
    if (!n || typeof n !== "number") return 0;

    let result = [];
    // O(sqrt(n))
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);

            // * We dont need Math.floor because if a % b = 0 then a / b is also possible with any floting number
            // consider the number 15, 15 % 3 = 0, so we can say that 15/3 is completly possible and the result is also a divisor.
            if ((n / i) !== i) {
                result.push((n / i))
            }
        }
    }

    return result.sort((a, b) => a - b); //O(nlog n) -> here the num is number of characters
}

console.log(getAllDivisors(36)); // [1, 2, 3, 4, 6, 8, 12, 18, 36]
console.log(getAllDivisors(100));
console.log(getAllDivisors(145));
console.log(getAllDivisors(77));
