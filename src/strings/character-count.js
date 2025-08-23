// ===========================================================
// PROBLEM STATEMENT:
// Return the alpha numeric charecters.
// ===========================================================

// Approch
/**
 * Step 1: Re-state the problem
 * I need to return the number of characters present in the string in Object format
 * Input is a string format
 * Output is a Object, that holds the characters and its frequency in them
 * Result should not have any NON APLHANUMERIC characters in it.
 * Result should treat both upper & lower - its my preference to return
 */

/**
 * Step 2: Explore with concreate examples
 * Example 1 : inp = "Hello" out = {h:1, e:1, l:2, o:1}
 * Example 2 : inp = "Hello Sur123" out = {h:1, e:1, l:2, o:1, s:1:, u:1, r:1, 1:1,2:1,3:1}
 * Example 3 : inp = null/falsy/non-string  out = as same as input
 */

/**
 * Step 3: Break down into smaller steps
 * 1. Validate the input to function for non-string values
 * 2. Create a empty object for storing the chracters. (naming as result)
 * 3. Convert the string either to lower or uppercase. (in my case i am going to do lower)
 * 4. Business logic
 *  1. loop through the strings
 *  2. Get the Character 
 *  3. If any non-alphanumneric character then ignore and continue the loop
 *  4. if number/character already present in object then increase the count
 *  5. Else create a new entry in result object
 * 5. Return the object in a stringified format - since JS
 */

/**
 * Step 4 : Simplify 
 * This is the step where we need to implement the above steps.
 */

// const getCharacterCount = (str) => {
//     if(!str || typeof str !== 'string'){
//         return str;
//     }

//     const result = {};

//     for(let i=0; i<str.length; i++){
//         let char = str[char].toLowerCase();

//         if(/a-z0-9/.test(char)){
//             if(result[char]){
//                 result[char] +=1;
//             }else{
//                 result[char] = 1
//             }
//         }
//     }

//     return JSON.stringify(result);
// }

/**
 * Step 5: look back and Refactor
 * Below is the optimized code
 */
const getCharacterCount = (str) => {
    if(!str || typeof str !== 'string'){
        return str;
    }

    const result = {};

    for(let char of str){
        if(isAlphanumeric(char)){
            char = char.toLowerCase();
            result[char] = result[char] ? ++result[char] : 1
        }
    }

    return JSON.stringify(result);
}

const isAlphanumeric = (char) => {
    let charCode = char.charCodeAt(0);
    if(
        (charCode > 47 && charCode <58) || // numeric 
        (charCode > 64 && charCode <91) || // a-z
        (charCode > 96 && charCode <123)   // A-Z
    ){
        return true
    }

    return false
}

module.exports = getCharacterCount;