export function minOperations(nums: number[], k: number): number {
  let set = new Set<number>();
  let result = 0;
  for (const num of nums) {
    if (num < k) {
      return -1;
    }
    if (!set.has(num) && num > k) {
      result++;
      set.add(num);
    }
  }
  return result;
}
