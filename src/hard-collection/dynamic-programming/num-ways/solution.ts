export function numWays(words: string[], target: string): number {
  const MOD = 1e9 + 7;
  const n = words.length;
  const m = words[0].length;
  const t = target.length;

  // precompute freq[col][char].
  // freq[c][ch] = how many of the n words have character ch at column c
  const freq = Array.from({ length: m }, () => Array(26).fill(0));
  for (let j = 0; j < n; j++) {
    for (let col = 0; col < m; col++) {
      const charCode = words[j].charCodeAt(col) - 97;
      freq[col][charCode]++;
    }
  }

  // dp[i][c] = number of ways to form target[0..i-1] using columns [0..c-1].
  const dp = Array.from({ length: t + 1 }, () => new Array<number>(m + 1).fill(0));

  // base case: dp[0][c] = 1 for all c
  for (let c = 0; c <= m; c++) {
    dp[0][c] = 1;
  }

  for (let i = 1; i <= t; i++) {
    // target character we want is target[i-1]
    const neededChar = target.charCodeAt(i - 1) - 97;
    for (let c = 1; c <= m; c++) {
      // don't use column c-1
      dp[i][c] = dp[i][c - 1];

      // use column c-1
      const waysIfUseCol = dp[i - 1][c - 1] * freq[c - 1][neededChar];
      dp[i][c] = (dp[i][c] + waysIfUseCol) % MOD;
    }
  }
  return dp[t][m] % MOD;
}
