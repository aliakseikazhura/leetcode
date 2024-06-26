// Best Time to Buy and Sell Stock II

// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

// Medium
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
          profit += prices[i] - prices[i - 1];
      }
    }

    return profit;
};


var maxProfit1 = function(prices) {
    let buy = -Infinity;
    let sell = 0;
    let nextBuy, nextSell;
    for (let i = 0; i < prices.length; i++) {
        nextBuy = Math.max(buy, sell - prices[i]);
        nextSell = Math.max(sell, buy + prices[i]);

        buy = nextBuy;
        sell = nextSell;
    }

    return sell;
};

res = maxProfit1([7,1,5,3,6,4])
console.log(res)


