// Using Stack is the best approch for larger data set, as recusion can cause "stackoverflow error"

// * TC: O(n)
// * SC: O(n)
const flat = (arr) => {
  const stack = [...arr];
  const result = [];

  while(stack.length){
    const el = stack.pop();

    if(Array.isArray(el)){
      stack.push(...el);
    }else{
      result.push(el)
    }
  }

  // The result will be like [4, 3, 2, 1]
  // We can reverse them if required
  return result;
}

flat([1, [2, [3, [4]]]])
