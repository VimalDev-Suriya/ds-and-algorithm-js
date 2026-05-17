// * Reversal Algorithm
// SC: O(1)
// TC: O(n + k - 1 + n - k) => O(2n - 1) => O(n)
const rotateArray = (arr, step) => {
  if (!Array.isArray(arr) || arr.length === 0) return arr;

  if (!step || step === 0) return arr;

  // Normalizing the steps
  const normalizedStep = step % arr.length;

  if (normalizedStep === 0) return arr;

  // * Reversing the array using 2 pointers
  const reverseArray = (arr, start, end) => {
    while (start < end) {
      [arr[end], arr[start]] = [arr[start], arr[end]];
      start++;
      end--;
    }

    return arr;
  };

  // * If the total revresal of array done at first then we can see the array was left rotated
  reverseArray(arr, 0, arr.length - 1); // Reversing entire array

  reverseArray(arr, 0, normalizedStep - 1); // Reversing the first normalized - 1 elements
  reverseArray(arr, normalizedStep, arr.length - 1); // Reversing the remaining elements

  // * If the total revresal of array done at last then we can see the array was right rotated
  //   reverseArray(arr, 0, arr.length - 1); // Reversing entire array

  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(rotateArray([1, 2, 3, 4, 5], 3));
console.log(rotateArray([1, 2, 3, 4, 5], 4));
console.log(rotateArray([1, 2, 3, 4, 5], 5));
console.log(rotateArray([1, 2, 3, 4, 5], 10));
console.log(rotateArray([1, 2, 3, 4, 5], 17));
console.log(rotateArray([1, 2, 3, 4, 5], 20));
