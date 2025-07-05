export function findLucky(arr: number[]): number {
  const numCount = new Map<number, number>();
  for (const num of arr) {
    numCount.set(num, (numCount.get(num) ?? 0) + 1);
  }

  let result = -1;
  for (const [num, count] of numCount) {
    if (num === count && num > result) {
      result = num;
    }
  }
  return result;
}
