const rotateArray_left = (arr, step) => {
    if (!Array.isArray(arr) || !arr.length || step < 0) return arr;

    const revisedStep = step % arr.length;

    if (!revisedStep) return arr;

    const temp = []

    // * I got this intution by on how many elements I need to get/clonned so that I can shift the elements.
    // how many elements = from last 1/2/3 (step) elements
    // last la irundhu yethini element? so i start from the 
    for (let i = arr.length - revisedStep; i < arr.length; i++) {
        temp.push(arr[i]);
    }

    //* Shift the elements to the revisedStep times
    for (let i = arr.length - revisedStep - 1; i >= 0; i--) {
        arr[i + revisedStep] = arr[i]
    }

    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }

    return arr
}

console.log(rotateArray_left([1, 2, 3, 4, 5], 1)); // [5, 1, 2, 3, 4]
console.log(rotateArray_left([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray_left([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]