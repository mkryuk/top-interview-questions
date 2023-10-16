export function paintWalls(cost: number[], time: number[]): number {
  const n: number = cost.length;
  const memo: number[][] = Array.from({ length: n }, () =>
    Array(n + 1).fill(-1),
  );

  return dp(0, n, cost, time, memo);
}

function dp(
  i: number,
  remain: number,
  cost: number[],
  time: number[],
  memo: number[][],
): number {
  // Base cases
  if (remain <= 0) {
    return 0;
  }

  if (i === cost.length) {
    return Infinity; // Represents an "infinite" cost
  }

  if (memo[i][remain] !== -1) {
    return memo[i][remain];
  }

  // Recursive cases: choosing paid paint or free paint for this door
  const paidPaint = cost[i] + dp(i + 1, remain - 1 - time[i], cost, time, memo);
  const freePaint = dp(i + 1, remain, cost, time, memo);

  // Choosing the option with the minimum cost and updating the memoization table
  memo[i][remain] = Math.min(paidPaint, freePaint);
  return memo[i][remain];
}
