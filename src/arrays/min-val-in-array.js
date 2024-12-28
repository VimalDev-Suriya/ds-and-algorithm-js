const minValueInArray_1 = (arr = []) => {
  if (!arr.length) {
    return [];
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let min = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }

  return arr[min];
};

const minValueInArray_2 = (arr = []) => Math.min(...arr);

const minValueInArray_3 = (arr = []) =>
  arr.reduce((acc, curr) => {
    // *if we are not passing the default value if accumulator, then JS will take the first value as the default value of acc
    return curr < acc ? curr : acc;
  });

module.exports = {
  minValueInArray_1,
  minValueInArray_2,
  minValueInArray_3,
};
