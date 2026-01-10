/**
 * Dutch national flag algorithm
 * 
 * It is a efficient single pass sorting alogorithm, which partisions the array containing (0, 1, 2) or (blue, green, red).
 * It works by using 3 pointers, low, mid, high.
 * 
 * This algo works on the basis of a rules that the array of n elements should be
 * [0        .... low - 1]    => 0 (only 0's)
 * [low      .... mid - 1]    => 1 (only 1's)
 * [high + 1 .... n - 1]      => 2 (only 2's)
 * [mid      .... high]       => un-sorted elements (combination of 0/1/2)
 * 
 * Thought process [3 pointers, low, mid, high]
 * There are 3 possible values
 * 1. I am always going to consider that the given element is not sorted
 * 2. So based on our assumption array, all the unsorted elements will be present from [mid .... high]
 * 3. So comparing this with our array.
 * 4. arr[mid] is the first element
 * 5. arr[high] is the last element
 * 6. arr[low] is somewhere back, but i am considering the arr[low] is also in same point where we are pointing arr[mid]
 * 
 * So now I am going to take first element in the array, as that is in between the range of unsorted.
 * Here is the catch we know there are only 3 possible values
 * arr[mid] === 0
 *  - we need to move the 0 to the last of array [0... low -1], because those are the one who holds 0's
 *  - swap(arr[mid], arr[low]); 
 *  - low++; (since we added the 0 in last, so increasing the size of low)
 *  - mid++; // to shrink the unsorted array
 * arr[mid] === 1
 *  - Since it is already in the correct position 
 *  - So simply mid++
 * arr[mid] === 2
 *  - swap(arr[mid], arr[high]) - I am adding the 2 into the first of the subarray that holds only 2
 *  - now I am simply shrinking the unsorted array by reducing the high
 *  - high-- (as we know i pushed the data in front, I somehow want to shrink the array whihc is unsorted) 
 */

const sort0s1s2sInArray = arr => {
    let left = 0;
    let mid = 0;
    let high = arr.length - 1;

    // * we know the unsorted elements will be present in [mid to high], so if the 2 pointers crosses each other then we dont have unsorted elements, so we are good to stop the loop
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[mid], arr[left]] = [arr[left], arr[mid]];
            left++;
            mid++
        } else if (arr[mid] === 1) {
            mid++;
        } else if (arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

console.log(sort0s1s2sInArray([2, 0, 1]))
console.log(sort0s1s2sInArray([0, 1, 2, 2, 0, 1, 2, 1, 2, 0, 0, 1, 0]))