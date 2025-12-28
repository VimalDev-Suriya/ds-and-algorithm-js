/**
 * Dynamic programming (Very very basics)
 * Mainly used to reduce the repetitive task to solve the problems. It solves below 2 probles,
 * 1. Overrlapping problems - fibinacci series
 * 2. Optimal substructure
 * Two approches.
 * 1. Memoization
 * 2. Tabulation
 */

// * below solution works for minimal amount of fib number, if we use fin of 100, the system istelf may break, because, we are calculating lot more functionalities which are actually repeated
// fib(10) => fib(9)[fib(8)[fib(7) + fib(6)] + fib(7)[fib(6) +  fib(5)]] + fib(8)[fib(7) + fib(6)]
// If you see above eg, fib(8) is repeting, all the functionalities to calculate the fib(8) are repeated again from scratch.
// the Big O notation valye is O(2 ^ n)
// const fib = n => {
//     if(n === 0) return 0;
    
//     if(n === 1 || n === 2) return 1;
//     let prev1 = fib(n - 1);
//     let prev2 = fib(n - 2);

//     return prev1 + prev2;
// }

// * Optimizing using the Memoization
// * its much faster, but we have another problem,
// since the recursion is closely bound with JS callStack, there are some limits to perform
// If the number is 10000, then we will get the 
// const fib = (n, memo=[]) => {
//     if(memo[n]) return memo[n];

//     if(n === 0) return 0;
//     if(n === 1 || n ===2) return 1;

//     const result = fib(n - 1, memo) + fib(n - 2, memo);
//     memo[n] = result;

//     return result;
// }

// Tabulation
// * instead of using recursion, we can use arrays, to folve this

const fib = n => {
    const fib_arr = [0, 1, 1];

    for(let i=3; i <= n; i++){
        fib_arr[i] = fib_arr[i-1] + fib_arr[i-2];
    }

    console.log(fib_arr)
    return fib_arr[n]
}

console.log('fib 0', fib(0))
console.log('fib 1', fib(1))
console.log('fib 2', fib(2))
console.log('fib 3', fib(3))
console.log('fib 4', fib(4))
console.log('fib 5', fib(5))
console.log('fib 6', fib(6))
console.log('fib 40', fib(40))