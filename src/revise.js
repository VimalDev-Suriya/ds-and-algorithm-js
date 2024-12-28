const bubble_sort_dsc = (arr = []) => {
  const passes = arr.length - 1;

  for (let i = 0; i < passes; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(bubble_sort_dsc([7, 4, 10, 8, 3, 1]));

const insertion_sort_dsc = (arr = []) => {
  let temp, j;

  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];

    for (j = i - 1; j >= 0 && arr[j] < temp; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = temp;
  }
  return arr;
};

console.log('Inseration sort', insertion_sort_dsc([7, 4, 10, 8, 3, 1]));
