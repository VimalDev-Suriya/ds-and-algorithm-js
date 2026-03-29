// * Print all divisors of the given number
// TC = O(n)
const getDivisors = n => {
    if (!n || typeof n !== "number") return 0;

    let result = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }

    return result;
}

console.log(getDivisors(36)); // [1, 2, 3, 4, 6, 8, 12, 18, 36]
console.log(getDivisors(25));
console.log(getDivisors(100));
console.log(getDivisors(1));
console.log(getDivisors(145));