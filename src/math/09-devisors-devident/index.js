const divideUsingSubtraction = (divident, divisor) => {
  if (divident === 0) return 0;

  if (divisor === 0) throw Error('Divide by Zero Exception');

  if (divident < divisor) return { remainder: null, quotient: 0 };

  let quotient = 0;
  let currentDivident = divident;

  while (currentDivident > divisor) {
    currentDivident -= divisor;
    quotient++;
  }

  return {
    remainder: currentDivident,
    quotient,
  };
};

console.log(divideUsingSubtraction(15, 6)); // remainder = 3, Quotient = 2
console.log(divideUsingSubtraction(10, 6)); // remainder = 3, Quotient = 2
