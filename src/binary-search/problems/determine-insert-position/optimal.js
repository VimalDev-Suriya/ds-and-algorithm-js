//* Determin the position where the new element can be inserted.
// get_insert_position([1, 3, 5, 7, 9], 0) // 0
const get_insert_position = (arr, target) => {
    if (!Array.isArray(arr)) return -1;

    let start = 0;
    let end = arr.length - 1;
    let insertPosition = arr.length;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        // * Lower bound logic
        if (arr[mid] >= target) {
            insertPosition = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return insertPosition;
}

console.log(get_insert_position([1, 3, 5, 7, 9], 0)); // 0
console.log(get_insert_position([1, 3, 5, 7, 9], 10)); // 5
console.log(get_insert_position([1, 3, 5, 7, 9], 5)); // 2
console.log(get_insert_position([1, 3, 5, 7, 9], 8)); // 4
console.log(get_insert_position([1, 3, 5, 7, 9], 2)); // 1