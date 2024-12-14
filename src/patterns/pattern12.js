// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

const pattern12 = (n) => {
  let row = '';
  let maxRows = 2 * n - 1;
  let maxColumns = n;

  for (let i = 1; i <= maxRows; i++) {
    for (let j = 1; j <= maxColumns; j++) {
      if (Math.ceil(maxRows / 2) < i) {
        if (j > i - n) {
          row += '* ';
        }
      } else {
        if (j <= i) {
          row += '* ';
        }
      }
    }

    console.log(row);
    row = '';
  }
};

module.exports = pattern12;
