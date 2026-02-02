export function minimumCost(nums: number[]): number {
  const n = nums.length;
  const suffixMin = new Array(n - 1).fill(0);
  suffixMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }
  let result = Number.POSITIVE_INFINITY;
  for (let i = 1; i <= n - 2; i++) {
    const cost = nums[0] + nums[i] + suffixMin[i + 1];
    if (cost < result) {
      result = cost;
    }
  }
  return result;
}
