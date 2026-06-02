export function minimumCost(cost: number[]): number {
  let result = 0;
  cost.sort((a, b) => b - a);
  for (let i = 0; i < cost.length; i++) {
    if (i % 3 !== 2) {
      result += cost[i];
    }
  }
  return result;
}
