// GCD (Greatest Common Divisor) or HCF (Higest Common Factor)
// We need to determin the greatest common number that divides both of the given number.
// in simple we need to find the geratest common factor

const gcd = (n1, n2) => {
    if (!n1 || !n2 || typeof n1 !== "number" || typeof n2 !== 'number') return null;

    // * Here "i" starts from the min, because we know the we are finding maxium gcd for both numbers, if i increases greater than any one of n1 or n2 obviosuly those numbers will not be in the gcd.
    for (let i = Math.min(n1, n2); i >= 1; i--) {
        if (n1 % i === 0 && n2 % i === 0) {
            return i; // Since we know that we are starting from the max possible number, so we can return asap we found the common gcd.
            // If we start with 1, then we should run the loop till last.
        }
    }
}

console.log(gcd(20, 40));
console.log(gcd(52, 10));
console.log(gcd(6, 75));
console.log(gcd(7, 11));