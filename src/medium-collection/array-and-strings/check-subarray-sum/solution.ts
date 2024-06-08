export function checkSubarraySum(nums: number[], k: number): boolean {
  let remainderMap = new Map<number, number>();
  // to handle the case where the subarray starts from the beginning
  remainderMap.set(0, -1);
  let prefixSum = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let reminder = prefixSum % k;
    if (remainderMap.has(reminder)) {
      let prevIndex = remainderMap.get(reminder)!;
      if (i - prevIndex > 1) {
        return true;
      }
    } else {
      remainderMap.set(reminder, i);
    }
  }
  return false;
}
