export function sumCounts(nums: number[]): number {
  let result = 0;
  for (let left = 0; left < nums.length; left++) {
    const distinct = new Set<number>();
    for (let right = left; right < nums.length; right++) {
      distinct.add(nums[right]);
      const count = distinct.size;
      result += count * count;
    }
  }
  return result;
}
