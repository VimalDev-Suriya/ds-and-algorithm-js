// ==================================
// FREQUENCY COUNTER
// i/p 2 setof arrays
// o/p if one arrays element was doubled it should be the values of another array, frequency should match
// example
// [1, 2, 3], [1, 9, 4] => should retrun true
// [1, 1, 2], [4, 1, 1] => true
// [1, 1, 1], [1] => false
// ==================================

// const same = (arr1, arr2) => {
//     // handling the falsy values
//     if(!arr1 || !arr2){
//         return false;
//     }

//     // if length is not matching, then obvisouly they are not in match
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     let copyArr2 = [...arr2];


//     // O(n^2)
//     for(let i=0; i<arr1.length; i++){
//         for(let j=0; j<copyArr2.length; j++){
//             if(arr1[i] *arr1[i] === copyArr2[j]){
//                  copyArr2.splice(j,1);
//             }
//         }
//     }

//     if(copyArr2.length === 0){
//         return true
//     }

//     return false
// }

// * Pattern 2
// Sorting 2 arrays => nlon + nlogn + n => nlogn
// const same = (arr1=[], arr2=[])=> {
//     // handling the falsy values
//     if(!arr1 || !arr2){
//         return false;
//     }

//     // if length is not matching, then obvisouly they are not in match
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     const sortedArray1 = arr1.sort((a,b) => a-b); // nlogn
//     const sortedArray2 = arr2.sort((a,b) => a-b); //nlogn

//     let i=0; j=0; 
//     while(i < sortedArray1.length && j < sortedArray2.length){
//         if(sortedArray1[i] * sortedArray1[i] === sortedArray2[j]){
//             i++;
//             j++
//         }else{
//             j++;
//         }
//     }

//     if(i===j){
//         return true
//     }

//     return false
// }

// pattern1
// O(n)
const same = (arr1=[], arr2=[]) => {
        // handling the falsy values
    if(!arr1 || !arr2){
        return false;
    }

    // if length is not matching, then obvisouly they are not in match
    if(arr1.length !== arr2.length){
        return false;
    }

    const frequencyCnt1 = {};
    const frequencyCnt2 = {};

    for(let key of arr1){
        frequencyCnt1[key] = frequencyCnt1[key] ? ++frequencyCnt1[key]  : 1;
    }

    for(let key of arr2){
        frequencyCnt2[key] = frequencyCnt2[key] ? ++frequencyCnt2[key] : 1;
    }

    for(let key in frequencyCnt1){
        if(!(key * key in frequencyCnt2)){
            return false;
        }

        if(frequencyCnt1[key] !== frequencyCnt2[key * key]){
            return false
        }
    }

    return true
}
module.exports = same;