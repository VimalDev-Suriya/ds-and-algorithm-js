// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

const pattern15 = (n) => {
  let rows = '';
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      rows += `${++count} `;
    }

    console.log(rows);
    rows = '';
  }
};

module.exports = pattern15;
