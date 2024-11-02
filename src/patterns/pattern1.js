/*
    Basic pattern (i = outerloop and j = innerloop)
    *****
    *****
    *****
    *****
    *****
 */
const pattern1 = (n) => {
  // * In JS we can't maintain the single line for each individual display
  let row = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      row += '* ';
    }
    console.log(row);
    row = '';
  }
};

module.exports = pattern1;
