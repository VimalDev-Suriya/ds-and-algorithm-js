const movezeros = (nums) => {
  let start = 0; // * this pointer holds the last non-zero element.

  for(let end = 0; end < nums.length; end++){
    // * end will move on through the array of elements
    if(nums[end] !== 0){
      nums[start] = nums[end]
      start++
    }
  }

  for(let i = start; i <arr.length; i++){
    nums[i] = 0;
  }

  return nums;
}
