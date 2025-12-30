const isArraySorted = (arr=[]) => {
    let isAsending = true
    let isDecending = true;

    for(let i=0; i < arr.length - 1; i++){
        if(isDecending && arr[i] > arr[i+1]) {
            isAsending = false;
            continue;
        };

        if(isAsending && arr[i] < arr[i+1]) {
            isDecending = false;
            continue;
        };

        return 'not sorted'

    }

    return `${arr} is sorted`
}

console.log('is sorted', isArraySorted([1, 2, 3]))