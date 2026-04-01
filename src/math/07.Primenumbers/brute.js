// Prime Numbers
// The Numbers which have exactly 2 factors alone. One is 1 and another the number itself.

const isPrime = n => {
    if (!n || typeof n !== "number") return false;

    // * 1 is not the primenumber
    if (n === 1) return false;

    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }

        if (count > 2) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(10))
console.log(isPrime(100))
console.log(isPrime(2))
console.log(isPrime(11))
console.log(isPrime(18))