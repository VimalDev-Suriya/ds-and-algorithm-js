//* Find Minimum in the rotated Sorted array.

// brute force
const findMin = (arr) => {
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            break;
        }
    }

    return min;
}

console.log(findMin([4, 5, 6, 1, 2, 3])); // 1
console.log(findMin([4, 5, 6, 2, 3])); // 2
console.log(findMin([7, 8, 9, 4, 5, 6])); // 4