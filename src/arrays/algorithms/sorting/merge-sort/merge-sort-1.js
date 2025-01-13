const merge = (leftArray = [], rightArray = []) => {
  let temp = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArray.length && rightIdx < rightArray.length) {
    // * Ordering in ascending order
    if (leftArray[leftIdx] < rightArray[rightIdx]) {
      temp.push(leftArray[leftIdx]);
      leftIdx++;
    } else {
      temp.push(rightArray[rightIdx]);
      rightIdx++;
    }
  }

  return temp.concat(leftArray.slice(leftIdx), rightArray.slice(rightIdx));
};

const mergeSort = (arr = []) => {
  // * If array has the single element then return that array, since the divison had reached its maximum
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  // * Partisiong the array into left and right
  //  * slice will not change the original array returns the new modified array
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

module.exports = {
  mergeSort,
};
