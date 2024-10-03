export function minSubarray(nums: number[], p: number): number {
  const totalMod = nums.reduce((a, b) => a + b, 0) % p;

  if (totalMod === 0) {
    return 0;
  }

  const prefixSumIndex = new Map<number, number>();
  prefixSumIndex.set(0, -1);
  let prefixSumMod = 0;
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    prefixSumMod = mod(prefixSumMod + nums[i], p);
    const targetMod = mod(prefixSumMod - totalMod, p);
    if (prefixSumIndex.has(targetMod)) {
      let index = prefixSumIndex.get(targetMod)!;
      result = Math.min(result, i - index);
    }
    prefixSumIndex.set(prefixSumMod, i);
  }
  return result === nums.length ? -1 : result;
}

function mod(a: number, b: number): number {
  return ((a % b) + b) % b;
}
