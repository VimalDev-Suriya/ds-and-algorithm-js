/*
Mirror image of pattern2 
 */

const pattern7 = (n) => {
  let row = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= n - i) {
        row += '* ';
      } else {
        row += '  ';
      }
    }

    console.log(row);
    row = '';
  }
};

module.exports = pattern7;
