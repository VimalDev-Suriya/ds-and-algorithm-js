// Maximum Sum of a Fixed Size Subarray
/**
 * Want to find the maximum sum of any contiguous subarray of a given size 𝑘 in an array 
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    const k = 3;
    console.log(maxSumSubarray(arr, k)); // Outputs: 21 (sum of [6, 7, 8])
 */

// Totally the big O is O(n)
const maxSumSubarray = (arr, k) => {
  if (arr.length < k) {
    throw new Error('The array length should be greater than window');
  }

  let maxSum,
    currentSum = 0;

  // O(n)
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  maxSum = currentSum;

  // Sliding window (O(n))
  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// * Brute force (O(n^2))
const maxSumSubarray1 = (arr, k) => {
  let currentSum = 0,
    maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < k + i; j++) {
      if (j < arr.length) {
        currentSum += arr[j];
      }
    }

    maxSum = Math.max(maxSum, currentSum);
    currentSum = 0;
  }

  return maxSum;
};

module.exports = maxSumSubarray;
