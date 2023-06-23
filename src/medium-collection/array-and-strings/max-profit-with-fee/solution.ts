export function maxProfit(prices: number[], fee: number): number {
  let buy: number[] = [];
  let sell: number[] = [];
  let n = prices.length;
  // we should spend prices[0] to buy, so the profit is -price[0]
  buy[0] = -prices[0];
  sell[0] = 0;
  for (let i = 1; i < n; i++) {
    // current buy profit is the diff between prev sell and current price
    buy[i] = Math.max(buy[i - 1], sell[i - 1] - prices[i]);
    // current sell profit is the diff between prev buy and current price
    sell[i] = Math.max(sell[i - 1], buy[i - 1] + prices[i] - fee);
  }
  return sell[n - 1];
}
