export function maxProfit(prices: number[]): number {
  let profit = 0,
    buyIndex = 0,
    sellIndex = 0;
  do {
    buyIndex = getLocalMin(prices, buyIndex);
    sellIndex = getLocalMax(prices, buyIndex);
    profit += prices[sellIndex] - prices[buyIndex];
    buyIndex = sellIndex;
  } while (sellIndex < prices.length - 1);
  return profit;
}

function getLocalMin(prices: number[], startIndex: number): number {
  for (let index = startIndex; index < prices.length - 1; index++) {
    if (prices[index + 1] > prices[index]) {
      return index;
    }
  }
  return prices.length - 1;
}

function getLocalMax(prices: number[], startIndex: number): number {
  for (let index = startIndex; index < prices.length; index++) {
    if (prices[index + 1] < prices[index]) {
      return index;
    }
  }
  return prices.length - 1;
}
