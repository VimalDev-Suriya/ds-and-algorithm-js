# Binary Search

## Intro
- Seraching the element in the **Sorted Array**
- Start and End Pointer 
- Mid = (Start + End) / 2
- We will loop the array untill the serach space is reduced.
- To determin the serach space [start <= end]
- IF target == mid RETURN mid;
- ELSE IF target > mid THEN start = mid + 1
- ELSE end = mid - 1;
- If the target stands between the start and mid (excluced), then we can reduce the end = mid - 1
- if target stands between mid (excluded) and end, then we can reduce the start = mid + 1

**Note**: Always make sure to adjust the start & end based on the condition

## Type of problems
### Lower Bound 
- To determin the lowest possible index to insert the element in the sorted array.
- `arr[mid] >= target`
```js
console.log(findLowerBound([3, 5, 8, 15, 19], 8)); // 2
console.log(findLowerBound([3, 5, 8, 8, 15, 19], 8)); // 2
```

### Upper Bound
- To determin the highest possible index to insert the element
- `arr[i] > target`
```js
console.log(upperBound([2, 4, 6, 9, 9, 10, 11, 16], 9)); // 5
console.log(upperBound([2, 4, 6, 9, 10, 11, 16], 9)); // 4
```

### Floor
- largest element in the array, taht is lesser than the target
- `arr[i] <= target`
```js
floor([10, 20, 30, 40, 50], 25); // 20
floor([10, 20, 30, 40, 50], 37); // 30
floor([10, 20, 30, 40, 50], 30); // 30
```

### Ceil
- It is the lower bound
- `arr[mid] >= target`