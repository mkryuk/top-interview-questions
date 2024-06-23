export function longestSubarray(nums: number[], limit: number): number {
  const minQueue: number[] = [];
  const maxQueue: number[] = [];
  let left = 0;
  let result = 0;
  for (let right = 0; right < nums.length; right++) {
    while (
      maxQueue.length > 0 &&
      nums[maxQueue[maxQueue.length - 1]] < nums[right]
    ) {
      maxQueue.pop();
    }
    maxQueue.push(right);

    while (
      minQueue.length > 0 &&
      nums[minQueue[minQueue.length - 1]] > nums[right]
    ) {
      minQueue.pop();
    }
    minQueue.push(right);

    while (nums[maxQueue[0]] - nums[minQueue[0]] > limit) {
      if (maxQueue[0] === left) {
        maxQueue.shift();
      }
      if (minQueue[0] === left) {
        minQueue.shift();
      }
      left++;
    }

    result = Math.max(result, right - left + 1);
  }
  return result;
}
