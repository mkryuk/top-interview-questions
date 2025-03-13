export function maximumCount(nums: number[]): number {
  let lastNegativeIndex = getTargetIndex(0, nums);
  let firstPositiveIndex = getTargetIndex(1, nums);
  const negativeNum = lastNegativeIndex;
  const positiveNum = nums.length - firstPositiveIndex;
  return Math.max(negativeNum, positiveNum);
}

function getTargetIndex(target: number, nums: number[]): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const midIndex = left + Math.floor((right - left) / 2);
    if (nums[midIndex] < target) {
      left = midIndex + 1;
    } else {
      right = midIndex;
    }
  }
  return left;
}
