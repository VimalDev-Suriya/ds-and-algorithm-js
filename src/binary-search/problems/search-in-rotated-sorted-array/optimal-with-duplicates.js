// *** Solution works for Duplicates also
/**
 * Mostly we should return whether the element presnet in here or not. Thats it.
 * 
 * Why the previous solution will not work?
 * In previous sol, we are tracking whether which half is sorted. If there are some duplicate elements, the there is a chance that all mid, start & end have the same values.
 * Consider the example [3, 1, 2, 3, 3, 3, 3]
 * In our traditional solution, we will neglect the halfs, only when we determined the correct sorted half. for the above example, we got first half as the sorted because arr[start] <= arr[end]. 
 */
const search = (arr, target) => {
    if (!Array.isArray(arr) || typeof target !== 'number') return null;

    let start = 0;
    let end = arr.length - 1;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            console.log(mid)
            return true
        };

        // Here for duplicates, we are going to simply reduce the search space like below
        if (arr[start] === arr[mid] && arr[mid] === arr[end]) {
            start = start + 1;
            end = end - 1;
            continue; // Since we reduced the search space, I want to calculate the mid again for the new start & end.
        }

        if (arr[start] <= arr[mid]) {
            if (arr[start] <= target && target <= arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (arr[mid] <= target && target <= arr[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }

    return false
}

console.log(search([3, 1, 2, 3, 3, 3, 3], 1)); // 1
console.log(search([3, 1, 2, 3, 3, 3, 3], 3)); // 3
console.log(search([3, 1, 2, 3, 3, 3, 3], 2)); // 2
console.log(search([3, 3, 1, 3], 1)); // 2