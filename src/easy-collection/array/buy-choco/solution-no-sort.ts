export function buyChoco(prices: number[], money: number): number {
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;
  for (const price of prices) {
    if (price < first) {
      second = first;
      first = price;
    } else {
      second = Math.min(second, price);
    }
  }
  const diff = money - (first + second);
  return diff < 0 ? money : diff;
}
