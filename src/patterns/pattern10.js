/**
 * Considering the n as the rows
 * i the outer loop for the rows - which will loop till n
 * j will be iterating till n*2 - 1 = MaxColumns
 * Should display * if i = 0
 * if J falls under i  (i> j)-> display " "
 * if j greater than n-i -> display " "
 * 012345678   = n=9 i=0; j=[0,8] = all *
 *  1234567    = n=9, [i=1; j =0 ] and [i=1 , j=8] = ' ' all other "*"
 *   23456     = n=9, [i=2; j =0 ] [i=2; j =1 ] and [i=2 , j=8] [i=2 , j=7] = ' ' all other "*"
 *    345       = n=9, [i=3] j=[0,1,2] and j=[6,7,8]
 *     4
 */

// if (
//     Math.ceil(maxColumn / 2) + i > j &&
//     Math.ceil(maxColumn / 2) - i < j
//   ) {
//     row += ` `;
//   } else {
//     row += '*';
//   }

const pattern10 = (n) => {
  let row = '';
  let maxColumn = n * 2 - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < maxColumn; j++) {
      if (i > j || maxColumn - i <= j) {
        row += '  ';
      } else {
        row += '* ';
      }
    }

    console.log(row);
    row = '';
  }
};

module.exports = pattern10;
