export function largestInteger(nums: number[], k: number): number {
  const subarrayCount = new Map<number, number>();

  for (let start = 0; start + k <= nums.length; start++) {
    const values = new Set<number>();

    // collect distinct values in this subarray
    for (let i = start; i < start + k; i++) {
      values.add(nums[i]);
    }

    // each value appears in this subarray exactly once for counting purposes
    for (const value of values) {
      subarrayCount.set(value, (subarrayCount.get(value) ?? 0) + 1);
    }
  }

  let result = -1;

  for (const [value, count] of subarrayCount) {
    if (count === 1) {
      result = Math.max(result, value);
    }
  }

  return result;
}
