const intersection = (arr1 = [], arr2 = []) => {
  // removing the duplicates present in 2 arrays
  const setA = new Set(arr1); // O(n)
  const setB = new Set(arr2); // O(n) -> worst case, But this is very very rare

  return [...setA].filter((x) => setB.has(x));
};

console.log(intersection([1, 2, 3, 4], [1, 2, 3]));
console.log(intersection([1, 2, 3], [1, 2, 3]));
console.log(intersection([1, 1, 2, 2, 3], [1, 2, 3]));
