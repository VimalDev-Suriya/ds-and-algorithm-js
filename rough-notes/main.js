// * Arrays
// * Sorting
// * Easy Problems
// * Medium Problems
// * Binary Search
// * Sliding Window & 2 pointer

// * Maths

// * Strings

const merge = (leftArray, rightArray) => {
  const temp = [];
  let left = 0;
  let right = 0;

  while (left < leftArray.length && right < rightArray.length) {
    if (leftArray[left] < rightArray[right]) {
      temp.push(leftArray[left]);
      left++;
    } else {
      temp.push(rightArray[right]);
      right++;
    }
  }

  const remainingLeftArrayELements = leftArray.slice(left);
  const remainingRightArrayELements = rightArray.slice(right);

  return temp.concat(remainingLeftArrayELements, remainingRightArrayELements);
};

const mergeSort = (arr = []) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArray = mergeSort(arr.slice(0, mid));
  const rightArray = mergeSort(arr.slice(mid));

  return merge(leftArray, rightArray);
};

console.log(mergeSort([6, 3, 1, 7, -1, 30, -2, 10]));
