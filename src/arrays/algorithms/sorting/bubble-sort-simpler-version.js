// * basic bubble sort
// * i is for the pass (no business logic using it)
// * j is for comparing the entire array elemnt once (afetr one pass the last elemnt will be the largest element)
// const bubbleSort = (arr = []) => {
//     for(let i=0; i<arr.length; i++){
//         for(let j =0; j<arr.length; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+ 1]){
//                 [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
//             }

//         }
//         console.log('ONE PASS DONE')
//     }

//     return arr;
// }


//* We know after one pass, we will have the largest element at the last
// * so for each pass, each elements at the last set of pass (like first pass, last element is soretd, 2nd pass last 2 elemnt is sorted) will be in sorted array,
// * so we dont need to compare the last elements
// const bubbleSort = (arr = []) => {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length - i; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
//             }
//         }
//     }
    
//     return arr;
// }

// * Consider a scenario, only one element in the array is not in sorted position
// * under this scenario, we dont ant to loop over all the data
// * so lets add the condition within the pass, 
// if there is no swap done, which is not required to be loop in the pass.
const bubbleSort = (arr = []) => {
    let noSwap;

    for(let i=0; i < arr.length; i++){
        noSwap = true
        for(let j=0; j<arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
                noSwap = false
            }
        }

        if(noSwap) break;
    }
    
    return arr;
}

console.log(bubbleSort([2, 5, 1, -1, -2]))