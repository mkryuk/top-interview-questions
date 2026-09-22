export function resultArray(nums: number[], k: number): number[] {
  const result: number[] = new Array(k).fill(0);
  let dp: number[] = new Array(k).fill(0);

  for (const num of nums) {
    const value = num % k;
    const next: number[] = new Array(k).fill(0);

    // start a new subarray with the current element
    next[value]++;

    // extend all subarrays ending at the previous position
    for (let remainder = 0; remainder < k; remainder++) {
      if (dp[remainder] === 0) {
        continue;
      }

      const newRemainder = (remainder * value) % k;
      next[newRemainder] += dp[remainder];
    }

    // every subarray represented by next ends at the current position
    for (let remainder = 0; remainder < k; remainder++) {
      result[remainder] += next[remainder];
    }
    dp = next;
  }

  return result;
}
