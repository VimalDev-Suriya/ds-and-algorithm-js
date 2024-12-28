// https://www.youtube.com/watch?v=ogjf7ORKfd8
// Algo explained in youtube
// merging the arrays by sorting them
const merge = (arr, low, mid, high) => {
  const temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  // * updating the original array from the sorted temp.
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  // * the partisions
  console.log(temp);

  return arr;
};

const merge_sort = (arr, low, high) => {
  if (low === high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);

  // * First half
  merge_sort(arr, low, mid); // it is actually heps to find the sub arrays
  // * Second half
  merge_sort(arr, mid + 1, high); // it is actually heps to find the sub arrays

  return merge(arr, low, mid, high);
};

const merge_sort_asc = (arr = []) => {
  if (!arr.length) {
    return arr;
  }

  const low = 0;
  const high = arr.length - 1;

  return merge_sort(arr, low, high);
};

module.exports = {
  merge_sort_asc,
};
