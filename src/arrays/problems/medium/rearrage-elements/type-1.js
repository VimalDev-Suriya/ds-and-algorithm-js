/**
 * Rearrange the given array in the alrenate fashion of +ve & -ve. 
 * Considering the array always consist of equal amount of +ve & -ve.
 * 
 * @example 
 * rearrangeArray([3, 1, -2, -5, 2, -4]); // [3, -2, 1, -5, 2, -4]
 */
const rearrangeArray = arr => {
    const positiveArrayEle = []
    const negativeArrayEle = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveArrayEle.push(arr[i])
        } else {
            negativeArrayEle.push(arr[i])
        }
    }

    console.log(positiveArrayEle, negativeArrayEle);

    // * we can combine the below loops into single loop as we know the +ve === -ve elements
    // for(let i=0; i<positiveArrayEle.length; i++){
    //     arr[i*2] = positiveArrayEle[i]
    // }

    // for(let i=0; i<negativeArrayEle.length; i++){
    //     arr[i*2 + 1] = negativeArrayEle[i]
    // }

    for(let i=0; i<positiveArrayEle.length; i++){
        arr[i*2] = positiveArrayEle[i];
        arr[i*2 + 1] = negativeArrayEle[i]
    }

    return arr;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])) // [3, -2, 1, -5, 2, -4]
