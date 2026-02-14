// * Finding the sum of the minimums in the subarray.
// Eg: [3, 1, 2, 4];
// return 17.
// Problem statements
/**
 * Need to find the minimum in subarrays
 * 3 => min is 3
 * 3, 1 => 1
 * 3, 1, 2 => 1
 * 3, 1, 2, 4 => 1
 * 1 => 1
 * 1, 2, => 1
 * 1, 2, 3 => 1
 * 2 => 2
 * 2, 4 => 2
 * 4 => 4
 */

// * Brute force
// O(n^2)
// SP -> O(1)
const minimumSumInSubArrays = arr => {
    let minimum, sum = 0;
    for(let i=0; i< arr.length; i++){
        minimum = arr[i];
        sum += minimum;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < minimum){
                minimum = arr[j];
            }
            sum += minimum
        }
    }
    console.log(sum)
    return sum;
}

minimumSumInSubArrays([3, 1, 2, 4])