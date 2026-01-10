/**
 * Moore's Voting Algorithm
 * 
 * A very efficient algorithm, that helps to find the Majority element (especially appearing > N/2) in a array.
 * THIS IS NOT THE ALGO TO FIND THE MAJORITY REPEATING ELEMENT, IT IS ALGO WHICH DETERMINES THAT THE ELEMENT SHOULD APPEAR > n/2
 * 2 variables 
 *  - candidate (a element that is going to be > n/2)
 *  - counter (not a count of majority elements, used to reset the candidate)
 * 
 * @description
 * To find the majority element , we should follow 2 main phases, 
 * 1. 1st is Moore's voting algo 
 * 2. validating the result of algo.
 * 
 * Moore's Voting Algo:
 * 1. Initially count was "0" which tells that there is no majority element 
 * 2. Taking the first element, in our eg "7", so count becomes 1
 * 3. So I am iterating through array
 * 4. If we found the number 7, then counter++, if not then counter--
 * 5. So during the time of i = 5; we will get the value of counter = 0. This tells that the array of length 6 (i=5) has the element 7 as 3 times and remaining element 3 times, so total length is 6.
 *      1. If the count is 0, then the element is repeated exactly n/2 times within the array.
 *      2. If the count is +ve, then the element is repeated > n/2
 *      4. Consider a arr [1, 1, 1, 2, 2],taking the candidate=1,count is 1 => 2 => 3 => 2 => 1 (here I am incrementing the count + 1 when we found "1", deceasing the count when we found anyother element)
 *      5. So if we see the result count is 1, which tells, the candidate is "1".
 * 6. When we hit the counter=0, then we can reset the counter =0 and candidate to the next element.
 * 7. so we can continue the looping till the end of the array.
 * 8. Once done, we will result in a candidate **which is not a result**, it is potentially **CAN BE A MAJORITY ELEMENT**
 * 
 * Validating the result:
 * 1. Loop through the array with the result of algo.
 * 2. If you found the element > n/2, then we found.
 * 
 * @example
 * majorityElementsInArray([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]) // 5
 * 
 * @complexities
 * TC - O(n)
 * SC - O(1)
 */
const majorityElementsInArray = arr => {
    let candidate = arr[0];
    let counter = 1;

    for (let i = 1; i < arr.length; i++) {
        if (candidate === arr[i]) {
            counter++;
        } else {
            counter--;
        }

        if (counter === 0) {
            candidate = arr[i + 1];
        }
    }

    // * So as of now candidate holds the potential majority element

    let count = 0;
    const times = Math.floor(arr.length / 2);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }

    if (times < count) {
        return candidate;
    }

    return -1;
}

console.log(majorityElementsInArray([1, 2, 3, 4, 4, 4, 4, 4])) // 4
console.log(majorityElementsInArray([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 1, 1, 1, 1])) // -1
console.log(majorityElementsInArray([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5])) // 5