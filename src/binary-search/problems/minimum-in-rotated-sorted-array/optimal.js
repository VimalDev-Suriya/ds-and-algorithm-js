// * Find Min in the Sorted rotated Array.
// * WITHOUT DUPLICATES

const findMin = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    let mid
    let min = Infinity;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        // * We can Do one more check, because this array is rotated and WILL NOT HAVE DUPLICATES
        // *So we are sure that if the array is sorted, then start <= end
        // * below code is completly optional
        if (arr[start] <= arr[end]) {
            min = Math.min(min, arr[start]);
            break; // to reduce the binary serach
        }

        //* 1. Determining the Sorted half.
        //* 2. So if we determin the sorted part, we are guranteed that the left most part of the sorted half will have the min (possibility)
        //* 3. Once we determin the min, we can ignore the corresponding half.

        if (arr[start] <= arr[mid]) {
            min = Math.min(arr[start], min);
            start = mid + 1; // ignoring the current half
        } else {
            min = Math.min(arr[mid], min);
            end = mid - 1; // ignoring the current half
        }
    }

    return min;
}

console.log(findMin([4, 5, 6, 7, 0, 1, 2, 3])); // 0
console.log(findMin([4, 5, 6, 2, 3])); // 2
console.log(findMin([7, 8, 9, 4, 5, 6])); // 4
console.log(findMin([4, 5, 1, 2, 3])); // 1