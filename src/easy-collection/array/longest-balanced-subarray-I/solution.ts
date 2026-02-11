export function longestBalanced(nums: number[]): number {
  const n = nums.length;
  let result = 0;

  for (let left = 0; left < n; left++) {
    const evenSeen = new Set<number>();
    const oddSeen = new Set<number>();

    for (let right = left; right < n; right++) {
      const value = nums[right];
      if (value % 2 === 0) {
        evenSeen.add(value);
      } else {
        oddSeen.add(value);
      }

      if (evenSeen.size === oddSeen.size) {
        result = Math.max(result, right - left + 1);
      }
    }
  }

  return result;
}
