export function maxProfit(prices: number[], strategy: number[], k: number): number {
  const n: number = prices.length;
  const h: number = k / 2;

  // prefix sums for prices and original contribution (strategy[i] * prices[i])
  const prefPrices: number[] = new Array(n + 1);
  const prefOrig: number[] = new Array(n + 1);

  prefPrices[0] = 0;
  prefOrig[0] = 0;

  for (let i: number = 0; i < n; i++) {
    prefPrices[i + 1] = prefPrices[i] + prices[i];
    prefOrig[i + 1] = prefOrig[i] + strategy[i] * prices[i];
  }

  const baseProfit: number = prefOrig[n];

  // delta for window [s, s + k - 1]:
  // new window profit = sum(prices on second half)
  // delta = new - old = sumSecondPrices - oldWindowContribution
  let bestDelta: number = 0;

  for (let s: number = 0; s + k <= n; s++) {
    const sumSecond: number = prefPrices[s + k] - prefPrices[s + h];
    const oldWindow: number = prefOrig[s + k] - prefOrig[s];
    const delta: number = sumSecond - oldWindow;

    if (delta > bestDelta) {
      bestDelta = delta;
    }
  }

  return baseProfit + bestDelta;
}
