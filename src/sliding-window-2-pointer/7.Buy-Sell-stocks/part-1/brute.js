/**
 * Buy and Sell the Stock
 * 
 * @description
 * You can buy the stock and sell that in the upcoming day. Retun the maxium profit. 
 * 
 * @notes
 * 1. You can buy stock in the present day and you can only sell them in future day
 * 
 * @example
 * getMaxProfit([7, 1, 5, 3, 6, 4]); // 5
 * getMaxProfit([7, 6, 4, 3, 1]); // 0
*/

// O(n**2)
const getMaxProfit = (arr) => {
    if (!Array.isArray(arr) || !arr.length) return 0;

    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let profit = arr[j] - arr[i];

            maxProfit = Math.max(profit, maxProfit)
        }
    }

    return maxProfit;
}

console.log(getMaxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(getMaxProfit([7, 6, 4, 3, 1])); // 0
console.log(getMaxProfit([1, 2, 3, 4, 5])); // 0