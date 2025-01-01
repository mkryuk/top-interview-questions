export function mincostTickets(days: number[], costs: number[]): number {
  const maxDay = Math.max(...days);
  const dp = new Array(maxDay + 1).fill(0);
  const travelDays = new Set(days);
  for (let i = 1; i <= maxDay; i++) {
    if (!travelDays.has(i)) {
      dp[i] = dp[i - 1];
      continue;
    }
    const cost1 = dp[i - 1] + costs[0];
    const cost7 = dp[Math.max(0, i - 7)] + costs[1];
    const cost30 = dp[Math.max(0, i - 30)] + costs[2];
    dp[i] = Math.min(cost1, cost7, cost30);
  }
  return dp[maxDay];
}
