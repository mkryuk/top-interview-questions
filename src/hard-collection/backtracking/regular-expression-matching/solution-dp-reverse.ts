export function isMatch(s: string, p: string): boolean {
  let dp = new Array(s.length + 1);
  for (let i = 0; i < s.length + 1; i++) {
    dp[i] = new Array(p.length + 1).fill(false);
  }
  dp[s.length][p.length] = true;

  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const first_match = i < s.length && (p[j] == s[i] || p[j] == ".");
      if (j + 1 < p.length && p[j + 1] == "*") {
        dp[i][j] = dp[i][j + 2] || (first_match && dp[i + 1][j]);
      } else {
        dp[i][j] = first_match && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0];
}
