/* 
1        1  i = 1; j = [1, ,10] = [i, ,n] 
12      21  i = 2; j = [1,2, ,9,10] = [i-1, i,  ,n-2, n-1] j<i || (n-i) > j
123    321
1234  4321
1234554321
*/

const pattern14 = (n) => {
  let row = '';
  let maxColumns = 2 * n;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= maxColumns; j++) {
      if (j <= i || j > maxColumns - i) {
        if (j <= i) {
          row += `${j} `;
        } else {
          row += `${maxColumns - j + 1} `;
        }
      } else {
        row += '  ';
      }
    }
    console.log(row);
    row = '';
  }
};

module.exports = pattern14;
