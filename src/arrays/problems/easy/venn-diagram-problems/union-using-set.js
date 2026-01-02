/**
 * 
 * @param {Array} arr1 The First array
 * @param {Array} arr2 The Second Array
 * @returns {Array} A new array, which contains the unique values of both of the elements
 * 
 * @example
 * union([1, 2, 3], [2, 3, 4]); // Returns [1, 2, 3, 4]
 * 
 * @complexity
 * Total Time Complexity: 3*(n + m) n is the lenth of arr1, m is the length of arr2
 * 1. Creating the single array by spreading its content is O(n + m),
 * 2. new Set(...) is O(n + m) as the worst case, though the average case is O(1);
 * 3. Array.from(...) is O(n+m)
 * 
 * Time Complexity: O(n + m), by ignoring the constants.
 * Space Complexity : O(n + m)
 * 
 * 
 */
const union = (arr1=[], arr2=[]) => {
    return Array.from(new Set([...arr1, ...arr2]))
}

console.log(union([1, 2, 3], [2, 3, 4]))