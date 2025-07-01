export function findLHS(nums: number[]): number {
  const numCount = new Map<number, number>();
  for (const num of nums) {
    numCount.set(num, (numCount.get(num) ?? 0) + 1);
  }
  let result = 0;
  for (const [num, count] of numCount) {
    const nextNumCount = numCount.get(num + 1);
    if (nextNumCount !== undefined) {
      result = Math.max(result, count + nextNumCount);
    }
  }
  return result;
}
