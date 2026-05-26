// Flatning the deeply nested array  
const flat = (arr) => {
  return arr.reduce((acc, val) => {
    if(Array.isArray(val)) {
      // * As we know we need to update the acc, we are concatning the result of flat to existing accumulator
      return acc.concat(flat(val))
    }else{
      // * Updating the accumulator
      acc.push(val);
      return acc;
    }
  }, [])
}

flat([1, [2, [3, [4]]]); // [1, 2, 3, 4]
