export function longestSubsequence(s: string, k: number): number {
  let sum = 0;
  let bits = Math.log2(k) + 1;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[s.length - 1 - i];
    if (ch === "0") {
      result++;
    } else {
      if (i < bits && sum + (1 << i) <= k) {
        sum += 1 << i;
        result++;
      }
    }
  }
  return result;
}
