export function soupServings(n: number): number {
  // for large n the probability approaches 1 fast; 4800 is a common safe cutoff.
  if (n >= 4800) {
    return 1.0;
  }
  if (n === 0) {
    return 0.5;
  }

  const m = Math.ceil(n / 25); // scale by 25 mL
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(m + 1).fill(-1));

  return dfs(dp, m, m);
}

function dfs(dp: number[][], a: number, b: number): number {
  // Base cases
  if (a <= 0 && b <= 0) {
    return 0.5;
  }
  if (a <= 0) {
    return 1.0;
  }
  if (b <= 0) {
    return 0.0;
  }

  if (dp[a][b] >= 0) {
    return dp[a][b];
  }

  // four equiprobable serving options (in 25 mL units)
  dp[a][b] =
    0.25 *
    (dfs(dp, a - 4, b) + // 100, 0
      dfs(dp, a - 3, b - 1) + // 75, 25
      dfs(dp, a - 2, b - 2) + // 50, 50
      dfs(dp, a - 1, b - 3)); // 25, 75
  return dp[a][b];
}
