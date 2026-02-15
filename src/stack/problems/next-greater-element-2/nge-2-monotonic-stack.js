// * Next Greater Element - 2 (using monotonic stack)

const nge2 = arr => {
    const result = [];
    const stack = [];
    const n = arr.length;

    // * Same hypothetical array considerations
    for (let i = (2 * n) - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= arr[i % n]) {
            stack.pop();
        }

        // * Here I am simply going to push the nge elements to result only if i is pointing into original array 
        if (i < n) {
            result[i] = stack.length === 0 ? -1 : stack[stack.length - 1]; // -1 or stack's top element
        }

        stack.push(arr[i % n]); // % since always dealing with hypothetical array
    }

    return result;
}

nge2([2, 10, 12, 1, 11]); // [10, 12, -1, 11, 12]
// [2, 10, 12, 1, 11] 2(5), 10(6), 12(7), 1(8), 11(9). 
