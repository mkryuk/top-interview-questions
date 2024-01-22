export function findErrorNums(nums: number[]): number[] {
  const n = nums.length;
  const set = new Set<number>();
  let duplicated = 0;
  let missed = 0;
  for (const num of nums) {
    if (set.has(num)) {
      duplicated = num;
      continue;
    }
    set.add(num);
  }
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      missed = i;
      break;
    }
  }
  return [duplicated, missed];
}
