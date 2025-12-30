/**
 * Rotating the array (LEFT ROTATE)
 * @param {*} arr 
 * @param {*} step
 * 
 * @example 
 * rotate_arry([1, 2, 3, 4, 5], 3) => [4, 5, 1, 2, 3]
 * 
 * k = 0 [1, 2, 3, 4, 5]
 * k = 1 [2, 3, 4, 5, 1]
 * k = 2 [3, 4, 5, 1, 2]
 * k = 3 [4, 5, 1, 2, 3]
 */

const rotating_array = (arr, step) => {
    const length = arr.length;
    const times = step % length;

    if(times === 0) {
        console.log(arr)
        return arr
    }

    const temp = [];

    // * storing the first "times" element in temp
    for(let i = 0; i < times ; i++){
        temp.push(arr[i]);
    }

    // Shifting the elements starting from times to times.
    // here i - times
    // for k = 1, i - 1
    // for k = 2, i - 2
    // for k = 3, i - 3
    // for k = n, i - n

    // If k = 2
    // Shifting from idx to idx
    // Shifting from 2 to 0
    // Shifting from 3 to 1
    // Shifting from 4 to 2
    // If you see above indexes, when you subract (from - to) = it is K.
    for(let i = times; i < length; i++){
        arr[i-times] = arr[i];
    }

    // Till above the result of array, rotated with k = 3 is => [4, 5, 3, 4, 5]
    // temp = [1, 2, 3]
    for(let i = 0; i< temp.length; i++){
        arr[length - times + i] = temp[i];

        // for k = 3
        // arr[2] = temp[1];
        // arr[3] = temp[2];
        // arr[4] = temp[3];
    }

    console.log(arr);
}

rotating_array([1, 2, 3, 4, 5], 9);