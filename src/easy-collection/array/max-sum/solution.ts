export function maxSum(nums: number[]): number {
  const set = new Set<number>();
  let result = 0;
  for (const num of nums) {
    if (num > 0 && !set.has(num)) {
      result += num;
      set.add(num);
    }
  }
  return result > 0 ? result : Math.max(...nums);
}
