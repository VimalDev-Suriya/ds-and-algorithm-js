const getCount = (n) => {
  if(!n || typeof n !=== "Number") return null;

  // * Convert the given number into a string and its easy for validate the length of the number.
  // * TC for toString Method varies based on the type where we are calling
  // - Primitive types like boolean, number -> O(1) / O(logn) if the number of characters is huge.
  // Objects / Arrays/ Functions -> O(n)
  const stringifiedNumber = n.toString();

  return stringifiedNumber.length;
}

getCount(1000);
