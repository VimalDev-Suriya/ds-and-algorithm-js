# Formula used accross the DSA.

## Sum of n natural numbers:
```js
const sumOfNNaturalNumbers = N(N+1) / 2;
```

## Calculate the number of subarrays count
To Calculate total number of subarrays (contigenous) that array can hold of length N is
```
const totalSubarrayCount = N(N+1) / 2;
```

```js
const totalSubarrayCount = N(N+1) / 2;
// * Example
const arr = [1, 2, 3]; 
const totalSubArr = (3 * 4) / 2; // 6
```

### Counting the subarrays which contains the specific index
```
Arr[i] = (i + 1) * (N - i);
where i is the index of the element
N  is the total number of elements
```
```js
const arr = [1, 2, 3];
const subArrayCount = (3*4)/2; // 6;
//* If I want to count how many subarrays that holds the value 2, the we can use 
// arr[i] = (i+1) * (n - i)
const presentIn = (1 + 1) * (3 - 1); // i is the index of the element

```