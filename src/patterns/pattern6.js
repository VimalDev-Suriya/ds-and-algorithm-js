/**
 * Prints the Pattern on the below
 * * * * *
 * * * *
 * * *
 * *
 *
 */
const pattern6 = (n) => {
  let row = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      row += `${j + 1} `;
    }
    console.log(row);
    row = '';
  }
};

module.exports = pattern6;
