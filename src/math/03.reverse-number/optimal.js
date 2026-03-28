const reverseNumber = n => {
    if (!n || typeof n !== "number") return n;

    let reversedNumber = 0;

    while (n > 0) {
        let reminder = n % 10;
        reversedNumber = (reversedNumber * 10) + reminder;

        n = Math.floor(n / 10);
    }

    return reversedNumber;
}

console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(6789)); // 9876 