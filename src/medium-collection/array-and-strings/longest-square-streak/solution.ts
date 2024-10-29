export function longestSquareStreak(nums: number[]): number {
  let result = 0;
  const numSet = new Set(nums);
  for (const num of nums) {
    let currentNum = num;
    let currentCount = 0;
    while (currentNum <= 1e5 && numSet.has(currentNum)) {
      currentCount++;
      result = Math.max(result, currentCount);
      currentNum *= currentNum;
    }
  }
  return result === 1 ? -1 : result;
}
