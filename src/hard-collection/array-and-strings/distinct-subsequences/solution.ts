export function numDistinct(s: string, t: string): number {
  const dp: number[] = new Array(t.length + 1).fill(0);
  dp[0] = 1;
  for (const char of s) {
    for (let j = t.length; j >= 1; j--) {
      if (char === t[j - 1]) {
        dp[j] += dp[j - 1];
      }
    }
  }

  return dp[t.length];
}
