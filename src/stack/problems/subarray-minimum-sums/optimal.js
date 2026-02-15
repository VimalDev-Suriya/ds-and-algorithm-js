const nse = arr => {
    const result = [];
    const stack = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        while (arr.length !== 0 && arr[i] <= arr[stack[stack.length - 1]]) {
            stack.pop();
        }

        result[i] = stack.length === 0 ? arr.length : stack[stack.length - 1];
        stack.push(i); // stroing index
    }

    return result;
}

const pse = arr => {
    const result = [];
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length !== 0 && arr[i] < arr[stack[stack.length - 1]]) {
            stack.pop();
        }

        result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(i);
    }

    return result;
}

/**
 * Intiution
 * Instead of creating the individual Subarrays, we are going to just determin how many times the each elements in the array is going to contribute as the minimum in the subarray and going to sum them up.
 * 
 * How to determin the contribution?
 * - Need to understand the **position** of next (nse) & previous (pse) smaller element for the corresponding element
 * - (nse - currentElementIndex) = number of times the currentElement was minimum in subarray
 * - (currentElementIdex - pse) = same as above
 * - Multiple the above 2 results gives the total number of times elemebts got contributed.
 * 
 * Considerations:
 * What if we did not find any NSE or PSE for the corresponding idx, the
 * pse = -1
 * nse = N (n the size of array)
 */

const minimumSumInSubArrays = arr => {
    let total = 0;
    const pseElements = pse(arr);
    const nseElements = nse(arr);

    for (let i = 0; i < arr.length; i++) {
        let left = i - pseElements[i];
        let right = nseElements[i] - i;

        total = total + left * right * arr[i]
    }

    return total;
}

minimumSumInSubArrays([1, 4, 6, 7, 3, 7, 8, 1])
minimumSumInSubArrays([3, 1, 2, 4])