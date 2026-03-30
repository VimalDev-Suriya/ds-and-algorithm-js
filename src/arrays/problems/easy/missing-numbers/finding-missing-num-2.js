const findMissingNumber = (arr) => {
    let xorNNaturelNumber = 0;
    let xorArrayElements = 0

    for (let i = 0; i < arr.length; i++) {
        xorArrayElements ^= arr[i];
    }

    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
        xorNNaturelNumber ^= i;
    }

    const missing = xorArrayElements ^ xorNNaturelNumber;

    return missing
}


console.log(findMissingNumber([8, 9, 10, 11, 12, 14]))