/**
 * Leaders in the Array (this somehow resembels the binary heap, but not exactly)
 * 
 * COnsider the leaders are the elements, if all the elements in the right side of the particular element is lesser, then it is a leader.
 * consider the below example, take 22, all the elements at right side of the 22 is less than
 * take 6, there is no element
 * 
 * Note: Alwys the last element is leader
 * 
 * Thought process:
 * 1. iterating the array from the last
 * 2. Initializing a very small value
 * 3. comparing them from the last element, if it is less then pushing the data into result array
 * 4. updating the max value as the new value
 * 5. iterating the same 
 * 
 * @example
 * leaderInArray([10, 22, 12, 3, 0, 6]); // [22, 12, 6]
 */

const leaderInArray = arr => {
    const result = [];
    let maxValue = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            result.push(arr[i]);
        }
    }

    return result
}

console.log(leaderInArray([10, 22, 12, 3, 0, 6]))
leadersInArray([4, 3, 2, 1]);           // [4, 3, 2, 1]
leadersInArray([1, 2, 3, 4]);           // [4]
leadersInArray([-1, -2, -3, -4]);       // [-1, -2, -3, -4]
leadersInArray([7]);                    // [7]
leadersInArray([]);                     // []