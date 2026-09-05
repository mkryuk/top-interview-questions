export function firstStableIndex(nums: number[], k: number): number {
  const n = nums.length;
  const suffixMin = new Array<number>(n);
  suffixMin[n - 1] = nums[n - 1];

  // compute minimum for every suffix
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }

  let prefixMax = nums[0];
  for (let i = 0; i < n; i++) {
    prefixMax = Math.max(prefixMax, nums[i]);
    const instability = prefixMax - suffixMin[i];
    if (instability <= k) {
      return i;
    }
  }

  return -1;
}
