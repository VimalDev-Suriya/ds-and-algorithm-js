/*
maxColumns = 10
separator = maxColumns/2 = 5
0123456789  i=0; j=[all]
0123  6789  i=1; j=[0,1,2,3,,,6,7,8,9]; j=[(n-i)>=j, ,j>=(n+1)]
012    789  i=2; j=[0,1,2,,,,7,8,9]; j=[]
01      89  i=3
0        9  i=4
0        9  i=5; j=[j,   ,n]
01      89  i=6; j=[] = j[(i-n) <=j, (maxClm-(i-n)) >=j]
012    789
0123  6789
0123456789
*/

const pattern16 = (n) => {
  let row = '';
  let maxColumns = 2 * n - 1,
    maxRows = 2 * n - 1;

  for (let i = 0; i <= maxRows; i++) {
    for (let j = 0; j <= maxColumns; j++) {
      if (i < n) {
        if (n - i > j || n + i <= j) {
          row += `${j} `;
        } else {
          row += '  ';
        }
      } else {
        if (i - n >= j || maxColumns - (i - n) <= j) {
          row += `${j} `;
        } else {
          row += '  ';
        }
      }
    }

    console.log(row);
    row = '';
  }
};

module.exports = pattern16;
