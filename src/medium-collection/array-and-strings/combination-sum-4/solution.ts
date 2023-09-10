export function combinationSum4(nums: number[], target: number): number {
  let map = new Map<number, number>();
  dfs(nums, target, map);
  return map.get(target)!;
}

function dfs(nums: number[], target: number, map: Map<number, number>): number {
  if (target < 0) {
    return 0;
  }
  if (map.has(target)) {
    return map.get(target)!;
  }
  if (target === 0) {
    return 1;
  }
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += dfs(nums, target - nums[i], map);
  }
  map.set(target, result);
  return result;
}
