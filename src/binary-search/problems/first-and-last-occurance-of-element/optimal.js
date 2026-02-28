/**
 * Determine the first and last occurance of the target element in array.
 * 
 * Solution: Lower bound + Upper Bound
 * 
 * @example
 * firstAndLastOccurance([2, 4, 6, 8, 8, 8, 10], 8); // {low: 3, high: 5}
 * 
 * @time-complexity
 * O(logn)
 */
const get_ub = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let ub;

    while (start <= end) {
        mid = Math.floor(start + ((end - start) / 2));

        if (arr[mid] > target) {
            ub = mid;
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return ub
}

const get_lb = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = undefined;
    let lb;

    while (start <= end) {
        mid = Math.floor((start + (end - start) / 2)); // handling the overflor scenario - refer the function defeinition in brute-force solution

        // * here we are not find the element, instead we are determining the probablity of the max element
        if (arr[mid] >= target) {
            // * so here I am assigning the mid to lb, since this mid may be the solution. 
            // * Not the exact lb but a potential candidate
            lb = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return lb;
}

const firstAndLastOccurance = (arr, target) => {
    if (!Array.isArray(arr) || typeof target !== 'number') return null;

    const lb = get_lb(arr, target);
    const up = get_ub(arr, target);

    

    return {
        lb,
        up: up - 1, // since up give the next maximum index
    }
}

console.log(firstAndLastOccurance([2, 4, 6, 8, 8, 8, 10], 8))