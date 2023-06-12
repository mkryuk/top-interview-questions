export function summaryRanges(nums: number[]): string[] {
  let result: string[] = [];
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      continue;
    }
    const item = start === i ? `${nums[i]}` : `${nums[start]}->${nums[i]}`;
    result.push(item);
    start = i + 1;
  }
  return result;
}
