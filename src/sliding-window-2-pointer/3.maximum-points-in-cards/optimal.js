/**
 * Maximum points you can obtain from the cards for the give k.
 * 
 * @description
 * We should return the maxium sum (points summed) from the given array so we can choose only k points from the array. The points to be noted here is we can choose those points either from first or last but not at the middle. 
 * For eg, for K =4 , we can choose first 4 elements or last 4 elements from the array or first 3 ele & last 1, or first 2 last 2 etc but not anything middle 
 * 
 * where each arr[i] are the points.
 * 
 * @example
* getMaxPoints([6, 2, 3, 4, 7, 2, 1, 7, 1], 4); // 16 => from the elements [6, 2, 7, 1]
*/
const getMaxPoints = (points, k) => {
    if (!Array.isArray(points) || !k) return null;

    let leftSum = 0;
    let rightSum = 0;
    let start, end = points.length - 1;
    let totalSum = 0;

    for (start = 0; start < k; start++) {
        leftSum += points[start];
    }

    totalSum = leftSum + rightSum;
    start--; // since the start will be at k, we need to make it reduce 

    while (start >= 0 && end > points.length - k) {
        console.log('Start = ', start, 'End = ', end)
        leftSum -= points[start];
        rightSum += points[end];

        totalSum = Math.max(totalSum, leftSum + rightSum);

        start--;
        end--;
    }

    console.log('Start = ', start, 'End = ', end)
    return totalSum;
}

console.log(getMaxPoints([6, 2, 3, 4, 7, 2, 1, 7, 1], 4)); // 16 => from the elements [6, 2, 7, 1]