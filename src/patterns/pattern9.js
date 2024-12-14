/**
 * Here the n is the rows
 * if n = 5 ; i.e the n = row = 5
 * n * 2 = 10 will be the max columns
 * we will display the " " in median of the max columms + (mediam of max columns + & - i(rows))
 *********
 **** ****
 ***   ***
 **     **
 *       *
 */
const pattern9 = (n) => {
  let row = '';
  let maxColumn = n * 2 - 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= maxColumn; j++) {
      if (
        Math.ceil(maxColumn / 2) - i < j &&
        j < Math.ceil(maxColumn / 2) + i
      ) {
        row += '  ';
      } else {
        row += '* ';
      }
    }
    console.log(row);
    row = '';
  }
};

/**
 * Second possible idea for this problem
 * Here the n is the row
 * i =row j =[space, star, space]
 * i = 0 :: j = [4, 1, 4] = 9
 * i = 1 :: j = [3, 3, 3] = 9
 * i = 2 :: j = [2, 5, 1] = 9
 * i = 3 :: j = [1, 7, 1] = 9
 * i = 4 :: j = [0, 9, 0] = 9
 * i iterate till n
 * If we look the "j" we could notce itis the combination of spaces and stars
 * j = [n - i, 2(i) - 1, n - i] (this is thr formula) if we somehow compare the column with row (which is the keypoint for problem solving)
 */
// const pattern9 = (n) => {
//   let row = '';
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i + 1; j++) {
//       row += ' ';
//     }

//     for (let j = 0; j < 2 * i + 1; j++) {
//       row += '*';
//     }

//     for (let j = 0; j < n - i + 1; j++) {
//       row += ' ';
//     }

//     console.log(row);
//     row = '';
//   }
// };

module.exports = pattern9;
