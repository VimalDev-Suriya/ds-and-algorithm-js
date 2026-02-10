// * Next Greater Element - 2
// * Finding the next greater element by considering the array as the rotated one.
// * Eg: nge2([2, 10, 12, 1, 11]); // [10, 12, -1, 11, 12], here the nge of 11 is 12, by considering the array as rotated.

// Note: Intutions -> Using modulo
// // [2, 10, 12, 1, 11] |2(5), 10(6), 12(7), 1(8), 11(9)| => |..| consider the array elements are the hypotheitical one.
// 1%5 = 1; 6%5 = 1 | So this is the catch 

const nge2 = arr => {
    const n = arr.length;
    const result = new Array(arr.length).fill(-1);

    for(let i=0; i<n; i++){
        let candidate = arr[i];

        // J will loop till the length + i
        for(let j =i+1; j <= n + i; j++){
          // * here the module of excess will result in the position of the elements in the array
            if(arr[j%n] > arr[i]){
                result[i] = arr[j%n];
                break
            }
        }
    }
    return result
    
}

nge2([2, 10, 12, 1, 11]); // [10, 12, -1, 11, 12]
// [2, 10, 12, 1, 11] 2(5), 10(6), 12(7), 1(8), 11(9). 
