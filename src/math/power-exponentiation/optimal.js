/**
 * Power Exponentiation
 *
 * @example
 * pow(2, 4) // 16
 * pow(5, 3) // 125
 *
 * @time_complexity
 * O(log2 n)
 *
 * @formula
 * X ^ n;
 * Where X is the base and n is the power
 *
 * Whenever n is odd then, we will convert the expression into
 * `X ^ n = X * X ^ (n-1);`
 *
 * When ever n is even
 * `X ^ n = ((X ^ 2) ^ (n/2))`
 */

const pow = (x, n) => {
  // * If base is 0, then the result is always 0
  if (x === 0) return 0;

  // * if power is 0, then result is always 1.
  if (n === 0) return 1;

  // * Handling -ve integer
  if (n < 0) {
    // Simple Maths => x ^ -n ~= (1/x) ^ n
    x = 1 / x; // so the base is 1/x
    n = -n; // converting the -ve power to +ve, since (- * - = +)
  }

  let res = 1; // to hold the final value.

  while (n > 0) {
    // If n is ODD
    if (n % 2 === 1) {
      // taking 1 base and mul to the result
      res *= x;
      n -= 1; // reducing the n by 1, since we are splitiing the into one base
    }

    // The n is EVEN here
    // 2 ^ 10 ~= (2 ^ 2) ^ (10/2) ~= 4 ^ 5
    x *= x; // mul base into base.
    n = Math.floor(n / 2); // dividing the power by 2
  }

  return res;
};

console.log(pow(2, 2)); // 4
console.log(pow(2, 4)); // 16
console.log(pow(3, 2)); // 9
console.log(pow(5, 3)); // 9
console.log(pow(2, 21)); // 9
console.log(pow(2, -2)); // 9
