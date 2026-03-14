// * O(n)
const pow = (base, x) => {
  let res = 1;
  for (let i = 1; i <= x; i++) {
    res *= base;
  }

  return res;
};

console.log(pow(2, 2)); // 4
console.log(pow(2, 4)); // 16
console.log(pow(3, 2)); // 9
console.log(pow(5, 3)); // 9
