export function countPairs(nums: number[], k: number): number {
  const n = nums.length;
  let result = 0;
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        result++;
      }
    }
  }
  return result;
}
