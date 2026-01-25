/*
* Longest continue subsequence:
* We need to pick up the continuos sequence present in the array. 
* for the below example the result is 4, because the sequence we have are
* Seq 1 => 1, 2, 3, 4
* Seq 2 => 100, 101, 102
* from the above seq, the Seq 1 has greater length. so the length is 4.
* 
* @example
* longestSubsequence([102, 4, 100, 1, 101, 3, 2, 1, 1]) // l = 4
*/

const linearSerach = (arr, expectedcandidate) => {
    for(let j = 0; j <arr.length; j++){
        if(expectedcandidate === arr[j]){
            return true
        }
    }

    return false;
}

// * Brute force
// maxCount, count, candidate.
// 1. Taking one element
// 2. adding 1 to that element
// 3. then performing linear serach
// 4 . If found -> return true - increasing the counter & increasing the candidate
// 5. if not found -> validating the maxCount
const longestSubsequence = (arr) => {
    if(!Array.isArray(arr) || !arr.length) return null;

    if(arr.length < 2) return 1;

    let count = 1;
    let maxCount = 1;

    for(let i=0; i< arr.length; i++){
        let candidate = arr[i];
        count = 1;

        let expectedcandidate = arr[i] + 1;

        while(linearSerach(arr, expectedcandidate)){
            count++;
            expectedcandidate += 1;
        }

        if(count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}

longestSubsequence([102, 4, 100, 1, 101, 3, 2, 1, 1])
