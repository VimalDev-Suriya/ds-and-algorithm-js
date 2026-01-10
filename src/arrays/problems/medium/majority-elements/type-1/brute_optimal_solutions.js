// ***** BRUTE FORCE SOLUTION

/**
 * Majority Elements in Array (Greater than n/2), where n is the length of array.
 * @param {Array} arr
 * @returns {Number} element which is found greater than n/2
 * 
 * @example
 * majorityElementsInArray([2, 2, 1, 4, 2, 4, 2]); // 2 (2 occured 4 times which is greater than 7/2)
 * 
 * @complexities
 * TC - O(n ^ 2)
 */
// const majorityElementsInArray = arr => {
//     const times = Math.floor(arr.length / 2);

//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;

//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }

//         if (count > times) {
//             return arr[i];
//         }
//     }

//     return -1;
// }

// * TC O(n) ; SC - O(n) 
const majorityElementsInArray = arr => {
    const times = Math.floor(arr.length / 2);
    const hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (hashMap.has(arr[i])) {
            let count = hashMap.get(arr[i]) + 1;

            hashMap.set(arr[i], count);
        } else {
            hashMap.set(arr[i], 1);
        }
    }

    for (let [key, value] of hashMap) {
        if (value > times) {
            return key;
        }
    }

    return -1
}

console.log(majorityElementsInArray([1, 2, 2, 4, 2, 4, 2])); // 2
console.log(majorityElementsInArray([1, 1, 2, 2, 3, 3])) // -1
console.log(majorityElementsInArray([1, 1, 1, 1, 1, 1])) // 1