export function minCostClimbingStairs(cost: number[]): number {
  let prevCost = new Array(cost.length + 1).fill(0);
  prevCost[0] = cost[0];
  prevCost[1] = cost[1];
  for (let i = 2; i <= cost.length; i++) {
    prevCost[i] = (cost[i] ?? 0) + Math.min(prevCost[i - 1], prevCost[i - 2]);
  }
  return prevCost[cost.length];
}
