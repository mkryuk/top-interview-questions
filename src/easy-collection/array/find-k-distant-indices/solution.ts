export function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const n = nums.length;
  const result: number[] = [];
  let lastEnd = -1;
  for (let i = 0; i < n; i++) {
    if (nums[i] === key) {
      const start = Math.max(i - k, lastEnd + 1);
      const end = Math.min(i + k, n - 1);
      for (let index = start; index <= end; index++) {
        result.push(index);
      }
      lastEnd = end;
    }
  }

  return result;
}
