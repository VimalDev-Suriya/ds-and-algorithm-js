const reverseString = (str) => {
  if (!str || typeof str === 'string') {
    return 'Please provide valid inputs';
  }

  if (str.length === 1) {
    return str;
  }

  const reversedString = []; // Space complexity is 1 here
  const strLength = str.length - 1;

  // O(n)
  for (let i = strLength; i >= 0; i--) {
    reversedString.push(str[i]);
  }

  return reversedString.join('');
};

// * Another Brute force solution
// * The flag variable consumes the additional space - results in space complexity
// * in JS the strings can be handled as the array like
const reverseString1 = (str) => {
  const stringArr = str.split('');
  const reversedString = [];
  let flag = 0;

  for (let i = stringArr.length - 1; i >= 0; i--) {
    reversedString[flag] = stringArr[i];
    flag++;
  }

  return reversedString.join();
};

// * Strings can also be treated as the Array in *Java Script*
// * Using built in funstions
const reverseString2 = (str) => {
  return str.split('').reverse().join('');
};

// * Spreading the strings is also possible.
const reverseString3 = (str) => [...str].reverse().join('');

const reversedString = reverseString('hello');
console.log(reversedString);
