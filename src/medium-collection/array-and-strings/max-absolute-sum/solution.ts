export function maxAbsoluteSum(nums: number[]): number {
  const n = nums.length;
  let maxNum = 0;
  let maxEndings = 0;
  let minNum = 0;
  let minEndings = 0;
  for (let num of nums) {
    maxEndings = Math.max(maxEndings + num, num);
    maxNum = Math.max(maxNum, maxEndings);
    minEndings = Math.min(minEndings + num, num);
    minNum = Math.min(minNum, minEndings);
  }
  return Math.max(maxNum, Math.abs(minNum));
}
