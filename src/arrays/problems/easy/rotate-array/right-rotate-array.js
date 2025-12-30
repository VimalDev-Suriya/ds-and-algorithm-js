/**
 * Rotating the array (Right ROTATE)
 * @param {*} arr 
 * @param {*} step
 * 
 * @example 
 * rotate_arry([1, 2, 3, 4, 5], 3) => [3, 4, 5, 1, 2]
 * 
 * k = 0 [1, 2, 3, 4, 5]
 * k = 1 [5, 1, 2, 3, 4]
 * k = 2 [4, 5, 1, 2, 3]
 * k = 3 [3, 4, 5, 1, 2]
 * k = 4 [2, 3, 4, 5, 1]
 */


// const rightRotateArray = (arr = [], k) => {
//     const len = arr.length;
//     const step = k%len;

//     if(step === 0){
//         return arr;
//     }

//     const temp = [];

//     for(let i = len-step; i < len; i++){
//         temp.push(arr[i])
//     }

//     for(let i = len - step - 1; i >= 0; i--){
//         // 0 -> 3
//         // 1 -> 4
//         arr[i+step] = arr[i];
//     }

//     // [1, 2, 3, 1, 2]
//     for(let i =0; i< temp.length; i++){
//         arr[i] = temp[i];
//     }

//     console.log(arr)
// }

const rightRotateArray = (arr, k) => {
    const len = arr.length;
    const step = k%len;

    if(!step) {
        console.log(arr);
        return arr;
    }

    // * store the elements to be rotated
    const temp = [];

    for(let i = len - step; i < len; i++){
        temp.push(arr[i]);
    }

    console.log('temp', temp) // k = 3 ; [3, 4, 5]

    // k = 2 ; 0 -> 2
    // k = 2 ; 1 -> 3
    // k = 2 ; 2 -> 4
    for(let i = len - step - 1; i >= 0; i--){
        arr[i+step] = arr[i]
    }

    for(let i=0; i<temp.length; i++){
        arr[i] = temp[i]
    }

    console.log(arr)
}

rightRotateArray([1, 2, 3, 4, 5], 3)