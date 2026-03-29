/**
 * Euclidean Algorithm
 * gcd(a, b) => gcd(a-b, b); where a > b;
 * gcd(a, b) => gcd(a%b, b); where a > b; [this is more efficient than subraction]
 * 
 * @description
 * As the part of the above formula we can keep on reducing the number untill either a or b becomes zero, the remaining one is actually a GCD of the given number
 * 
 * @example
 * gcd(40, 20) => gcd((40%20 = 0), 20) => gcd(0, 20) => so the gcd is 20.
 * gcd(52, 10) => gcd(2, 10) => gcd(10, 2) => gcd(0, 2) => so the gcd is 2
 * gcd(7, 3) => gcd(1, 3) => gcd(0, 1) => so the gcd is 1 
*/
const gcd = (a, b) => {
    while (a > 0 && b > 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }

    return a === 0 ? b : a;
}

console.log(gcd(40, 20))
console.log(gcd(52, 10))
console.log(gcd(7, 3))
console.log(gcd(6, 75))
