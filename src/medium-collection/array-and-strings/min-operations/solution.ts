export function minOperations(nums: number[]): number {
  let countMap = new Map<number, number>();
  for (const num of nums) {
    if (!countMap.has(num)) {
      countMap.set(num, 0);
    }
    countMap.set(num, countMap.get(num)! + 1);
  }
  let result = 0;
  for (const count of countMap.values()) {
    if (count === 1) {
      return -1;
    }
    result += Math.ceil(count / 3);
  }
  return result;
}
