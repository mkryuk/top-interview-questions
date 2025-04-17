export function countGood(nums: number[], k: number): number {
  const n = nums.length;
  // special case: if k is 0, all subarrays are valid.
  if (k === 0) {
    return (n * (n + 1)) / 2;
  }
  let left = 0;
  let result = 0;
  let pairs = 0;
  const freq = new Map<number, number>();
  for (let right = 0; right < n; right++) {
    let count = freq.get(nums[right]) ?? 0;
    freq.set(nums[right], count + 1);
    pairs += count;
    while (pairs >= k && left <= right) {
      result += n - right;
      const leftCount = freq.get(nums[left]) ?? 0;
      pairs -= leftCount - 1;
      freq.set(nums[left], leftCount - 1);
      left++;
    }
  }

  return result;
}
