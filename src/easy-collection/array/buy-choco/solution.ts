export function buyChoco(prices: number[], money: number): number {
  let [first, second] = prices.sort((a, b) => a - b);
  const diff = money - (first + second);
  return diff < 0 ? money : diff;
}
