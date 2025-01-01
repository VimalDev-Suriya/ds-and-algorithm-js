// * O(n), as the fn calls itself n times.
const print_name = (n) => {
  console.log('print name executed');
  n--;
  return n > 0 ? print_name(n) : null;
};

// * N => 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
const print_numbers = (start, end) => {
  if (start > end) {
    return;
  }

  print_numbers(start + 1, end);
  console.log(start);
};

// * N => 1,2,3,4,5,6,7,8, 9,10
// const print_numbers = (start, end) => {
//   if (start > end) {
//     return;
//   }

//   console.log(start);
//   start++;

//   print_numbers(start, end);
// };

// * Paramaterised method
// it is parametrised because we are calling the same function by manipulating the parameters and asigning the initial values
// * here the sum is he additional param, which is the accumulator
const sum_of_n_number = (i, sum) => {
  if (i < 1) {
    return sum;
  }

  return sum_of_n_number(i - 1, sum + i);
};

// * Functional way of recursion
// eg : 3! => 3*2*1 = 6
const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

module.exports = {
  factorial,
  print_name,
  print_numbers,
  sum_of_n_number,
};
