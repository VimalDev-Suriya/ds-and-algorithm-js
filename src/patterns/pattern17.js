// *                 * i=1; j=[1, ,10] = j[i, mxClm]
// * *             * * i=2; j=[1,2, ,9,10] = j[j <= i, ,j > mxClm-i]
// * * *         * * * i=3; j=[1,2,3, ,8,9,10]
// * * * *     * * * * i=4; j=[1,2,3,4, ,7,8,9,10]
// * * * * * * * * * * i=5; j=[1,2,3,4,5,6,7,8,9,10]
// * * * *     * * * * i=6; j=[1,2,3,4, ,7,8,9,10] = j[j <= (mxClm-i),, j> i]
// * * *         * * * i=7; j=[1,2,3, ,8,9,10]
// * *             * * i=8; j=[1,2, ,9, 10]
// *                 * i=9; j=[1, ,10] = j[]

/**
 *
 * @param {*} n
 * maxRows = 2n - 1
 * mxColumns = 2n
 * i represents the rows
 * j represent the columns
 * applies when i<mxClm/2 => j[j < i, ,j > mxClm-i]
 *
 */

// Have the flaw in formula constructed
// const pattern17 = (n) => {
//   let row = '';
//   const maxRows = 2 * n - 1;
//   const maxColumns = 2 * n;

//   for (let i = 0; i <= maxRows; i++) {
//     for (let j = 0; j <= maxColumns; j++) {
//       if (n === i) {
//         row += '* ';
//         continue;
//       }
//       if (i < n) {
//         if (j <= i || maxColumns - i <= j) {
//           row += '* ';
//         } else {
//           row += '  ';
//         }
//       } else {
//         if (j < maxColumns - i || i < j) {
//           row += '* ';
//         } else {
//           row += '  ';
//         }
//       }
//     }

//     console.log(row);
//     row = '';
//   }
// };

const pattern17 = (n) => {
  let row = '';
  const maxRows = 2 * n - 1;
  const maxColumns = 2 * n;

  for (let i = 1; i <= maxRows; i++) {
    for (let j = 1; j <= maxColumns; j++) {
      if (i <= n) {
        if (j <= i || maxColumns - i < j) {
          row += '* ';
        } else {
          row += '  ';
        }
      }

      if (i > n) {
        if (j <= maxColumns - i || i < j) {
          row += '* ';
        } else {
          row += '  ';
        }
      }
    }

    console.log(row);
    row = '';
  }
};

module.exports = pattern17;
