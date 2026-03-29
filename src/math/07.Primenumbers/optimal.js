const isPrime = n => {
    if (!n || typeof n !== "number") return false;

    // * 1 is not the prime number, any prime number should be greater than 1 and [should be divided by 1 and byitself]
    if (n === 1) return false;

    let count = 0;

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count++;

            if (Math.floor(n / i) !== i) count++
        }

        if (count > 2) return false;
    }

    return true;
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(11))
console.log(isPrime(36))
console.log(isPrime(0))