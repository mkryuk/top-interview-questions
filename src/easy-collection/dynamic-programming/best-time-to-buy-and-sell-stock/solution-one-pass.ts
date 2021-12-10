export function maxProfit(prices: number[]): number {
  let minimum = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minimum) {
      minimum = prices[i];
    } else if (prices[i] - minimum > profit) {
      profit = prices[i] - minimum;
    }
  }
  return profit;
}
