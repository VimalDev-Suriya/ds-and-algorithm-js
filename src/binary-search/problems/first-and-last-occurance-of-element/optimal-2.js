// * Here I am going to simply perform the ninary serach to determin the first and last occurance and combine them both

const first = (arr, target) => {
    if (!Array.isArray(arr)) return null

    let start = 0;
    let end = arr.length - 1;
    let mid;
    let first = -1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            // Here I am moving to the left, because I am planned to determine the first occuarnce
            // the first occuarnace will be at the left of the mid
            first = mid;
            end = mid - 1;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return first;
}

const last = (arr, target) => {
    if (!Array.isArray(arr)) return null

    let start = 0;
    let end = arr.length - 1;
    let mid;
    let last = -1;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            // Here I am moving to the right, because I am planned to determine the last occuarnce
            // the last occuarnace will be at the right of the mid
            last = mid;
            start = mid + 1;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return last;
}

const first_last_occurance = (arr, target) => {
    const first_occuarnce = first(arr, target)
    const last_occuarnce = last(arr, target)

    return {
        first_occuarnce, last_occuarnce
    }
}

console.log(first_last_occurance([2, 3, 8, 8, 8, 8, 10, 11, 13], 8)); 