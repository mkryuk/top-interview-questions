export function firstMissingPositive(nums: number[]): number {
  let set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      set.add(nums[i]);
    }
  }
  let result = 0;
  for (let i = 1; i <= set.size + 1; i++) {
    if (!set.has(i)) {
      result = i;
      return result;
    }
  }
  return result;
}
