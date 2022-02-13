export function topKFrequent(nums: number[], k: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]) ?? 0;
    map.set(nums[i], count + 1);
  }
  const items = Array.from(map, ([num, cnt]) => ({ num, cnt }));
  return items
    .sort((a, b) => b.cnt - a.cnt)
    .splice(0, k)
    .map((v) => v.num);
}
