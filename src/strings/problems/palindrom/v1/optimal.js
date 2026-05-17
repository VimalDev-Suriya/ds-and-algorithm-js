const isPalindrom = (str) => {
  let isPalin = true;

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      isPalin = false;
      return isPalin;
    }
  }

  return isPalin;
};

console.log(isPalindrom('ababa ababa ababa'));
