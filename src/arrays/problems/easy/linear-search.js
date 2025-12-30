// * Find the first occurance of the ele in the array and return its index
const linearSearch_first_occuarnce = (arr, ele) => {
    for(let i =0; i< arr.length; i++){
        if(arr[i] === ele){
            return i
        }
    }

    return -1;
}

// * Find the last occurance of the ele in the array and return its index
const linearSearch_last_occurance = (arr, ele) => {
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === ele){
            return i
        }
    }
    
    return -1;
}

// * Find the all possible occurance of the ele in the array and return its index
const linearSearch = (arr, ele) => {
    let occurance = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === ele){
            occurance.push(i);
        }
    }

    return occurance.length ? occurance : -1;
}

console.log(linearSearch([1, 2, 4, 5, 7, 5, 1], 5));