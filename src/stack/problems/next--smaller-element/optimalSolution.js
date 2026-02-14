// * Next smaller element at the left side of each elements.

const nse_1 = arr => {
  if(!Array.isArray(arr) || !arr.length) return arr;

  const result = [];
  const stack = [];

  for(let i=0; i<arr.length; i++){
    while(stack.length !== 0 && stack[stack.length - 1] > arr[i]) {
      stack.pop();
    }
    
    if(stack.length === 0){
      result[i] = -1;
    }else{
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }
}

nse_1([4, 8, 5, 10, 1, 2])
