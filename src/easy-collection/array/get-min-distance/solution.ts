export function getMinDistance(nums: number[], target: number, start: number): number {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      const distance = Math.abs(i - start);
      result = Math.min(result, distance);
    }
  }
  return result;
}
