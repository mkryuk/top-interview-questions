export function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const [points, brainpower] = questions[i];
    const next = Math.min(n, i + brainpower + 1);
    dp[next] = Math.max(dp[next], dp[i] + points);
    dp[i + 1] = Math.max(dp[i + 1], dp[i]);
  }
  return dp[n];
}
