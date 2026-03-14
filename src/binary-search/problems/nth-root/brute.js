/**
 * Find the Nth root of the given Num
 *
 * num = 27, root = 3;
 * 3 root of 27 => 3 * 3 * 3 => 3
 * 4 root of 16 => 2 * 2 * 2 * 2 => 2
 * 2 root of 69 => -1 [there is no equalent rooot for 69]
 * 2 root of 25 => 5 * 5 => 5
 */

const pow = (x, n) => {
  if (x === 0) return 0;
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let res = 1;

  while (n > 0) {
    if (n % 2 === 1) {
      res = res * x;
      n = n - 1;
    }

    x = x * x;
    n = Math.floor(n / 2);
  }

  return res;
};

// * Time Complexity -> O(num) * O(log root)
const findNthRoot = (num, root) => {
  for (let i = 1; i <= num; i++) {
    let power = pow(i, root);

    if (power === num) {
      return i;
    } else if (power > num) {
      break;
    }
  }

  return -1;
};

console.log(findNthRoot(27, 3)); // 3
console.log(findNthRoot(16, 4)); // 2
console.log(findNthRoot(69, 2)); // -1
console.log(findNthRoot(25, 2)); // 5
