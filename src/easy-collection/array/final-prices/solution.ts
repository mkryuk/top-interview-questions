export function finalPrices(prices: number[]): number[] {
  let result: number[] = [];
  const n = prices.length;
  for (let i = 0; i < n; i++) {
    const current = prices[i];
    let j = i + 1;
    while (j < n && prices[j] > current) {
      j++;
    }
    const price = j === n ? current : current - prices[j];
    result.push(price);
  }
  return result;
}
