export function numIdenticalPairs(nums: number[]): number {
  let map = new Map<number, number>();
  for (const item of nums) {
    if (!map.has(item)) {
      map.set(item, 0);
    }
    map.set(item, map.get(item)! + 1);
  }
  let result = 0;
  map.forEach((value) => {
    if (value > 1) {
      result += Math.trunc((value * (value - 1)) / 2);
    }
  });
  return result;
}
