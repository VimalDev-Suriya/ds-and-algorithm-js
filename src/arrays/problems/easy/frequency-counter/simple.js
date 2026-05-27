// * Finding the 2nd largest repeating number in the given array.
// * If any elements are repeating in the same count, we should return the maximum number within that elements.
// Example 1 arr = [1, 2, 2, 3, 3, 3]; // return 2
// Example 2 arr = [1, 1, 1, 2, 2, 3, 3]; // return 3 since 3 is the max between 2 & 3
y
// * TC => O(n + n + n) => O(N)
// * SC => O(n)
const findSecondLargestElement = arr => {
  if(!Array.isArray(arr) || arr.length === 0) return null;

  // * I am using Map here because there is the chance that we might have negative/strings
  const frequency = new Map();

  for(let i = 0; i < arr.length; i++){
    frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
  }

  let maxFreq = 0; secMaxFreq = -Infinity;

  for(let [key, count] of frequency.entries()){
    // * We should be considering the repeating characters only if it repeats greater than 1
    if(count <= 1) continue;

    if(count > maxFreq){
      secMaxFreq = maxFreq;
      maxFreq = count;
    }else if(count < maxFreq && count > secMaxFreq){
      secMaxFreq = count;
    }
  }

  if(secMaxFreq === 0 || secMaxFreq === -Infinity) return null;
  let resultElement = null;

  // * determining the max between the same repeating numbers
  for(let [key, count] of frequency.entries()){
    if(count === secMaxFreq){
      if(resultElement === null || resultElement > key){
        resultElement = key;
      }
    }
  }

  return resultElement;
}

findSecondLargestElement([1, 2, 2, 3, 3, 3]); // 2
findSecondLargestElement([1, 1, 1, 2, 2, 3, 3]); // 3
