export function maxSubsequence(nums: number[], k: number): number[] {
  return (
    nums
      // map to value with index
      .map((val, idx) => ({ val, idx }))
      // sort by val
      .sort((a, b) => b.val - a.val)
      // take first k
      .slice(0, k)
      // sort by index
      .sort((a, b) => a.idx - b.idx)
      // map to value array
      .map((a) => a.val)
  );
}
