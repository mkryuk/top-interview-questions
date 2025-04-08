export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((p, n) => p + n, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  const memo: (boolean | undefined)[][] = Array.from({ length: nums.length }, () => Array(target + 1).fill(undefined));
  return dfs(0, nums, 0, target, memo);
}

function dfs(i: number, nums: number[], current: number, target: number, memo: (boolean | undefined)[][]): boolean {
  const n = nums.length;
  if (current > target || i >= n) {
    return false;
  }
  if (current === target) {
    return true;
  }
  if (memo[i][current] !== undefined) {
    return memo[i][current] === true;
  }
  const take = dfs(i + 1, nums, current + nums[i], target, memo);
  const skip = dfs(i + 1, nums, current, target, memo);
  const result = take || skip;
  memo[i][current] = result;
  return result;
}
