export function lengthAfterTransformations(s: string, t: number): number {
  const MOD = 1e9 + 7;

  // dp[i] = number of chars produced by letter (i+'a') after k-1 steps
  let dp = new Array<number>(26).fill(1);
  let next = new Array<number>(26);

  for (let k = 1; k <= t; k++) {
    for (let i = 0; i < 26; i++) {
      if (i < 25) {
        // 'a'..'y' → next letter
        next[i] = dp[i + 1];
      } else {
        // 'z' → "ab"
        next[i] = (dp[0] + dp[1]) % MOD;
      }
    }
    // swap dp and next
    [dp, next] = [next, dp];
  }

  // count frequency of each letter in s
  const freq = new Array<number>(26).fill(0);
  for (const ch of s) {
    freq[ch.charCodeAt(0) - 97]++;
  }

  // sum up freq[c] * dp[c]
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans = (ans + freq[i] * dp[i]) % MOD;
  }
  return ans;
}
