export function countMaxOrSubsets(nums: number[]): number {
  const items: number[] = [];
  backTrack(0, 0, nums, items);
  let max = Math.max(...items);
  let result = items.filter((i) => i === max);
  return result.length;
}

function backTrack(leftOr: number, i: number, nums: number[], ors: number[]): void {
  if (i === nums.length) {
    ors.push(leftOr);
    return;
  }

  backTrack(leftOr | nums[i], i + 1, nums, ors);
  backTrack(leftOr, i + 1, nums, ors);
}
