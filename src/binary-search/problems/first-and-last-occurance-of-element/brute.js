/**
 * Determine the first and last occurance of the target element in array.
 * 
 * @example
 * firstAndLastOccurance([2, 4, 6, 8, 8, 8, 10], 8); // {start: 3, end: 5}
 * 
 * @time-complexity
 * O(n)
 */

const firstAndLastOccurance = (arr, target) => {
    if (!Array.isArray(arr) || typeof target !== 'number') return null;

    let start = -1;
    let end = -1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === target) {
            if (start === -1) start = i;
            end = i;
        }
    }

    return {
        start, end
    }
}

console.log(firstAndLastOccurance([2, 4, 6, 8, 8, 8, 10], 8))