export function continuousSubarrays(nums: number[]): number {
  let left = 0;
  let right = 0;
  const n = nums.length;
  let windowMin = Infinity;
  let windowMax = -Infinity;
  let frequencyMap = new Map<number, number>();
  let result = 0;
  while (right < n) {
    const rightNum = nums[right];
    windowMin = Math.min(windowMin, rightNum);
    windowMax = Math.max(windowMax, rightNum);
    frequencyMap.set(rightNum, (frequencyMap.get(rightNum) ?? 0) + 1);
    while (windowMax - windowMin > 2) {
      const leftNum = nums[left];
      const currentFrequency = frequencyMap.get(leftNum);
      if (currentFrequency === undefined) {
        left++;
        continue;
      }
      const newFrequency = frequencyMap.get(leftNum)! - 1;
      frequencyMap.set(leftNum, newFrequency);
      if (newFrequency === 0) {
        frequencyMap.delete(leftNum);
      }
      if (leftNum === windowMin || leftNum === windowMax) {
        windowMin = Math.min(...frequencyMap.keys());
        windowMax = Math.max(...frequencyMap.keys());
      }
      left++;
    }
    result += right - left + 1;
    right++;
  }
  return result;
}
