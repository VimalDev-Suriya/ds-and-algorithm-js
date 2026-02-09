/**
 * Kadenes alogorithm
 * 
 * A algo to determine the maximum sum within the subarrays in the given array. The array may contains positive, negative, zeros
 * 
 * NOTE (Intuition): Always drop the sum to 0 , if the previous sum of subarray is < 0. 
 * Remember if all elements are having negative elements then, based on the requiremt we should changes the logic. like below comments
 * both apprches are correct
 */

// * Not a refactord one
const maxSubarraySum = arr => {
    let currentSum = 0;
    let maxSum = -Infinity; // * maintain the maximum negative element
    let start=0, end=0, tempStart = 0; 

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        // * handling the current sum drop here will make the maxSum as 0 if all the elements are negative.
        // if (currentSum < 0) {
        //     currentSum = 0;
        // }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            end = i;
            start = tempStart;
        }

        // This will allow to determin the maxSum to be negative.
        if(currentSum < 0){
            currentSum = 0;
            tempStart = i+1; // * here I am +1 because we know that till i, the sum is less than the 0, so I need to start the tempStart from the next element 
        }
    }

    const subArray = arr.slice(start, end+1);

    return maxSum;
}

console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSubarraySum([7, 8, 2, 4])); // 21
// console.log(maxSubarraySum([-2, -3, -3, -1])); // 7
