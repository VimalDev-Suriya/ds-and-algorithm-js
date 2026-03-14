const squareRoot = (num) => {
  if (!num) return 0;

  let sq;

  // * Why loop run till num;
  // Eg : sqrt(1) = 1;
  // Though it wont run till num, but to have some valid limit we have done this.
  for (let i = 1; i <= num; i++) {
    if (i * i <= num) {
      sq = i;
    } else {
      break;
    }
  }

  // * How it wokrs
  // 1 * 1 <= 30
  // 2 * 2 <= 30
  // 3 * 3 <= 30; sq = 3
  // 4 * 4 <= 30; sq = 4
  // 5 * 5 <= 30; sq = 5
  // 6 * 6 <= 30; Break

  return sq;
};

console.log(squareRoot(25)); // 5
console.log(squareRoot(36)); // 6
console.log(squareRoot(30)); // 5 -> round off 5
