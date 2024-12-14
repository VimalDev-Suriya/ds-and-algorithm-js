/*
       4       = n=9 i=0; j[4] = *
      345      = n=9 i=1; j[3,4,5] = *
     23456     = n=9 i=2; j=[2,3,4,5,6] = *
    1234567    = n=9 i=3; j=[1,2,3,4,5,6,7] = *
 * 012345678   = n=9 i=5; j=[0,8] = all *
 *  1234567    = n=9 i=6; 6-5 = 1 j=[1,2,3,4,5,6,7] = *
 *   23456     = n=9 i=7; j=[2,3,4,5,6] = *
 *    345      = n=9 i=8; j=[3,4,5] = *
 *     4       = n=9 i=9; j=[4] = *
 * 
 *  i=[0,9] i=[1,8] i=[2,7] i=[3,6]
 * 
*/

const pattern11 = (n) => {
  let row = '';
  let maxRow = 2 * n;
  let maxColumn = 2 * n - 1;

  for (let i = 1; i <= maxRow; i++) {
    for (let j = 1; j <= maxColumn; j++) {
      if (i > Math.ceil(maxRow / 2)) {
        if (i - n > j - 1 || maxColumn - (i - n) <= j - 1) {
          row += '  ';
        } else {
          row += '* ';
        }
      } else {
        if (
          Math.ceil(maxColumn / 2) - i < j &&
          j < Math.ceil(maxColumn / 2) + i
        ) {
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

module.exports = pattern11;
