export function maxWidthRamp(nums: number[]): number {
  const stack: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
      stack.push(i);
    }
  }
  let result = 0;
  for (let i = nums.length; i >= 0; i--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[i]) {
      result = Math.max(result, i - stack.pop()!);
    }
  }
  return result;
}
