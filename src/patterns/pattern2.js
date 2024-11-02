/**
 * Prints the Pattern on the below
 *
 * *
 * * *
 * * * *
 * * * * *
 */
const pattern2 = (n) => {
  let row = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      row += '* ';
    }
    console.log(row);
    row = '';
  }
};

module.exports = pattern2;
