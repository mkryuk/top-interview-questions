export function maximumLength(nums: number[], k: number): number {
  const n = nums.length;
  if (n < 2) return n;

  // dp[i][r] = longest valid subsequence ending at index i with common residue r
  const dp: number[][] = Array.from({ length: n }, () => Array(k).fill(0));
  let ans = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const r = (nums[j] + nums[i]) % k;
      // if there's already a subsequence at j with residue r, extend it; otherwise start a new length-2 subsequence
      const len = dp[j][r] > 0 ? dp[j][r] + 1 : 2;
      if (len > dp[i][r]) {
        dp[i][r] = len;
        ans = Math.max(ans, len);
      }
    }
  }

  return ans;
}
