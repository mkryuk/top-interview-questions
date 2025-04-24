export function countCompleteSubarrays(nums: number[]): number {
  const n = nums.length;
  let totalDistinct = new Set<number>(nums).size;
  let numsFreq = new Map<number, number>();
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < n) {
    // grow window until it’s complete
    while (numsFreq.size < totalDistinct) {
      const num = nums[right++];
      numsFreq.set(num, (numsFreq.get(num) ?? 0) + 1);
    }
    // exhausted array, early exit
    if (numsFreq.size < totalDistinct) {
      break;
    }
    let leftCount = 0;
    // shrink from the left, counting valid starts
    while (numsFreq.size === totalDistinct) {
      leftCount++;
      const num = nums[left++];
      numsFreq.set(num, (numsFreq.get(num) ?? 0) - 1);
      if (numsFreq.get(num)! === 0) {
        numsFreq.delete(num);
      }
    }
    result += leftCount * (n - right + 1);
  }
  return result;
}
