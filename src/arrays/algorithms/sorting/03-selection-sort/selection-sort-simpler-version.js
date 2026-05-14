const selectionSort = (arr) => {
  // * array till arr.length-1, because at last the last element will be already sorted
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i; // considering the element as the lowest element's idx

    for (let j = i + 1; j < arr.length; j++) {
      // * if the lowest idx is greater than the j, then assigning the lowest as j
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    // * If block prevents unwanted swapping
    if (i !== lowest) {
      // swapping the lowest with i
      [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
  }

  return arr;
};

console.log(selectionSort([6, 3, 1, 7, -1, 30, -2, 10]));
