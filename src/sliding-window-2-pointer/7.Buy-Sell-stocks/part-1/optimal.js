// * Using 2 pointer
// To maximize the profit , we should buy the stock at the lowest price. 

const getMaxProfit = (arr) => {
    if (!Array.isArray(arr) || !arr.length) return 0;

    let maxProfit = 0;
    let start = 0;
    let end = 1;

    while (end < arr.length) {
        let profit = arr[end] - arr[start];

        if (profit > 0) {
            maxProfit = Math.max(profit, maxProfit);
        } else {
            // * Since profit is negative, so i need to buy the stock at the point (end)
            start = end;
        }

        end++;
    }

    return maxProfit;
}

console.log(getMaxProfit([7, 1, 5, 3, 6, 4]))
console.log(getMaxProfit([1, 2, 3, 4, 5]))
console.log(getMaxProfit([7, 6, 4, 3, 1]))