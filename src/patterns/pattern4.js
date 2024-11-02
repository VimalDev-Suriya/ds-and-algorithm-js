/**
 * Prints the Pattern on the below
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
 */
const pattern4 = (n) => {
  let row = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      row += `${i + 1} `;
    }
    console.log(row);
    row = '';
  }
};

module.exports = pattern4;
