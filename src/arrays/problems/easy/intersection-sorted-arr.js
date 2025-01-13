/**
 * Intersection of 2 sorted arrays
 * @param {*} arr1[]
 * @param {*} arr2[]
 * @returns {arr[]} Intersections of the sorted array.
 *
 * @example
 * arr1 = [1, 2, 3, 4, 5]; arr2 = [3, 4, 5, 6, 7];
 * intersection sorted array = [3, 4, 5]
 *
 * Brute force algorithm:
 * Create a intersection array = []
 * Create a visited array - which holds the array items of the copared arrar (either arr1 or arr2).
 * The visited array should initially holds the value 0 and should be length of any arr1 or arr2. based on our preference.
 * Take 1 element from arr1 and compare them with arr2. If both are equal and it should not be visited one,then move that element into intersection array
 *
 */
// * BRUTE FORCE SOLUTION - O(2 + (n1 * n2)); Space O(n2)
// const intersectionOfSortedArray = (arr1 = [], arr2 = []) => {
//   const interSectionArray = [];
//   const visitedArray = new Array(arr2.length).fill(0); // O(n)

//   console.log(arr1, arr2);
//   console.log(visitedArray);

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j] && visitedArray[j] !== 1) {
//         interSectionArray.push(arr1[i]);
//         // * since we created the visited from arr2, setting the position of visiting array which duplicates arr2 to 1
//         visitedArray[j] = 1;
//       }
//     }
//   }

//   return interSectionArray;
// };

// * BETTER SOLUTION - Worst case scenario wont change
// const intersectionOfSortedArray = (arr1 = [], arr2 = []) => {
//   const interSectionArray = [];

//   // Create a visited array with the smallest one
//   const visitedArray = new Array(
//     arr2.length > arr1.length ? arr1.length : arr2.length
//   ).fill(0); // O(n)

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j] && visitedArray[j] !== 1) {
//         interSectionArray.push(arr1[i]);
//         // * since we created the visited from arr2, setting the position of visiting array which duplicates arr2 to 1
//         visitedArray[j] = 1;
//       }

//       // * since we know that this is sorted array, if the element is greater than the other, obviously we dont want to loop to it
//       if (arr1[i] < arr2[j]) break;
//     }
//   }

//   return interSectionArray;
// };

/**
 * Intersection of 2 sorted arrays (2 pointers) (since itersection duplicates are allowed)
 * @param {*} arr1[]
 * @param {*} arr2[]
 * @returns {arr[]} Intersections of the sorted array.
 * @example
 * arr1 = [1, 2, 2, 3, 3, 4]; arr2 = [2, 3, 3, 4, 5];
 * intersection sorted array = [2, 3, 3, 4]
 *
 * Optimal Solution ->  O(n) - worst case scenario
 * Compare the 1st array to 2nd array
 * If the first array element is equal to second array elemnt then move both the lpt to 1step. because we know that this is the match (intersection between 2 arrays).
 * If not just move the lpt1 or lpt2 based on the array you have taken to compare. now i have take arr1 so i am increasing lpt1
 *
 */
// * OPTIMAL SOLUTION
const intersectionOfSortedArray = (arr1 = [], arr2 = []) => {
  let lpt1 = 0;
  let rpt1 = arr1.length;
  let lpt2 = 0;
  let rpt2 = arr2.length;
  let temp = [];

  while (lpt1 < rpt1 && lpt2 < rpt2) {
    if (arr1[lpt1] === arr2[lpt2]) {
      temp.push(arr1[lpt1]);
      lpt1++;
      lpt2++;
    } else {
      lpt1++;
    }
  }

  return temp;
};

module.exports = {
  intersectionOfSortedArray,
};
