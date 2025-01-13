// const { maxValueinArray } = require('./max-val-in-array');

const merge = (leftArr = [], rightArr = []) => {
  const temp = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      temp.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      temp.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }

  return temp.concat(leftArr.slice(leftIdx), rightArr.slice(rightIdx));
};

const mergeSort = (arr = []) => {
  if (arr.length <= 1) {
    return arr;
  }

  // * Here dividing the length directly - not reduxing the -1 from the length
  // * because when there are 2 elements - on that time 2-1=1 => 1/2=0.5 => 0 which is wrong, that cannot divide furher causes issues with max stack exceeded
  const middle = Math.floor(arr.length / 2);

  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// Using sorting + finding the second largest in it
// * O(nlogn + n)
// const secondLargestElementInArr = (arr = []) => {
//   const sortedArr = mergeSort(arr);
//   const largestEle = sortedArr[sortedArr.length - 1];
//   let secondLg;

//   for (let i = sortedArr.length - 1; i >= 0; i--) {
//     if (largestEle !== sortedArr[i]) {
//       secondLg = sortedArr[i];
//       break;
//     }
//   }

//   return secondLg || 'no second largest element';
// };

// * O(n + n) = O(2n)
// const secondLargestElementInArr = (arr = []) => {
//   const largestValue = maxValueinArray(arr);
//   let secondLargestValue = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== largestValue && arr[i] > secondLargestValue) {
//       secondLargestValue = arr[i];
//     }
//   }

//   return secondLargestValue === -Infinity
//     ? 'no second largest element'
//     : secondLargestValue;
// };

// Time complexity = O(n)
const secondLargestElementInArr = (arr = []) => {
  let largestValue = arr[0];
  let secondLargestValue = -Infinity;

  // * [7, 4, 10, 8, 3]
  /**
   * Pass 1 | l=7;  sl=-inf; arr[i]=7;  | if(7>7)false  else if(7> -inf && 7!== 7) false; | l=7;  sl=-inf
   * Pass 2 | l=7;  sl=-inf; arr[i]=4;  | if(4>7)false  else if(4> -inf && 4!== 7) true;  | l=7;  sl=4
   * Pass 3 | l=7;  sl=4;    arr[i]=10; | if(10>7)true                                    | l=10; sl=7
   * Pass 4 | l=10; sl=7;    arr[i]=8;  | if(8>10)false else if(8>7 && 8!==10) true       | l=10; sl=8
   * Pass 5 | l=10; sl=8;    arr[i]=3;  | if(3>10)fakse else if(3>8 && 3!==10) false      | l=10; sl=8
   */

  // * starting from 1 since we already consider the 0th element as the largest one
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestValue) {
      secondLargestValue = largestValue;
      largestValue = arr[i];
    } else if (arr[i] > secondLargestValue && arr[i] !== largestValue) {
      secondLargestValue = arr[i];
    }

    // Logging the passes
    console.log(largestValue, secondLargestValue);
  }

  return secondLargestValue === -Infinity
    ? 'no second largest element'
    : secondLargestValue;
};

module.exports = { secondLargestElementInArr };
