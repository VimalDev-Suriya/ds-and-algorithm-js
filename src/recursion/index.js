const {
  print_name,
  print_numbers,
  sum_of_n_number,
  factorial,
} = require('./basics');
const { fibinacci_loop, fibonacci_recursion } = require('./fibonacci');
const { reverse_array } = require('./reverse-array');

console.log('**************RECURSIONS START****************');
print_name(5);
print_numbers(1, 10);
console.log('Sum of n numbers', sum_of_n_number(3, 0));
console.log('Factorial of n numbers', factorial(4));
console.log('revers the array', reverse_array([1, 2, 3, 4, 5], 0, 4));
console.log('fibonacci numbers', fibinacci_loop(10));
console.log('fibonacci numbers', fibonacci_recursion(10));
console.log('**************RECURSIONS END****************');
