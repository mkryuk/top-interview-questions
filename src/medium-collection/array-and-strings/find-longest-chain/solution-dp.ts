export function findLongestChain(pairs: number[][]): number {
  pairs.sort(([a1, a2], [b1, b2]) => a1 - b1 || a2 - b2);
  let dp = new Array(pairs.length).fill(1);
  let result = 0;
  for (let i = pairs.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < pairs.length; j++) {
      if (pairs[i][0] < pairs[j][0] && pairs[i][1] < pairs[j][0]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    result = Math.max(dp[i], result);
  }
  return result;
}
