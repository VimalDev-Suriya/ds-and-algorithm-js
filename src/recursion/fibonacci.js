// 0, 1, 1, 2, 3, 5, 8, 13...
// summing the first and second element
const fibinacci_loop = (n) => {
  let arr = [0, 1];

  // * this is O(n)
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
};

// const fibinacci_loop = (n) => {
//   let sum = 0;
//   let arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     sum = arr[i - 1] + arr[i - 2];
//     arr.push(sum);
//   }

//   return arr;
// };

// Calling the recusrin within.
// * O(2^n) -> exponential growth of complexity
// Because for each recussion - it indeed call 2 times
// 4 -> 4-1=3, 4-2=2 -> 3-1=2, 3-2=1 -> ....
const fibonacci_recursion = (n) => {
  return n > 1 ? fibonacci_recursion(n - 1) + fibonacci_recursion(n - 2) : n;
};

module.exports = {
  fibinacci_loop,
  fibonacci_recursion,
};
