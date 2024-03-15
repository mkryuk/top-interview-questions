export function numSubarraysWithSum(nums: number[], goal: number): number {
  let prefixSumCount = new Map<number, number>();
  let prefixSum = 0;
  prefixSumCount.set(0, 1);
  let result = 0;
  for (let num of nums) {
    prefixSum += num;
    if (prefixSumCount.has(prefixSum - goal)) {
      result += prefixSumCount.get(prefixSum - goal)!;
    }
    prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) ?? 0) + 1);
  }
  return result;
}
