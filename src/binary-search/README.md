# Binary Search

## Intro

- Searching the element in the **Sorted Array**
- Start and End Pointer
- `Mid = (Start + End) / 2`
- We will loop the array untill the search space is reduced.
- To determin the serach space [start <= end]
- IF target == mid RETURN mid;
- ELSE IF target > mid THEN start = mid + 1
- ELSE end = mid - 1;
- If the target stands between the start and mid (excluced), then we can reduce the end = mid - 1
- if target stands between mid (excluded) and end, then we can reduce the start = mid + 1

**Note**: Always make sure to adjust the start & end based on the condition

## When to use Binary Serach?

1. Searching - in Sorted array, a difinite pattern, where the array increases and decreases [Determining the peak element]
2. Rotated Sorted array
3. When there is a possible solutions till the pivot and afyer that there can't be any solutions [Square root]
   1. Whenever the question is asking to find Min/Max and we know the range from where it starts and ends. Then we can use Binary search

## Type of problems

### Lower Bound

- To determin the lowest possible index to insert the element in the sorted array.
- `arr[mid] >= target`
- here we are finding the possibility, so we wont stop the loop until the serach space is empty

```js
console.log(findLowerBound([3, 5, 8, 15, 19], 8)); // 2
console.log(findLowerBound([3, 5, 8, 8, 15, 19], 8)); // 2
```

### Upper Bound

- To determin the highest possible index to insert the element
- `arr[i] > target`
- here we are finding the possibility, so we wont stop the loop until the serach space is empty

```js
console.log(upperBound([2, 4, 6, 9, 9, 10, 11, 16], 9)); // 5
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 9)); // 4
```

### Floor

- largest element in the array, that is lesser than the target
- `arr[i] <= target`
- here we are finding the possibility, so we wont stop the loop until the serach space is empty

```js
floor([10, 20, 30, 40, 50], 25); // 20
floor([10, 20, 30, 40, 50], 37); // 30
floor([10, 20, 30, 40, 50], 30); // 30
```

### Ceil

- It is the lower bound
- `arr[mid] >= target`
- here we are finding the possibility, so we wont stop the loop until the serach space is empty

### Determine insert Position

- It is also the lower bound.
- `arr[mid] >= target`
- Here we are trying to find the index, where we are going to insert our new element in already sorted array.
- Here the array is ordered in ascending order, So here we determin the lowest position to insert the rray.

### First and Last Occurance:

- Solution 1 -> Determining the Lower and upper bound
  - We can return the last occuarnce as `up-1`, since upper bound will returnthe result of arr[mid] > target
- Solution 2 -> Simple binary search to determine the First and last
  - First -> to determin first possible element, at start we should find the target element, instead of returning the final response we can reduce the search space by `end = mid - 1`.
  - Last -> `start = mid + 1`

### Find the single element in sorted array [all other elements will be repeated]

```js
findSingleUniqueElement([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]); // 4
```

- Also we can handle the edge case for the first and last element.
- To Determine the Unique element, we can narrow down the logic as `arr[mid] !== arr[mid +1] && arr[mid] !== arr[mid - 1]`
- How to neglect the left and right half?
  - The pattern is on the left half of the unique element, the duplicate elements will be in the order of [even, odd] and in the right half it will be [odd, even]
  - So if the mid pointing out to any `odd index`, then we can simply validate if the `previous` element (i.e the `even index` element `mid - 1`) are same? (**OR**) mid pointing out to `even index`, then we can validate if the `next` element (i.e the `odd index` element `mid + 1`) are same?
    - If equal then the unique element is in right half of the mid. So we can safely remve the left half.
    - If not equal - then unique element is in left half of the mid. So we can safely remve the right half.

### Rotated Arrays:

#### Find the min in rotated sorted array [without duplicates]

```js
findMin([4, 5, 6, 7, 0, 1, 2, 3]); // 0
findMin([4, 5, 6, 2, 3]); // 2
```

- As a part of Binary search, we should somehow neglect the left or right half of the Mid.
- How to determine that?
  1. First determine the mid.
  2. We can eliminate the left or right half, only if we are sure the elements are sorted, If the elements are not sorted we cannot able to eliminate them.
  - How to determine the elements are sorted?
    1. If `arr[start] <= arr[mid]`, then left half is sorted and vice versa
    2. here the vice versa works because, either 1 half will be sorted since the array is rotated sorted array
  - Once we determine the sorted, we will be good to eliminate that half, by determin the min.
- We can loop this to finally determin the min

#### How many times the arrays was rotated?

```js
findKTimes([1, 2, 3, 4, 5]); // 0
findKTimes([2, 3, 4, 5, 1]); // 4
```

- So this is ~= to determine the minimum in the rotated sorted array.
- mininum index will be the number of times the array was rotated

#### Search in rotated sorted array:

##### Without duplicates

```js
get_position_in_sorted_array([5, 6, 1, 2, 3, 4], 6); // 1
```

- Here we need to determin the target existence and return its index
- So we can find the corresponding index in the array, like `arr[mid] === target`
- We can remove the left & right half only by determining the sorted half. [we can perform the same steps for determining the sorted half]
- Once we sorted the half, we can validate if the target is present within the sorted half like `arr[start] <= target`, if the left half is sorted and vice vresa
- we can neglect the corresponding half based on the existance of the element.

##### With duplicates

- Only differenc is we will reduce the search space if `start === mid === end`

### Square root of the Number

```js
squareRoot(25); // 5
squareRoot(30); // 5 -> round off 5
```

- Here we are applying binary search in answers. Though we dont have any arrays to iterate.
- STarting the loop with `start = 1` and `end = num` (param of teh function)
- `sq = mid * mid` - finding the sqaure
- `sq <= num`, then the mid is somehow near to the num

### Nth Root of the Number

```js
console.log(findNthRoot(27, 3)); // 3
console.log(findNthRoot(16, 4)); // 2
```

- We need to find the result of power of N (but we should be accounting for the larger numbers by restricting if the products exceeds the sum)
- Rest is simple
  - Once found, compare them with target
    - If equal - return mid
    - if less - reduce - `end = mid - 1`
    - if greater - increase - `start = mid + 1`
