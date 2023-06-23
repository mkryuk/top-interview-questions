export function maxProfit(prices: number[], fee: number): number {
  let n = prices.length;
  // we should spend prices[0] to buy, so the profit is -price[0]
  let buy = -prices[0];
  let sell = 0;
  for (let i = 1; i < n; i++) {
    const prevBuy = buy;
    // current buy profit is the diff between prev sell and current price
    buy = Math.max(buy, sell - prices[i]);
    // current sell profit is the diff between prev buy and current price
    sell = Math.max(sell, prevBuy + prices[i] - fee);
  }
  return sell;
}
