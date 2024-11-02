/**
 * Prints the Pattern on the below
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */
const pattern3 = (n) => {
  let row = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
    row = '';
  }
};

module.exports = pattern3;
