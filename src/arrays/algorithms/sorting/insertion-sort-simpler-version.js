const insertionSort = arr => {
    for(let i=1; i < arr.length; i++){
        let currentElement = arr[i];
        let j;

        for(j = i - 1; j >= 0 && currentElement < arr[j]; j--){
            arr[j+1] = arr[j]
        }

        arr[j+1] = currentElement;
    }

    return arr;
}

console.log(insertionSort([2, 1, -1, 10, 5, 7]))