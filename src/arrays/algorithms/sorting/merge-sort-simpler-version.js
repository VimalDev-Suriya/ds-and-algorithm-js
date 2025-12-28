const mergeSortedArrays = (arr1, arr2) => {
    let i = j = 0;
    const result = []

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }

        if(arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++
        }
    }

    for(let k = i; k < arr1.length; k++){
        result.push(arr1[k]);
    }

    for(let k = j; k < arr2.length; k++){
        result.push(arr2[k]);
    }

    return result;
}

const mergeSort = arr => {
    if(arr.length === 1){
        return arr;
    }

    const mid = Math.floor((arr.length) / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeSortedArrays(left, right);
}

console.log(mergeSort([3, 7, 4, 1, -1, 5]))