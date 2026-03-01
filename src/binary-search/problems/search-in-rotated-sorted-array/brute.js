// * A simple linear serach will help to determine the position of the target element.

const getPosition = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(getPosition([6, 1, 2, 3, 4, 5], 6)); // 0
console.log(getPosition([5, 6, 1, 2, 3, 4], 6)); // 1