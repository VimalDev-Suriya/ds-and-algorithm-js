/**
 * Leaders in the Array (this somehow resembels the binary heap, but not exactly)
 * 
 * COnsider the leaders are the elements, if all the elements in the right side of the particular element is lesser, then it is a leader.
 * consider the below example, take 22, all the elements at right side of the 22 is less than
 * take 6, there is no element
 * 
 * Note: Alwys the last element is leader
 * 
 * @example
 * leaderInArray([10, 22, 12, 3, 0, 6]); // [22, 12, 6]
 */

// * BRUTE FORCE
const leaderInArray = arr => {
    if (!Array.isArray(arr) || !arr.length) return null;

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isLeader = true;

        for (let j = i + 1; j < arr.length; j++) {
            if (currentElement < arr[j]) {
                isLeader = false;
                break;
            }
        }

        if (isLeader) {
            result.push(currentElement);
        }
    }

    return result
}

console.log(leaderInArray([10, 22, 12, 3, 0, 6]))