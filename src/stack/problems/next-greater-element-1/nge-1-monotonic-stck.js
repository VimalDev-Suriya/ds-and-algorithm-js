/**
 * Next greater element - 1 (using monotonic stack) (NGE)
 * Given an array, find the next greater element for each element in the array.
 * The next greater element for an element x is the first greater element on the right side of x in the array.
 * If no such element exists, output -1 for that position.
 * 
 * Example:
 * Input: [4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]
 * Output: [12, -1, 6, 5, 2, 5, 6, 4, 2, 4, 6, -1]
 * 
 * 1. The Brute force is O(n^2), so I need to somehow want to amke the better solution at, O(n) / O(logn)
 * So can we start from right? -> YES & why?
 * To determine next greater/smaller elements, we should know them inorder to determin. But we dont have them handly, so in-order to determine that we are starting from the last element, by assuming that the greater/smaller right side of the last element is already processed & present in Stack, But we know underthehood its not so we are assigning them as -1.
 * 
 * 2. If Stack is empty, we can say that there is no greater element than the corresponding ele, so we can assign the value as -1
 * 
 * 3. If stack is not empty, then we are sure that the first element is the next greater element for the index
 */

const nextGreaterElement = arr => {
    const result = [];
    const stack = [];

    // * starting from right.
    for (let i = arr.length - 1; i >= 0; i--) {

        // * poppping out the smallest elements in the stack
        while (stack.length !== 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // if stack is empty, then assigning the result value as -1, means there is no greater element
        if (stack.length === 0) {
            result[i] = -1;
        } else {
            // there is the greater element, so getting the first element from stack
            result[i] = stack[stack.length - 1]
        }

        // pushing the current index element inyto stack
        stack.push(arr[i]);
    }

    return result;
}

console.log(nextGreaterElement([4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 4, 6]))