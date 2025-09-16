function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.

  if (num1 === null || num2 === null) {
    return false;
  }

  const stringifiedNum1 = num1.toString();
  const stringifiedNum2 = num2.toString();

  if (num1.length !== num2.length) {
    return false;
  }

  const frequencyNum1 = {};

  for (let ch of stringifiedNum1) {
    frequencyNum1[ch] = frequencyNum1[ch] ? ++frequencyNum1[ch] : 1;
  }

  for (let i = 0; i < stringifiedNum2.length; i++) {
    if (!frequencyNum1[stringifiedNum2[i]]) {
      return false;
    } else {
      frequencyNum1[stringifiedNum2[i]]--;
    }
  }

  return true;
}
