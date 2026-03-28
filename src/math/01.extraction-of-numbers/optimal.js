// step 1;
// 7789 % 10 = 9; 
// 7789 / 10 = 778.9 => Math.floor(778.9) = 778

// Setp 2
// 778 % 10 = 8
// 778 / 10 = 77.8 => 77

// Step 3
// 77 % 10 = 7
// 77 / 10 = 7

// Step 4
// 7 % 10 = 7 (any smaller number % than it retruns the same number)
// 7 / 10 = 0.7 => 0
// -------------Stop the loop here---------------

// TC -> O(log10 N)
// Since we are dividing the n/10 so it is log to the base 10
// if the division is due to by 2, then TC is log to the base 2.
// So whenever we are dividing the N by anynumber it will be the log
const getExtractionOfNumbers = (n) => {
    const result = [];

    // log10 N => 3.81 + 1 => 4 [this is another approch to find the count]

    while (n > 0) {
        // * the % returns the reminder
        result.push(n % 10);

        // "/" retruns the quotient
        n = Math.floor(n / 10);
    }

    return result;
}

console.log(getExtractionOfNumbers(7789))