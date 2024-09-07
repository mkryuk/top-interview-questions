export function getLengthOfOptimalCompression(s: string, k: number): number {
  const n = s.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(k + 1).fill(Infinity));

  // Function to calculate the length of the encoded count
  const getEncodedLength = (count: number): number => {
    if (count === 1) return 1; // Single character, no count appended
    if (count < 10) return 2; // One digit
    if (count < 100) return 3; // Two digits
    return 4; // Three digits (as the input length is up to 100)
  };

  // Base case: dp[0][j] = 0
  for (let j = 0; j <= k; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      let count = 0;
      let deletions = 0;

      // Try deleting the current character
      if (j > 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
      }

      // Try keeping the current character and count consecutive characters
      for (let l = i; l >= 1; l--) {
        if (s[l - 1] === s[i - 1]) {
          count++;
        } else {
          deletions++;
          if (deletions > j) {
            break;
          }
        }

        if (j - deletions >= 0) {
          dp[i][j] = Math.min(dp[i][j], dp[l - 1][j - deletions] + getEncodedLength(count));
        }
      }
    }
  }

  return dp[n][k];
}
