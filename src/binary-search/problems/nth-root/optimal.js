/**
 * Nth Root of the number
 *
 * @why_binary_serach
 * This is also similar to square root problem, but the root may vary. Also we have start & end for  serach space and we will reduce the search space by neglecting the halfs.
 *
 * @time_complexity
 * O(log n) * O(log num) => O(logn ^ 2) < O(n)
 *
 * @edge_cases
 * Why the expontialisation function will result in error if input grows bigger and bigger?
 * As we know, the pow function will multiply the x , ntimes. So if the x is nearly to 10^9 and if it mul with n=10, then the result is very very huge we cannot store them. So instead of returning the final value. what exactly we need for computing the root.
 * - it is just to neglect the correct half. How we are neglecting? by determining the power is gerater or smaller. So istead of determinh=g the exact value, can we also determin whether the power goes beyond the num provided?
 * like if power > num, then we are sure that we should neglect the right half.
 */

// * For more detail find the power exponentialization section
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

// * I am goin to return set of 3 params
const pow_simplified = (x, n, num) => {
  let res = 1;

  for (let i = 1; i <= n; i++) {
    res = res * x;

    if (res > num) {
      // * we dont want to proceed further to determin the exact value, we can break and send that this will not be in the range so we can remove the right half
      return 2;
    }
  }

  // * we found the power value
  if (res === num) return 1;

  // If res is less or res is not equal to num
  return 0;
};

const findNthRoot = (num, root) => {
  let start = 1;
  let end = num;
  let mid;

  //   while (start <= end) {
  //     mid = Math.floor((start + end) / 2);
  //     let power = pow(mid, root);

  //     if (num === power) {
  //       return mid;
  //     } else if (power > num) {
  //       end = mid - 1;
  //     } else {
  //       start = mid + 1;
  //     }
  //   }

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    let power = pow_simplified(mid, root, num);

    if (power === 1) {
      return mid;
    } else if (power === 2) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

console.log(findNthRoot(27, 3)); // 3
console.log(findNthRoot(16, 4)); // 2
console.log(findNthRoot(69, 2)); // -1
console.log(findNthRoot(25, 2)); // 5
console.log(findNthRoot(10 ** 10, 10)); // -1
