// Example Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Example Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const groupAnagrams = (strs) => {
  if (!strs || !Array.isArray(strs) || strs.length === 0) return strs;

  if (strs.length === 1) return [strs];

  const map = new Map(); // we can use simple objects

  for (let str of strs) {
    const charCount = new Array(26).fill(0);

    for (let char of str) {
      charCount[char.charCodeAt(0) - 97] =
        charCount[char.charCodeAt(0) - 97] + 1;
    }

    const key = charCount.join(',');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return map.values();
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
