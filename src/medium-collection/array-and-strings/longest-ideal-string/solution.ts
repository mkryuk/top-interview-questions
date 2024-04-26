export function longestIdealString(s: string, k: number): number {
  let dp = new Array(26).fill(0);
  let result = 0;
  for (const char of s) {
    let index = char.charCodeAt(0) - "a".charCodeAt(0);
    let maxLen = dp[index];
    // Look at characters within the range char-k to char+k
    for (let i = Math.max(0, index - k); i <= Math.min(25, index + k); i++) {
      maxLen = Math.max(maxLen, dp[i] + 1);
    }
    dp[index] = maxLen;
    result = Math.max(result, dp[index]);
  }
  return result;
}
