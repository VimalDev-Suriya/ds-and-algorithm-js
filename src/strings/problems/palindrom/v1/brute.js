const isPalindrom = (str) => {
  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return reversedString === str;
};

isPalindrom('ababa');

// * From JS standpoint this is the better solution.
// But from other lamguage stadpint we are takeing the SC as O(n) because string are non-primitive data types
// So it is better to use 2 pointer
