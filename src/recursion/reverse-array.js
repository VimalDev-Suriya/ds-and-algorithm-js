// * Reversing a array using the recusion and 2 pointers
const reverse_array = (arr, l, r) => {
  if (l >= r) {
    return arr;
  }

  [arr[l], arr[r]] = [arr[r], arr[l]];

  return reverse_array(arr, l + 1, r - 1);
};

module.exports = {
  reverse_array,
};
