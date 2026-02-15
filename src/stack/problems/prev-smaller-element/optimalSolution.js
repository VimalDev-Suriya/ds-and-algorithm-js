// * Next smaller element at the left side of each elements.
// Here we are staring from starting index, by considering the previous elements are already processed .

const pse_1 = arr => {
  if (!Array.isArray(arr) || !arr.length) return arr;

  const result = [];
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] > arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }
}

pse_1([4, 8, 5, 10, 1, 2]); // [-1, 4, 4, 5, -1, 1]
