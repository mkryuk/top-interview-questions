export function subarraysDivByK(nums: number[], k: number): number {
  let remainderMap = new Map<number, number>();
  remainderMap.set(0, 1);
  let result = 0;
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let remainder = prefixSum % k;
    // normalize remainder to be positive
    if (remainder < 0) {
      remainder += k;
    }
    if (remainderMap.has(remainder)) {
      result += remainderMap.get(remainder)!;
    }
    remainderMap.set(remainder, (remainderMap.get(remainder) ?? 0) + 1);
  }
  return result;
}
