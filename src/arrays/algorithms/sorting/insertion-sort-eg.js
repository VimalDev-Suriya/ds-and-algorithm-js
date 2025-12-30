const insertionSort = arr => {
    for(let i=1; i <arr.length; i++){
        let currentElement = arr[i];
        let j;

        for(j = i - 1; j >= 0 && currentElement < arr[j]; j--){
            // shifting the data
            arr[j+1] = arr[j];
        }

        // * actual replacing the data
        arr[j+1] = currentElement;
    }

    return arr;
}

// * Insertion sort is best when we are sorting a array which is almost sorted.
const sortedArray = [-1, -5, 10, 0, 1, 6, 2].reduce((acc, data, idx) => {
    console.log('acc ', idx, acc);
    return insertionSort([...acc, data])
}, [])

console.log(sortedArray)
