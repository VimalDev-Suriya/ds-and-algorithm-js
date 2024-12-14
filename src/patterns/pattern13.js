/*
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
*/

const pattern13 = (n) => {
  let row = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          row += `1 `;
        } else {
          row += `0 `;
        }
      } else {
        if (j % 2 === 0) {
          row += '0 ';
        } else {
          row += '1 ';
        }
      }
    }
    console.log(row);
    row = '';
  }
};

module.exports = pattern13;
