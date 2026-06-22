export function maxIceCream(costs: number[], coins: number): number {
  const maxCost = 100000;
  const freq: number[] = new Array(maxCost + 1).fill(0);

  // count how many ice cream bars have each cost
  for (const cost of costs) {
    freq[cost]++;
  }

  let result = 0;
  // buy cheaper bars first
  for (let cost = 1; cost <= maxCost; cost++) {
    if (freq[cost] === 0) {
      continue;
    }
    const canBuy = Math.min(freq[cost], Math.floor(coins / cost));
    result += canBuy;
    coins -= canBuy * cost;
    if (coins < cost) {
      break;
    }
  }

  return result;
}
