export function minimumDeleteSum(s1: string, s2: string): number {
  const n: number = s1.length;
  const m: number = s2.length;

  const a: number[] = toCharCodes(s1);
  const b: number[] = toCharCodes(s2);

  // dp[j] = min delete sum to make s1[0..i) and s2[0..j) equal for current i
  let dp: number[] = new Array(m + 1);

  dp[0] = 0;
  for (let j: number = 1; j <= m; j += 1) {
    dp[j] = dp[j - 1] + b[j - 1];
  }

  for (let i: number = 1; i <= n; i += 1) {
    let prevDiag: number = dp[0]; // dp[i-1][0]
    dp[0] = dp[0] + a[i - 1]; // dp[i][0] = dp[i-1][0] + delete a[i-1]

    for (let j: number = 1; j <= m; j += 1) {
      const saved: number = dp[j]; // dp[i-1][j] before overwrite

      if (a[i - 1] === b[j - 1]) {
        dp[j] = prevDiag; // keep both chars
      } else {
        const deleteFromS1: number = dp[j] + a[i - 1]; // dp[i-1][j] + a[i-1]
        const deleteFromS2: number = dp[j - 1] + b[j - 1]; // dp[i][j-1] + b[j-1]
        dp[j] = Math.min(deleteFromS1, deleteFromS2);
      }

      prevDiag = saved;
    }
  }

  return dp[m];
}

function toCharCodes(s: string): number[] {
  const res: number[] = new Array(s.length);
  for (let i: number = 0; i < s.length; i += 1) {
    res[i] = s.charCodeAt(i);
  }
  return res;
}
