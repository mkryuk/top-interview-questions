export function maxSlidingWindow(nums: number[], k: number): number[] {
  let result = [];
  for (let i = 0; i + k <= nums.length; i++) {
    const max = Math.max(...nums.slice(i, i + k));
    result.push(max);
  }
  return result;
}
