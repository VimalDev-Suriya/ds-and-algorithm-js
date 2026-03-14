/**
 * Determin the Square root of teh Given Number
 * @param {Number} num
 * @returns {Number}
 *
 * This is slightly different from our previous all problems. Previously we will have one array, in that we can perform most of the actions, but here we will not have array. Instead we will play with linear numbers.
 *
 * @intuition Why we are performing Binary search?
 * As we know, whenever we are planning to work in Sorted (integer numbers). And going to find the possible value. If you see below example, it clearly states that we are going till 5 and after that we can removing the possibility.
 *
 */
// * How it wokrs
// 1 * 1 <= 30
// 2 * 2 <= 30
// 3 * 3 <= 30; sq = 3
// 4 * 4 <= 30; sq = 4
// 5 * 5 <= 30; sq = 5
// 6 * 6 <= 30; Break
const squareRoot = (num) => {
  if (!num) return 0;

  if (num === 1) return 1;

  let start = 1;
  let end = num;
  let mid, sqrt;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    let sq = mid * mid;

    if (sq <= num) {
      sqrt = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // AFter the loop ends,
  // the start always points to the first element greater than the num.
  // the end always points to the sqrt of that element [final answer] - We can also return ends if it is required, instead of maintaining another variable.

  // * Why so it is happening like above?
  //
  console.log('start', start);
  console.log('end', end);
  console.log('mid', mid);

  return sqrt;
};

console.log('25', squareRoot(25)); // 5
console.log('36', squareRoot(36)); // 6
console.log('30', squareRoot(30)); // 5 -> round off 5
console.log('10', squareRoot(10)); // 3 -> round off 3
console.log('1', squareRoot(1)); // 1
console.log('100', squareRoot(100)); // 10
