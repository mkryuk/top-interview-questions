export function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    const prev = i + brainpower + 1;
    dp[i] = Math.max(points + (prev < n ? dp[prev] : 0), dp[i + 1]);
  }
  return dp[0];
}
