export function distinctSubseqII(s: string): number {
  const MOD = 1e9 + 7;
  const n = s.length;
  const dp: number[] = new Array(n + 1).fill(0);
  const last: number[] = new Array(26).fill(-1);

  // empty string
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    const charIndex = s.charCodeAt(i - 1) - 97;
    // every previous subsequence can either use s[i - 1] or not
    dp[i] = (2 * dp[i - 1]) % MOD;
    if (last[charIndex] !== -1) {
      dp[i] = (dp[i] - dp[last[charIndex]] + MOD) % MOD;
    }
    last[charIndex] = i - 1;
  }

  // remove the empty subsequence
  return (dp[n] - 1 + MOD) % MOD;
}
