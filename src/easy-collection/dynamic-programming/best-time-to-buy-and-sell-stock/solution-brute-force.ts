export function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const current = prices[i];
    for (let k = i + 1; k < prices.length; k++) {
      const nextItem = prices[k];
      if (nextItem - current > profit) {
        profit = nextItem - current;
      }
    }
  }
  return profit;
}
